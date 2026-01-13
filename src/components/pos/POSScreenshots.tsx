import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const POSScreenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      title: "Dashboard",
      description: "Get a quick overview of your daily sales and performance metrics."
    },
    {
      title: "Sales Screen",
      description: "Fast, intuitive checkout interface designed for speed."
    },
    {
      title: "Inventory",
      description: "Manage your products with powerful inventory tools."
    },
    {
      title: "Reports",
      description: "Detailed analytics to understand your business better."
    },
    {
      title: "Settings",
      description: "Customize POSXander to match your workflow."
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
            See POSXander in Action
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
                <div className="rounded-2xl bg-card border border-border overflow-hidden aspect-[9/16]">
                  <div className="h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      {screenshots[(currentIndex - 1 + screenshots.length) % screenshots.length].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Screenshot */}
              <div className="w-64 md:w-72 shrink-0">
                <div className="rounded-3xl bg-foreground p-2 shadow-2xl">
                  <div className="rounded-2xl bg-card overflow-hidden aspect-[9/16] border-2 border-foreground/10">
                    <div className="h-full bg-gradient-to-br from-primary/20 to-primary/5 flex flex-col">
                      <div className="h-6 bg-foreground/5 flex items-center justify-center">
                        <div className="w-16 h-1 bg-foreground/20 rounded-full" />
                      </div>
                      <div className="flex-1 p-6 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 mb-4 rounded-2xl gradient-primary flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-foreground">PX</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {screenshots[currentIndex].title}
                        </h3>
                        <p className="text-xs text-muted-foreground text-center px-4">
                          {screenshots[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Preview */}
              <div className="hidden lg:block w-48 shrink-0 opacity-40 transform scale-90">
                <div className="rounded-2xl bg-card border border-border overflow-hidden aspect-[9/16]">
                  <div className="h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      {screenshots[(currentIndex + 1) % screenshots.length].title}
                    </p>
                  </div>
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
