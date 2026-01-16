import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import storageImg from "@/assets/liquid-bulk-terminal.jpg";

const products = [
  "Crude Oil",
  "Refined Fuels",
  "Jet Fuel",
  "Diesel",
  "Gasoline",
  "Petrochemicals",
  "Ethanol",
  "Biodiesel",
  "Lubricants",
  "Industrial Chemicals",
];

const features = [
  "ISO 9001 & 14001 Certified",
  "24/7 Terminal Access",
  "Multi-Modal Connectivity",
  "Heated & Insulated Tanks",
  "Vapor Recovery Systems",
  "Real-Time Inventory Tracking",
];

const StorageHighlight = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={storageImg}
                alt="Bulk liquid storage terminal"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg max-w-xs hidden md:block">
              <div className="text-center">
                <div className="font-display text-4xl text-primary mb-1">7.7M+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Cubic Meters Capacity</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Specialty
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Bulk Liquid Storage<br />
              <span className="text-primary">Done Right</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over a decade of experience and 12 strategically located terminals, 
              we provide safe, compliant, and efficient storage solutions for the energy 
              and chemical industries.
            </p>

            {/* Products We Store */}
            <div className="mb-8">
              <h3 className="font-display text-lg mb-4">Products We Store</h3>
              <div className="flex flex-wrap gap-2">
                {products.map((product) => (
                  <Badge key={product} variant="secondary" className="text-sm">
                    {product}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-display text-lg mb-4">Why Choose Us</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" asChild>
              <Link to="/terminals">
                View All Terminals
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorageHighlight;