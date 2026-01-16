import { Code, Palette, Rocket, Users, Zap, Shield } from "lucide-react";
import CircuitBackground from "@/components/ui/CircuitBackground";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "We write maintainable, scalable code that stands the test of time and grows with your business."
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Every project features stunning UI/UX that delights users and strengthens your brand."
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile methodology ensures we ship quality products on time, every time."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work closely with you throughout the entire process, keeping you informed at every step."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized applications that load fast and provide seamless user experiences."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Security-first approach with industry best practices baked into every solution."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      <CircuitBackground variant="light" className="opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">About XANTECHS</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Engineered for{" "}
                <span className="text-gradient">Scalability & Precision</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                XANTECHS is a software development agency specializing in building modern 
                web applications, custom software solutions, stunning websites, and 
                high-converting landing pages.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Refining the intersection of digital innovation and robust architecture, 
                we transform audacious concepts into high-impact digital reality. From 
                bespoke web ecosystems to enterprise solutions, we architect the engines 
                of business growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center p-4 rounded-xl bg-accent/50 border border-border">
                <p className="text-3xl md:text-4xl font-bold text-gradient">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-accent/50 border border-border">
                <p className="text-3xl md:text-4xl font-bold text-gradient">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-accent/50 border border-border">
                <p className="text-3xl md:text-4xl font-bold text-gradient">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-5 md:p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
