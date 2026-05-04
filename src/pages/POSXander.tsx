import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Download,
  Star,
  ScanBarcode,
  Package,
  ShoppingCart,
  Receipt,
  Brain,
  ShieldCheck,
  CloudUpload,
  Users,
  WifiOff,
  Globe,
  TrendingUp,
  Mic,
  Store,
  Coffee,
  Pill,
  Wrench,
} from "lucide-react";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.xantechs.pos_store";

const storyboard = [
  {
    step: "01",
    icon: ScanBarcode,
    title: "Scan to add stock",
    text: "Point your phone camera at any barcode. The product is added to your digital catalog instantly — no typing, no guesswork.",
  },
  {
    step: "02",
    icon: Package,
    title: "Organize your inventory",
    text: "Group products into categories, set cost vs. selling price, and bulk-import to get a full store online in minutes.",
  },
  {
    step: "03",
    icon: ShoppingCart,
    title: "Ring up a sale",
    text: "Tap items, scan barcodes, or search to build a cart. Tax (VAT/GST) and totals calculate automatically — even offline.",
  },
  {
    step: "04",
    icon: Receipt,
    title: "Print or share a branded receipt",
    text: "Generate professional PDF invoices with your store logo. Print, WhatsApp, or email them straight to the customer.",
  },
  {
    step: "05",
    icon: Brain,
    title: "Let the AI assistant guide you",
    text: "Get smart suggestions on what's selling, what to restock, and trends to watch — like a business analyst in your pocket.",
  },
  {
    step: "06",
    icon: TrendingUp,
    title: "Grow with daily insights",
    text: "Open the dashboard to see sales, profit, and tax at a glance. Make confident decisions backed by real numbers.",
  },
];

const featureGroups = [
  {
    heading: "Smart Inventory & Stock Control",
    items: [
      { icon: ScanBarcode, title: "Barcode Scanner POS", text: "Add products instantly using your device camera." },
      { icon: Package, title: "Stock Alerts", text: "Get notified about low-stock items before they run out." },
      { icon: TrendingUp, title: "Profit Tracking", text: "Monitor cost vs. selling price to see your true margins." },
    ],
  },
  {
    heading: "Fast Checkout & Billing",
    items: [
      { icon: Receipt, title: "Custom Receipts", text: "Professional PDF invoices featuring your store logo." },
      { icon: Globe, title: "Multi-Currency", text: "Support for 50+ currencies, perfect for global business." },
      { icon: WifiOff, title: "Offline Mode", text: "Keep selling without internet — data syncs when you're back online." },
    ],
  },
  {
    heading: "AI-Powered Business Assistant",
    items: [
      { icon: Brain, title: "Smart Insights", text: "AI suggestions on sales trends and inventory needs." },
      { icon: Mic, title: "Voice Commands", text: "Operate your POS hands-free for a faster workflow." },
      { icon: TrendingUp, title: "Growth Analytics", text: "Make data-driven decisions with a daily sales dashboard." },
    ],
  },
  {
    heading: "Advanced Analytics & Security",
    items: [
      { icon: Users, title: "Staff Management", text: "Secure logins with role-based permissions (Admin vs. Staff)." },
      { icon: CloudUpload, title: "Cloud Backup", text: "Securely back up your data via Google Drive." },
      { icon: ShieldCheck, title: "Privacy First", text: "Play Store validated security keeps your data protected." },
    ],
  },
];

const audiences = [
  { icon: Store, title: "Retail & Shops", text: "Boutiques, grocery stores, and supermarkets." },
  { icon: Coffee, title: "Food & Beverage", text: "Cafes, bakeries, and small restaurants." },
  { icon: Pill, title: "Pharmacy & Health", text: "Secure inventory and expiration tracking." },
  { icon: Wrench, title: "Service Businesses", text: "Salons, workshops, and freelancers." },
];

const POSXander = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <Star className="w-4 h-4 fill-primary text-primary" />
                Live on Google Play
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">XanTechs POS</span>
                <span className="text-foreground"> — Stock & Billing</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The all-in-one point-of-sale and inventory manager built for speed, accuracy, and growth.
                From barcode scanning to AI-driven insights — XanTechs POS keeps your shop running, online or off.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gradient-primary w-full sm:w-auto group">
                    <Download className="mr-2 w-5 h-5" />
                    Get it on Google Play
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">See How It Works</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Storyboard */}
        <section id="how-it-works" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Run Your Whole Shop in 6 Simple Steps</h2>
              <p className="text-muted-foreground text-lg">
                A quick story of a day with XanTechs POS — from stocking a product to closing the books.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" aria-hidden />

              <div className="space-y-10">
                {storyboard.map((s, i) => {
                  const Icon = s.icon;
                  const isLeft = i % 2 === 0;
                  return (
                    <div key={s.step} className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-12 items-start`}>
                      {/* Marker */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                      <div className="md:w-1/2 pl-20 md:pl-0 md:px-8">
                        <Card className="border-border hover:border-primary/40 transition-colors">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <p className="text-xs text-primary font-mono">STEP {s.step}</p>
                                <CardTitle className="text-lg">{s.title}</CardTitle>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-base text-muted-foreground">{s.text}</CardDescription>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Feature groups */}
        <section className="py-24 bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">What's Inside</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Everything a Modern Shop Needs</h2>
              <p className="text-muted-foreground text-lg">Inventory, billing, AI assistance, and security — in one app.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featureGroups.map((group) => (
                <Card key={group.heading} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{group.heading}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="flex gap-4">
                          <div className="w-10 h-10 shrink-0 rounded-lg bg-accent flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">Who It's For</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Every Kind of Business</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {audiences.map((a) => {
                const Icon = a.icon;
                return (
                  <Card key={a.title} className="text-center border-border hover:border-primary/40 transition-colors">
                    <CardContent className="pt-8 pb-6 space-y-3">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-accent flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{a.title}</h3>
                      <p className="text-sm text-muted-foreground">{a.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 p-10 rounded-3xl border border-border bg-card shadow-card">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Start Selling Smarter Today</h2>
              <p className="text-muted-foreground text-lg">
                Download XanTechs POS — the ultimate offline POS, barcode scanner, and inventory manager designed
                to help your business thrive anytime, anywhere.
              </p>
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

export default POSXander;
