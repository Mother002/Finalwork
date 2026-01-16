import { HelpCircle, Droplets, Building2, Truck, Shield, MapPin, FileCheck, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    title: "Bulk Liquid Storage",
    icon: Droplets,
    questions: [
      {
        q: "What is bulk liquid storage?",
        a: "Bulk liquid storage refers to the large-scale containment of liquid products in specialized tanks and terminals. Our facilities are designed to safely store petroleum products, chemicals, refined fuels, and other liquids in quantities ranging from thousands to millions of barrels.",
      },
      {
        q: "What types of liquids do you store?",
        a: "We store a wide range of products including crude oil, refined petroleum products (gasoline, diesel, jet fuel), petrochemicals, industrial chemicals, biodiesel, ethanol, lubricants, and specialty liquids. Each terminal is equipped with appropriate tank specifications for different product types.",
      },
      {
        q: "What is your total storage capacity?",
        a: "Our nationwide network of 12 terminals provides over 7.7 million cubic meters of total storage capacity across 1,600+ tanks. This includes heated tanks, insulated tanks, and specialty storage for various product requirements.",
      },
      {
        q: "How do you ensure product quality during storage?",
        a: "We maintain strict quality control protocols including regular testing, tank cleaning programs, segregated storage for different product grades, nitrogen blanketing where required, and continuous monitoring of temperature and product specifications.",
      },
    ],
  },
  {
    title: "Terminal Services",
    icon: Building2,
    questions: [
      {
        q: "What services do your terminals offer?",
        a: "Our terminals provide comprehensive services including product receipt and delivery, blending operations, heating and temperature control, inventory management, truck and rail loading/unloading, pipeline connections, and marine terminal access at select locations.",
      },
      {
        q: "Do you offer transloading services?",
        a: "Yes, many of our terminals offer transloading capabilities to transfer products between different transportation modes—truck to rail, rail to truck, or barge to truck. This provides flexibility in your supply chain logistics.",
      },
      {
        q: "Can I access my inventory 24/7?",
        a: "Most of our terminals operate 24/7 with round-the-clock access for product loading and unloading. Specific operating hours may vary by location—contact our team for details on your preferred terminal.",
      },
    ],
  },
  {
    title: "Transportation & Logistics",
    icon: Truck,
    questions: [
      {
        q: "Do you provide transportation services?",
        a: "Yes, in addition to storage, we offer comprehensive liquid transport services using our fleet of specialized tanker trucks. We can move products between terminals, refineries, and customer locations across all 48 contiguous states.",
      },
      {
        q: "What transportation modes do your terminals support?",
        a: "Our terminals are strategically located to support multiple transportation modes including truck, rail, pipeline, and marine (at select coastal locations). This multi-modal capability provides maximum flexibility for your logistics needs.",
      },
      {
        q: "What areas do you serve?",
        a: "We serve all 48 contiguous states from our network of 12 terminals strategically located across the United States, including major hubs in Texas, the Gulf Coast, and key logistics corridors nationwide.",
      },
    ],
  },
  {
    title: "Safety & Compliance",
    icon: Shield,
    questions: [
      {
        q: "What certifications do your terminals have?",
        a: "Our terminals maintain industry-leading certifications including ISO 9001, ISO 14001, OHSAS 18001, API standards compliance, and EPA/OSHA regulatory compliance. Specific certifications vary by terminal location.",
      },
      {
        q: "How do you handle hazardous materials?",
        a: "We are fully licensed and equipped to handle hazardous materials in accordance with DOT, EPA, and OSHA regulations. Our personnel are trained in hazmat handling, and our facilities include appropriate containment, spill response, and emergency systems.",
      },
      {
        q: "What safety measures are in place?",
        a: "Our terminals feature comprehensive safety systems including fire suppression, vapor recovery, secondary containment, 24/7 monitoring, regular inspections, emergency response teams, and strict access control protocols.",
      },
    ],
  },
  {
    title: "Getting Started",
    icon: FileCheck,
    questions: [
      {
        q: "How do I request a quote for storage services?",
        a: "You can request a quote by visiting our Contact page, calling us directly, or emailing our team. Please provide details about the type of product, estimated volumes, preferred terminal location, and desired services for an accurate quote.",
      },
      {
        q: "What are your contract terms?",
        a: "We offer flexible contract arrangements from short-term spot storage to long-term dedicated capacity agreements. Terms are customized based on your specific needs, volumes, and service requirements.",
      },
      {
        q: "How quickly can I start using your terminals?",
        a: "Onboarding timelines depend on your specific requirements, product types, and regulatory approvals needed. For standard products at terminals with available capacity, we can often have you operational within 1-2 weeks.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4 animate-fade-in">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6 animate-fade-in-up">
                How Can We <span className="text-primary">Help</span>?
              </h1>
              <p className="text-xl text-secondary-foreground/80 animate-fade-in-up delay-100">
                Find answers to common questions about our bulk liquid storage terminals, services, and capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.title} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`${category.title}-${index}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our team is ready to help you find the right storage solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/terminals">
                    <MapPin className="w-4 h-4 mr-2" />
                    Explore Terminals
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;