import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-sunrise relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-background rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-background rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Ready to Store or Ship?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a competitive quote for your bulk liquid storage, handling, or vessel chartering needs. Our team is ready to help optimize your global logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-secondary hover:bg-white/90 border-0">
              <a href="tel:+13612780604">
                <Phone className="mr-2 w-5 h-5" />
                Call (361) 278-0604
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
