
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries } from "../data/Countries";
import { CampaignData } from '../../hooks/useCampaignGeneration';

const funnelStrategies = [
  {
    value: "cod",
    label: "COD (Cash on Delivery)"
  },
  {
    value: "bottom",
    label: "Bottom of Funnel"
  },
  {
    value: "mid",
    label: "Middle of Funnel"
  },
  {
    value: "top",
    label: "Top of Funnel"
  }
];

interface CampaignFormProps {
  onGenerate: (data: CampaignData) => void;
  isGenerating: boolean;
  canGenerate: boolean;
}

const CampaignForm = ({ onGenerate, isGenerating, canGenerate }: CampaignFormProps) => {
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [funnel, setFunnel] = useState("");

  const handleSubmit = () => {
    if (!country || !product || !price || !funnel) {
      return;
    }

    onGenerate({
      country,
      product,
      price,
      funnel
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="border border-zinc-700 shadow-xl p-8 md:p-12 rounded-3xl bg-gradient-to-br from-black via-yellow-900/15 to-black">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
          Create Your High-Converting Campaign
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="country" className="text-white font-medium">Select Country</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger className="w-full p-4 rounded-lg bg-white text-black border-none text-base shadow-sm">
                <SelectValue placeholder="Choose a country" />
              </SelectTrigger>
              <SelectContent className="bg-white border-zinc-300 max-h-60">
                {countries.map(country => (
                  <SelectItem key={country.value} value={country.value} className="text-black hover:bg-zinc-100">
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="funnel" className="text-white font-medium">
              Funnel Strategy
            </Label>
            <Select value={funnel} onValueChange={setFunnel}>
              <SelectTrigger className="w-full p-4 rounded-lg bg-white text-black border-none text-base shadow-sm">
                <SelectValue placeholder="Choose a strategy" />
              </SelectTrigger>
              <SelectContent className="bg-white border-zinc-300">
                {funnelStrategies.map(strategy => (
                  <SelectItem key={strategy.value} value={strategy.value} className="text-black hover:bg-zinc-100">
                    {strategy.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="product" className="text-white font-medium">
              Product Name
            </Label>
            <Input 
              id="product" 
              placeholder="Ex: Testoy Gel" 
              value={product} 
              onChange={e => setProduct(e.target.value)} 
              className="w-full p-4 rounded-lg text-black border-none text-base shadow-sm bg-zinc-50" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price" className="text-white font-medium">
              Price
            </Label>
            <Input 
              id="price" 
              placeholder="Ex: $197.00" 
              value={price} 
              onChange={e => setPrice(e.target.value)} 
              className="w-full p-4 rounded-lg text-black border-none text-base shadow-sm bg-zinc-50" 
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button 
            className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105" 
            onClick={handleSubmit} 
            disabled={isGenerating || !canGenerate || !country || !product || !price || !funnel}
          >
            {isGenerating ? "Generating Campaign..." : "Generate Campaign"}
          </Button>
          {!canGenerate && (
            <p className="text-red-400 mt-4 text-sm">
              Your trial period has expired. Please contact support to continue using the service.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignForm;
