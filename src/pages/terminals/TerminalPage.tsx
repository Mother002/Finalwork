import { useParams, Link, Navigate } from "react-router-dom";
import { 
  MapPin, Phone, Database, Building2, CheckCircle, ArrowRight,
  Anchor, GitBranch, Globe, Truck, Shield, Ship, Leaf, ArrowLeftRight,
  Lock, Map, Waves, Container, Wheat, CloudRain, Droplet, Timer,
  Droplets, Navigation, TrendingUp, Beaker, BarChart, Clock,
  Building, GraduationCap, Wrench
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTerminalBySlug } from "@/data/terminals";
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

const iconMap: Record<string, React.ElementType> = {
  Anchor, GitBranch, Database, Globe, Truck, Shield, Ship, Leaf,
  ArrowLeftRight, Lock, Map, Waves, Container, Wheat, CloudRain,
  Droplet, Timer, Droplets, Navigation, TrendingUp, Beaker, BarChart,
  Clock, Building, MapPin, GraduationCap, Wrench,
};

const TerminalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const terminal = getTerminalBySlug(slug || "");

  if (!terminal) {
    return <Navigate to="/terminals" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageMap[terminal.image]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-texas-navy/95 via-texas-navy/85 to-texas-navy/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {terminal.isHeadquarters && (
              <Badge className="bg-primary text-primary-foreground mb-4 animate-fade-in">
                Corporate Headquarters
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 animate-fade-in-up">
              {terminal.name}
            </h1>
            <p className="text-2xl text-sunrise-400 font-display mb-4 animate-fade-in-up delay-100">
              {terminal.tagline}
            </p>
            <p className="text-xl text-white/80 flex items-center gap-2 mb-8 animate-fade-in-up delay-200">
              <MapPin className="w-5 h-5" />
              {terminal.location}, {terminal.city}, {terminal.state}, USA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Button size="lg" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" asChild className="bg-white text-secondary hover:bg-white/90 border-0">
                <a href="tel:+13612780604">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Overview - Facts & Figures */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-2">
              Terminal Overview
            </h2>
            <p className="text-muted-foreground">Facts & Figures</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                {terminal.storageCapacity}
              </div>
              <div className="text-sm text-muted-foreground">Storage Capacity</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                {terminal.storageTanks}
              </div>
              <div className="text-sm text-muted-foreground">Storage Tanks</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <div className="text-lg font-display font-bold text-foreground mb-1">
                Multi-Modal
              </div>
              <div className="text-sm text-muted-foreground">{terminal.accessModes}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                {terminal.certifications}
              </div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Handled */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">
              Products Handled
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {terminal.products.map((product) => (
              <Badge 
                key={product} 
                variant="outline" 
                className="text-base px-4 py-2 bg-primary/10 text-foreground border-primary/30 hover:bg-primary/20 transition-colors"
              >
                {product}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-display uppercase tracking-wider text-sm mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Terminal Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto stagger-children">
            {terminal.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Shield;
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-display uppercase tracking-wider text-sm mb-4 block">
              Quality Assurance
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Certifications & Standards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our terminal operates under the highest industry standards with internationally recognized certifications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {terminal.certificationsList.map((cert) => (
              <div 
                key={cert} 
                className="flex items-center gap-2 bg-background border border-border rounded-lg px-6 py-4"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-texas-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Partner with {terminal.name}?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your storage, logistics, and distribution needs.
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

export default TerminalPage;
