import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Plane } from "lucide-react";

const FlightForm = () => {
  const [passengers, setPassengers] = useState(["Du"]);
  const [newPassenger, setNewPassenger] = useState("");

  const addPassenger = () => {
    if (newPassenger.trim() && !passengers.includes(newPassenger.trim())) {
      setPassengers([...passengers, newPassenger.trim()]);
      setNewPassenger("");
    }
  };

  const removePassenger = (passenger: string) => {
    if (passenger !== "Du") {
      setPassengers(passengers.filter(p => p !== passenger));
    }
  };

  return (
    <Card className="bg-gradient-card border-aviation-silver/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Plane className="w-5 h-5 text-aviation-blue" />
          Neuen Flug hinzufügen
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Flugroute */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="departure">Abflugort (IATA-Code)</Label>
            <Input 
              id="departure" 
              placeholder="z.B. FRA" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="arrival">Ankunftsort (IATA-Code)</Label>
            <Input 
              id="arrival" 
              placeholder="z.B. JFK" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
            />
          </div>
        </div>

        {/* Datum und Zeit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="depDate">Abflugdatum</Label>
            <Input 
              id="depDate" 
              type="date" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="depTime">Abflugzeit</Label>
            <Input 
              id="depTime" 
              type="time" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="arrDate">Ankunftsdatum</Label>
            <Input 
              id="arrDate" 
              type="date" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="arrTime">Ankunftszeit</Label>
            <Input 
              id="arrTime" 
              type="time" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
            />
          </div>
        </div>

        {/* Flugdetails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="flightNumber">Flugnummer</Label>
            <Input 
              id="flightNumber" 
              placeholder="z.B. LH441" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="flightType">Flugtyp</Label>
            <Select>
              <SelectTrigger className="bg-background border-border focus:border-aviation-blue">
                <SelectValue placeholder="Wähle Flugtyp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="privat">Privat</SelectItem>
                <SelectItem value="geschäftlich">Geschäftlich</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mitgeflogen */}
        <div className="space-y-2">
          <Label>Mitgeflogen</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {passengers.map((passenger) => (
              <Badge key={passenger} variant="secondary" className="flex items-center gap-1">
                {passenger}
                {passenger !== "Du" && (
                  <X 
                    className="w-3 h-3 cursor-pointer hover:text-destructive" 
                    onClick={() => removePassenger(passenger)}
                  />
                )}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input 
              value={newPassenger}
              onChange={(e) => setNewPassenger(e.target.value)}
              placeholder="Familienmitglied hinzufügen" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
              onKeyPress={(e) => e.key === "Enter" && addPassenger()}
            />
            <Button 
              type="button" 
              variant="outline" 
              onClick={addPassenger}
              className="border-aviation-blue text-aviation-blue hover:bg-aviation-blue hover:text-white transition-colors"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Optionale Felder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="class">Klasse</Label>
            <Select>
              <SelectTrigger className="bg-background border-border focus:border-aviation-blue">
                <SelectValue placeholder="Klasse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="premium">Premium Economy</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="first">First Class</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="seat">Sitzplatz</Label>
            <Input 
              id="seat" 
              placeholder="z.B. 12A" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="aircraft">Flugzeugmodell</Label>
            <Input 
              id="aircraft" 
              placeholder="z.B. A350" 
              className="bg-background border-border focus:border-aviation-blue transition-colors"
            />
          </div>
        </div>

        {/* Kommentar */}
        <div className="space-y-2">
          <Label htmlFor="comment">Kommentar (optional)</Label>
          <Textarea 
            id="comment" 
            placeholder="Notizen zu diesem Flug..." 
            className="bg-background border-border focus:border-aviation-blue transition-colors resize-none h-20"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <Button 
            variant="outline" 
            className="flex-1 border-border text-muted-foreground hover:border-aviation-blue hover:text-aviation-blue transition-colors"
          >
            Abbrechen
          </Button>
          <Button 
            className="flex-1 bg-gradient-aviation hover:shadow-aviation transition-all duration-300"
          >
            Flug speichern
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlightForm;