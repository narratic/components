import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface SimpleCardProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

export function SimpleCard({ title, content, buttonText, onButtonClick }: SimpleCardProps) {
  return (
    <Card className="w-[350px] shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}