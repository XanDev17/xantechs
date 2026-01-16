import { useRef, useState } from "react";
import robotImage from "@/assets/robot-hero.png";

interface SpotlightCardProps {
  children?: React.ReactNode;
  className?: string;
}

const Interactive3DCard = ({ children, className = "" }: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [robotTransform, setRobotTransform] = useState({ rotateX: 0, rotateY: 0, translateX: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Spotlight position
    setSpotlightPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    // Calculate center offset
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = e.clientX - rect.left - centerX;
    const deltaY = e.clientY - rect.top - centerY;

    // Robot 3D rotation - follows cursor
    const maxRotation = 15;
    const rotateY = (deltaX / centerX) * maxRotation;
    const rotateX = -(deltaY / centerY) * maxRotation * 0.5;
    const translateX = (deltaX / centerX) * 20;

    setRobotTransform({
      rotateX: Math.max(-maxRotation, Math.min(maxRotation, rotateX)),
      rotateY: Math.max(-maxRotation, Math.min(maxRotation, rotateY)),
      translateX: Math.max(-30, Math.min(30, translateX))
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRobotTransform({ rotateX: 0, rotateY: 0, translateX: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-white/10 overflow-hidden bg-[#0a0a0f] ${className}`}
    >
      {/* Spotlight effect that follows mouse */}
      <div
        className="pointer-events-none absolute rounded-full blur-[100px] transition-opacity duration-300"
        style={{
          width: 400,
          height: 400,
          left: spotlightPosition.x - 200,
          top: spotlightPosition.y - 200,
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.5), rgba(96, 165, 250, 0.2), transparent 70%)",
          opacity: isHovered ? 1 : 0.3,
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />
      
      {/* Content wrapper */}
      <div className="flex h-full min-h-[400px] md:min-h-[500px]">
        {/* Text content */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h2>
          <p className="mt-4 text-neutral-400 max-w-md text-base md:text-lg leading-relaxed">
            Bring your ideas to life with cutting-edge technology. We create immersive digital experiences that captivate and convert.
          </p>
          {children}
        </div>

        {/* Robot Image with 3D effect */}
        <div 
          ref={robotRef}
          className="flex-1 relative hidden md:flex items-center justify-center overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {/* Glow behind robot */}
          <div 
            className="absolute w-80 h-80 rounded-full blur-[80px] transition-all duration-300"
            style={{
              background: isHovered 
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(96, 165, 250, 0.1), transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)"
            }}
          />
          
          {/* Robot image with interactive transform */}
          <div 
            className="relative z-10 robot-float"
            style={{
              transform: `perspective(1000px) rotateX(${robotTransform.rotateX}deg) rotateY(${robotTransform.rotateY}deg) translateX(${robotTransform.translateX}px)`,
              transition: "transform 0.15s ease-out",
              transformStyle: "preserve-3d"
            }}
          >
            <img 
              src={robotImage} 
              alt="AI Robot" 
              className="w-auto h-[420px] object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              style={{
                filter: isHovered 
                  ? "drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) brightness(1.1)" 
                  : "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))"
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

      <style>{`
        .robot-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default Interactive3DCard;
