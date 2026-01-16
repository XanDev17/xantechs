import { Check, ArrowRight, Lightbulb, PenTool, Rocket as RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBeams from "@/components/ui/AnimatedBeams";

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

  const process = [
    {
      step: 1,
      icon: Lightbulb,
      title: "Discovery",
      description: "Understand your goals, requirements, and vision"
    },
    {
      step: 2,
      icon: PenTool,
      title: "Design & Develop",
      description: "Create and build your custom solution"
    },
    {
      step: 3,
      icon: RocketIcon,
      title: "Launch & Support",
      description: "Deploy, monitor, and continuously improve"
    }
  ];

  return (
    <section id="why-us" className="relative py-24 bg-background overflow-hidden">
      <AnimatedBeams className="opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Process Cards */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-3xl blur-2xl" />
              
              <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-card">
                <div className="space-y-4">
                  {process.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 md:p-5 rounded-xl bg-accent/50 hover:bg-accent transition-colors duration-300 border border-transparent hover:border-primary/20"
                    >
                      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-glow group-hover:scale-105 transition-transform duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step {item.step}</span>
                        </div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connection lines */}
                <div className="absolute left-[3.25rem] top-[5.5rem] bottom-[5.5rem] w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 hidden md:block" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">Why Choose XANTECHS</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Your Partner in{" "}
                <span className="text-gradient">Digital Success</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We've helped startups, agencies, and enterprises build successful digital 
                products. Here's why clients choose to work with us.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-glow transition-shadow duration-300">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#contact">
              <Button size="lg" className="gradient-primary shadow-glow group h-12 px-8">
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
