import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBeams from "@/components/ui/AnimatedBeams";
import CircuitBackground from "@/components/ui/CircuitBackground";

const Hero = () => {
  const highlights = [
    { label: "Custom Solutions", value: "Tailored" },
    { label: "Modern Stack", value: "React & More" },
    { label: "Expert Team", value: "Dedicated" },
    { label: "24/7 Support", value: "Always On" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <CircuitBackground variant="light" />
      <AnimatedBeams />
      
      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border shadow-soft animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Pioneering Digital Solutions Since 2020
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Logo Icon */}
          <div className="flex justify-center animate-float">
            <div className="w-20 h-20 rounded-2xl gradient-primary shadow-glow flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-4xl">X</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Engineering the Future with{" "}
              <span className="text-gradient">Digital Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming ambitious ideas into high-impact digital products. From custom web apps 
              to stunning landing pages, we architect the engines of business growth.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a href="#services">
              <Button size="lg" className="gradient-primary shadow-glow h-12 px-8 text-base group">
                Our Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#portfolio">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-2 hover:bg-accent">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Highlights Bar */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
              Why Choose XANTECHS?
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Banner */}
        <div className="mt-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 overflow-hidden">
            <div className="absolute inset-0 circuit-dots opacity-30" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">
                  Architected with a Next-Gen Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground text-sm font-medium">
                <span className="px-3 py-1 rounded-full bg-accent">React</span>
                <span className="px-3 py-1 rounded-full bg-accent">TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-accent">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-accent">Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
