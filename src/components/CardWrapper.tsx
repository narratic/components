import { SimpleCard } from "./SimpleCard";

export function CardWrapper() {
  const handleButtonClick = () => {
    console.log("Button clicked in wrapper!");
  };

  return (
    <SimpleCard
      title="Welcome!"
      content="This is a server-side rendered card component built with shadcn/ui. It features a clean design with a title, content, and a form-based button."
      buttonText="Submit"
      onButtonClick={handleButtonClick}
    />
  );
}