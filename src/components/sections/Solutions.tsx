import { Globe, Smartphone, Layout, Rocket, Database, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Full-stack web apps built with modern technologies. React, Node.js, databases, and cloud deployment.",
      features: ["React & Next.js", "Backend APIs", "Database Design"]
    },
    {
      icon: Smartphone,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your unique business requirements.",
      features: ["Business Logic", "Integrations", "Automation"]
    },
    {
      icon: Layout,
      title: "Websites",
      description: "Professional, responsive websites that showcase your brand and convert visitors into customers.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: Rocket,
      title: "Landing Pages",
      description: "High-converting landing pages designed to maximize your marketing ROI and capture leads.",
      features: ["Conversion Focused", "A/B Testing", "Analytics Ready"]
    },
    {
      icon: Database,
      title: "SaaS Products",
      description: "Build your software-as-a-service product from concept to launch with scalable architecture.",
      features: ["Multi-tenant", "Subscription Billing", "User Management"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and improvements to keep your digital products running smoothly.",
      features: ["Bug Fixes", "Feature Updates", "Performance Tuning"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What We Build
          </h2>
          <p className="text-muted-foreground text-lg">
            From simple landing pages to complex enterprise applications, we have the expertise to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card hover:shadow-card transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:gradient-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
