
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { countries } from "../data/Countries";

interface HistoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campaignHistory: string[];
  onEditCampaign: (campaign: string) => void;
  onDeleteCampaign: (index: number) => void;
}

const HistoryModal = ({ 
  open, 
  onOpenChange, 
  campaignHistory, 
  onEditCampaign, 
  onDeleteCampaign 
}: HistoryModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-700 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-yellow-500">Histórico de Campanhas</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {campaignHistory.length === 0 ? (
            <p className="text-zinc-400 text-center py-4">Nenhuma campanha salva ainda.</p>
          ) : (
            campaignHistory.map((campaign, index) => {
              try {
                const campaignData = JSON.parse(campaign);
                return (
                  <div key={index} className="border border-zinc-600 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-yellow-500 font-bold">{campaignData.product}</h3>
                        <p className="text-sm text-zinc-400">
                          {campaignData.price} - {countries.find(c => c.value === campaignData.country)?.name}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {new Date(campaignData.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => onEditCampaign(campaign)} size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                          Editar
                        </Button>
                        <Button onClick={() => onDeleteCampaign(index)} variant="destructive" size="sm">
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              } catch (error) {
                return (
                  <div key={index} className="border border-zinc-600 p-4 rounded-lg">
                    <div className="text-sm text-zinc-300 mb-2">
                      {campaign.substring(0, 100)}...
                    </div>
                    <Button onClick={() => onDeleteCampaign(index)} variant="destructive" size="sm">
                      Excluir
                    </Button>
                  </div>
                );
              }
            })
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryModal;
