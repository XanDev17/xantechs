import { useEffect, useRef } from "react";

interface AnimatedBeamsProps {
  className?: string;
}

const AnimatedBeams = ({ className = "" }: AnimatedBeamsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Horizontal beams */}
      <div className="absolute top-1/4 left-0 w-full h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-beam-horizontal" />
      </div>
      <div className="absolute top-2/3 left-0 w-full h-px" style={{ animationDelay: "1s" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-beam-horizontal-reverse" />
      </div>

      {/* Vertical beams */}
      <div className="absolute left-1/4 top-0 w-px h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-beam-vertical" />
      </div>
      <div className="absolute right-1/3 top-0 w-px h-full" style={{ animationDelay: "0.5s" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/25 to-transparent animate-beam-vertical-reverse" />
      </div>

      {/* Circuit nodes */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary/40 animate-pulse-glow" />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-primary/30 animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-primary/50 animate-pulse-glow" style={{ animationDelay: "1.4s" }} />
      
      {/* Corner circuit patterns */}
      <svg className="absolute top-0 left-0 w-48 h-48 text-primary/10" viewBox="0 0 100 100" fill="none">
        <path d="M0 50 L30 50 L40 40 L60 40" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 0 L50 30 L40 40" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="2" fill="currentColor" />
        <circle cx="30" cy="50" r="1.5" fill="currentColor" />
        <circle cx="50" cy="30" r="1.5" fill="currentColor" />
      </svg>

      <svg className="absolute bottom-0 right-0 w-48 h-48 text-primary/10 rotate-180" viewBox="0 0 100 100" fill="none">
        <path d="M0 50 L30 50 L40 40 L60 40" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 0 L50 30 L40 40" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="40" cy="40" r="2" fill="currentColor" />
        <circle cx="30" cy="50" r="1.5" fill="currentColor" />
        <circle cx="50" cy="30" r="1.5" fill="currentColor" />
      </svg>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />
    </div>
  );
};

export default AnimatedBeams;
