import { Download, Settings, ShoppingBag, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSHowItWorks = () => {
  const steps = [
    {
      icon: Download,
      step: 1,
      title: "Install",
      description: "Download POSXander from Google Play Store and install on your Android device."
    },
    {
      icon: Settings,
      step: 2,
      title: "Setup",
      description: "Create your account, add products, and configure your business settings."
    },
    {
      icon: ShoppingBag,
      step: 3,
      title: "Sell",
      description: "Start processing sales immediately with our intuitive checkout interface."
    },
    {
      icon: BarChart3,
      step: 4,
      title: "Manage",
      description: "Track inventory, view reports, and grow your business with powerful insights."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Started in Minutes
          </h2>
          <p className="text-background/70 text-lg">
            POSXander is designed for simplicity. Here's how easy it is to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-background/20">
                  <ArrowRight className="absolute right-0 -top-2.5 w-5 h-5 text-primary" />
                </div>
              )}
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-background/70 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.xantechs.pos_store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <Download className="mr-2 w-5 h-5" />
              Download Now - It's Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-background/50 text-sm mt-4">
            Free to download. Premium features available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default POSHowItWorks;
