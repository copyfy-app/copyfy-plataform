
import { Button } from "@/components/ui/button";
import { Copy, FileText, Target, History } from "lucide-react";
import { GeneratedContent, CampaignData } from '../../hooks/useCampaignGeneration';
import { generateStructuredSnippet, generatePromotionExtension, generatePriceExtension } from '../../utils/extensionGenerators';

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
}: CampaignResultsProps) => {
  const { product, price, country } = campaignData;
  const { titles, descriptions, usps, sitelinks, biddingStrategy } = generatedContent;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
          Campanha para {product}
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Button onClick={onSave} className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg">
              Salvar Campanha
            </Button>
            <Button onClick={onNewCampaign} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg">
              Nova Campanha
            </Button>
          </div>
          <Button onClick={onShowHistory} className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg">
            <History className="w-4 h-4 mr-2" />
            Histórico de Campanhas
          </Button>
        </div>
      </div>

      {/* Bidding Strategy Section */}
      <div className="mb-6 md:mb-8 rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
        <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
          <Target className="w-5 h-5 text-yellow-500" />
          Estratégia de Lance Recomendada
        </h3>
        <div className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group" onClick={() => onCopyToClipboard(biddingStrategy)}>
          <p className="text-white group-hover:text-yellow-100 transition-colors text-sm md:text-base break-words">
            <span className="text-yellow-500 font-semibold">Recomendação:</span> {biddingStrategy}
          </p>
        </div>
      </div>

      {/* Grid principal reorganizado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Títulos - Now showing 30 titles */}
        <div className="lg:col-span-2 rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <h3 className="font-bold mb-4 text-lg md:text-xl flex items-center gap-2 text-yellow-500">
            <Copy className="w-5 h-5 text-yellow-500" />
            Títulos da Campanha (30 variações)
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
            Descrições (30 variações)
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
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">Frases de Destaques (30 variações)</h3>
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
        {/* Snippet Estruturado */}
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black min-h-[280px] flex flex-col">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500 cursor-pointer" onClick={() => onCopyToClipboard(generateStructuredSnippet(product, country))}>
            📌 Snippet Estruturado
          </h3>
          <div className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group flex-grow flex flex-col justify-center" onClick={() => onCopyToClipboard(generateStructuredSnippet(product, country))}>
            <p className="text-sm text-zinc-400 mb-2">Categoria: <strong className="text-yellow-500">Benefícios</strong></p>
            <p className="text-sm text-white group-hover:text-yellow-100 transition-colors">
              {generateStructuredSnippet(product, country).split('\n')[1].replace('Valores: ', '')}
            </p>
          </div>
        </div>

        {/* Extensão de Promoção */}
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black min-h-[280px] flex flex-col">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">
            🎯 Extensão de Promoção
          </h3>
          <div className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group flex-grow flex flex-col justify-center" onClick={() => onCopyToClipboard(generatePromotionExtension(product, country))}>
            <div className="space-y-2">
              {generatePromotionExtension(product, country).split('\n').map((promo, idx) => (
                <div key={idx} className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                  <strong className="text-yellow-500">Promoção {idx + 1}:</strong> {promo}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extensão de Preço */}
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black min-h-[280px] flex flex-col">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">
            💲 Extensão de Preço
          </h3>
          <div className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group flex-grow flex flex-col justify-center" onClick={() => onCopyToClipboard(generatePriceExtension(product, price, country))}>
            <div className="space-y-3">
              {generatePriceExtension(product, price, country).split('\n').map((priceBlock, idx) => (
                <div key={idx} className="text-sm text-white group-hover:text-yellow-100 transition-colors">
                  <strong className="text-yellow-500">Opção {idx + 1}:</strong> {priceBlock}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sitelinks - Movidos para último e em layout horizontal */}
      <div className="mt-6 md:mt-8">
        <div className="rounded-lg border border-zinc-700 p-4 md:p-6 bg-gradient-to-br from-black via-yellow-900/20 to-black">
          <h3 className="font-bold mb-4 text-lg md:text-xl text-yellow-500">🔗 Sitelinks (30 variações)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sitelinks.map((link, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-black via-yellow-900/10 to-black p-4 rounded-lg border border-zinc-600 hover:border-yellow-500 transition-all cursor-pointer group min-h-[200px] flex flex-col justify-between"
                onClick={() => onCopyToClipboard(`🔗 Sitelink ${idx + 1}\nTítulo: ${link.title}\nDescrição 1: ${link.description1}\nDescrição 2: ${link.description2}\nURL: ${link.url}`)}
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
