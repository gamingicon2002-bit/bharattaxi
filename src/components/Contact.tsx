import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }
    console.log("Contact form submitted:", formData);
    toast.success("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Plan Your Trip?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Call or WhatsApp us to get instant assistance and custom packages tailored to your
            travel needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <Card className="p-6 hover:shadow-card-hover transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Call Us</h4>
                  <a
                    href="tel:+919876543210"
                    className="text-primary hover:underline text-lg"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available 24×7 for bookings and support
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-card-hover transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">WhatsApp</h4>
                  <a
                    href="https://wa.me/919876543210?text=Hello, I want to book a taxi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-lg"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Quick response for instant bookings
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-card-hover transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Email</h4>
                  <a
                    href="mailto:info@northhillstaxi.com"
                    className="text-primary hover:underline text-lg"
                  >
                    info@northhillstaxi.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    For inquiries and custom packages
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-card-hover transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Office Address</h4>
                  <p className="text-muted-foreground">
                    Sector 17, Chandigarh, Punjab<br />
                    India - 160017
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 lg:p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Your Name</label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message / Trip Details
                </label>
                <Textarea
                  placeholder="Tell us about your trip requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
                Submit Inquiry
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
