import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  const benefits = [
    "Modern tech stack with React, TypeScript, and Node.js",
    "Pixel-perfect designs that match your brand identity",
    "Clean, documented code for easy maintenance",
    "Agile development with regular progress updates",
    "Scalable architecture that grows with your business",
    "End-to-end development from concept to deployment",
    "Dedicated support even after project delivery",
    "Transparent pricing with no hidden costs"
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <div className="aspect-square bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8">
                <div className="h-full rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Discovery</p>
                        <p className="text-sm text-muted-foreground">Understand your goals</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Design & Develop</p>
                        <p className="text-sm text-muted-foreground">Build your solution</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Launch & Support</p>
                        <p className="text-sm text-muted-foreground">Deploy and maintain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">Why Choose XANTECHS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Your Partner in Digital Success
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We've helped startups, agencies, and enterprises build successful digital 
                products. Here's why clients choose to work with us.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <a href="#contact">
              <Button size="lg" className="gradient-primary group">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
