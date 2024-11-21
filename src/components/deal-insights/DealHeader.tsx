// import { useNavigate } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";

export interface DealHeaderProps {
  dealStage: string;
  dealName: string;
}

export function DealHeader({ dealStage, dealName }: DealHeaderProps) {
  // const navigate = useNavigate();

  // const handleDealChange = (newDealId: string) => {
  //   if (newDealId !== deal.dealId) {
  //     navigate(`/deals/deal-insights/${newDealId}`, { replace: true });
  //   }
  // }

  return (
    <Card className="bg-white shadow-sm border-slate-200">
      <CardHeader>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {dealName}
              </h2>
            </div>
            <Badge variant="outline" className="text-sm">
              {dealStage}
            </Badge>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
