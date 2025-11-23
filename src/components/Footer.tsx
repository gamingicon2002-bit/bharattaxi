import { MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "fleet", label: "Fleet" },
    { id: "pricing", label: "Pricing" },
    { id: "reviews", label: "Reviews" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const serviceAreas = [
    "Himachal Pradesh",
    "Uttarakhand",
    "Jammu & Kashmir",
    "Ladakh (Leh)",
    "Punjab",
    "Delhi NCR",
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">Bharat Taxi Service</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted travel partner for exploring the beautiful hills of North India. Safe,
              comfortable, and reliable journeys since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Phone:</span>
                <br />
                <a href="tel:+919876543210" className="hover:text-primary">
                  +91 98884 76943
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">Email:</span>
                <br />
                <a href="mailto:bharattaxiservicechd@gmail.com" className="hover:text-primary">
                  bharattaxiservicechd@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">Address:</span>
                <br />
                Sector 17, Chandigarh
                <br />
                Punjab, India - 160017
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Bharat Taxi Service. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
