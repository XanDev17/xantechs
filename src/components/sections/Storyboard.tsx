import { useState, useEffect, useRef } from "react";
import { MessageSquare, Search, Lightbulb, Code2, TestTube, Rocket, CheckCircle2 } from "lucide-react";
import CircuitBackground from "@/components/ui/CircuitBackground";

const Storyboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery & Consultation",
      description: "We begin with an in-depth conversation to understand your vision, goals, and challenges. Our team listens carefully to capture every detail of your requirements.",
      details: [
        "Initial project briefing and requirements gathering",
        "Understanding your target audience and market",
        "Defining project scope and timeline expectations",
        "Budget discussion and resource planning"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Research & Analysis",
      description: "We dive deep into your industry, competitors, and user needs. This research phase ensures we build solutions that truly resonate with your audience.",
      details: [
        "Competitive landscape analysis",
        "User persona development",
        "Technology stack evaluation",
        "Risk assessment and mitigation planning"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Strategy & Design",
      description: "Our designers craft intuitive wireframes and stunning visuals while our architects design scalable, future-proof system structures.",
      details: [
        "UI/UX wireframing and prototyping",
        "Visual design and branding alignment",
        "System architecture blueprint",
        "Database schema design"
      ],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Code2,
      title: "Development & Build",
      description: "Our expert developers bring designs to life using cutting-edge technologies, following best practices for clean, maintainable code.",
      details: [
        "Agile sprint-based development",
        "Frontend and backend implementation",
        "API integration and third-party services",
        "Continuous integration and deployment"
      ],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Rigorous testing ensures your product is bug-free, performant, and delivers an exceptional user experience across all devices.",
      details: [
        "Unit and integration testing",
        "Cross-browser and device testing",
        "Performance and load testing",
        "Security vulnerability assessment"
      ],
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Rocket,
      title: "Launch & Deploy",
      description: "We handle the entire deployment process, ensuring a smooth launch with zero downtime and optimal performance from day one.",
      details: [
        "Production environment setup",
        "Domain and SSL configuration",
        "Performance optimization",
        "Launch monitoring and support"
      ],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  return (
    <section ref={sectionRef} id="process" className="relative py-24 bg-background overflow-hidden">
      <CircuitBackground variant="light" className="opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Our Process</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How We Bring Your <span className="text-gradient">Vision to Life</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven methodology refined over years of delivering successful projects
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary/50 transition-all duration-500"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 transition-all duration-700 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Icon Node */}
                  <div 
                    className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 cursor-pointer transition-all duration-500 ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  >
                    <div 
                      className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        isActive 
                          ? `bg-gradient-to-br ${step.color} border-transparent shadow-glow` 
                          : isPast 
                            ? "bg-primary border-primary" 
                            : "bg-card border-border"
                      }`}
                    >
                      {isPast && !isActive ? (
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                      ) : (
                        <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isActive || isPast ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      )}
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div 
                    className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      isActive 
                        ? "bg-card border-primary/30 shadow-card" 
                        : "bg-card/50 border-border hover:border-primary/20"
                    } ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                        Step {index + 1}
                      </span>
                      <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details - Show on active */}
                    <div className={`grid gap-2 transition-all duration-500 overflow-hidden ${
                      isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      {step.details.map((detail, detailIndex) => (
                        <div 
                          key={detailIndex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          style={{ 
                            animationDelay: `${detailIndex * 100}ms`,
                            animation: isActive ? "fade-in 0.3s ease-out forwards" : "none"
                          }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === activeStep 
                  ? "bg-primary w-6 md:w-8" 
                  : index < activeStep 
                    ? "bg-primary/50" 
                    : "bg-border hover:bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Storyboard;
