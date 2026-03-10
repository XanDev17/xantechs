import { 
  ShoppingCart, 
  Package, 
  BarChart3, 
  Users, 
  WifiOff, 
  CreditCard,
  Mic,
  Receipt,
  Fingerprint,
  CloudUpload
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const POSFeatures = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Quick Sales",
      description: "Product catalog with search, categories, shopping cart, and fast payment processing for cash, card & contactless."
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Full product database with categories, stock level monitoring, low stock alerts, and add/edit/delete products."
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Sales reports by date range, profit/loss analysis, top products, interactive charts, and PDF export."
    },
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Admin & Cashier accounts with separate permissions. Manage users and track performance per role."
    },
    {
      icon: WifiOff,
      title: "100% Offline",
      description: "Works completely without internet using local databases (SQLite + Hive). Sync data when you're back online."
    },
    {
      icon: CreditCard,
      title: "Multi-Payment",
      description: "Accept cash, card, and contactless payments. Process split transactions and void/cancel with ease."
    },
    {
      icon: Mic,
      title: "Voice Commands",
      description: "Speech-to-text voice activation for hands-free operation during busy checkout periods."
    },
    {
      icon: Receipt,
      title: "Professional Receipts",
      description: "Generate and print professional receipts. Full transaction history with customer lookup."
    },
    {
      icon: Fingerprint,
      title: "Biometric Security",
      description: "Fingerprint and face recognition login with remember-me functionality and role persistence."
    },
    {
      icon: CloudUpload,
      title: "Google Drive Backup",
      description: "Automatic cloud backup to Google Drive when online. Multi-device sync capabilities."
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need to Run Your Store
          </h2>
          <p className="text-muted-foreground text-lg">
            POSXander comes packed with powerful features to streamline your retail operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-card hover:shadow-card transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-3 group-hover:gradient-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default POSFeatures;
