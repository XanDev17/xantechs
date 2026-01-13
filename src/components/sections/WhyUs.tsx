import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  const benefits = [
    "99.9% uptime guarantee with enterprise-grade reliability",
    "Seamless integration with existing business systems",
    "Dedicated 24/7 customer support team",
    "Regular updates with new features and improvements",
    "Scalable solutions that grow with your business",
    "Industry-leading security and data protection",
    "Intuitive interface requiring minimal training",
    "Transparent pricing with no hidden fees"
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
                        <p className="font-semibold text-foreground">Easy Setup</p>
                        <p className="text-sm text-muted-foreground">Get started in minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Configure</p>
                        <p className="text-sm text-muted-foreground">Customize to your needs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Start Selling</p>
                        <p className="text-sm text-muted-foreground">Watch your business grow</p>
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
                Built for Reliability, Designed for Growth
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We've helped hundreds of businesses streamline their operations and increase 
                revenue. Here's why leading retailers choose XANTECHS.
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
                Start Your Free Trial
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
