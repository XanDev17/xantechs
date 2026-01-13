import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted by 500+ Retailers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">XANTECHS:</span>{" "}
              <span className="text-gradient">Smart Retail</span>{" "}
              <span className="text-foreground">Technology Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Empowering businesses with cutting-edge retail software. From point-of-sale 
              to inventory management, we have everything you need to grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#solutions">
                <Button size="lg" className="gradient-primary w-full sm:w-auto group">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/pos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Play className="mr-2 w-4 h-4" />
                  View POSXander
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Active Clients</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl shadow-card overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-4xl">X</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Dashboard Preview</h3>
                  <p className="text-muted-foreground">Real-time analytics at your fingertips</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
