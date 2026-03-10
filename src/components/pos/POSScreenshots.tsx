import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import loginScreen from "@/assets/pos/login_screen.png";
import salesScreen from "@/assets/pos/sales_screen.png";
import inventoryScreen from "@/assets/pos/inventory_screen.png";
import transactionScreen from "@/assets/pos/transaction_screen.png";
import reportsScreen from "@/assets/pos/reports_screen.png";
import aiScreen from "@/assets/pos/ai_screen.png";

const POSScreenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      title: "Login & Auth",
      description: "Multi-role login with Admin & Cashier accounts and biometric security.",
      image: loginScreen
    },
    {
      title: "Sales Screen",
      description: "Product catalog with shopping cart and cash/card/contactless payments.",
      image: salesScreen
    },
    {
      title: "Inventory",
      description: "Full product database with stock monitoring and low-stock alerts.",
      image: inventoryScreen
    },
    {
      title: "Transactions",
      description: "Complete sales history with filtering, receipts, and void capabilities.",
      image: transactionScreen
    },
    {
      title: "Reports",
      description: "Sales reports, profit/loss analysis, interactive charts, and PDF export.",
      image: reportsScreen
    },
    {
      title: "XanTechs AI",
      description: "Built-in AI assistant for business insights, recommendations, and analytics.",
      image: aiScreen
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">App Screenshots</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            See POS System in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore the intuitive interface designed for modern retailers.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex shrink-0"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-4 overflow-hidden">
              {/* Left Preview */}
              <div className="hidden lg:block w-48 shrink-0 opacity-40 transform scale-90">
                <div className="rounded-2xl bg-card border border-border overflow-hidden aspect-[9/20]">
                  <img
                    src={screenshots[(currentIndex - 1 + screenshots.length) % screenshots.length].image}
                    alt={screenshots[(currentIndex - 1 + screenshots.length) % screenshots.length].title}
                    className="w-full h-full object-contain bg-muted"
                  />
                </div>
              </div>

              {/* Main Screenshot */}
              <div className="w-64 md:w-72 shrink-0">
                <div className="rounded-3xl bg-foreground p-2 shadow-2xl">
                  <div className="rounded-2xl overflow-hidden aspect-[9/20] border-2 border-foreground/10">
                    <img
                      src={screenshots[currentIndex].image}
                      alt={screenshots[currentIndex].title}
                      className="w-full h-full object-contain bg-muted"
                    />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className="text-sm text-muted-foreground px-4">
                    {screenshots[currentIndex].description}
                  </p>
                </div>
              </div>

              {/* Right Preview */}
              <div className="hidden lg:block w-48 shrink-0 opacity-40 transform scale-90">
                <div className="rounded-2xl bg-card border border-border overflow-hidden aspect-[9/20]">
                  <img
                    src={screenshots[(currentIndex + 1) % screenshots.length].image}
                    alt={screenshots[(currentIndex + 1) % screenshots.length].title}
                    className="w-full h-full object-contain bg-muted"
                  />
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex shrink-0"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default POSScreenshots;
