import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Star, Globe, Ship, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import fleetImage from "@/assets/fleet.jpg";

const highlights = [
  "9+ Terminal Network Across 3 Continents",
  "Bulk Liquid & Chemical Storage Specialists",
  "Vessel Chartering & Time Charter Services",
  "24/7 Terminal Operations Worldwide",
  "Multi-Modal Handling: Ship, Rail, Truck",
  "ISO 9001 & 14001 Certified Operations",
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={fleetImage}
                alt="West Texas Sunrise Logistics Terminal Operations"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Texas Flag Overlay Accent */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-secondary/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">Global Operations</span>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-elevated">
              <div className="text-center">
                <p className="font-display text-3xl md:text-4xl">5.8M+</p>
                <p className="text-sm uppercase tracking-wider opacity-90">m³ Storage Capacity</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                About Us
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Texas Headquarters,{" "}
              <span className="text-gradient-sunrise">Global Reach</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              West Texas Sunrise Logistics LLC is a global bulk liquid storage and handling company 
              headquartered in Seagraves, Texas. With terminals across the Americas and Europe, we 
              provide seamless storage, handling, and vessel chartering solutions for international trade.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our experienced team operates a network of world-class terminals handling petroleum products, 
              petrochemicals, and specialty liquids. Combined with our vessel chartering services, 
              we deliver complete logistics solutions—the Texas way.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Texas Pride Statement */}
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20 mb-8">
              <Database className="w-8 h-8 text-primary shrink-0" />
              <div>
                <p className="font-medium text-sm">Storage. Handling. Chartering.</p>
                <p className="text-muted-foreground text-sm">Complete bulk liquid solutions from Texas to the world.</p>
              </div>
            </div>

            <Button size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
