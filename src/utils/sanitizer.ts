/**
 * Utilitários para sanitização de inputs e prevenção de XSS
 */

/**
 * Remove caracteres perigosos de strings para prevenir XSS
 * @param input - String a ser sanitizada
 * @returns String sanitizada
 */
export function sanitizeString(input: string): string {
  if (!input) return '';
  
  return input
    .replace(/[<>]/g, '') // Remove < e >
    .replace(/javascript:/gi, '') // Remove javascript:
    .replace(/on\w+=/gi, '') // Remove event handlers como onclick=
    .replace(/data:/gi, '') // Remove data:
    .trim();
}

/**
 * Sanitiza email removendo caracteres perigosos
 * @param email - Email a ser sanitizado
 * @returns Email sanitizado
 */
export function sanitizeEmail(email: string): string {
  if (!email) return '';
  
  return email
    .toLowerCase()
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '');
}

/**
 * Sanitiza nome de usuário
 * @param username - Nome de usuário a ser sanitizado
 * @returns Nome de usuário sanitizado
 */
export function sanitizeUsername(username: string): string {
  if (!username) return '';
  
  return username
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/["'`]/g, ''); // Remove aspas
}

/**
 * Sanitiza CPF (aplica validação básica)
 * @param cpf - CPF a ser sanitizado
 * @returns CPF sanitizado
 */
export function sanitizeCPF(cpf: string): string {
  if (!cpf) return '';
  
  return cpf
    .replace(/\D/g, '') // Remove tudo que não é dígito
    .substring(0, 11); // Limita a 11 dígitos
}

/**
 * Valida se uma string contém apenas caracteres permitidos
 * @param input - String a validar
 * @param allowedChars - Regex com caracteres permitidos
 * @returns true se válido, false caso contrário
 */
export function validateAllowedChars(input: string, allowedChars: RegExp): boolean {
  return allowedChars.test(input);
}

/**
 * Sanitiza texto de descrição ou conteúdo longo
 * @param text - Texto a ser sanitizado
 * @returns Texto sanitizado
 */
export function sanitizeText(text: string): string {
  if (!text) return '';
  
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframe tags
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}
