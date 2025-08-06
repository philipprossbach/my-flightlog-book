import { Button } from "@/components/ui/button";
import { Plus, BarChart3 } from "lucide-react";
import heroImage from "@/assets/aviation-hero.jpg";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-sky rounded-xl border border-aviation-silver/20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="relative z-10 px-8 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy mb-4">
          Verwalte deine Flugreisen
        </h2>
        <p className="text-lg text-aviation-blue mb-8 max-w-2xl mx-auto">
          Dokumentiere alle Flüge deiner Familie, erstelle Statistiken und 
          behalte den Überblick über eure Reiseabenteuer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-aviation hover:shadow-aviation transition-all duration-300 gap-2"
          >
            <Plus className="w-5 h-5" />
            Ersten Flug hinzufügen
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-aviation-blue text-aviation-blue hover:bg-aviation-blue hover:text-white transition-colors gap-2"
          >
            <BarChart3 className="w-5 h-5" />
            Statistiken ansehen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;