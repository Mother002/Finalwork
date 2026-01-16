import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "West Texas Sunrise's Houston terminal has been critical to our Gulf Coast operations. Their storage capacity and pipeline connectivity give us the flexibility we need for global crude exports.",
    author: "Marcus Thompson",
    title: "Director of Terminal Operations",
    company: "Permian Crude Exports LLC",
    rating: 5,
  },
  {
    quote: "The Rotterdam terminal provides exceptional service for our European distribution needs. Their blending capabilities and barge access have streamlined our supply chain significantly.",
    author: "Elena van der Berg",
    title: "VP of European Logistics",
    company: "TransAtlantic Petroleum",
    rating: 5,
  },
  {
    quote: "We've relied on their Corpus Christi facility for our Eagle Ford production storage. The 24/7 operations and deep water access make them an invaluable partner.",
    author: "Robert Castellano",
    title: "Operations Manager",
    company: "Gulf Energy Partners",
    rating: 5,
  },
  {
    quote: "Their terminal network from Santos to Montreal gives us true hemispheric coverage. Tank farm management is world-class and their certifications exceed industry standards.",
    author: "Sofia Ramirez",
    title: "Supply Chain Director",
    company: "Coastal Americas Energy",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-display uppercase tracking-wider text-sm mb-4 block">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our partners say about working with West Texas Sunrise Logistics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
