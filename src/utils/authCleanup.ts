
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
  const isAdmin = email ? adminEmails.includes(email.toLowerCase().trim()) : false;
  console.log("🔍 Verificando se email é admin:", { 
    email, 
    isAdmin, 
    adminEmails 
  });
  return isAdmin;
};

// Nova função para diagnóstico de problemas de autenticação
export const diagnoseDomainIssues = (): void => {
  console.log("🔍 Diagnosticando possíveis problemas de domínio...");
  
  try {
    const currentOrigin = window.location.origin;
    const currentHostname = window.location.hostname;
    
    console.log("🌐 Informações do domínio atual:", {
      origin: currentOrigin,
      hostname: currentHostname,
      href: window.location.href,
      protocol: window.location.protocol
    });
    
    // Verificar se há conflitos de domínio conhecidos
    const knownDomains = [
      'copyfy.shop',
      'painel.copyfy.shop',
      'lovable.app'
    ];
    
    const matchedDomains = knownDomains.filter(domain => 
      currentHostname.includes(domain) || currentOrigin.includes(domain)
    );
    
    console.log("🎯 Domínios identificados:", matchedDomains);
    
    // Verificar localStorage para chaves conflitantes
    const conflictingKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.includes('supabase')) {
        conflictingKeys.push(key);
      }
    }
    
    if (conflictingKeys.length > 0) {
      console.log("⚠️ Chaves Supabase encontradas no localStorage:", conflictingKeys);
    }
    
  } catch (error) {
    console.error("❌ Erro no diagnóstico de domínio:", error);
  }
};
