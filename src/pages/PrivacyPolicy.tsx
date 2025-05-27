import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const PrivacyPolicy = () => {
  return <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-4 lg:p-8">
      <div className="container mx-auto bg-stone-950">
        <div className="mb-6 flex items-center">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
        
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h1 className="mb-6 text-3xl font-bold text-gray-900">Política de Privacidade</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800">Coleta e Uso de Dados</h2>
            <p className="mb-4 text-gray-700">
              A Copyfy coleta informações limitadas dos usuários, incluindo:
            </p>
            <ul className="mb-6 list-disc pl-5 text-gray-700">
              <li>Endereço de e-mail para autenticação e comunicações essenciais</li>
              <li>Endereço IP para segurança e prevenção de fraudes</li>
              <li>País de origem para personalização de conteúdo e geração de copies específicas</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">Armazenamento e Proteção de Dados</h2>
            <p className="mb-4 text-gray-700">
              Todos os dados dos usuários são armazenados em servidores seguros com criptografia avançada.
              Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações
              contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">Compartilhamento de Dados</h2>
            <p className="mb-6 text-gray-700">
              <strong>Nós não compartilhamos, vendemos ou divulgamos quaisquer informações pessoais dos usuários 
              com terceiros.</strong> Seus dados são utilizados exclusivamente para fornecer e melhorar 
              nossos serviços.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">Cookies e Tecnologias Similares</h2>
            <p className="mb-6 text-gray-700">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência em nossa plataforma,
              lembrar suas preferências e fornecer funcionalidades personalizadas. Você pode configurar seu
              navegador para recusar cookies, mas isso pode afetar algumas funcionalidades da plataforma.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">Seus Direitos</h2>
            <p className="mb-6 text-gray-700">
              Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento.
              Para exercer esses direitos, entre em contato conosco através do e-mail de suporte disponível
              na página de contato.
            </p>

            <h2 className="text-xl font-semibold text-gray-800">Alterações na Política de Privacidade</h2>
            <p className="mb-4 text-gray-700">
              Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos os usuários sobre
              quaisquer alterações significativas através de e-mail ou de um aviso em nossa plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default PrivacyPolicy;