
/**
 * Calcula quantos dias restam a partir de uma data inicial considerando um período de trial de 2 dias
 * @param startDate Data de início do trial
 * @returns Número de dias restantes (0 a 2)
 */
export const calculateDaysRemaining = (startDate: Date): number => {
  const TRIAL_DAYS = 2;
  const now = new Date();
  
  // Normalizar as datas para considerar apenas o dia (ignorar horas/minutos/segundos)
  const startDateNormalized = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const nowNormalized = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Calcular diferença em milissegundos
  const diffTime = nowNormalized.getTime() - startDateNormalized.getTime();
  
  // Converter para dias (dividir por milissegundos em um dia)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Retornar os dias restantes (trial_days - dias passados)
  const daysRemaining = TRIAL_DAYS - diffDays;
  
  console.log("📊 Cálculo de dias restantes:", {
    dataInicio: startDateNormalized.toISOString(),
    dataAtual: nowNormalized.toISOString(),
    diasPassados: diffDays,
    diasRestantes: Math.max(0, daysRemaining)
  });
  
  // Retornar o maior valor entre 0 e os dias restantes
  return Math.max(0, daysRemaining);
};

/**
 * Verifica se o trial ainda está ativo
 * @param startDate Data de início do trial
 * @returns true se o trial ainda está ativo, false se expirou
 */
export const isTrialActive = (startDate: Date): boolean => {
  return calculateDaysRemaining(startDate) > 0;
};
