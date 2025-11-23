import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    route: "Chandigarh to Manali",
    review:
      "Excellent service! The driver was very experienced and made us feel safe throughout our mountain journey. Highly recommended for hill trips.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    route: "Delhi to Nainital",
    review:
      "Very professional and punctual. The Innova was clean and comfortable. Fair pricing with no hidden charges. Will definitely book again.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    route: "Chandigarh to Leh",
    review:
      "Amazing experience! Long journey but the driver was experienced and patient. The vehicle was in perfect condition. Best taxi service in North India.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    route: "Dehradun to Mussoorie",
    review:
      "Great service for our family trip. The tempo traveller was spacious and comfortable. Driver was friendly and knowledgeable about local routes.",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Happy Travellers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their
            journeys with us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-card-hover transition-all">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm leading-relaxed mb-4 italic">{testimonial.review}</p>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.route}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
