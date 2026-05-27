import { Alert } from 'react-native';

export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function handleError(error: unknown): void {
  console.error('Error occurred:', error);

  if (error instanceof AppError) {
    Alert.alert('Erro', error.message);
  } else if (error instanceof Error) {
    Alert.alert('Erro', error.message);
  } else {
    Alert.alert('Erro', 'Ocorreu um erro inesperado. Tente novamente.');
  }
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof AppError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Ocorreu um erro inesperado';
}
