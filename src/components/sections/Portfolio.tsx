import { Smartphone, ScanLine, ArrowUpRight, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "POS System: Retail & Billing",
      category: "Android App",
      description:
        "A complete offline point-of-sale solution that replaces traditional cash registers. Manage sales, inventory, and reporting — no internet required. Supports grocery, restaurant, retail, and service businesses.",
      tags: ["Offline-First", "SQLite", "Biometric Auth", "Voice Commands", "Drive Backup"],
      icon: Smartphone,
      url: "https://play.google.com/store/apps/details?id=com.xantechs.pos_store",
      page: "/pos",
    },
    {
      title: "QR & OCR Scanner",
      category: "Android App",
      description:
        "All-in-one QR scanner, OCR text extractor and PDF toolkit. Scan codes, generate branded QRs, extract text from images and convert PDFs — privacy-first and fully offline.",
      tags: ["QR Scanner", "OCR", "PDF Tools", "Offline", "Privacy-First"],
      icon: ScanLine,
      url: "https://play.google.com/store/apps/details?id=com.xantechs.qr_ocr",
      page: "/qr-ocr",
    },
  ];

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-tech)" }}>
      {/* Circuit pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(217 91% 60% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(217 91% 60% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Animated glow spots */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Our Apps</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Apps We've Built
          </h2>
          <p className="text-white/60 text-lg">
            Two production Android apps live on Google Play — built, shipped, and trusted by users worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center relative overflow-hidden">
                  <project.icon className="w-20 h-20 text-white/30 group-hover:text-primary/60 transition-colors duration-500" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-0 hover:bg-primary/30">
                      {project.category}
                    </Badge>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-white/60 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full gradient-primary">
                        <Download className="w-4 h-4 mr-2" />
                        Google Play
                      </Button>
                    </a>
                    <Link to={project.page} className="flex-1">
                      <Button variant="outline" className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">
                        Learn More
                      </Button>
                    </Link>
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
