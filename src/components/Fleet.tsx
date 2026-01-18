import { Card } from "@/components/ui/card";
import { Car, Users } from "lucide-react";

const fleetCategories = [
  {
    category: "Sedan",
    vehicles: [
      {
        name: "Maruti Swift Dzire",
        image: "https://i.pinimg.com/474x/44/49/8c/44498cfe3d6fd6dba02b543cc3cdb3f4.jpg", // optional
        capacity: "Up to 4 passengers",
        suitableFor: "City rides, airport transfers",
        features: ["AC", "Comfortable seats", "Good mileage"],
      },
      {
        name: "Toyota Etios",
        image: "https://i.pinimg.com/474x/0a/bb/0c/0abb0c0275eb16e1c2c8f41a1e7c92a0.jpg", // \\\
        capacity: "Up to 4 passengers",
        suitableFor: "Outstation travel",
        features: ["AC", "Spacious legroom", "Reliable engine"],
      },
      {
        name: "Toyota Glanza",
        image: "https://i.pinimg.com/736x/e6/6a/58/e66a58647bf1e3dbd52a977681ba12a9.jpg", // optional
        capacity: "Up to 4 passengers",
        suitableFor: "City & highway travel",
        features: ["AC", "Premium interiors", "Smooth drive"],
      },
      {
        name: "Hyundai Aura",
        image: "https://i.pinimg.com/474x/19/82/e2/1982e263687ed784f37388fe832a0e0c.jpg", // optional
        capacity: "Up to 4 passengers",
        suitableFor: "Comfortable city travel",
        features: ["AC", "Quiet cabin", "Fuel efficient"],
      },
    ],
  },
  {
    category: "SUV",
    vehicles: [
      {
        name: "Toyota Innova Crysta",
        image: "https://i.pinimg.com/474x/d3/bb/45/d3bb451053ed5be1a6b4b4ad723fdc2b.jpg", 
        capacity: "Up to 7 passengers",
        suitableFor: "Family trips, long journeys",
        features: ["Spacious interiors", "Premium comfort", "Large luggage space"],
      },
      {
        name: "Toyota Hycross",
        image: "https://i.pinimg.com/736x/cf/c6/a0/cfc6a02ab32f6ecbe1130982e4e9c73c.jpg", // optional
        capacity: "Up to 7 passengers",
        suitableFor: "Luxury family travel",
        features: ["Hybrid comfort", "Captain seats", "Premium ride"],
      },
      {
        name: "Maruti Ertiga",
        image: "https://i.pinimg.com/474x/53/0f/46/530f4668808c5104d0806f2d46f278cd.jpg", // optional
        capacity: "Up to 7 passengers",
        suitableFor: "Budget family travel",
        features: ["AC", "Comfort seating", "Good mileage"],
      },
    ],
  },
  {
    category: "Urbania",
    vehicles: [
      {
        name: "12 Seater Force Urbania",
        image: "https://i.pinimg.com/736x/66/8d/03/668d03d265a81b81a3df1e08480ddcdd.jpg", // optional
        capacity: "12 passengers",
        suitableFor: "Premium group travel",
        features: ["Luxury interiors", "Recliner seats", "AC"],
      },
      {
        name: "16 Seater Force Urbania",
        image: "	https://i.pinimg.com/474x/f6/1c/cf/f61ccf9cf2c48d5f5bc079cd967dabcb.jpg", // optional
        capacity: "16 passengers",
        suitableFor: "Corporate & group tours",
        features: ["Wide seats", "Premium comfort", "Smooth suspension"],
      },
    ],
  },
  {
    category: "Tempo Traveller",
    vehicles: [
      {
        name: "12 Seater Tempo Traveller",
        image: "https://i.pinimg.com/736x/fe/22/ce/fe22ce132a8f19f0c57b48b5160c7bb3.jpg", // optional
        capacity: "12 passengers",
        suitableFor: "Group tours & trips",
        features: ["Push-back seats", "AC", "Experienced drivers"],
      },
      {
        name: "12 Seater Maharaja Tempo Traveller",
        image: "https://i.pinimg.com/736x/20/8d/16/208d16a1cea841c461549d7d6270866b.jpg", // optional
        capacity: "12 passengers",
        suitableFor: "Luxury group travel",
        features: ["Maharaja seats", "Premium interiors", "AC"],
      },
      {
        name: "16 Seater Tempo Traveller",
        image: "https://i.pinimg.com/736x/20/8d/16/208d16a1cea841c461549d7d6270866b.jpg", // optional
        capacity: "16 passengers",
        suitableFor: "Family & corporate travel",
        features: ["Spacious seating", "AC", "Luggage carrier"],
      },
      {
        name: "20 Seater Tempo Traveller",
        image: "	https://www.urbaniasechalo.com/assets/img/tt.jpeg", // optional
        capacity: "20 passengers",
        suitableFor: "Medium group travel",
        features: ["High roof", "Comfort seating", "Safe travel"],
      },
      {
        name: "25 Seater Tempo Traveller",
        image: "https://i.pinimg.com/736x/5c/d0/b5/5cd0b5267ca6514a3db7fb600b192acb.jpg", // optional
        capacity: "25 passengers",
        suitableFor: "Large group travel",
        features: ["Extra space", "Comfort seats", "Experienced driver"],
      },
    ],
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Fleet</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Well-maintained vehicles for every group size and journey type.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {fleetCategories.map((group, idx) => (
            <div key={idx}>
              {/* Category Heading */}
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                {group.category}
              </h3>

              {/* Vehicles Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {group.vehicles.map((vehicle, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-card-hover transition-all"
                  >
                    {/* Image Placeholder */}
                  {vehicle.image ? (
  <div className="h-64 overflow-hidden">
    <img
      src={vehicle.image}
      alt={vehicle.name}
      className="w-full h-full object-cover"
    />
  </div>
) : (
  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
    <Car className="w-24 h-24 text-primary/60" />
  </div>
)}



                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">
                        {vehicle.name}
                      </h4>

                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{vehicle.capacity}</span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {vehicle.suitableFor}
                      </p>

                      <div className="space-y-2">
                        {vehicle.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
