
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Create mailto link with form data
      const mailtoLink = `mailto:inspiranegociosonline@gmail.com?subject=${encodeURIComponent(`Copyfy Support: ${formData.subject}`)}&body=${encodeURIComponent(`Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
      
      // Open mail client
      window.open(mailtoLink, "_blank");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);

      // Show success message
      toast.success("Formulário processado! Abrindo seu cliente de e-mail...");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-900 p-4 lg:p-8">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-6 flex items-center">
          <Button variant="ghost" size="sm" asChild className="text-yellow-500 hover:text-yellow-400">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Dashboard
            </Link>
          </Button>
        </div>
        
        <div className="rounded-lg bg-black/60 border border-yellow-600 p-6 shadow-xl backdrop-blur-sm">
          <div className="text-center mb-8">
            <MessageCircle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
            <h1 className="text-3xl font-bold text-yellow-500 mb-2">Suporte Copyfy</h1>
            <p className="text-gray-300">
              Entre em contato conosco. Estamos aqui para ajudar!
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="flex items-center mb-2">
              <Mail className="mr-2 h-5 w-5 text-yellow-500" />
              <h2 className="text-lg font-semibold text-yellow-400">Contato Direto</h2>
            </div>
            <p className="text-gray-300 mb-2">
              Para questões urgentes, entre em contato diretamente:
            </p>
            <a 
              href="mailto:inspiranegociosonline@gmail.com" 
              className="text-yellow-500 hover:text-yellow-400 font-medium underline"
            >
              inspiranegociosonline@gmail.com
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu nome completo"
                  className="bg-black/40 border-yellow-600/50 text-white placeholder:text-gray-400 focus:border-yellow-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="seu@email.com"
                  className="bg-black/40 border-yellow-600/50 text-white placeholder:text-gray-400 focus:border-yellow-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-yellow-400 mb-2">
                Assunto *
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Assunto da sua mensagem"
                className="bg-black/40 border-yellow-600/50 text-white placeholder:text-gray-400 focus:border-yellow-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-2">
                Mensagem *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Descreva sua dúvida, problema ou sugestão..."
                className="bg-black/40 border-yellow-600/50 text-white placeholder:text-gray-400 focus:border-yellow-500 min-h-32"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processando..." : "Enviar Mensagem"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Tempo de resposta: até 24 horas em dias úteis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
