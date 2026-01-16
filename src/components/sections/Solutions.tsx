import { Globe, Smartphone, Layout, Rocket, Database, Wrench, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedBeams from "@/components/ui/AnimatedBeams";

const Solutions = () => {
  const services = [
    {
      icon: Globe,
      title: "High-Performance Web Applications",
      description: "SEO-optimized, mobile-responsive web apps built with cutting-edge technologies for maximum performance and user engagement.",
      features: ["React & Next.js", "Backend APIs", "Database Design"]
    },
    {
      icon: Smartphone,
      title: "Custom Software Development",
      description: "Tailored software applications designed to meet your unique business requirements and automate workflows.",
      features: ["Business Logic", "Integrations", "Automation"]
    },
    {
      icon: Layout,
      title: "Modern Websites",
      description: "Professional, responsive websites that showcase your brand and convert visitors into loyal customers.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: Rocket,
      title: "Landing Pages",
      description: "High-converting landing pages designed to maximize your marketing ROI and capture qualified leads.",
      features: ["Conversion Focused", "A/B Testing", "Analytics Ready"]
    },
    {
      icon: Database,
      title: "SaaS Products",
      description: "Build your software-as-a-service product from concept to launch with scalable, cloud-native architecture.",
      features: ["Multi-tenant", "Subscription Billing", "User Management"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and improvements to keep your digital products running smoothly 24/7.",
      features: ["Bug Fixes", "Feature Updates", "Performance Tuning"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-pattern" />
      <AnimatedBeams className="opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end software and web development services tailored to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative bg-card/80 backdrop-blur-sm hover:shadow-card transition-all duration-500 border-border hover:border-primary/30 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:gradient-primary group-hover:shadow-glow transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
