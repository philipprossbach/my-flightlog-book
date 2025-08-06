import { Button } from "@/components/ui/button";
import { Plus, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Verwalte deine Flugreisen
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Dokumentiere alle Flüge deiner Familie, erstelle Statistiken und 
        behalte den Überblick über eure Reiseabenteuer.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg">
          <Plus className="w-4 h-4 mr-2" />
          Ersten Flug hinzufügen
        </Button>
        <Button size="lg" variant="outline">
          <BarChart3 className="w-4 h-4 mr-2" />
          Statistiken ansehen
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;