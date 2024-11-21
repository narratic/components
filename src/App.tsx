import { dealData } from "@/data/mockData";
import { SimpleCard } from "./components/SimpleCard";
import { DealInsights } from "@/components/deal-insights/DealInsights";

function App() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <SimpleCard
        title="Wele!"
        content="This is an interactive card component built with shadcn/ui. It features a clean design with a title, content, and a clickable button."
        buttonText="Click me"
        onButtonClick={handleButtonClick}
      />
      <DealInsights deal={dealData} />
    </div>
  );
}

export default App;
