import { Link } from "react-router-dom";
import { CheckCircle, Shield, Users, Award, Target, Heart, Star, Flag, Ship, Anchor, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import TexasPride from "@/components/sections/TexasPride";
import storyImage from "@/assets/oil-storage.jpg";
import terminalImage from "@/assets/terminal-port.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize the safety of our operations, personnel, and the communities we serve.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Consistent, dependable service is our commitment. We deliver on every promise.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your storage and logistics needs drive our solutions. We're partners in your success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in terminal operations, equipment, and service.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest communication and transparent operations build lasting relationships.",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2018 Environmental Management",
  "ISPS Code Compliant (International Ship & Port Facility Security)",
  "API Standards Certified",
  "CDI-T Terminal Inspection Program",
  "Port State Control Approved",
];

const vesselTypes = [
  { name: "Product Tankers", description: "Clean petroleum products, chemicals, vegetable oils" },
  { name: "Chemical Tankers", description: "IMO II/III classified specialty chemicals" },
  { name: "Crude Carriers", description: "Aframax, Suezmax, and VLCC capable berths" },
  { name: "LPG Carriers", description: "Pressurized and refrigerated gas transport" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
          {/* Texas Stars Background */}
          <Star className="absolute top-20 right-10 w-12 h-12 text-primary/10 fill-primary/5 animate-pulse" />
          <Star className="absolute bottom-10 left-20 w-8 h-8 text-primary/10 fill-primary/5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4 animate-fade-in">
                <Star className="w-4 h-4 fill-current" />
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6 animate-fade-in-up">
                Global Storage & Handling <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-xl text-secondary-foreground/80 animate-fade-in-up delay-100">
                West Texas Sunrise Logistics LLC is a leading bulk liquid storage and handling company with terminal operations across the Americas and Europe, supported by comprehensive vessel chartering services.
              </p>
              
              {/* Heritage Badge */}
              <div className="mt-8 inline-flex items-center gap-3 bg-texas-navy/80 backdrop-blur-sm rounded-full px-6 py-3 animate-fade-in-up delay-200">
                <Flag className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Texas Headquarters • Global Operations</span>
                <Globe className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="text-primary font-display uppercase tracking-wider text-sm">
                    Our Story
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl mb-6">
                  From West Texas to <span className="text-primary">Global Markets</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in the heart of West Texas, West Texas Sunrise Logistics LLC has grown from a regional terminal operator to an international bulk liquid storage and handling company with operations spanning three continents.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our strategic network of terminals across the Americas and Europe provides seamless storage, handling, and distribution solutions for petroleum products, petrochemicals, and specialty liquids. Combined with our vessel chartering capabilities, we offer end-to-end logistics for global trade.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we continue to expand our terminal footprint while maintaining the operational excellence and customer focus that define our Texas heritage. Every cubic meter we store reflects our commitment to quality.
                </p>
              </div>
              <div className="relative animate-slide-in-right">
                <img
                  src={storyImage}
                  alt="Our Terminal Operations"
                  className="rounded-2xl shadow-elevated w-full h-[400px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-sunrise rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-white" />
                    <span className="text-white font-display">Global Reach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vessel Chartering Section */}
        <section className="py-24 bg-texas-navy relative overflow-hidden">
          <Star className="absolute top-10 right-10 w-16 h-16 text-white/5 fill-white/5" />
          <Star className="absolute bottom-10 left-10 w-12 h-12 text-white/5 fill-white/5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-2 mb-4">
                  <Ship className="w-5 h-5 text-primary" />
                  <span className="text-primary font-display uppercase tracking-wider text-sm">
                    Vessel Chartering
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  Global Vessel Chartering Services
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Our vessel chartering division provides comprehensive maritime solutions to complement our terminal network. From spot voyages to time charters, we connect your cargo with the right vessel for efficient global transport.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {vesselTypes.map((vessel) => (
                    <div key={vessel.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-display text-white mb-1">{vessel.name}</h4>
                      <p className="text-white/70 text-sm">{vessel.description}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Anchor className="w-5 h-5 text-primary" />
                    <span>Time Charter</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Ship className="w-5 h-5 text-primary" />
                    <span>Voyage Charter</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Globe className="w-5 h-5 text-primary" />
                    <span>Spot Contracts</span>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-slide-in-right">
                <img
                  src={terminalImage}
                  alt="Vessel Chartering Operations"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-sunrise rounded-xl p-6 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <Ship className="w-8 h-8 text-white" />
                    <div>
                      <p className="font-display text-lg text-white">Fleet Access</p>
                      <p className="text-white/80 text-sm">Tankers & Chemical Carriers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-muted relative overflow-hidden">
          <Star className="absolute top-10 right-10 w-16 h-16 text-primary/5 fill-primary/5" />
          <Star className="absolute bottom-10 left-10 w-12 h-12 text-primary/5 fill-primary/5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <Database className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To provide world-class bulk liquid storage and handling solutions, connecting global markets through our international terminal network and vessel chartering services—delivering safety, reliability, and operational excellence in every operation.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-1 w-12 bg-[hsl(0,70%,45%)] rounded"></div>
                <Star className="w-4 h-4 text-primary fill-primary" />
                <div className="h-1 w-12 bg-[hsl(215,70%,35%)] rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide every decision we make and every terminal we operate.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-children">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6 animate-fade-in-up hover-lift">
                  <div className="w-16 h-16 rounded-full bg-gradient-sunrise flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground mb-6">
                  Safety & Compliance
                </h2>
                <p className="text-secondary-foreground/80 mb-8 leading-relaxed">
                  Safety is the foundation of our operations. We maintain rigorous compliance with international maritime, environmental, and safety regulations across all our terminal locations and vessel operations.
                </p>
                <div className="grid gap-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-secondary-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-texas-navy rounded-2xl p-8 text-center">
                <p className="font-display text-6xl md:text-7xl text-primary mb-4">99.7%</p>
                <p className="text-xl text-secondary-foreground mb-2">Operational Uptime</p>
                <p className="text-secondary-foreground/70 text-sm">
                  Industry-leading terminal availability across our network
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Texas Pride Section */}
        <TexasPride />

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
