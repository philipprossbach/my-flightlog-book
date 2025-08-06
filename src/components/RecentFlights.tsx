import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Users, MoreHorizontal } from "lucide-react";

const RecentFlights = () => {
  const flights = [
    {
      id: 1,
      flightNumber: "LH441",
      airline: "Lufthansa",
      departure: { code: "FRA", city: "Frankfurt", time: "10:30" },
      arrival: { code: "JFK", city: "New York", time: "14:15" },
      date: "15. Nov 2024",
      duration: "8h 45m",
      type: "privat",
      passengers: ["Du", "Maria"],
      class: "Economy"
    },
    {
      id: 2,
      flightNumber: "BA907",
      airline: "British Airways",
      departure: { code: "LHR", city: "London", time: "16:45" },
      arrival: { code: "FRA", city: "Frankfurt", time: "19:30" },
      date: "02. Nov 2024",
      duration: "1h 45m",
      type: "geschäftlich",
      passengers: ["Du"],
      class: "Business"
    },
    {
      id: 3,
      flightNumber: "EW9844",
      airline: "Eurowings",
      departure: { code: "DUS", city: "Düsseldorf", time: "07:20" },
      arrival: { code: "PMI", city: "Palma", time: "09:15" },
      date: "28. Okt 2024",
      duration: "2h 55m",
      type: "privat",
      passengers: ["Du", "Maria", "Tom", "Lisa"],
      class: "Economy"
    }
  ];

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span>Aktuelle Flüge</span>
          <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-foreground">
            Alle anzeigen
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {flights.map((flight, index) => (
          <div key={flight.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="font-mono text-xs">
                  {flight.flightNumber}
                </Badge>
                <span className="text-sm text-muted-foreground">{flight.airline}</span>
                <Badge variant={flight.type === "geschäftlich" ? "secondary" : "outline"} className="text-xs">
                  {flight.type}
                </Badge>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-1">
                <div className="font-semibold">{flight.departure.code}</div>
                <div className="text-sm text-muted-foreground">{flight.departure.city}</div>
                <div className="text-sm font-medium">{flight.departure.time}</div>
              </div>
              
              <div className="flex flex-col items-center">
                <ArrowRight className="w-4 h-4 text-muted-foreground mb-1" />
                <div className="text-xs text-muted-foreground">{flight.duration}</div>
              </div>
              
              <div className="flex-1 text-right">
                <div className="font-semibold">{flight.arrival.code}</div>
                <div className="text-sm text-muted-foreground">{flight.arrival.city}</div>
                <div className="text-sm font-medium">{flight.arrival.time}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {flight.date}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="w-3 h-3" />
                  {flight.passengers.length} Personen
                </div>
              </div>
              <Badge variant="secondary" className="text-xs">
                {flight.class}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentFlights;