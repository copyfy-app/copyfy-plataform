
/**
 * Calcula quantos dias restam a partir de uma data inicial considerando um período de trial de 1 dia (24 horas)
 * @param startDate Data de início do trial
 * @returns Número de dias restantes (0 ou 1)
 */
export const calculateDaysRemaining = (startDate: Date): number => {
  const TRIAL_HOURS = 24; // 1 dia = 24 horas
  const now = new Date();
  
  // Calcular diferença em horas
  const diffTime = now.getTime() - startDate.getTime();
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  
  // Retornar os dias restantes baseado nas horas
  const hoursRemaining = Math.max(0, TRIAL_HOURS - diffHours);
  const daysRemaining = hoursRemaining > 0 ? 1 : 0;
  
  console.log("📊 Cálculo de dias restantes:", {
    dataInicio: startDate.toISOString(),
    dataAtual: now.toISOString(),
    horasPassadas: diffHours,
    horasRestantes: hoursRemaining,
    diasRestantes: daysRemaining
  });
  
  return daysRemaining;
};

/**
 * Verifica se o trial ainda está ativo (dentro de 24 horas)
 * @param startDate Data de início do trial
 * @returns true se o trial ainda está ativo, false se expirou
 */
export const isTrialActive = (startDate: Date): boolean => {
  return calculateDaysRemaining(startDate) > 0;
};
