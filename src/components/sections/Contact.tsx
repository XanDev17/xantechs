import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Let's Build Something Great
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Tell us about it and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email Us</p>
                  <p className="text-sm text-muted-foreground">hello@xantechs.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Quick Response</p>
                  <p className="text-sm text-muted-foreground">Within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input placeholder="Your name" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="you@example.com" className="bg-background" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company (Optional)</label>
                    <Input placeholder="Your company" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Budget Range</label>
                    <Input placeholder="e.g. $5,000 - $10,000" className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <Input placeholder="Web App, Website, Landing Page, etc." className="bg-background" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tell Us About Your Project</label>
                  <Textarea
                    placeholder="Describe your project, goals, and timeline..."
                    className="bg-background min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary group">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
