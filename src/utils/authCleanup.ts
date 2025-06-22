
/**
 * Utilitário para limpeza completa do estado de autenticação
 * Usado para resolver problemas de tokens corrompidos e estados de limbo
 */

export const cleanupAuthState = (): void => {
  console.log("🧹 Iniciando limpeza completa do estado de autenticação...");
  
  try {
    // Limpar todas as chaves relacionadas ao Supabase no localStorage
    const keysToRemove: string[] = [];
    
    // Identificar todas as chaves que contém dados do Supabase
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (
        key.startsWith('supabase.auth.') ||
        key.includes('sb-') ||
        key.startsWith('sb.') ||
        key.includes('supabase') ||
        key === 'supabase.auth.token'
      )) {
        keysToRemove.push(key);
      }
    }
    
    // Remover todas as chaves identificadas
    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
      console.log(`🗑️ Removida chave: ${key}`);
    });
    
    // Limpar sessionStorage também se existir
    if (typeof sessionStorage !== 'undefined') {
      const sessionKeysToRemove: string[] = [];
      
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && (
          key.startsWith('supabase.auth.') ||
          key.includes('sb-') ||
          key.startsWith('sb.') ||
          key.includes('supabase')
        )) {
          sessionKeysToRemove.push(key);
        }
      }
      
      sessionKeysToRemove.forEach(key => {
        sessionStorage.removeItem(key);
        console.log(`🗑️ Removida chave da sessão: ${key}`);
      });
    }
    
    console.log("✅ Limpeza de autenticação concluída com sucesso");
    
  } catch (error) {
    console.error("❌ Erro durante limpeza de autenticação:", error);
  }
};

export const isAdminEmail = (email: string | undefined): boolean => {
  const adminEmails = ['inspiranegociosonline@gmail.com'];
  return email ? adminEmails.includes(email.toLowerCase().trim()) : false;
};
