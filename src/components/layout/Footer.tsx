import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Building2, Star, Flag, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { terminals } from "@/data/terminals";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Star className="absolute top-10 left-20 w-16 h-16 fill-current" />
        <Star className="absolute top-1/3 right-10 w-12 h-12 fill-current" />
        <Star className="absolute bottom-1/4 left-1/3 w-10 h-10 fill-current" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <img src={logo} alt="West Texas Sunrise Logistics" className="h-20 w-auto" />
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Global bulk liquid storage, terminal operations, and vessel chartering services across the Americas and Europe. Headquartered in West Texas with worldwide reach.
            </p>
            
            {/* Global Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-secondary-foreground">Texas Headquarters • Global Operations</span>
              <Globe className="w-4 h-4 text-primary" />
            </div>
            
            <div className="pt-4 border-t border-secondary-foreground/20">
              <p className="text-xs text-secondary-foreground/60">
                ISO 9001:2015 | ISO 14001:2018 | ISPS Code Compliant
              </p>
            </div>
          </div>

{/* Quick Links */}
          <div>
            <h4 className="font-display text-lg uppercase tracking-wider mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link>
              <Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services</Link>
              <Link to="/terminals" className="text-secondary-foreground/80 hover:text-primary transition-colors">Terminals</Link>
              <Link to="/faq" className="text-secondary-foreground/80 hover:text-primary transition-colors">FAQ</Link>
              <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Terminals */}
          <div>
            <h4 className="font-display text-lg uppercase tracking-wider mb-6">
              <Link to="/terminals" className="hover:text-primary transition-colors flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Terminals
              </Link>
            </h4>
            <nav className="flex flex-col gap-3">
              {terminals.map((terminal) => (
                <Link 
                  key={terminal.id}
                  to={`/terminals/${terminal.slug}`} 
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {terminal.city}, {terminal.country === "USA" ? terminal.state : terminal.country}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg uppercase tracking-wider mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>West Texas Sunrise Logistics LLC</p>
                  <p>Seagraves, TX 79359</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+13612780604" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  (361) 278-0604
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@wts-log.com" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  info@wts-log.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* American Flag Colors Bar */}
      <div className="flex h-1">
        <div className="flex-1 bg-[hsl(0,70%,45%)]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[hsl(215,70%,35%)]"></div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20 bg-secondary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <p className="text-xs text-secondary-foreground/60">
                © {new Date().getFullYear()} West Texas Sunrise Logistics LLC. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-secondary-foreground/60 hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
