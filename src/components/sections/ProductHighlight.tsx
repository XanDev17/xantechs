import { Link } from "react-router-dom";
import { Smartphone, ArrowRight, Star, Download, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductHighlight = () => {
  return (
    <section className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium">
              <Smartphone className="w-4 h-4" />
              Featured Product
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                POSXander – Smart POS for Modern Retail
              </h2>
              <p className="text-background/70 text-lg leading-relaxed">
                Our flagship Android POS application designed specifically for retailers who demand 
                speed, reliability, and powerful features. Available now on Google Play Store.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Lightning Fast</p>
                  <p className="text-sm text-background/60">Sub-second transactions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Secure</p>
                  <p className="text-sm text-background/60">Bank-level encryption</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">10K+ Downloads</p>
                  <p className="text-sm text-background/60">Growing community</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">4.8 Rating</p>
                  <p className="text-sm text-background/60">Highly rated</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/pos">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-background/30 text-background hover:bg-background/10">
                  Get on Google Play
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 mx-auto max-w-[280px]">
              {/* Phone Frame */}
              <div className="rounded-[3rem] bg-gradient-to-br from-background/20 to-background/5 p-3 backdrop-blur-sm border border-background/20">
                <div className="rounded-[2.5rem] bg-background/10 overflow-hidden aspect-[9/19]">
                  <div className="h-full w-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-foreground">PX</span>
                      </div>
                      <p className="text-lg font-semibold">POSXander</p>
                      <p className="text-sm text-background/70 mt-1">Smart Retail POS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
