import { Card } from "@/components/ui/card";
import { Shield, Clock, Gauge, Users, MapPin, DollarSign } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Experienced Hill Drivers",
    description: "Our drivers are trained to navigate challenging mountain terrains safely.",
  },
  {
    icon: Gauge,
    title: "Well-Maintained Vehicles",
    description: "Regular servicing and inspections ensure your journey is smooth and safe.",
  },
  {
    icon: Clock,
    title: "24×7 Support & Assistance",
    description: "Round-the-clock customer support for bookings, queries, and emergencies.",
  },
  {
    icon: Users,
    title: "On-Time Pickup Guarantee",
    description: "We value your time. Our drivers ensure punctual pickups every single time.",
  },
  {
    icon: MapPin,
    title: "Flexible Pickup Locations",
    description: "Book from anywhere in North India with doorstep pickup services.",
  },
  {
    icon: DollarSign,
    title: "Transparent Billing",
    description: "Clear pricing with no hidden charges. Pay only for what you use.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Travel With Bharat Taxi Service?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just a taxi service – we're your trusted travel partner for exploring the
            beautiful hills of North India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-card-hover transition-all hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
