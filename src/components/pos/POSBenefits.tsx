import { Check, TrendingUp, Clock, DollarSign, Shield, Smartphone } from "lucide-react";

const POSBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Sales",
      description: "Faster checkouts mean more customers served and higher daily revenue."
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate inventory tracking and reporting to focus on what matters."
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Eliminate manual errors and prevent stock discrepancies."
    },
    {
      icon: Shield,
      title: "Secure Data",
      description: "Bank-level encryption keeps your business data protected."
    },
    {
      icon: Smartphone,
      title: "Works Anywhere",
      description: "Use on any Android device – tablets, phones, or dedicated POS hardware."
    }
  ];

  const highlights = [
    "No expensive hardware required",
    "Free updates and improvements",
    "Cloud backup included",
    "Multi-store support",
    "24/7 customer support",
    "Easy data migration"
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">Benefits</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Why Retailers Love POSXander
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Join thousands of retailers who have transformed their businesses with POSXander. 
                Here's what makes us different.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-soft transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default POSBenefits;
