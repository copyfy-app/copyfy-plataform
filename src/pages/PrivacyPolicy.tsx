
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 p-4 lg:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6 flex items-center">
          <Button variant="ghost" size="sm" asChild className="text-yellow-500 hover:text-yellow-400">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Dashboard
            </Link>
          </Button>
        </div>
        
        <div className="rounded-lg bg-black/60 border border-yellow-600 p-6 shadow-xl backdrop-blur-sm">
          <h1 className="mb-6 text-3xl font-bold text-yellow-500">Política de Privacidade</h1>
          
          <div className="prose max-w-none text-white space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">1. Informações que Coletamos</h2>
              <p className="text-gray-300 leading-relaxed">
                A Copyfy coleta informações limitadas e essenciais para o funcionamento da plataforma:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-3">
                <li>Endereço de e-mail para autenticação e comunicações essenciais do serviço</li>
                <li>Dados de navegação (cookies técnicos) para manter sua sessão ativa</li>
                <li>Informações de uso da plataforma para melhorias do serviço</li>
                <li>Dados técnicos como endereço IP para segurança e prevenção de fraudes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">2. Base Legal para Processamento</h2>
              <p className="text-gray-300 leading-relaxed">
                Processamos seus dados pessoais com base no consentimento fornecido ao criar sua conta,
                execução de contrato para prestação do serviço, cumprimento de obrigações legais e
                interesses legítimos para melhorar nossos serviços e garantir a segurança da plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">3. Como Utilizamos suas Informações</h2>
              <p className="text-gray-300 leading-relaxed">
                Seus dados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-3">
                <li>Fornecer acesso e funcionalidades da plataforma Copyfy</li>
                <li>Autenticar sua identidade e manter sua conta segura</li>
                <li>Enviar comunicações essenciais sobre o serviço</li>
                <li>Melhorar a experiência do usuário e desenvolver novos recursos</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">4. Compartilhamento de Dados</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong>Não compartilhamos, vendemos ou alugamos seus dados pessoais para terceiros.</strong>
                Seus dados podem ser compartilhados apenas em situações específicas como cumprimento
                de ordem judicial, proteção de direitos legais da empresa ou com prestadores de serviços
                essenciais (como hospedagem) sob acordos de confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">5. Segurança e Proteção</h2>
              <p className="text-gray-300 leading-relaxed">
                Implementamos medidas técnicas e organizacionais adequadas incluindo criptografia,
                controles de acesso, monitoramento de segurança e auditorias regulares para proteger
                suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">6. Seus Direitos (LGPD/GDPR)</h2>
              <p className="text-gray-300 leading-relaxed">
                Você possui os seguintes direitos sobre seus dados pessoais:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-3">
                <li>Acesso: conhecer quais dados temos sobre você</li>
                <li>Retificação: corrigir dados inexatos ou incompletos</li>
                <li>Exclusão: solicitar a remoção de seus dados</li>
                <li>Portabilidade: receber seus dados em formato estruturado</li>
                <li>Oposição: opor-se ao processamento em certas situações</li>
                <li>Limitação: restringir o processamento dos dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">7. Retenção de Dados</h2>
              <p className="text-gray-300 leading-relaxed">
                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas
                nesta política, atender obrigações legais ou resolver disputas. Dados de contas inativas
                por mais de 2 anos poderão ser anonimizados ou excluídos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">8. Transferência Internacional</h2>
              <p className="text-gray-300 leading-relaxed">
                Seus dados são armazenados em servidores seguros. Caso haja transferência internacional,
                garantimos proteção adequada através de cláusulas contratuais padrão ou outros
                mecanismos aprovados pela legislação aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">9. Alterações na Política</h2>
              <p className="text-gray-300 leading-relaxed">
                Esta política pode ser atualizada periodicamente. Notificaremos sobre alterações
                significativas através de e-mail ou aviso na plataforma. A versão mais atual
                estará sempre disponível em nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">10. Contato</h2>
              <p className="text-gray-300 leading-relaxed">
                Para exercer seus direitos, esclarecer dúvidas ou fazer reclamações sobre privacidade,
                entre em contato através do e-mail:{" "}
                <a 
                  href="mailto:inspiranegociosonline@gmail.com" 
                  className="text-yellow-500 hover:text-yellow-400 underline"
                >
                  inspiranegociosonline@gmail.com
                </a>
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-yellow-600/30">
              <p className="text-sm text-gray-400">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
