import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isPOSPage = location.pathname === "/pos";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  const posLinks = [
    { href: "#features", label: "Features" },
    { href: "#benefits", label: "Benefits" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#support", label: "Support" },
  ];

  const links = isPOSPage ? posLinks : mainLinks;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-soft" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
              <span className="text-primary-foreground font-bold text-xl">X</span>
            </div>
            <span className="font-bold text-xl text-foreground">
              {isPOSPage ? "POSXander" : "XANTECHS"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {isPOSPage ? (
              <>
                <Link to="/">
                  <Button variant="ghost" className="hover:bg-accent">Back to XANTECHS</Button>
                </Link>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gradient-primary shadow-soft hover:shadow-glow transition-shadow">
                    Get on Google Play
                  </Button>
                </a>
              </>
            ) : (
              <>
                <Link to="/pos">
                  <Button variant="outline" className="border-2 hover:border-primary hover:bg-accent">
                    View POSXander
                  </Button>
                </Link>
                <a href="#contact">
                  <Button className="gradient-primary shadow-soft hover:shadow-glow transition-shadow">
                    Start a Project
                  </Button>
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-lg",
            isOpen ? "max-h-[400px] pb-4 border-b border-border" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary hover:bg-accent transition-colors font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              {isPOSPage ? (
                <>
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">Back to XANTECHS</Button>
                  </Link>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full gradient-primary">Get on Google Play</Button>
                  </a>
                </>
              ) : (
                <>
                  <Link to="/pos" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">View POSXander</Button>
                  </Link>
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full gradient-primary">Start a Project</Button>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
