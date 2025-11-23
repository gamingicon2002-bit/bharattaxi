import { Card } from "@/components/ui/card";
import { Car, Users } from "lucide-react";

const fleetCategories = [
  {
    name: "Hatchback / Sedan",
    capacity: "Up to 4 passengers",
    suitableFor: "Solo travelers, couples, and small families",
    features: ["AC vehicles", "Comfortable seats", "Luggage space"],
  },
  {
    name: "SUV / Innova Crysta",
    capacity: "Up to 7 passengers",
    suitableFor: "Families, small groups, and comfortable long journeys",
    features: ["Spacious interiors", "Premium comfort", "Extra luggage capacity"],
  },
  {
    name: "Tempo Traveller",
    capacity: "12 or 17 seater",
    suitableFor: "Group tours, family reunions, corporate teams",
    features: ["Push-back seats", "First aid kit", "Experienced drivers"],
  },
  {
    name: "Mini Bus / Bus",
    capacity: "26+ passengers",
    suitableFor: "Large groups, school trips, wedding parties",
    features: ["Comfortable seating", "Audio system", "Safe and supervised"],
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Fleet</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Well-maintained vehicles for every group size and journey type. All our vehicles are
            regularly serviced and inspected for your safety.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {fleetCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-card-hover transition-all"
            >
              {/* Vehicle Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Car className="w-20 h-20 text-primary/60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{category.capacity}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{category.suitableFor}</p>
                <div className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
