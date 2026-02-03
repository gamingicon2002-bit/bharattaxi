import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, Users, Car, Navigation, Info } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-mountain-road.jpg";
import CityCombobox from "./CityCombobox";
import { northIndiaCities, calculateDistance, getRouteInfo } from "@/data/cities";
import { CheckCircle, AlertCircle, Receipt } from "lucide-react";

interface Vehicle {
  id: number;
  type: string;
  capacityMin: number;
  capacityMax: number;
  ratePerKm: number;
}

interface BookingForm {
  from: string;
  to: string;
  pickupDate: string;
  dropDate: string;
  members: number;
}


interface RouteDetails {
  distance: number;
  route: string;
}

const vehicles: Vehicle[] = [
  // 🚗 Sedan (1–4)
  { id: 1, type: "Sedan (Swift Dzire / Etios / Glanza / Aura)", capacityMin: 1, capacityMax: 4, ratePerKm: 12 },

  // 🚙 SUV (4–7)
  { id: 2, type: "SUV (Maruti Ertiga)", capacityMin: 4, capacityMax: 7, ratePerKm: 15 },
  { id: 3, type: "SUV (Innova Crysta)", capacityMin: 4, capacityMax: 7, ratePerKm: 18 },
  { id: 4, type: "SUV (Toyota Hycross)", capacityMin: 4, capacityMax: 7, ratePerKm: 20 },

  // 🚐 Urbania
  { id: 5, type: "Urbania 12 Seater", capacityMin: 8, capacityMax: 12, ratePerKm: 30 },
  { id: 6, type: "Urbania 16 Seater", capacityMin: 13, capacityMax: 16, ratePerKm: 35 },

  // 🚌 Tempo Traveller
  { id: 7, type: "Tempo Traveller 12 Seater", capacityMin: 8, capacityMax: 12, ratePerKm: 25 },
  { id: 8, type: "Tempo Traveller 12 Seater Maharaja", capacityMin: 8, capacityMax: 12, ratePerKm: 28 },
  { id: 9, type: "Tempo Traveller 16 Seater", capacityMin: 13, capacityMax: 16, ratePerKm: 30 },
  { id: 10, type: "Tempo Traveller 20 Seater", capacityMin: 17, capacityMax: 20, ratePerKm: 32 },
  { id: 11, type: "Tempo Traveller 25 Seater", capacityMin: 21, capacityMax: 25, ratePerKm: 35 },
];
const today = new Date().toISOString().split("T")[0];





const getMockDistance = (from: string, to: string): number => {
  // Try to get real distance from matrix first
  const realDistance = calculateDistance(from, to);
  if (realDistance) return realDistance;
  
  // Fallback to hash-based mock distance
  const hash = (from + to).split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return Math.floor(30 + (hash % 570));
};

const HeroBooking = () => {
const [formData, setFormData] = useState<BookingForm>({
  from: "",
  to: "",
  pickupDate: "",
  dropDate: "",
  members: 0,
});

  const [distanceInKm, setDistanceInKm] = useState<number | null>(null);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [routeDetails, setRouteDetails] = useState<RouteDetails | null>(null);

  // Auto-fetch distance when both cities are selected
  useEffect(() => {
    if (formData.from && formData.to && formData.from !== formData.to) {
      const distance = getMockDistance(formData.from, formData.to);
      const route = getRouteInfo(formData.from, formData.to);
      setDistanceInKm(distance);
      setRouteDetails({ distance, route });
      
      const fromCity = northIndiaCities.find(c => c.id === formData.from);
      const toCity = northIndiaCities.find(c => c.id === formData.to);
      
      toast.success(
        `Route found: ${fromCity?.name} to ${toCity?.name} - ${distance} km`,
        { duration: 3000 }
      );
    } else {
      setDistanceInKm(null);
      setRouteDetails(null);
    }
  }, [formData.from, formData.to]);

  const handleInputChange = (field: keyof BookingForm, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFindVehicles = () => {
  if (
  !formData.from ||
  !formData.to ||
  !formData.pickupDate ||
  !formData.dropDate ||
  formData.members <= 0
) {
  toast.error("Please fill all fields correctly");
  return;
}
if (formData.dropDate < formData.pickupDate) {
  toast.error("Drop date must be same or after pickup date");
  return;
}


    if (!distanceInKm) {
      toast.error("Unable to calculate distance. Please select valid cities.");
      return;
    }

    // const filtered = vehicles.filter(
    //   (v) => formData.members >= v.capacityMin && formData.members <= v.capacityMax
    // );

    const filtered = vehicles.filter(
  (v) => v.capacityMax >= formData.members
);


    if (filtered.length === 0) {
      toast.error("No vehicles available for the selected number of members");
      return;
    }

    setFilteredVehicles(filtered);
    setShowResults(true);
    setSelectedVehicle(null);
    
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setTimeout(() => {
      document.getElementById("trip-summary")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

const handleProceedToBook = () => {
  if (!selectedVehicle || !distanceInKm || !selectedPricing) return;

  const fromCity = northIndiaCities.find(c => c.id === formData.from)?.name;
  const toCity = northIndiaCities.find(c => c.id === formData.to)?.name;

  const message = `
New Taxi Booking Request

Route: ${fromCity} to ${toCity}
Travel Dates: ${formatDate(formData.pickupDate)} to ${formatDate(formData.dropDate)}
Number of Passengers: ${formData.members}

Selected Vehicle: ${selectedVehicle.type}

Distance: Approximately ${distanceInKm} km
Trip Duration: ${selectedPricing.days} days
Chargeable Distance: ${selectedPricing.chargeableKm} km
Rate: ₹${selectedVehicle.ratePerKm} per km
Estimated Total Fare: ₹${selectedPricing.totalPrice}

Kindly confirm availability and final pricing.
  `;

  const encodedMessage = encodeURIComponent(message.trim());

  window.open(`https://wa.me/919888476943?text=${encodedMessage}`, "_blank");
};




const getTripDays = (pickup: string, drop: string) => {
  if (!pickup || !drop) return 1;
  const start = new Date(pickup);
  const end = new Date(drop);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return diffDays > 0 ? diffDays : 1;
};

const MAX_KM_PER_DAY = 250;

const calculateChargeableKm = (distance: number, days: number) => {
  const maxAllowedKm = days * MAX_KM_PER_DAY;
  return Math.max(distance, maxAllowedKm);
};

const calculateTotalPrice = (
  distance: number,
  ratePerKm: number,
  pickupDate: string,
  dropDate: string
) => {
  const days = getTripDays(pickupDate, dropDate);
  const chargeableKm = calculateChargeableKm(distance, days);
  return {
    days,
    chargeableKm,
    totalPrice: chargeableKm * ratePerKm,
  };
};

const selectedPricing =
  selectedVehicle && distanceInKm
    ? calculateTotalPrice(
        distanceInKm,
        selectedVehicle.ratePerKm,
        formData.pickupDate,
        formData.dropDate
      )
    : null;


const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};


  return (
    <section id="home" className="relative min-h-screen pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mountain road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] py-12 lg:py-20">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Reliable Taxi & Tempo Traveller Service for{" "}
              <span className="text-primary">North India Hills</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Safe, comfortable rides to Himachal Pradesh, Uttarakhand, Jammu & Kashmir, Leh,
              and Punjab. Your journey through the mountains starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm lg:text-base">Experienced hill drivers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm lg:text-base">Transparent per km charges</span>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Calculator */}
    <Card className="p-6 lg:p-8 shadow-card-hover bg-card/95 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Book Your Ride</h2>
            <div className="space-y-4">
              <CityCombobox
                cities={northIndiaCities}
                value={formData.from}
                onSelect={(cityId) => handleInputChange("from", cityId)}
                placeholder="Select pickup city"
                label="From"
              />

              <CityCombobox
                cities={northIndiaCities}
                value={formData.to}
                onSelect={(cityId) => handleInputChange("to", cityId)}
                placeholder="Select destination city"
                label="To"
              />

              {/* Route Info */}
              {routeDetails && (
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">
                        Distance: <span className="text-primary">{routeDetails.distance} km</span>
                      </p>
                      <p className="text-xs text-muted-foreground flex items-start gap-1">
                        <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span>{routeDetails.route}</span>
                      </p>
                    </div>
                  </div>
                </Card>
              )}

            <div>
  <label className="text-sm font-medium mb-2 block">Pickup Date</label>
  <div className="relative">
    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
<Input
  type="date"
  className="pl-10"
  min={today}
  value={formData.pickupDate}
  onChange={(e) => {
    const selected = e.target.value;
    handleInputChange("pickupDate", selected);

    // If drop date is before new pickup date → reset drop date
    if (formData.dropDate && selected > formData.dropDate) {
      handleInputChange("dropDate", "");
      toast.error("Drop date reset. Please select a new drop date.");
    }
  }}
/>

  </div>
</div>

              <div>
                <label className="text-sm font-medium mb-2 block">Drop Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
<Input
  type="date"
  className="pl-10"
  min={formData.pickupDate || today}
  value={formData.dropDate}
  onChange={(e) => {
    const selected = e.target.value;

    if (formData.pickupDate && selected < formData.pickupDate) {
      toast.error("Drop date cannot be before pickup date");
      return;
    }

    handleInputChange("dropDate", selected);
  }}
/>


                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Total Members</label>
                
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="number"
                    placeholder="Number of passengers"
                    className="pl-10"
                    min="1"
                    value={formData.members || ""}
                    onChange={(e) => handleInputChange("members", parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary-hover text-lg h-12"
                onClick={handleFindVehicles}
                disabled={!formData.from || !formData.to || !distanceInKm}
              >
                Find Vehicles & Estimate Price
              </Button>
              {!distanceInKm && formData.from && formData.to && (
                <p className="text-xs text-muted-foreground text-center">
                  Select both cities to see available vehicles
                </p>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Results Section */}
      {showResults && (
        <div id="results" className="container mx-auto px-4 pb-16 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Available Vehicles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredVehicles.map((vehicle) => {
  const pricing = calculateTotalPrice(
    distanceInKm || 0,
    vehicle.ratePerKm,
    formData.pickupDate,
    formData.dropDate
  );

  return (

              <Card
                key={vehicle.id}
                className={`p-6 cursor-pointer transition-all hover:shadow-card-hover ${
                  selectedVehicle?.id === vehicle.id
                    ? "ring-2 ring-primary bg-muted/50"
                    : "hover:scale-105"
                }`}
                onClick={() => handleSelectVehicle(vehicle)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{vehicle.type}</h3>
                    <p className="text-sm text-muted-foreground">
                      {vehicle.capacityMin}-{vehicle.capacityMax} passengers
                    </p>
                  </div>
                  <Car className="w-8 h-8 text-primary" />
                </div>
            <div className="space-y-2 mb-4 text-sm">
  <p>
    <span className="font-medium">Distance:</span> ~{distanceInKm} km
  </p>
  <p>
    <span className="font-medium">Trip:</span> {pricing.days} days
  </p>
  <p>
    <span className="font-medium">Min. Chargeable:</span> {pricing.chargeableKm} km
  </p>
  <p>
    <span className="font-medium">Rate:</span> ₹{vehicle.ratePerKm}/km
  </p>
</div>

                <div className="border-t border-border pt-4 mb-4">
                  <p className="text-2xl font-bold text-primary">
₹{pricing.totalPrice}

                  </p>
                  <p className="text-xs text-muted-foreground">Estimated total</p>
                </div>
                <Button
                  className={`w-full ${
                    selectedVehicle?.id === vehicle.id
                      ? "bg-primary hover:bg-primary-hover"
                      : "bg-secondary hover:bg-secondary/90"
                  }`}
                >
                  {selectedVehicle?.id === vehicle.id ? "Selected" : "Select Vehicle"}
                </Button>
              </Card>
  );
})}
          </div>
        </div>
      )}

      {/* Trip Summary */}
{selectedVehicle && (
  <div id="trip-summary" className="container mx-auto px-4 pb-16 relative z-10">
    <Card className="max-w-3xl mx-auto p-6 lg:p-8 shadow-card-hover bg-white border border-border">
      
      <h2 className="text-2xl font-bold mb-6 text-center">Trip Summary</h2>

      {/* Trip Overview */}
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-8 text-sm">
        <div>
          <p className="text-muted-foreground">Route</p>
          <p className="font-semibold">
            {northIndiaCities.find(c => c.id === formData.from)?.name} to{" "}
            {northIndiaCities.find(c => c.id === formData.to)?.name}
          </p>
        </div>

        <div>
          <p className="text-muted-foreground">Travel Dates</p>
          <p className="font-semibold">
            {formData.pickupDate} to {formData.dropDate}
          </p>
        </div>

        <div>
          <p className="text-muted-foreground">Total Duration</p>
          <p className="font-semibold">{selectedPricing?.days} days</p>
        </div>

        <div>
          <p className="text-muted-foreground">Passengers</p>
          <p className="font-semibold">{formData.members}</p>
        </div>

        <div>
          <p className="text-muted-foreground">Vehicle</p>
          <p className="font-semibold">{selectedVehicle.type}</p>
        </div>

        <div>
          <p className="text-muted-foreground">Estimated Distance</p>
          <p className="font-semibold">~{distanceInKm} km</p>
        </div>
      </div>

      {/* Fare Breakdown */}
      <div className="border rounded-lg p-5 mb-8 bg-muted/30">
        <h3 className="font-semibold mb-4">Fare Breakdown</h3>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Minimum Chargeable Distance</span>
            <span>{selectedPricing?.chargeableKm} km</span>
          </div>

          <div className="flex justify-between">
            <span>Rate per Kilometer</span>
            <span>₹{selectedVehicle.ratePerKm}</span>
          </div>

          <div className="border-t pt-3 flex justify-between font-bold text-lg">
            <span>Total Estimated Fare</span>
            <span className="text-primary">₹{selectedPricing?.totalPrice}</span>
          </div>
        </div>
      </div>

      {/* Inclusions / Exclusions */}
      <div className="grid sm:grid-cols-2 gap-8 mb-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3 text-green-600">Included in Fare</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Fuel charges</li>
            <li>Basic insurance</li>
            <li>Vehicle maintenance</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-red-500">Additional Charges</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>Toll tax and parking charges</li>
            <li>State permit charges</li>
            <li>Driver allowance (per day)</li>
          </ul>
        </div>
      </div>

      <Button
        className="w-full bg-primary hover:bg-primary-hover text-lg h-12"
        onClick={handleProceedToBook}
      >
        Book Now on WhatsApp
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Final fare may vary depending on actual travel distance, route conditions, tolls, and parking fees.
      </p>
    </Card>
  </div>
)}

    </section>
  );
};

export default HeroBooking;
