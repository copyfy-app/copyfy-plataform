
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-4 lg:p-8">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
        
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h1 className="mb-6 text-3xl font-bold text-gray-900">Termos de Uso</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800">Finalidade da Plataforma</h2>
            <p className="mb-6 text-gray-700">
              A Copyfy é uma plataforma de <strong>uso exclusivo para geração de copies publicitárias</strong>. 
              Ao utilizar nossos serviços, você concorda em usar a plataforma apenas para esta finalidade 
              específica e em conformidade com todas as leis e regulamentos aplicáveis.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">Restrições de Uso</h2>
            <p className="mb-4 text-gray-700">
              É estritamente proibido:
            </p>
            <ul className="mb-6 list-disc pl-5 text-gray-700">
              <li>Usar a plataforma para gerar conteúdo ilegal, fraudulento, enganoso ou antiético</li>
              <li>Copiar, modificar, distribuir ou revender qualquer parte do sistema Copyfy</li>
              <li>Tentar acessar áreas restritas do sistema ou contornar medidas de segurança</li>
              <li>Usar a plataforma para envio de spam ou conteúdo abusivo</li>
              <li>Transferir sua conta ou acesso para terceiros sem autorização prévia</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">Propriedade Intelectual</h2>
            <p className="mb-6 text-gray-700">
              Todo o conteúdo, design, código e funcionalidades da plataforma Copyfy são protegidos por 
              direitos autorais e pertencem exclusivamente à Copyfy ou aos seus licenciadores.
              As copies geradas são para uso do usuário, mas a tecnologia e o sistema permanecem 
              propriedade exclusiva da Copyfy.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">Suspensão e Término</h2>
            <p className="mb-6 text-gray-700">
              <strong>O acesso à plataforma pode ser suspenso ou encerrado a qualquer momento, sem aviso prévio, 
              em caso de violação destes Termos de Uso ou por uso indevido do sistema.</strong> A determinação 
              do que constitui uso indevido é de exclusiva discrição da Copyfy.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">Limitação de Responsabilidade</h2>
            <p className="mb-6 text-gray-700">
              A Copyfy não se responsabiliza pelo uso que você faz das copies geradas na plataforma.
              É sua responsabilidade garantir que o conteúdo gerado cumpra todas as leis e regulamentos 
              aplicáveis no seu país ou região.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">Alterações nos Termos</h2>
            <p className="mb-4 text-gray-700">
              Reservamos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor 
              imediatamente após sua publicação na plataforma. O uso contínuo da Copyfy após tais alterações 
              constitui sua aceitação dos novos termos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
