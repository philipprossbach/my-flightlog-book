import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, MapPin, Clock, Users } from "lucide-react";

const FlightStats = () => {
  const stats = [
    {
      title: "Gesamte Flüge",
      value: "24",
      icon: Plane,
      change: "+3 diesen Monat"
    },
    {
      title: "Besuchte Länder",
      value: "12",
      icon: MapPin,
      change: "+2 dieses Jahr"
    },
    {
      title: "Flugstunden",
      value: "156h",
      icon: Clock,
      change: "+12h diesen Monat"
    },
    {
      title: "Familienmitglieder",
      value: "4",
      icon: Users,
      change: "Aktive Nutzer"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="bg-gradient-card border-aviation-silver/20 hover:shadow-elevation transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-aviation-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default FlightStats;