
/**
 * Calcula quantos dias restam a partir de uma data inicial considerando um período de trial de 2 dias
 * @param startDate Data de início do trial
 * @returns Número de dias restantes (0 a 2)
 */
export const calculateDaysRemaining = (startDate: Date): number => {
  const TRIAL_DAYS = 2;
  const now = new Date();
  
  // Calcular diferença em milissegundos (agora - início do trial)
  const diffTime = now.getTime() - startDate.getTime();
  
  // Converter para dias
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // Retornar os dias restantes (trial_days - dias passados)
  const daysRemaining = TRIAL_DAYS - diffDays;
  
  // Retornar o maior valor entre 0 e os dias restantes
  return Math.max(0, daysRemaining);
};
