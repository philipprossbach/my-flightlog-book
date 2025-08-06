import { Button } from "@/components/ui/button";
import { Plane, Plus, BarChart3, User } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-foreground rounded-md">
            <Plane className="w-4 h-4 text-background" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">FlightTracker</h1>
            <p className="text-xs text-muted-foreground">Flugreisen verwalten</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <BarChart3 className="w-4 h-4 mr-2" />
            Statistiken
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Flug hinzufügen
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;