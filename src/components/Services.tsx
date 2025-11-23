import { Card } from "@/components/ui/card";
import { Plane, Mountain, Building2, MapPin, Users, School } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport & Railway Pickup",
    description:
      "Convenient and punctual pickup and drop services from airports and railway stations across North India.",
  },
  {
    icon: Mountain,
    title: "Hill Station Tours",
    description:
      "Explore Manali, Shimla, Nainital, Mussoorie, Leh, and more with our experienced hill drivers.",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description:
      "Professional and reliable transportation solutions for corporate meetings, events, and office commutes.",
  },
  {
    icon: MapPin,
    title: "Outstation Trips",
    description:
      "Comfortable long-distance travel to any destination across North India with flexible booking options.",
  },
  {
    icon: Users,
    title: "Group Tours",
    description:
      "Perfect for family reunions, wedding parties, and friend getaways with our spacious tempo travellers and buses.",
  },
  {
    icon: School,
    title: "School & College Trips",
    description:
      "Safe and supervised transportation for educational tours, picnics, and institutional events.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From daily commutes to adventurous hill station tours, we've got you covered with our
            comprehensive taxi and tempo traveller services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-card-hover transition-all hover:scale-105 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
