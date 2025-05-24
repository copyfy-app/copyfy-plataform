
/**
 * Calcula quantos dias restam a partir de uma data inicial considerando um período de trial de 2 dias
 * @param startDate Data de início do trial
 * @returns Número de dias restantes (0 a 2)
 */
export const calculateDaysRemaining = (startDate: Date): number => {
  const TRIAL_DAYS = 2;
  const now = new Date();
  
  // Calcular diferença em milissegundos
  const diffTime = startDate.getTime() - now.getTime();
  
  // Converter para dias e adicionar o período de trial
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + TRIAL_DAYS;
  
  // Retornar o maior valor entre 0 e os dias restantes
  return Math.max(0, diffDays);
};
