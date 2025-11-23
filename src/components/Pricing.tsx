import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const pricingTable = [
  { vehicle: "Sedan", rate: "₹15/km" },
  { vehicle: "SUV", rate: "₹18/km" },
  { vehicle: "Innova Crysta", rate: "₹20/km" },
  { vehicle: "Tempo 12 Seater", rate: "₹24/km" },
  { vehicle: "Tempo 17 Seater", rate: "₹26/km" },
  { vehicle: "Mini Bus 26 Seater", rate: "₹30/km" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Transparent & Fair Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple per-kilometer rates with no hidden charges. What you see is what you pay.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-bold">Vehicle Type</th>
                    <th className="text-right p-4 font-bold">Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTable.map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-border hover:bg-muted/20 transition-colors"
                    >
                      <td className="p-4">{row.vehicle}</td>
                      <td className="p-4 text-right font-medium text-primary">
                        {row.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                What's Included
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Driver allowance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Fuel charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Basic insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <span>Vehicle maintenance</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                Additional Charges
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                  <span>Toll taxes (as applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                  <span>Parking charges (as applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                  <span>State permit charges (if any)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                  <span>Driver accommodation (multi-day trips)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
