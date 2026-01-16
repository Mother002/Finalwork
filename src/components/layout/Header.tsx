import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Terminals", path: "/terminals" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* American Colors Top Bar */}
      <div className="flex h-1">
        <div className="flex-1 bg-[hsl(0,70%,45%)]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[hsl(215,70%,35%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="West Texas Sunrise Logistics" className="h-16 w-auto transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                  location.pathname === link.path ||
                  (link.path !== "/" && location.pathname.startsWith(link.path))
                    ? "text-primary font-semibold"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="w-3 h-3 text-primary fill-primary" />
              <span>Texas Proud</span>
            </div>
            <a href="tel:+13612780604" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (361) 278-0604
            </a>
            <Button asChild className="hover-lift">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-display text-lg uppercase tracking-wider py-2 transition-colors hover:text-primary ${
                    location.pathname === link.path ||
                    (link.path !== "/" && location.pathname.startsWith(link.path))
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
