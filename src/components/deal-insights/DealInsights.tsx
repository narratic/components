import { DealHeader } from "./DealHeader";
import { Deal } from "@/types";

export interface DealInsightsProps {
  deal: Deal;
}

export function DealInsights({ deal }: DealInsightsProps) {
  return (
    <div className="space-y-6">
      <DealHeader deal={deal} />
    </div>
  );
}
