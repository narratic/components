// import { useNavigate } from "react-router-dom";
import { ExternalLink, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getLanguageName } from "@/lib/utils";
import { deals } from "@/data/mockData";
import { Deal } from "@/types";

export interface DealHeaderProps {
  deal: Deal;
}

export function DealHeader({ deal }: DealHeaderProps) {
  // const navigate = useNavigate();

  // const handleDealChange = (newDealId: string) => {
  //   if (newDealId !== deal.dealId) {
  //     navigate(`/deals/deal-insights/${newDealId}`, { replace: true });
  //   }
  // };

  return (
    <Card className="bg-white shadow-sm border-slate-200">
      <CardHeader>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {deal.dealName}
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-1 h-auto"
                      onClick={() => window.open(deal.hubspotUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 text-slate-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View in HubSpot</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Badge variant="outline" className="text-sm">
              {deal.dealStage}
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
            <div className="space-y-1">
              <p className="text-sm text-slate-500">Amount</p>
              <p className="text-lg font-semibold">
                ${deal.amount.toLocaleString()}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <p className="text-sm text-slate-500">Win Probability</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        Estimated chance of winning, based on prospect
                        engagement, qualification status, risk factors, and
                        historic deal outcomes at the current stage.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-lg font-semibold">{deal.probability}%</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-slate-500">Deal Owner</p>
              <p className="text-lg font-semibold">{deal.dealOwner}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <p className="text-sm text-slate-500">Deal Lannguage</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <HelpCircle className="w-3 h-3 text-slate-400" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>The main language of the deal.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-lg font-semibold">
                {getLanguageName(deal.dealLanguage)}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Select value={deal.dealId}>
          {/* <Select value={deal.dealId} onValueChange={handleDealChange}> */}
          <SelectTrigger className="w-[300px]">
            <SelectValue>
              {deal.dealName} ({deal.company})
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {deals.map((d) => (
              <SelectItem key={d.dealId} value={d.dealId}>
                {d.dealName} ({d.company})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}