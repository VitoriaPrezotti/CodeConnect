/**
 * Utilitários para validação de senha
 */

export interface PasswordValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Valida a força da senha
 * @param password - Senha a ser validada
 * @returns Objeto com resultado da validação
 */
export function validatePassword(password: string): PasswordValidationResult {
  const errors: string[] = [];

  if (!password) {
    errors.push('Senha é obrigatória');
    return { isValid: false, errors };
  }

  if (password.length < 8) {
    errors.push('Senha deve ter pelo menos 8 caracteres');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Senha deve conter pelo menos uma letra maiúscula');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Senha deve conter pelo menos uma letra minúscula');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Senha deve conter pelo menos um número');
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Senha deve conter pelo menos um caractere especial');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Calcula a força da senha (0-4)
 * @param password - Senha a ser avaliada
 * @returns Nível de força (0=muito fraca, 4=muito forte)
 */
export function getPasswordStrength(password: string): number {
  let strength = 0;

  if (!password) return 0;

  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;

  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

  return Math.min(strength, 4);
}

/**
 * Retorna mensagem descritiva da força da senha
 * @param strength - Nível de força (0-4)
 * @returns Mensagem descritiva
 */
export function getPasswordStrengthMessage(strength: number): string {
  switch (strength) {
    case 0:
      return 'Muito fraca';
    case 1:
      return 'Fraca';
    case 2:
      return 'Regular';
    case 3:
      return 'Forte';
    case 4:
      return 'Muito forte';
    default:
      return '';
  }
}
