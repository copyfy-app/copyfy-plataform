
import { Button } from "@/components/ui/button";
import { Copy, FileText, History } from "lucide-react";
import { GeneratedContent, CampaignData } from '../../hooks/useCampaignGeneration';

interface CampaignResultsProps {
  campaignData: CampaignData;
  generatedContent: GeneratedContent;
  onSave: () => void;
  onNewCampaign: () => void;
  onShowHistory: () => void;
  onCopyToClipboard: (text: string) => void;
}

const CampaignResults = ({ 
  campaignData, 
  generatedContent, 
  onSave, 
  onNewCampaign, 
  onShowHistory, 
  onCopyToClipboard 
}: CampaignResultsProps) =>  {
  const { product, price, country } = campaignData;
  const { titles, descriptions, usps, sitelinks, snippetValues, promotions, priceBlocks } = generatedContent;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
          Campaign for {product}
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Button onClick={onSave} className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg">
              Save Campaign
            </Button>
            <Button onClick={onNewCampaign} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg">
              New Campaign
            </Button>
          </div>
          <Button onClick={onShowHistory} className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg">
            <History className="w-4 h-4 mr-2" />
            Campaign History
          </Button>
        </div>
      </div>

      {/* Grid principal reorganizado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Títulos - Now showing 30 titles */}
        <div className="lg:col-span-2 rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
            <Copy className="w-5 h-5 text-yellow-500" />
            Campaign Headlines (30 variations)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {titles.map((title, idx) => (
              <div
                key={idx}
                onClick={() => onCopyToClipboard(title)}
                className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group min-h-[80px] flex items-center"
              >
                <p className="text-white group-hover:text-yellow-100 transition-colors text-sm break-words">
                  <span className="text-yellow-500 text-xs mr-2">#{idx + 1}</span>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Descrições */}
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
            <FileText className="w-5 h-5 text-yellow-500" />
            Descriptions (30 variations)
          </h3>
          <div className="space-y-3">
            {descriptions.map((desc, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group min-h-[100px] flex items-center"
                onClick={() => onCopyToClipboard(desc)}
              >
                <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base break-words">
                  <span className="text-yellow-500 text-xs mr-2">#{idx + 1}</span>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* USPs */}
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">Highlight Features (30 variations)</h3>
          <div className="space-y-3">
            {usps.map((usp, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group min-h-[100px] flex items-center"
                onClick={() => onCopyToClipboard(usp)}
              >
                <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base break-words">
                  <span className="text-yellow-500 text-xs mr-2">#{idx + 1}</span>
                  {usp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de extensões com layout uniforme - TODOS OS BLOCOS COM MESMA ALTURA */}
      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Structured Snippets - Exactly 8 variations */}
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">
            📌 Structured Snippets (8 variations)
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {(snippetValues || []).map((snippet, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-3 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group"
                onClick={() => onCopyToClipboard(snippet)}
              >
                <p className="text-xs text-zinc-400 mb-2">
                  <span className="text-yellow-500 mr-2">#{idx + 1}</span>
                  <strong className="text-yellow-500">Category: COD Benefits</strong>
                </p>
                <p className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                  {snippet.split('\n')[1]?.replace('Values: ', '') || snippet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Promotion Extensions - Exactly 8 variations */}
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">
            🎯 Promotion Extensions (8 variations)
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {(promotions || []).map((promoSet, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-3 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group"
                onClick={() => onCopyToClipboard(promoSet)}
              >
                <p className="text-xs text-yellow-500 mb-2">#{idx + 1}</p>
                <div className="space-y-1">
                  {promoSet.split('\n').map((promo, promoIdx) => (
                    <div key={promoIdx} className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                      <strong className="text-yellow-500">•</strong> {promo}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Extensions - Exactly 5 variations */}
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">
            💲 Price Extensions (5 variations)
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {(priceBlocks || []).map((priceSet, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-3 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group"
                onClick={() => onCopyToClipboard(priceSet)}
              >
                <p className="text-xs text-yellow-500 mb-2">#{idx + 1}</p>
                <div className="space-y-2">
                  {priceSet.split('\n').map((priceBlock, priceIdx) => (
                    <div key={priceIdx} className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                      <strong className="text-yellow-500">•</strong> {priceBlock}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sitelinks - Agora gerando 30 variações completas */}
      <div className="mt-6 md:mt-8">
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">🔗 Sitelinks (30 variations)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sitelinks.slice(0, 30).map((link, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group min-h-[200px] flex flex-col justify-between"
                onClick={() => onCopyToClipboard(`🔗 Sitelink ${idx + 1}\nTitle: ${link.title}\nDescription 1: ${link.description1}\nDescription 2: ${link.description2}\nURL: ${link.url}`)}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500 text-xs">🔗 #{idx + 1}</span>
                  </div>
                  <h4 className="font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors text-sm">
                    {link.title}
                  </h4>
                  <p className="text-xs text-zinc-300 group-hover:text-white transition-colors line-clamp-2">
                    {link.description1}
                  </p>
                  <p className="text-xs text-zinc-300 group-hover:text-white transition-colors line-clamp-2">
                    {link.description2}
                  </p>
                </div>
                <p className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors truncate mt-2">
                  {link.url}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignResults;
