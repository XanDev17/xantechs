import { 
  ShoppingCart, 
  Package, 
  BarChart3, 
  Users, 
  Wifi, 
  CreditCard,
  QrCode,
  Receipt,
  Settings
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const POSFeatures = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Quick Sales",
      description: "Process transactions in seconds with an intuitive interface designed for speed."
    },
    {
      icon: Package,
      title: "Inventory Tracking",
      description: "Real-time stock management with low-stock alerts and automatic updates."
    },
    {
      icon: BarChart3,
      title: "Sales Reports",
      description: "Comprehensive analytics with daily, weekly, and monthly sales insights."
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Manage employee access, track performance, and set permissions."
    },
    {
      icon: Wifi,
      title: "Offline Mode",
      description: "Keep selling even without internet. Data syncs when you're back online."
    },
    {
      icon: CreditCard,
      title: "Multi-Payment",
      description: "Accept cash, cards, mobile payments, and split transactions effortlessly."
    },
    {
      icon: QrCode,
      title: "Barcode Scanning",
      description: "Built-in camera scanner for quick product lookup and checkout."
    },
    {
      icon: Receipt,
      title: "Digital Receipts",
      description: "Send receipts via email or SMS. Print to Bluetooth printers."
    },
    {
      icon: Settings,
      title: "Customizable",
      description: "Tailor the app to your business with custom categories and settings."
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
