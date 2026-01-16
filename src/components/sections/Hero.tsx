import { Link } from "react-router-dom";
import { ArrowRight, Database, Building2, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/oil-storage.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial bulk liquid storage tanks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              America's Trusted Terminal Network
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6">
            Premier <span className="text-gradient-sunrise">Bulk Liquid</span>
            <br />Storage Network
          </h1>

          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
            Nationwide terminal network with 7.7M+ m³ storage capacity across 12 strategic locations. Safe, compliant storage for petroleum, chemicals, and specialty liquids.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" asChild className="group">
              <Link to="/terminals">
                Explore Terminals
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-secondary hover:bg-white/90 border-0">
              <Link to="/contact">
                Request Storage Quote
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="animate-fade-in-up delay-400 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-lg p-4 hover-lift">
              <Database className="w-10 h-10 text-primary shrink-0" />
              <div>
                <p className="font-display text-sm uppercase text-primary-foreground">7.7M+ m³</p>
                <p className="text-xs text-primary-foreground/70">Storage Capacity</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-lg p-4 hover-lift">
              <Building2 className="w-10 h-10 text-primary shrink-0" />
              <div>
                <p className="font-display text-sm uppercase text-primary-foreground">12 Terminals</p>
                <p className="text-xs text-primary-foreground/70">Nationwide Network</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-lg p-4 hover-lift">
              <Droplets className="w-10 h-10 text-primary shrink-0" />
              <div>
                <p className="font-display text-sm uppercase text-primary-foreground">1,655+ Tanks</p>
                <p className="text-xs text-primary-foreground/70">Multi-Product Storage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;