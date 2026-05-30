import { setOnRefreshFailed } from '@/services/api';
import { login as loginUser, logout as logoutUser, register as registerUser } from '@/services/authService';
import { getUser, removeToken, removeUser, saveToken, saveUser } from '@/services/storageService';
import { router } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface User {
  id: string;
  username: string;
  email: string;
  cpf?: string;
  bio?: string;
}

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, cpf: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
    
    // Registrar callback para quando refresh falhar
    setOnRefreshFailed(() => {
      handleRefreshFailed();
    });
  }, []);

  function handleRefreshFailed() {
    // Limpar dados locais e redirecionar para login
    setUser(null);
    removeToken();
    removeUser();
    router.replace('/login');
  }

  async function loadUser() {
    try {
      const storedUser = await getUser();
      if (storedUser) {
        setUser(storedUser);
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function login(email: string, password: string) {
    try {
      const response = await loginUser({ email, password });
      
      if (response.error) {
        throw new Error(response.error);
      }
      
      if (response.data) {
        await saveToken(response.data.token);
        await saveUser(response.data.user);
        setUser(response.data.user);
      }
    } catch (error) {
      throw error;
    }
  }

  async function register(username: string, email: string, cpf: string, password: string) {
    try {
      const response = await registerUser({ username, email, cpf, password });
      
      if (response.error) {
        throw new Error(response.error);
      }
      
      if (response.data) {
        await saveToken(response.data.token);
        await saveUser(response.data.user);
        setUser(response.data.user);
      }
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    try {
      await logoutUser();
      await removeToken();
      await removeUser();
      setUser(null);
      router.replace('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      // Mesmo com erro, limpa o storage local
      await removeToken();
      await removeUser();
      setUser(null);
      router.replace('/login');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
