import { refreshToken as refreshAuthToken } from './authService';
import { getToken, removeToken, saveToken } from './storageService';

// Configuração base da API
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

// Flag para evitar loop de refresh
let isRefreshing = false;
let refreshSubscribers: Array<(token: string) => void> = [];
let onRefreshFailedCallback: (() => void) | null = null;

// Função para registrar callback quando refresh falhar
export function setOnRefreshFailed(callback: () => void) {
  onRefreshFailedCallback = callback;
}

function addRefreshSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

function onRefreshed(token: string) {
  refreshSubscribers.forEach(callback => callback(token));
  refreshSubscribers = [];
}

function onRefreshFailed() {
  refreshSubscribers = [];
  if (onRefreshFailedCallback) {
    onRefreshFailedCallback();
  }
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
  isNetworkError?: boolean;
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Obter token do storage
    const token = await getToken();
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    // Adicionar token se disponível
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      // Tratar erros de autenticação
      if (response.status === 401 || response.status === 403) {
        if (!isRefreshing) {
          isRefreshing = true;
          
          try {
            const refreshResponse = await refreshAuthToken();
            
            if (refreshResponse.data && refreshResponse.data.token) {
              const newToken = refreshResponse.data.token;
              await saveToken(newToken);
              onRefreshed(newToken);
              
              // Retornar a requisição original com o novo token
              return apiRequest<T>(endpoint, options);
            } else {
              // Refresh falhou, limpar token e notificar
              await removeToken();
              onRefreshFailed();
              throw new Error('Refresh falhou');
            }
          } catch (error) {
            // Refresh falhou, limpar token e notificar
            await removeToken();
            onRefreshFailed();
            throw error;
          } finally {
            isRefreshing = false;
          }
        } else {
          // Aguardar o refresh em andamento
          return new Promise((resolve) => {
            addRefreshSubscriber((newToken: string) => {
              resolve(apiRequest<T>(endpoint, options));
            });
          });
        }
      }
      
      return {
        error: data.message || 'Erro na requisição',
        status: response.status,
      };
    }

    return {
      data,
      status: response.status,
    };
  } catch (error) {
    // Diferenciar erros de rede de outros erros
    const errorMessage = error instanceof Error ? error.message : 'Erro de conexão';
    const isNetworkError = errorMessage.includes('fetch') || 
                          errorMessage.includes('network') ||
                          errorMessage.includes('connection') ||
                          errorMessage.includes('timeout');
    
    return {
      error: isNetworkError ? 'Erro de conexão. Verifique sua internet.' : errorMessage,
      status: 0,
      isNetworkError,
    };
  }
}
