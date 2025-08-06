import { Button } from "@/components/ui/button";
import { Plane, Plus, BarChart3, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-aviation rounded-lg shadow-aviation">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">FlightTracker</h1>
              <p className="text-sm text-muted-foreground">Deine Flugreisen im Überblick</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Statistiken
            </Button>
            <Button variant="default" size="sm" className="gap-2 bg-gradient-aviation hover:shadow-aviation transition-all duration-300">
              <Plus className="w-4 h-4" />
              Flug hinzufügen
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;