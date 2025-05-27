import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Open mail client with pre-filled data
      const mailtoLink = `mailto:inspiranegociosonline@gmail.com?subject=Copyfy Support Request from ${name}&body=${encodeURIComponent(message)}\n\nFrom: ${name} (${email})`;
      window.open(mailtoLink, "_blank");

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);

      // Show success notification
      toast.success("Mensagem enviada! Abrindo seu cliente de e-mail...");
    }, 1000);
  };
  return <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-4 lg:p-8">
      <div className="container mx-auto bg-black">
        <div className="mb-6 flex items-center">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
        
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h1 className="mb-6 text-3xl font-bold text-gray-900">Suporte</h1>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Mail className="mr-2 h-5 w-5 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-800">Contato Direto</h2>
            </div>
            <p className="mb-2 text-gray-700">
              Para entrar em contato diretamente com nossa equipe de suporte, envie um e-mail para:
            </p>
            <a href="mailto:inspiranegociosonline@gmail.com" className="inline-block text-indigo-600 font-medium hover:underline">
              inspiranegociosonline@gmail.com
            </a>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="mb-6 text-xl font-semibold text-gray-800">Formulário de Contato</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="Seu nome" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="seu@email.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required placeholder="Descreva sua dúvida ou problema..." className="min-h-32" />
              </div>
              
              <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>;
};
export default Support;