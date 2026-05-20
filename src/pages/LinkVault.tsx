import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Download,
  Star,
  Link2,
  ScanLine,
  Upload,
  FolderTree,
  Bell,
  BarChart3,
  Shield,
  FileJson,
  Search,
  Tag,
  Image as ImageIcon,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  BookOpen,
} from "lucide-react";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.xantechs.linkvault.app";
const APP_ICON = "https://play-lh.googleusercontent.com/pt5wO4eThwkm6I1UMtys-WjmiCabT8bs-vdBVcq4ECutXrLWuUpVcI7tLtn3pSe25piepQ5iDbnaaqWFCMy51Aw=w240-h480-rw";
const SCREENSHOTS = [
  "https://play-lh.googleusercontent.com/eDaY5zyREg-o_U2F4fAWodGhf2egEE1jSKTpaJ7nodzLp--dgkc_ysdX8rKT8jAJkoqdWTVawJ8e1heL5dAfFA=w526-h296-rw",
  "https://play-lh.googleusercontent.com/AYhi2_uhbH21BcILBVXK95RGdWcqNaPOBC2jAA7vN1GuxtJJP5M-uUEyi2NMx6Pvc6UJaFxNC_BuqAUjRaUM8WE=w526-h296-rw",
  "https://play-lh.googleusercontent.com/FjNU-TZFp9C3dgoSNWGUlbaPw7a8vAURF33vCfMkrEy4EU3mJuD5LX3AL2QMMJl9AcLqFzMTWJQ0bi3W3xhx-g=w526-h296-rw",
  "https://play-lh.googleusercontent.com/U5U7NEVcFnZOEv5ewJHev_ca0Rk4FbJuar1nVAAJvAYK_RZg3nHaqs9AWUl1GLcf72Ih2mD2KVbnv3GooxH8=w526-h296-rw",
];

const storyboard = [
  { step: "01", icon: Link2, title: "Save any link instantly", text: "Paste, share or type — LinkVault grabs the title, preview and description automatically and turns it into a visual card." },
  { step: "02", icon: ScanLine, title: "Scan or extract URLs anywhere", text: "Use the built-in QR scanner or OCR to pull links out of images, screenshots, business cards and printed documents." },
  { step: "03", icon: Upload, title: "Bulk import hundreds at once", text: "Drop a Google Sheets or Docs link and LinkVault extracts every URL inside — turning one paste into hundreds of saved links." },
  { step: "04", icon: FolderTree, title: "Organize into folders & tags", text: "Sort links into custom folders, add categories, attach private notes, and search across your entire vault in seconds." },
  { step: "05", icon: Bell, title: "Set reminders for later", text: "Schedule alerts to revisit important articles, research or shopping links so nothing important gets forgotten." },
  { step: "06", icon: Shield, title: "Stay 100% offline & private", text: "No cloud sync. No tracking. All data lives on your device — backup or move it anytime with JSON import & export." },
];

const featureGroups = [
  {
    heading: "Smart Link Saving",
    items: [
      { icon: Link2, title: "Instant Capture", text: "Save links with full metadata — title, preview and description." },
      { icon: ImageIcon, title: "Visual Link Cards", text: "Browse your vault like a gallery, not a boring list." },
      { icon: Search, title: "Fast Search", text: "Find any saved URL in seconds across folders and notes." },
    ],
  },
  {
    heading: "Capture & Extract",
    items: [
      { icon: ScanLine, title: "QR Code Scanner", text: "Scan QR codes to instantly save the link inside." },
      { icon: FileJson, title: "OCR Link Extraction", text: "Pull URLs out of photos, screenshots and printed text." },
      { icon: Upload, title: "Bulk URL Importer", text: "Paste many links or a Google Doc and import them all at once." },
    ],
  },
  {
    heading: "Powerful Organizer",
    items: [
      { icon: FolderTree, title: "Custom Folders", text: "Group bookmarks into folders that match how you think." },
      { icon: Tag, title: "Tags & Notes", text: "Add private notes and categories to every saved URL." },
      { icon: Bell, title: "Smart Reminders", text: "Get notified to revisit important saved content." },
    ],
  },
  {
    heading: "Private & In Control",
    items: [
      { icon: Shield, title: "100% Offline", text: "No cloud, no tracking — your links never leave the device." },
      { icon: FileJson, title: "JSON Import / Export", text: "Back up, restore and transfer your vault between phones." },
      { icon: BarChart3, title: "Link Analytics", text: "Track total saved links, categories and growth over time." },
    ],
  },
];

const audiences = [
  { icon: GraduationCap, title: "Students", text: "Save research links and import bibliographies in bulk." },
  { icon: Briefcase, title: "Professionals", text: "Organize resources, references and client materials." },
  { icon: ShoppingBag, title: "Shoppers", text: "Track products, deals and wishlists across stores." },
  { icon: BookOpen, title: "Readers", text: "Bookmark articles and set reminders to read later." },
];

const LinkVault = () => {
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

              <div className="flex justify-center">
                <img src={APP_ICON} alt="LinkVault app icon" width={88} height={88} className="w-22 h-22 rounded-3xl shadow-glow" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">LinkVault</span>
                <span className="text-foreground"> — Save Links &amp; URLs Privately</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A powerful offline URL saver, bookmark manager and link organizer.
                Save, scan, bulk-import and organize every link in one secure place — no cloud, no tracking.
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

        {/* Play Store screenshots */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">App Preview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Straight from Google Play</h2>
              <p className="text-muted-foreground text-lg">Real screenshots of the live app — what you see is what you get.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {SCREENSHOTS.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-glow transition-shadow">
                  <img src={src} alt={`LinkVault screenshot ${i + 1}`} loading="lazy" className="w-full h-auto block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Storyboard */}
        <section id="how-it-works" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">From Scattered Links to a Private Vault</h2>
              <p className="text-muted-foreground text-lg">
                A quick story of how LinkVault turns one paste into hundreds of organized, searchable URLs.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" aria-hidden />

              <div className="space-y-10">
                {storyboard.map((s, i) => {
                  const Icon = s.icon;
                  const isLeft = i % 2 === 0;
                  return (
                    <div key={s.step} className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-12 items-start`}>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">A Complete URL Saver &amp; Organizer</h2>
              <p className="text-muted-foreground text-lg">Capture, organize, back up and protect every link you care about.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Every Kind of Link Collector</h2>
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
              <Link2 className="w-12 h-12 mx-auto text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Download LinkVault Today</h2>
              <p className="text-muted-foreground text-lg">
                The smartest, most private way to save links, organize bookmarks and bulk-import URLs — fully offline.
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

export default LinkVault;
