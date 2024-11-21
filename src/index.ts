// Components
export { DealHeader } from "./components/deal-insights/DealHeader";
export type { DealHeaderProps } from "./components/deal-insights/DealHeader";
export { SimpleCard } from "./components/SimpleCard";

// UI Components
export { Button } from "./components/ui/button";
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "./components/ui/card";
export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
export { Badge } from "./components/ui/badge";

// Types
export type { Deal } from "./types";

// Utils
export { cn, getLanguageName } from "./lib/utils";

// Optional: Example Data
export { deals } from "./data/mockData";

// Styles
import "./styles/index.css";
