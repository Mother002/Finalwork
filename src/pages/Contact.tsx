import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "West Texas Sunrise Logistics LLC\nSeagraves, TX 79359",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(361) 278-0604",
    href: "tel:+13612780604",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@wts-log.com",
    href: "mailto:info@wts-log.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "24/7 Operations\nAlways Available",
  },
];

const serviceInterests = [
  "Bulk Liquid Storage",
  "Terminal Services",
  "Vessel Chartering",
  "Transloading Services",
  "Chemical Handling",
  "Pipeline Services",
  "Blending Operations",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "bbf778aa-beef-4fea-9999-8f9189c5014f",
          to: "info@wts-log.com",
          from_name: "WTS Logistics Website",
          subject: `New Inquiry from ${formData.name} - ${formData.service || "General"}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          service_interest: formData.service || "Not specified",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
          {/* Texas Star Decorations */}
          <Star className="absolute top-20 right-10 w-8 h-8 text-primary/20 fill-primary/10" />
          <Star className="absolute bottom-10 left-20 w-6 h-6 text-primary/20 fill-primary/10" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4 animate-fade-in">
                <Star className="w-4 h-4 fill-current" />
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6 animate-fade-in-up">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-secondary-foreground/80 animate-fade-in-up delay-100">
                Ready to store or ship? Have questions? Our 24/7 operations team is here to help with all your bulk liquid storage and terminal needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 animate-fade-in-up">
                <h2 className="font-display text-2xl mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-sunrise flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground whitespace-pre-line">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* DOT Info */}
                <div className="mt-12 p-6 bg-muted rounded-xl">
                  <h3 className="font-display text-lg mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    Operating Authority
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">USDOT:</span>{" "}
                      <span className="font-medium">3287128</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">MC:</span>{" "}
                      <span className="font-medium">1040267</span>
                    </p>
                  </div>
                </div>

                {/* Texas Pride Badge */}
                <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <p className="text-sm text-center font-medium flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    Proudly Serving America from Texas
                    <Star className="w-4 h-4 text-primary fill-primary" />
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 animate-slide-in-right">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
                  <h2 className="font-display text-2xl mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service...</option>
                        {serviceInterests.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your shipping needs..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl mb-2">Our Location</h2>
              <p className="text-muted-foreground">Seagraves, Texas - Heart of West Texas</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26593.15!2d-102.58!3d32.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fb47e74d891f1d%3A0x8e5d5e5a5e5e5e5e!2sSeagraves%2C%20TX%2079359!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="West Texas Sunrise Logistics Location"
              />
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-sm font-medium uppercase tracking-wider text-primary">From the Lone Star State</span>
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">Our Service Areas</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Headquartered in Seagraves, Texas, our terminal network spans the Americas and Europe.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {["Texas, USA", "Netherlands", "Brazil", "Colombia", "Panama", "Canada", "Mexico", "Global Reach"].map(
                  (area) => (
                    <div
                      key={area}
                      className="bg-card px-4 py-3 rounded-lg text-center border border-border flex items-center justify-center gap-2"
                    >
                      {area === "Texas, USA" && <Star className="w-4 h-4 text-primary fill-primary" />}
                      {area}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;