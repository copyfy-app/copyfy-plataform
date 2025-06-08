
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface HelpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HelpModal = ({ open, onOpenChange }: HelpModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/90 backdrop-blur-xl border border-yellow-500/30 text-white max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-yellow-500 text-2xl font-bold text-center mb-6">
            📘 Como Usar a Copyfy (Passo a Passo)
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 p-2">
          <div className="space-y-4">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">🌍 Escolha o País:</h3>
              <p className="text-gray-300">Selecione o país da campanha. A copy será traduzida automaticamente.</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">📦 Preencha o Produto:</h3>
              <p className="text-gray-300">Digite o nome do produto ou oferta que você está promovendo.</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">💰 Informe o Preço:</h3>
              <p className="text-gray-300">Coloque o preço do produto (com símbolo local se quiser).</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">🎯 Escolha a Estratégia:</h3>
              <p className="text-gray-300">Selecione o tipo de funil (Topo, Meio, Fundo ou COD).</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">⚡ Clique em "Gerar Campanha":</h3>
              <p className="text-gray-300">Pronto! Receba todos os textos (título, descrição, snippets, sitelinks e muito mais), otimizados para Google Ads.</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
              <h3 className="text-yellow-400 font-bold text-lg mb-2">💡 Dica:</h3>
              <p className="text-yellow-100">Copie e cole direto no Google Ads. Todas as traduções e adaptações regionais já vêm prontas para conversão.</p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Button onClick={() => onOpenChange(false)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpModal;
