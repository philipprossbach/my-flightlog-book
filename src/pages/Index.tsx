import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FlightStats from "@/components/FlightStats";
import RecentFlights from "@/components/RecentFlights";
import FlightForm from "@/components/FlightForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-sky">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <HeroSection />
        <FlightStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentFlights />
          <FlightForm />
        </div>
      </main>
    </div>
  );
};

export default Index;
