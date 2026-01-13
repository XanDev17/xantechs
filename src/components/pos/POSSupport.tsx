import { Link } from "react-router-dom";
import { Mail, MessageSquare, FileText, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const POSSupport = () => {
  const supportOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "support@xantechs.com",
      link: "mailto:support@xantechs.com"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      link: "#"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse our comprehensive help guides",
      action: "View Docs",
      link: "#"
    }
  ];

  return (
    <section id="support" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Support</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            We're Here to Help
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? Our support team is available 24/7 to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-card transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                <a href={option.link}>
                  <Button variant="outline" size="sm" className="group">
                    {option.action}
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Looking for Enterprise Solutions?
              </h3>
              <p className="text-muted-foreground">
                XANTECHS offers comprehensive retail technology solutions beyond POSXander. 
                From multi-store management to custom integrations, we've got you covered.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link to="/">
                <Button variant="outline" className="w-full sm:w-auto">
                  Visit XANTECHS
                </Button>
              </Link>
              <Link to="/#contact">
                <Button className="gradient-primary w-full sm:w-auto group">
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default POSSupport;
