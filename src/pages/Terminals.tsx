import { Link } from "react-router-dom";
import { MapPin, Database, Building2, ArrowRight, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { terminals, getTotalStats } from "@/data/terminals";
import houstonTerminalImg from "@/assets/houston-terminal.jpg";
import seagravesTerminalImg from "@/assets/seagraves-terminal.jpg";
import rotterdamTerminalImg from "@/assets/rotterdam-terminal.jpg";
import santosTerminalImg from "@/assets/santos-terminal.jpg";
import cartagenaTerminalImg from "@/assets/cartagena-terminal.jpg";
import panamaTerminalImg from "@/assets/panama-terminal.jpg";
import montrealTerminalImg from "@/assets/montreal-terminal.jpg";
import altamiraTerminalImg from "@/assets/altamira-terminal.jpg";
import corpusChristiTerminalImg from "@/assets/corpus-christi-terminal.jpg";

const imageMap: Record<string, string> = {
  "houston-terminal": houstonTerminalImg,
  "seagraves-terminal": seagravesTerminalImg,
  "rotterdam-terminal": rotterdamTerminalImg,
  "santos-terminal": santosTerminalImg,
  "cartagena-terminal": cartagenaTerminalImg,
  "panama-terminal": panamaTerminalImg,
  "montreal-terminal": montrealTerminalImg,
  "altamira-terminal": altamiraTerminalImg,
  "corpus-christi-terminal": corpusChristiTerminalImg,
};

const Terminals = () => {
  const stats = getTotalStats();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-texas-navy via-texas-navy/95 to-texas-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sunrise-500 font-display uppercase tracking-wider text-sm mb-4">
              Our Terminal Network
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Strategic Terminals Across the <span className="text-sunrise-400">United States</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              A nationwide network of state-of-the-art storage and distribution facilities, 
              strategically positioned to serve America's energy infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-12 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                {stats.totalTerminals}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Terminal Locations
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                {stats.totalCapacity}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Total Storage
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                {stats.totalTanks}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Storage Tanks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Terminal Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any terminal to explore its capabilities, services, and specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {terminals.map((terminal) => (
              <Card
                key={terminal.id}
                className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageMap[terminal.image]}
                    alt={terminal.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {terminal.isHeadquarters && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Headquarters
                    </Badge>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-display font-bold text-white mb-1">
                      {terminal.name}
                    </h3>
                    <p className="text-white/80 text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {terminal.city}, {terminal.state}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 text-sm">
                    {terminal.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          {terminal.storageCapacity}
                        </div>
                        <div className="text-xs text-muted-foreground">Storage</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          {terminal.storageTanks}
                        </div>
                        <div className="text-xs text-muted-foreground">Tanks</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {terminal.products.slice(0, 3).map((product) => (
                      <Badge key={product} variant="secondary" className="text-xs">
                        {product}
                      </Badge>
                    ))}
                    {terminal.products.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{terminal.products.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Button asChild className="w-full group/btn">
                    <Link to={`/terminals/${terminal.slug}`}>
                      View Terminal Details
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-texas-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Leverage Our Terminal Network?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our strategic terminal locations can 
            optimize your supply chain operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-secondary hover:bg-white/90 border-0">
              <a href="tel:+13612780604">
                <Phone className="w-5 h-5 mr-2" />
                Call (361) 278-0604
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terminals;
