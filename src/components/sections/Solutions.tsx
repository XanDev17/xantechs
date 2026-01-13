import { ShoppingCart, Package, BarChart3, Cloud, Users, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      icon: ShoppingCart,
      title: "Point of Sale",
      description: "Fast, reliable POS systems designed for modern retail. Process transactions seamlessly across all devices.",
      features: ["Quick Checkout", "Multi-payment Support", "Offline Mode"]
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking with automated reorder alerts. Never run out of stock again.",
      features: ["Stock Tracking", "Auto-reorder", "Barcode Scanning"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Comprehensive insights into your business performance with customizable dashboards.",
      features: ["Sales Reports", "Customer Insights", "Trend Analysis"]
    },
    {
      icon: Cloud,
      title: "Cloud Systems",
      description: "Access your data anywhere, anytime. Secure cloud infrastructure with automatic backups.",
      features: ["Remote Access", "Auto Backups", "Multi-location Sync"]
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Manage your team efficiently with scheduling, performance tracking, and access controls.",
      features: ["Time Tracking", "Permissions", "Performance Metrics"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security ensuring your data and transactions are always protected.",
      features: ["Data Encryption", "PCI Compliance", "Audit Logs"]
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Our Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need to Run Your Retail Business
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive solutions designed to streamline operations, boost sales, and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="group bg-card hover:shadow-card transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:gradient-primary transition-all duration-300">
                  <solution.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
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
