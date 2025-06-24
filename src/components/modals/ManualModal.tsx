
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
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            <span className="text-yellow-500">Copyfy</span> <span className="text-white">User Manual</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-white">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-yellow-900/20 to-black p-6 rounded-lg border border-yellow-500/30">
            <p className="text-lg leading-relaxed text-gray-100">
              Welcome to <span className="text-yellow-500 font-semibold">Copyfy</span>, the platform that creates high-converting Google Ads campaigns with automatic translation for over 100 countries. Follow the steps below to use the tool correctly:
            </p>
          </div>

          {/* Step 1 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-lg border border-zinc-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-yellow-500">Select Your Country</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Choose your target country from the dropdown list. This will define the language and structure of the campaign.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-lg border border-zinc-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-yellow-500">Enter Product Name and Price</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              Fill in the name of your product and the price (only the number, without currency symbol). 
            </p>
            <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
              <p className="text-yellow-400 font-semibold mb-2">Example:</p>
              <p className="text-gray-300">Product: <span className="text-white">Detox Tea</span></p>
              <p className="text-gray-300">Price: <span className="text-white">29</span></p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-lg border border-zinc-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-yellow-500">Choose Funnel Strategy</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              Select the campaign strategy:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
                <p className="text-yellow-400 font-semibold">• COD (Cash on Delivery)</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
                <p className="text-yellow-400 font-semibold">• Top of Funnel</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
                <p className="text-yellow-400 font-semibold">• Middle of Funnel</p>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-zinc-700">
                <p className="text-yellow-400 font-semibold">• Bottom of Funnel</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              This helps customize your campaign copy for the correct stage of the buyer journey.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-lg border border-zinc-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-bold text-yellow-500">Click "Generate Campaign"</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              The system will automatically generate the full ad set, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Titles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Descriptions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Sitelinks (30 copies)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Snippets</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Highlights (30 features)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Price Extensions</span>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              Everything will be translated to the correct language of the selected country.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-gradient-to-r from-zinc-800/50 to-black p-6 rounded-lg border border-zinc-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold">5</div>
              <h3 className="text-xl font-bold text-yellow-500">Save the Campaign</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Click "Save Campaign" to store your generated ad set under your current login. 
              Saved campaigns are only visible to your own account.
            </p>
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-r from-blue-900/20 to-black p-6 rounded-lg border border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">📧</div>
              <h3 className="text-xl font-bold text-blue-400">Support</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Need help? Click Support in the sidebar or contact: 
              <span className="text-blue-400 font-semibold ml-2">inspiranegociosonline@gmail.com</span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ManualModal;
