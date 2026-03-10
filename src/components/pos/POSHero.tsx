import { ArrowRight, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import splashScreen from "@/assets/pos/splash_screen.png";

const POSHero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                4.8 Rating on Google Play
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">POS System</span>{" "}
              <span className="text-foreground">– Retail & Billing</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A complete offline point-of-sale solution that replaces traditional cash registers. 
              Manage sales, inventory, and reporting — no internet required. Trusted by retailers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.xantechs.pos_store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gradient-primary w-full sm:w-auto group">
                  <Download className="mr-2 w-5 h-5" />
                  Get it on Google Play
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Features
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">4.8</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center">
            {/* Phone Mockup */}
            <div className="relative z-10 mx-auto max-w-[320px]">
              <div className="rounded-[3rem] bg-foreground p-3 shadow-2xl">
                <div className="rounded-[2.5rem] overflow-hidden aspect-[9/19] border-4 border-foreground/10">
                  <img 
                    src={splashScreen} 
                    alt="POS System: Retail & Billing - Splash Screen" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-20 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default POSHero;
