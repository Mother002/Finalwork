import { Link } from "react-router-dom";
import { Database, Beaker, ArrowLeftRight, Ship, Warehouse, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Database,
    title: "Bulk Liquid Storage",
    description: "State-of-the-art tank farms with over 5.8 million cubic meters capacity for petroleum, chemicals, and specialty liquids across 3 continents.",
    link: "/terminals",
    featured: true,
  },
  {
    icon: Beaker,
    title: "Chemical Handling",
    description: "Specialized storage and handling for industrial chemicals, solvents, and specialty products with IMO-certified facilities.",
    link: "/services#chemical-handling",
  },
  {
    icon: Ship,
    title: "Vessel Chartering",
    description: "Comprehensive maritime solutions including time charters, voyage charters, and spot contracts for global bulk liquid transport.",
    link: "/services#vessel-chartering",
  },
  {
    icon: ArrowLeftRight,
    title: "Transloading Services",
    description: "Seamless cargo transfer between ship, rail, and truck for optimized supply chain efficiency at our terminal locations.",
    link: "/services#transloading",
  },
  {
    icon: Warehouse,
    title: "Terminal Services",
    description: "Full-service terminal operations including blending, heating, inventory management, and 24/7 access worldwide.",
    link: "/services#bulk-storage",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Storage, Handling & Chartering
          </h2>
          <p className="text-muted-foreground text-lg">
            From terminal storage to vessel chartering and transloading, we provide comprehensive solutions for your bulk liquid logistics needs.
          </p>
        </div>

        {/* Featured Service */}
        <div className="mb-12">
          <Card className="border-primary/30 bg-gradient-to-br from-card to-primary/5 shadow-elevated">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-sunrise flex items-center justify-center mx-auto mb-6">
                <Database className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="font-display text-3xl">Bulk Liquid Storage</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-2xl mx-auto">
              <CardDescription className="text-muted-foreground text-lg mb-6">
                Our international network of 9 terminals across the Americas and Europe provides over 5.8 million cubic meters of storage capacity. 
                We handle crude oil, refined products, petrochemicals, and specialty liquids with industry-leading 
                safety standards and certifications.
              </CardDescription>
              <Button size="lg" asChild>
                <Link to="/terminals">
                  Explore Our Terminals
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.filter(s => !s.featured).map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-sunrise flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="font-display text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {service.description}
                </CardDescription>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
