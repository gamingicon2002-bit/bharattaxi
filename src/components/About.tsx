import { Card } from "@/components/ui/card";
import { Award, MapPin, Users, Shield } from "lucide-react";
import logo from "../assets/logo.jpeg";
import logo1 from "../assets/logo1.png"
const About = () => {
  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: MapPin, value: "50+", label: "Destinations Covered" },
    { icon: Shield, value: "100%", label: "Safe Journeys" },
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      <div className="relative">
<img
        src={logo} 
        alt="Bharat Taxi Service Logo"
        className="w-full w-auto mx-auto mb-6 aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
      >   
      
   
  </img>

</div>


          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">About Us</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Bharat Taxi Service has been serving travelers across North India for over a decade. We
              specialize in providing safe, comfortable, and reliable transportation services to
              some of the most beautiful hill stations in India.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our fleet ranges from comfortable sedans to spacious tempo travellers and buses,
              catering to solo travelers, families, and large groups. With experienced drivers who
              know the mountain roads like the back of their hand, we ensure your journey is as
              memorable as your destination.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Service Regions:</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Himachal Pradesh",
                  "Uttarakhand",
                  "Jammu & Kashmir",
                  "Ladakh (Leh)",
                  "Punjab",
                  "Delhi NCR",
                ].map((region, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
