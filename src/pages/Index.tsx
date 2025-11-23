import Navbar from "@/components/Navbar";
import HeroBooking from "@/components/HeroBooking";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBooking />
      <Services />
      <Fleet />
      <Pricing />
      <WhyChooseUs />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
