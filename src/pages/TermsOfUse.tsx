
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
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
          <h1 className="mb-6 text-3xl font-bold text-yellow-500">Termos de Uso</h1>
          
          <div className="prose max-w-none text-white space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">1. Aceitação dos Termos</h2>
              <p className="text-gray-300 leading-relaxed">
                Ao acessar e utilizar a plataforma Copyfy, você concorda integralmente com estes
                Termos de Uso. Se não concordar com qualquer disposição, não utilize nossos serviços.
                Estes termos constituem um acordo legal vinculante entre você e a Copyfy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">2. Descrição do Serviço</h2>
              <p className="text-gray-300 leading-relaxed">
                A Copyfy é uma plataforma digital especializada na geração de textos publicitários
                (copies) de alta conversão, oferecendo tradução para mais de 100 países. O serviço
                utiliza inteligência artificial para criar conteúdo personalizado para campanhas
                de marketing e publicidade.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">3. Cadastro e Responsabilidades do Usuário</h2>
              <p className="text-gray-300 leading-relaxed">
                Para utilizar a plataforma, você deve:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-3">
                <li>Fornecer informações verdadeiras e atualizadas durante o cadastro</li>
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Utilizar a plataforma apenas para fins legítimos e comerciais</li>
                <li>Ser maior de 18 anos ou ter autorização legal para contratar</li>
                <li>Responsabilizar-se por todas as atividades realizadas em sua conta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">4. Uso Permitido da Plataforma</h2>
              <p className="text-gray-300 leading-relaxed">
                A plataforma destina-se exclusivamente à geração de conteúdo publicitário legal
                e ético. O conteúdo gerado pode ser utilizado livremente em suas campanhas comerciais,
                respeitando as leis aplicáveis de publicidade e direitos de terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">5. Condutas Proibidas</h2>
              <p className="text-gray-300 leading-relaxed">
                É estritamente vedado utilizar a plataforma para:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1 mt-3">
                <li>Gerar conteúdo ilegal, fraudulento, enganoso ou que viole direitos de terceiros</li>
                <li>Criar materiais discriminatórios, ofensivos ou que incitem violência</li>
                <li>Desenvolver campanhas de spam, phishing ou outras práticas maliciosas</li>
                <li>Tentar acessar áreas restritas ou contornar medidas de segurança</li>
                <li>Reproduzir, distribuir ou comercializar a tecnologia da plataforma</li>
                <li>Utilizar a plataforma para competir diretamente com nossos serviços</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">6. Propriedade Intelectual</h2>
              <p className="text-gray-300 leading-relaxed">
                A plataforma Copyfy, incluindo seu código, design, algoritmos e marca, são propriedade
                exclusiva da empresa e protegidos por direitos autorais. O conteúdo gerado pelos
                usuários pode ser utilizado livremente, mas a tecnologia subjacente permanece nossa
                propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">7. Limitação de Responsabilidade</h2>
              <p className="text-gray-300 leading-relaxed">
                A Copyfy fornece a plataforma "como está" e não garante resultados específicos de
                conversão ou vendas. O usuário é inteiramente responsável pelo uso do conteúdo gerado
                e deve garantir sua conformidade com leis aplicáveis. Nossa responsabilidade limita-se
                ao valor pago pelo serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">8. Suspensão e Cancelamento</h2>
              <p className="text-gray-300 leading-relaxed">
                Reservamos o direito de suspender ou cancelar contas que violem estes termos,
                apresentem uso abusivo ou representem riscos de segurança. O cancelamento pode
                ocorrer sem aviso prévio em casos graves. Usuários podem cancelar suas contas
                a qualquer momento através do painel de controle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">9. Modificações do Serviço</h2>
              <p className="text-gray-300 leading-relaxed">
                Podemos modificar, atualizar ou descontinuar funcionalidades da plataforma sem
                aviso prévio. Novos recursos podem estar sujeitos a termos adicionais. Esforçamo-nos
                para comunicar alterações significativas com antecedência razoável.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">10. Lei Aplicável e Jurisdição</h2>
              <p className="text-gray-300 leading-relaxed">
                Estes termos são regidos pela legislação brasileira. Eventuais disputas serão
                submetidas à jurisdição dos tribunais brasileiros, especificamente do foro da
                comarca onde a empresa possui sede.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">11. Disposições Gerais</h2>
              <p className="text-gray-300 leading-relaxed">
                Se qualquer disposição destes termos for considerada inválida, as demais permanecerão
                em vigor. O não exercício de direitos não implica renúncia. Estes termos constituem
                o acordo completo entre as partes sobre o objeto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-400 mb-3">12. Contato</h2>
              <p className="text-gray-300 leading-relaxed">
                Para dúvidas sobre estes termos ou questões legais, entre em contato através do e-mail:{" "}
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

export default TermsOfUse;
