
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-700 py-6 md:py-8 shadow-lg bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              size="sm"
              className="text-white border-zinc-700 hover:bg-zinc-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">
              Copy<span className="text-white">fy</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Política de Uso
          </h2>
          
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                1. Termos de Uso
              </h3>
              <p>
                Ao utilizar a Copyfy, você concorda em usar nossa plataforma de forma responsável 
                e de acordo com as leis aplicáveis. Nossa ferramenta é destinada à criação de 
                campanhas publicitárias legítimas.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                2. Uso Responsável
              </h3>
              <p>
                É vedado o uso da plataforma para criar conteúdo enganoso, fraudulento ou que 
                viole direitos de terceiros. O usuário é responsável pelo conteúdo gerado e 
                sua aplicação.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                3. Propriedade Intelectual
              </h3>
              <p>
                O conteúdo gerado pela Copyfy pode ser usado livremente pelo usuário em suas 
                campanhas comerciais. A Copyfy não reivindica direitos sobre o conteúdo gerado.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                4. Limitações de Responsabilidade
              </h3>
              <p>
                A Copyfy fornece as ferramentas "como estão" e não garante resultados específicos. 
                O usuário é responsável por revisar e adaptar o conteúdo conforme necessário.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                5. Suporte e Contato
              </h3>
              <p>
                Para dúvidas ou suporte, entre em contato através do email: 
                <a 
                  href="mailto:inspiranegociosonline@gmail.com" 
                  className="text-yellow-500 hover:text-yellow-400 ml-1"
                >
                  inspiranegociosonline@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolicyPage;
