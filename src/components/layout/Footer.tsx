import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--gradient-tech)" }}>
      {/* Circuit pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(217 91% 60% / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(217 91% 60% / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-xl">X</span>
              </div>
              <span className="font-bold text-xl text-white">XANTECHS</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              We build web apps, software, websites, and landing pages that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Landing Pages
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/60 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <Link to="/pos" className="text-white/60 hover:text-primary transition-colors text-sm">
                  POSXander
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>hello@xantechs.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Remote-first team<br />Available worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} XANTECHS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
