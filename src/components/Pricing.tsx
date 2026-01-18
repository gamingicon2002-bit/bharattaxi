import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

/* =======================
   PRICING DATA (DYNAMIC)
   ======================= */
const pricingData: Record<
  string,
  { name: string; rate: string }[]
> = {
  Sedan: [
    { name: "Maruti Swift Dzire", rate: "₹12/km" },
    { name: "Toyota Etios", rate: "₹12/km" },
    { name: "Toyota Glanza", rate: "₹12/km" },
    { name: "Hyundai Aura", rate: "₹12/km" },
  ],

  SUV: [
    { name: "Maruti Ertiga", rate: "₹15/km" },
    { name: "Toyota Innova Crysta", rate: "₹18/km" },
    { name: "Toyota Hycross", rate: "₹20/km" },
  ],

  Urbania: [
    { name: "Force Urbania 12 Seater", rate: "₹30/km" },
    { name: "Force Urbania 16 Seater", rate: "₹35/km" },
  ],

  Tempo: [
    { name: "Tempo Traveller 12 Seater", rate: "₹25/km" },
    { name: "Tempo Traveller 12 Seater Maharaja", rate: "₹28/km" },
    { name: "Tempo Traveller 16 Seater", rate: "₹30/km" },
    { name: "Tempo Traveller 20 Seater", rate: "₹32/km" },
    { name: "Tempo Traveller 25 Seater", rate: "₹35/km" },
  ],
};


const Pricing = () => {
  const categories = Object.keys(pricingData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* =======================
            HEADER
           ======================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Transparent & Fair Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a vehicle category to view detailed pricing.
          </p>
        </div>

        {/* =======================
            CATEGORY NAVIGATION
           ======================= */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all
                ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted hover:bg-muted/70"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* =======================
            PRICING TABLE
           ======================= */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-bold">
                    {activeCategory} Vehicles
                  </th>
                  <th className="text-right p-4 font-bold">
                    Rate (Per Km)
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData[activeCategory].map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-border hover:bg-muted/20 transition"
                  >
                    <td className="p-4">{item.name}</td>
                    <td className="p-4 text-right font-semibold text-primary">
                      {item.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* =======================
            INFO CARDS
           ======================= */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              What's Included
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Fuel charges",
                "Basic insurance",
                "Vehicle maintenance",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              Additional Charges
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Toll Tax & parking charges",
                "State permit charges",
                      "Driver allowance",

              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
