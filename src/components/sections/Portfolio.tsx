import { ExternalLink, Globe, Smartphone, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "Full-stack e-commerce solution with inventory management, payment processing, and admin dashboard.",
      tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
      icon: Globe,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Analytics dashboard for a marketing automation platform with real-time data visualization.",
      tags: ["React", "TypeScript", "Chart.js", "REST API"],
      icon: Layout,
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "POSXander",
      category: "Mobile App",
      description: "Android POS application for retail businesses with offline support and cloud sync.",
      tags: ["Android", "Kotlin", "Firebase", "SQLite"],
      icon: Smartphone,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Corporate Website",
      category: "Website",
      description: "Modern corporate website with CMS integration, blog, and lead generation forms.",
      tags: ["React", "Tailwind", "Headless CMS", "SEO"],
      icon: Globe,
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Booking Platform",
      category: "Web Application",
      description: "Appointment scheduling system for healthcare providers with patient portal.",
      tags: ["Next.js", "Prisma", "Twilio", "Stripe"],
      icon: Layout,
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Startup Landing Page",
      category: "Landing Page",
      description: "High-converting landing page for a fintech startup with waitlist and investor section.",
      tags: ["React", "Framer Motion", "Analytics", "A/B Testing"],
      icon: Layout,
      gradient: "from-violet-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="text-background/70 text-lg">
            A showcase of our recent work across web applications, websites, and custom software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-background/5 border-background/10 hover:bg-background/10 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="w-16 h-16 text-background/30" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                      {project.category}
                    </Badge>
                    <ExternalLink className="w-4 h-4 text-background/40 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-background mb-2">{project.title}</h3>
                    <p className="text-background/60 text-sm">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-md bg-background/10 text-background/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
