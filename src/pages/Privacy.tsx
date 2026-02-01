import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16 ">
        <h1 className="text-4xl font-bold tracking-tight mb-12">Privacy Policy</h1>
        {/* <p className="text-sm text-muted-foreground mb-12">
          Last Updated: [Insert Date]
        </p> */}

        <section className="space-y-10 text-base leading-8 text-muted-foreground">
          {[
            {
              title: "1. Information We Collect",
              text: "We collect personal details such as your name, phone number, email address, pickup and drop locations, and travel itinerary when you book with us. We may also collect technical data like IP address, browser type, and device information.",
            },
            {
              title: "2. How We Use Your Information",
              text: "Your information helps us process bookings, assign drivers, provide trip updates, improve service quality, and offer customer support. Promotional messages are sent only if you opt in.",
            },
            {
              title: "3. Sharing of Information",
              text: "We do not sell your data. Information may be shared with drivers, payment partners, or legal authorities if required by law.",
            },
            {
              title: "4. Cookies",
              text: "Our website uses cookies to enhance user experience and analyze traffic. You can disable cookies in your browser settings.",
            },
            {
              title: "5. Data Security",
              text: "We implement reasonable safeguards to protect your data, but no online system can guarantee complete security.",
            },
            {
              title: "6. Data Retention",
              text: "We retain information only as long as necessary for service delivery, legal compliance, and dispute resolution.",
            },
            {
              title: "7. Your Rights",
              text: "You may request access, correction, or deletion of your personal data by contacting us.",
            },
            {
              title: "8. Third-Party Links",
              text: "We are not responsible for privacy practices of external websites linked from our platform.",
            },
            {
              title: "9. Policy Updates",
              text: "This policy may be updated periodically. Updates will be posted with a revised date.",
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
              10. Contact Us
            </h2>
            <p>
              Email: bharattaxiservicechd@gmail.com <br />
              Phone: +91 98884 76943
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
