/**
 * Valida CPF usando o algoritmo oficial brasileiro
 * @param cpf - CPF no formato 000.000.000-00 ou apenas números
 * @returns true se CPF válido, false caso contrário
 */
export function validateCPF(cpf: string): boolean {
  // Remover caracteres não numéricos
  const cleanCPF = cpf.replace(/\D/g, '');
  
  // Verificar se tem 11 dígitos
  if (cleanCPF.length !== 11) {
    return false;
  }
  
  // Verificar se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cleanCPF)) {
    return false;
  }
  
  // Calcular primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }
  let remainder = sum % 11;
  const digit1 = remainder < 2 ? 0 : 11 - remainder;
  
  // Verificar primeiro dígito
  if (digit1 !== parseInt(cleanCPF.charAt(9))) {
    return false;
  }
  
  // Calcular segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }
  remainder = sum % 11;
  const digit2 = remainder < 2 ? 0 : 11 - remainder;
  
  // Verificar segundo dígito
  if (digit2 !== parseInt(cleanCPF.charAt(10))) {
    return false;
  }
  
  return true;
}

/**
 * Formata CPF para o padrão 000.000.000-00
 * @param cpf - CPF com apenas números
 * @returns CPF formatado
 */
export function formatCPF(cpf: string): string {
  const cleanCPF = cpf.replace(/\D/g, '');
  
  if (cleanCPF.length !== 11) {
    return cpf;
  }
  
  return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
