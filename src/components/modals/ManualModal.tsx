
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ManualModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ManualModal = ({ open, onOpenChange }: ManualModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black via-zinc-900 to-black border border-zinc-700">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-8">
            <span className="text-yellow-500">How to Use Copyfy</span> <span className="text-white">– Step by Step</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8 text-white px-4">
          {/* Step 1 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-xl border border-zinc-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-2xl font-bold text-yellow-500">Choose a Country</h3>
            </div>
            <p className="text-gray-200 leading-relaxed text-lg">
              Select your country from the dropdown. The copies will be translated automatically.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-xl border border-zinc-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-2xl font-bold text-yellow-500">Enter Product and Price</h3>
            </div>
            <p className="text-gray-200 leading-relaxed text-lg mb-4">
              For example:
            </p>
            <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
              <p className="text-yellow-400 font-semibold mb-2">• Product: <span className="text-white">SlimBoost</span></p>
              <p className="text-yellow-400 font-semibold">• Price: <span className="text-white">$49,90</span></p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-xl border border-zinc-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-2xl font-bold text-yellow-500">Select Funnel Strategy</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
                <p className="text-yellow-400 font-semibold">• COD</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
                <p className="text-yellow-400 font-semibold">• BOFU (Bottom of Funnel)</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
                <p className="text-yellow-400 font-semibold">• MOFU (Middle of Funnel)</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
                <p className="text-yellow-400 font-semibold">• TOFU (Top of Funnel)</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-xl border border-zinc-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <h3 className="text-2xl font-bold text-yellow-500">Click "Generate Campaign"</h3>
            </div>
            <p className="text-gray-200 leading-relaxed text-lg mb-4">
              It will generate:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300 text-lg">Titles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300 text-lg">Descriptions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300 text-lg">Sitelinks (30)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300 text-lg">Highlights (30)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300 text-lg">Snippets</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300 text-lg">Price Extensions</span>
              </div>
            </div>
            <p className="text-gray-300 mt-4 text-lg">
              —all fully translated.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-xl border border-zinc-600">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <h3 className="text-2xl font-bold text-yellow-500">Click "Save" to store your campaigns</h3>
            </div>
            <p className="text-gray-200 leading-relaxed text-lg">
              Your saved campaigns will be stored securely in your account for future access.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ManualModal;
