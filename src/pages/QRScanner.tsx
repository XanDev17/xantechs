import { ArrowRight, Star, Download, QrCode, ScanLine, FileText, FileImage, Shield, Zap, Palette, History, Layers, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const APP_ICON = "https://play-lh.googleusercontent.com/49kSqNiYR6taU5m0N38EzOOGATXjyDyqCRrs5sRpa3z3P6MyTTrrImi96TtWCBUh2O7-HsdYi5tVyoeDytBgOw=w240-h480-rw";
const PLAY_SHOTS = [
  "https://play-lh.googleusercontent.com/czi3c-Kb_wre4u9CNTHoNJb09LBIQbdsSf_KP7M7bOthnhsWLAxTgQ8oqTm8JD91vYFOpERxCpBGBmhrn67bpaA=w526-h296-rw",
  "https://play-lh.googleusercontent.com/jrC4Z5cspoKFPlcaqM5T1Hx0rcbD5S4-10yZFTD7ounjpQtj_bWleyJIgTHIxyS-csimHO_z1YjUNz8Pa2B21Q=w526-h296-rw",
  "https://play-lh.googleusercontent.com/QIHXy_bwI7_qjH2EnoOuOdW6exHv4syz11-qoba-v_0vYzoqpiaCuqQZybD6FxFych2WiBLqtS8yWr2I-S8D=w526-h296-rw",
  "https://play-lh.googleusercontent.com/FQNEstxXf2RiDNV8hZgPVg2zob0OWwbEMpicoK8rIEjbFX8ZBSbGylt1KfSn55Y2p6RsGfxZrJkb6MMe4wSoXg=w526-h296-rw",
  "https://play-lh.googleusercontent.com/9vlBWNA5sp12BQcwTX-RQbN4eP2TFptXQ53pgzNE7HK4MP6hTGAO8zkhzbmc8B89vGhOwcKAzgPX5ssG2bDy5Q=w526-h296-rw",
];

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.xantechs.qr_ocr";

const features = [
  { icon: ScanLine, title: "Instant QR & Barcode Scanner", description: "Auto-detect QR codes and barcodes via camera or gallery. Optimized for low-light scanning and works entirely offline." },
  { icon: Palette, title: "Pro QR Code Generator", description: "Create branded QR codes for URLs, WiFi, vCard, WhatsApp, SMS, Email — with custom colors, eye shapes and embedded logos." },
  { icon: FileText, title: "AI-Powered OCR", description: "Extract editable text from documents, photos and YouTube thumbnails with high accuracy. Copy or share results instantly." },
  { icon: FileImage, title: "Professional PDF Tools", description: "Image to PDF, PDF compressor, PDF to image, merge, split and reorder pages — full control over your documents." },
  { icon: Shield, title: "Privacy First", description: "All processing happens locally on your device. No data shared with third parties. Your scans never leave your phone." },
  { icon: Zap, title: "Ad-Light & Fast", description: "A clean, modern design optimized for Android. Go Pro Lifetime for an ad-free experience and unlimited premium features." },
  { icon: Wifi, title: "WiFi & vCard Codes", description: "Share WiFi access in one tap or generate digital business cards customers can scan and save instantly." },
  { icon: History, title: "Scan History", description: "Every scan is saved locally with quick access, search and one-tap re-share." },
  { icon: Layers, title: "Batch Processing", description: "Convert multiple photos to PDF at once or merge several PDFs into a single polished document." },
];

const screenshots = [
  { title: "Scan Anything", description: "Fast, reliable QR & barcode scanning in any lighting.", image: scanScreen },
  { title: "Generate Branded QRs", description: "Custom colors, eye shapes and logo embedding.", image: generateScreen },
  { title: "OCR Image to Text", description: "Extract editable text from any document or photo.", image: ocrScreen },
  { title: "Powerful PDF Tools", description: "Convert, compress, merge and split PDFs.", image: pdfScreen },
  { title: "Scan History", description: "Search and re-share every scan you've made.", image: historyScreen },
];

const QRScanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((p) => (p + 1) % screenshots.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 pt-20 lg:pt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center gap-4">
                  <img src={appIcon} alt="XanScan app icon" width={64} height={64} className="w-16 h-16 rounded-2xl shadow-lg" />
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    On Google Play
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">XanScan</span>
                  <span className="text-foreground"> – QR Scanner, OCR & PDF Tool</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  The all-in-one QR code scanner, barcode reader, OCR text extractor and PDF converter.
                  Professional, offline-first, and 100% private — your data never leaves your phone.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={PLAY_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gradient-primary w-full sm:w-auto group">
                      <Download className="mr-2 w-5 h-5" />
                      Get it on Google Play
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="#features">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">Explore Features</Button>
                  </a>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">100%</p>
                    <p className="text-sm text-muted-foreground">Offline</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">4-in-1</p>
                    <p className="text-sm text-muted-foreground">Toolkit</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">Pro</p>
                    <p className="text-sm text-muted-foreground">Lifetime</p>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:flex justify-center">
                <div className="relative z-10 mx-auto max-w-[320px]">
                  <div className="rounded-[3rem] bg-foreground p-3 shadow-2xl">
                    <div className="rounded-[2.5rem] overflow-hidden aspect-[9/20] border-4 border-foreground/10">
                      <img src={scanScreen} alt="XanScan scanner screen" className="w-full h-full object-contain bg-[#1a3a7a]" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-20 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Everything You Need in One App</h2>
              <p className="text-muted-foreground text-lg">Scan, generate, extract and convert — all from a single, privacy-first toolkit.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <Card key={i} className="group bg-card hover:shadow-card transition-all duration-300 border-border hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-3 group-hover:gradient-primary transition-all duration-300">
                      <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-muted-foreground">{f.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">App Screenshots</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">See XanScan in Action</h2>
              <p className="text-muted-foreground text-lg">A modern, clean interface optimized for everyday productivity.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 md:gap-8">
                <Button variant="outline" size="icon" className="hidden md:flex shrink-0" onClick={prev}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="hidden lg:block w-48 shrink-0 opacity-40 transform scale-90">
                    <div className="rounded-2xl bg-card border border-border overflow-hidden aspect-[9/20]">
                      <img src={screenshots[(currentIndex - 1 + screenshots.length) % screenshots.length].image} alt="prev" className="w-full h-full object-contain bg-muted" />
                    </div>
                  </div>

                  <div className="w-64 md:w-72 shrink-0">
                    <div className="rounded-3xl bg-foreground p-2 shadow-2xl">
                      <div className="rounded-2xl overflow-hidden aspect-[9/20] border-2 border-foreground/10">
                        <img src={screenshots[currentIndex].image} alt={screenshots[currentIndex].title} className="w-full h-full object-contain bg-muted" />
                      </div>
                    </div>
                    <div className="text-center mt-6">
                      <h3 className="text-lg font-bold text-foreground mb-1">{screenshots[currentIndex].title}</h3>
                      <p className="text-sm text-muted-foreground px-4">{screenshots[currentIndex].description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block w-48 shrink-0 opacity-40 transform scale-90">
                    <div className="rounded-2xl bg-card border border-border overflow-hidden aspect-[9/20]">
                      <img src={screenshots[(currentIndex + 1) % screenshots.length].image} alt="next" className="w-full h-full object-contain bg-muted" />
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="icon" className="hidden md:flex shrink-0" onClick={next}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex justify-center gap-4 mt-6 md:hidden">
                <Button variant="outline" size="icon" onClick={prev}><ChevronLeft className="w-5 h-5" /></Button>
                <Button variant="outline" size="icon" onClick={next}><ChevronRight className="w-5 h-5" /></Button>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {screenshots.map((_, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-primary" : "bg-border hover:bg-muted-foreground"}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 p-10 rounded-3xl border border-border bg-card shadow-card">
              <QrCode className="w-12 h-12 mx-auto text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Download XanScan Today</h2>
              <p className="text-muted-foreground text-lg">The most powerful QR, Barcode, OCR and PDF solution in your pocket — completely offline.</p>
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" className="gradient-primary group">
                  <Download className="mr-2 w-5 h-5" />
                  Get it on Google Play
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QRScanner;
