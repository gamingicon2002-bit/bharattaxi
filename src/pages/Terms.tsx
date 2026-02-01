import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16 ">
        <h1 className="text-4xl font-bold tracking-tight mb-12">
          Terms & Conditions
        </h1>
        {/* <p className="text-sm text-muted-foreground mb-12">
          Last Updated: [Insert Date]
        </p> */}

        <section className="space-y-10 text-base leading-8 text-muted-foreground">
          {[
            {
              title: "1. About Us",
              text: "Bharat Taxi Service has served travelers across North India for over a decade, providing safe and reliable taxi and tour services to hill stations and destinations across India.",
            },
            {
              title: "2. Booking & Confirmation",
              text: "Bookings are confirmed only after receiving confirmation and any required advance payment. Customers must provide accurate trip details.",
            },
            {
              title: "3. Pricing & Payments",
              text: "Fares vary based on vehicle type, route, distance, tolls, taxes, and travel duration. Additional charges may apply for hill areas, night travel, or itinerary changes.",
            },
            {
              title: "4. Cancellations & Refunds",
              text: "Cancellations over 24 hours before pickup may be eligible for partial refunds. Last-minute cancellations may incur charges. Refunds are processed within 7–10 business days.",
            },
            {
              title: "5. Use of Vehicle",
              text: "Passengers must not carry illegal substances or hazardous materials. Damage or excessive cleaning charges caused by passengers will be billed accordingly.",
            },
            {
              title: "6. Driver & Travel Conditions",
              text: "Drivers may refuse travel in unsafe conditions. We are not responsible for delays due to traffic, weather, strikes, or government restrictions.",
            },
            {
              title: "7. Passenger Belongings",
              text: "We are not liable for loss or damage of personal belongings left in vehicles.",
            },
            {
              title: "8. Travel to Hill Stations",
              text: "Trips to mountainous or remote regions may be affected by road or weather conditions. Routes may be changed for safety.",
            },
            {
              title: "9. Limitation of Liability",
              text: "We are not responsible for missed flights, trains, or events. Liability is limited to the amount paid for the booking.",
            },
            {
              title: "10. Changes to Terms",
              text: "These terms may be updated at any time. Continued use of our services implies acceptance.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h2>
              <p>{item.text}</p>
            </div>
          ))}

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              11. Contact Us
            </h2>
            <p>
              Phone: +91 98884 76943 <br />
              Email: bharattaxiservicechd@gmail.com
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
