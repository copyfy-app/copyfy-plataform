
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
            📘 How to Use Copyfy (Step by Step)
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 p-2">
          <div className="space-y-4">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">🌍 Choose the Country:</h3>
              <p className="text-gray-300">Select the campaign country. The copy will be automatically translated.</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">📦 Fill in the Product:</h3>
              <p className="text-gray-300">Enter the name of the product or offer you are promoting.</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">💰 Enter the Price:</h3>
              <p className="text-gray-300">Enter the product price (with local currency symbol if desired).</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">🎯 Choose the Strategy:</h3>
              <p className="text-gray-300">Select the funnel type (Top, Middle, Bottom, or COD).</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">⚡ Click "Generate Campaign":</h3>
              <p className="text-gray-300">Done! Receive all texts (titles, descriptions, snippets, sitelinks and much more), optimized for Google Ads.</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
              <h3 className="text-yellow-400 font-bold text-lg mb-2">💡 Tip:</h3>
              <p className="text-yellow-100">Copy and paste directly into Google Ads. All translations and regional adaptations come ready for conversion.</p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Button onClick={() => onOpenChange(false)} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpModal;
