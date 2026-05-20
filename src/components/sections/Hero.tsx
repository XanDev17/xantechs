import { ArrowRight, Check, Download, ScanLine, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CircuitBackground from "@/components/ui/CircuitBackground";

const POS_URL = "https://play.google.com/store/apps/details?id=com.xantechs.pos_store";
const QR_URL = "https://play.google.com/store/apps/details?id=com.xantechs.qr_ocr";

const trust = [
  "Free to download",
  "Works fully offline",
  "Privacy-first — your data stays on device",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <CircuitBackground variant="light" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Headline (MonieAssist-style two-line + accent) */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Two production apps. Live on Google Play.</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">Powerful Android Apps for</span>
              <br />
              <span className="text-gradient">Everyday Business.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              From a full offline POS &amp; inventory system to a privacy-first QR, OCR &amp;
              PDF toolkit — XANTECHS builds tools that just work, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={POS_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gradient-primary shadow-glow h-12 px-7 text-base group w-full sm:w-auto">
                  <Download className="mr-2 w-4 h-4" />
                  Get POS on Google Play
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={QR_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="h-12 px-7 text-base border-2 w-full sm:w-auto">
                  <Download className="mr-2 w-4 h-4" />
                  Get XanScan
                </Button>
              </a>
            </div>

            <ul className="space-y-2.5 pt-2">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm md:text-base">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Two app preview cards (MonieAssist-style floating tiles) */}
          <div className="relative h-[480px] hidden lg:block">
            <div className="absolute top-0 right-8 w-72 rounded-2xl border border-border bg-card/80 backdrop-blur-md shadow-card p-6 animate-float">
              <div className="w-12 h-12 rounded-xl gradient-primary shadow-glow flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">POS Offline</p>
              <h3 className="text-lg font-bold text-foreground mb-2">Barcode &amp; Stock</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sell, scan and manage inventory — even with zero internet.
              </p>
              <Link to="/pos" className="text-sm font-medium text-primary inline-flex items-center group">
                Learn more <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="absolute bottom-0 left-4 w-72 rounded-2xl border border-border bg-card/80 backdrop-blur-md shadow-card p-6 animate-float" style={{ animationDelay: "0.6s" }}>
              <div className="w-12 h-12 rounded-xl gradient-primary shadow-glow flex items-center justify-center mb-4">
                <ScanLine className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">XanScan</p>
              <h3 className="text-lg font-bold text-foreground mb-2">QR, OCR &amp; PDF</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Scan, generate, extract and convert — fully offline &amp; private.
              </p>
              <Link to="/qr-ocr" className="text-sm font-medium text-primary inline-flex items-center group">
                Learn more <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Decorative dot */}
            <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
