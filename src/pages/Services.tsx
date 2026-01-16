import { Link } from "react-router-dom";
import { Database, Droplets, MapPin, Warehouse, ArrowLeftRight, CheckCircle, ArrowRight, Building2, Star, Flag, Ship, Beaker, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { getTotalStats } from "@/data/terminals";
import vesselCharteringImage from "@/assets/vessel-chartering.jpg";
import warehouseImage from "@/assets/warehouse.jpg";
import oilStorageImage from "@/assets/oil-storage.jpg";
import transloadingImage from "@/assets/transloading.jpg";
import terminalImage from "@/assets/terminal-port.jpg";
import liquidBulkImage from "@/assets/liquid-bulk-terminal.jpg";

const services = [
  {
    id: "bulk-storage",
    icon: Database,
    title: "Bulk Liquid Storage",
    subtitle: "World-Class Terminal Capacity",
    description: "Our international network of terminals provides secure, compliant storage for petroleum products, petrochemicals, and specialty liquids. With over 5.8 million cubic meters of capacity across three continents, we offer the scale and flexibility your operations demand.",
    features: [
      "Heated and insulated tank options",
      "Crude oil and refined products",
      "Petrochemical and specialty chemicals",
      "Vegetable oils and biofuels",
      "24/7 inventory management",
      "Blending and quality control",
    ],
    image: oilStorageImage,
    idealFor: "Oil traders, refineries, petrochemical companies, and commodity merchants requiring secure, large-scale storage with flexible throughput options.",
  },
  {
    id: "chemical-handling",
    icon: Beaker,
    title: "Chemical Handling & Storage",
    subtitle: "Specialized Chemical Solutions",
    description: "Our chemical-grade terminals provide specialized handling for industrial and specialty chemicals. With IMO-certified equipment, trained personnel, and strict safety protocols, we ensure your chemicals are stored and handled to the highest industry standards.",
    features: [
      "IMO II/III chemical capabilities",
      "Stainless steel and lined tanks",
      "Nitrogen blanketing systems",
      "Temperature-controlled storage",
      "Drumming and packaging services",
      "REACH and GHS compliant handling",
    ],
    image: liquidBulkImage,
    idealFor: "Chemical manufacturers, distributors, and traders requiring specialized storage and handling for industrial chemicals, solvents, and specialty products.",
  },
  {
    id: "vessel-chartering",
    icon: Ship,
    title: "Vessel Chartering",
    subtitle: "Global Maritime Solutions",
    description: "Our vessel chartering division connects your cargo with the right maritime transport. From product tankers to chemical carriers, we arrange time charters, voyage charters, and spot contracts to move your bulk liquids efficiently across global shipping lanes.",
    features: [
      "Product tanker chartering",
      "Chemical tanker arrangements",
      "Time charter contracts",
      "Voyage charter solutions",
      "Spot market access",
      "Fleet management support",
    ],
    image: vesselCharteringImage,
    idealFor: "Trading companies, refineries, and chemical producers requiring flexible maritime transport solutions for bulk liquid cargoes worldwide.",
  },
  {
    id: "transloading",
    icon: ArrowLeftRight,
    title: "Transloading Services",
    subtitle: "Seamless Cargo Transfer Solutions",
    description: "Our transloading services provide efficient cargo transfer between different transportation modes. Whether you need ship-to-rail, rail-to-truck, or any intermodal transfer, our terminal network and experienced teams ensure smooth, damage-free transitions.",
    features: [
      "Ship-to-shore operations",
      "Rail-to-truck transloading",
      "Barge loading and unloading",
      "Pipeline connections",
      "Cross-docking operations",
      "Quality inspection during transfer",
    ],
    image: transloadingImage,
    idealFor: "Importers, exporters, and traders requiring efficient cargo transfer between maritime, rail, and road transport at strategic terminal locations.",
  },
  {
    id: "haulage",
    icon: Truck,
    title: "Haulage & Distribution",
    subtitle: "Regional Transport Solutions",
    description: "Complement your storage with our regional haulage and distribution services. Our fleet and carrier network provides reliable transport to and from our terminals, ensuring seamless last-mile delivery and supply chain continuity.",
    features: [
      "Terminal-to-customer delivery",
      "Tanker truck transport",
      "Regional distribution",
      "Just-in-time delivery",
      "GPS tracking and monitoring",
      "Hazmat certified transport",
    ],
    image: warehouseImage,
    idealFor: "Companies requiring reliable ground transport to complement terminal storage, including delivery to refineries, distribution centers, and end customers.",
  },
];

const Services = () => {
  const stats = getTotalStats();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-navy relative overflow-hidden">
          {/* Texas Stars Background */}
          <Star className="absolute top-20 right-10 w-12 h-12 text-primary/10 fill-primary/5 animate-pulse" />
          <Star className="absolute bottom-10 left-20 w-8 h-8 text-primary/10 fill-primary/5" />
          <Star className="absolute top-1/2 right-1/4 w-6 h-6 text-primary/10 fill-primary/5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4 animate-fade-in">
                <Star className="w-4 h-4 fill-current" />
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6 animate-fade-in-up">
                Storage, Handling & <span className="text-primary">Chartering</span>
              </h1>
              <p className="text-xl text-secondary-foreground/80 animate-fade-in-up delay-100">
                From bulk liquid storage to vessel chartering and transloading, we provide comprehensive solutions for your global commodity logistics needs.
              </p>
              
              {/* Global Badge */}
              <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 animate-fade-in-up delay-200">
                <Flag className="w-5 h-5 text-primary" />
                <span className="text-secondary-foreground font-medium">Americas • Europe • Global Shipping</span>
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${index % 2 === 1 ? "bg-muted" : "bg-background"}`}
          >
            <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in-up`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-sunrise flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-primary font-medium uppercase tracking-wider text-sm">
                      {service.subtitle}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl mb-6">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-muted rounded-lg mb-6">
                    <p className="text-sm">
                      <strong className="text-foreground">Ideal for:</strong>{" "}
                      <span className="text-muted-foreground">{service.idealFor}</span>
                    </p>
                  </div>
                  <Button asChild>
                    <Link to="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} animate-slide-in-right`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-elevated w-full h-[400px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Terminal Network Section */}
        <section className="py-24 bg-texas-navy relative overflow-hidden">
          {/* Background Stars */}
          <div className="absolute inset-0 opacity-10">
            <Star className="absolute top-10 left-10 w-20 h-20 fill-current text-white" />
            <Star className="absolute bottom-20 right-20 w-16 h-16 fill-current text-white" />
            <Star className="absolute top-1/3 right-1/4 w-12 h-12 fill-current text-white" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="text-primary font-display uppercase tracking-wider text-sm">
                    Our Infrastructure
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  International Terminal Network
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Our strategically located terminals across the Americas and Europe provide bulk liquid storage and distribution capabilities 
                  for global trade. From Rotterdam to Santos, Houston to Panama, we've got your storage needs covered.
                </p>
                
                {/* Terminal Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-display text-2xl text-white">{stats.totalTerminals}</p>
                    <p className="text-white/70 text-sm">Terminals</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-display text-2xl text-white">{stats.totalCapacity}</p>
                    <p className="text-white/70 text-sm">Capacity</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Warehouse className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-display text-2xl text-white">{stats.totalTanks}</p>
                    <p className="text-white/70 text-sm">Tanks</p>
                  </div>
                </div>
                
                <Button size="lg" asChild className="group">
                  <Link to="/terminals">
                    Explore All Terminals
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-slide-in-right">
                <img 
                  src={terminalImage} 
                  alt="Terminal Network" 
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-sunrise rounded-xl p-6 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <Star className="w-8 h-8 text-white fill-white" />
                    <div>
                      <p className="font-display text-lg text-white">Texas Headquarters</p>
                      <p className="text-white/80 text-sm">Global Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* American Flag Colors Bar */}
          <div className="absolute bottom-0 left-0 right-0 flex h-2">
            <div className="flex-1 bg-[hsl(0,70%,45%)]"></div>
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-[hsl(215,70%,35%)]"></div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
