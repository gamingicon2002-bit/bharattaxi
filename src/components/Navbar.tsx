import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";
import logo1 from "../assets/logo1.png"
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const navigate = useNavigate();
const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const scrollToSection = (id) => {
  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  setIsMobileMenuOpen(false);
};


  
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "fleet", label: "Fleet" },
    { id: "pricing", label: "Pricing" },
    { id: "reviews", label: "Reviews" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

return (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
      isScrolled ? "bg-card shadow-md" : "bg-card/95 backdrop-blur-sm"
    }`}
  >
<div className="w-full px-6 lg:px-12">
      <div className="flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 text-xl lg:text-2xl font-bold text-primary hover:text-primary-hover transition-colors"
        >
          <img
            src={logo}
            alt="Bharat Taxi Service Logo"
className="h-12 w-auto lg:h-20"
          />
          <span>Bharat Taxi Service</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Divider */}
          <span className="h-5 w-px bg-border"></span>

          {/* Legal Links */}
          {/* <button
            onClick={() => navigate("/terms")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Terms
          </button>
          <button
            onClick={() => navigate("/privacy")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy
          </button> */}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open("tel:+9888476943")}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
          <Button
            size="sm"
            className="gap-2 bg-primary hover:bg-primary-hover"
            onClick={() =>
              window.open(
                "https://wa.me/9888476943?text=Hello, I want to book a taxi"
              )
            }
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden py-4 border-t border-border">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </button>
            ))}

            {/* Legal Links Mobile */}
            <div className="border-t border-border pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  navigate("/terms");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Terms & Conditions
              </button>

              <button
                onClick={() => {
                  navigate("/privacy");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 pt-4">
              <Button
                variant="outline"
                className="gap-2 w-full"
                onClick={() => window.open("tel:+9888476943")}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button
                className="gap-2 w-full bg-primary hover:bg-primary-hover"
                onClick={() =>
                  window.open(
                    "https://wa.me/9888476943?text=Hello, I want to book a taxi"
                  )
                }
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  </nav>
);

};

export default Navbar;
