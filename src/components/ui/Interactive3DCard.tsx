import { useRef, useState } from "react";

interface SpotlightCardProps {
  children?: React.ReactNode;
  className?: string;
}

const Interactive3DCard = ({ children, className = "" }: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSpotlightPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl border border-white/10 overflow-hidden bg-[#0a0a0f] ${className}`}
    >
      {/* Spotlight effect that follows mouse */}
      <div
        className="pointer-events-none absolute rounded-full blur-[80px] transition-opacity duration-300"
        style={{
          width: 300,
          height: 300,
          left: spotlightPosition.x - 150,
          top: spotlightPosition.y - 150,
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.4), rgba(96, 165, 250, 0.15), transparent 70%)",
          opacity: isHovered ? 1 : 0,
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

        {/* 3D Visual area with CSS animations */}
        <div className="flex-1 relative hidden md:flex items-center justify-center overflow-hidden">
          {/* Animated floating elements */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/10 blur-xl animate-float" />
          
          {/* Central orb */}
          <div className="relative">
            <div 
              className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl animate-pulse-glow"
              style={{
                boxShadow: "0 0 60px rgba(59, 130, 246, 0.5), inset 0 0 30px rgba(255,255,255,0.2)"
              }}
            />
            {/* Orbiting ring 1 */}
            <div 
              className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
              style={{
                width: "200%",
                height: "200%",
                left: "-50%",
                top: "-50%",
                animation: "spin 20s linear infinite"
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-lg" />
            </div>
            {/* Orbiting ring 2 */}
            <div 
              className="absolute inset-0 border border-blue-500/20 rounded-full"
              style={{
                width: "280%",
                height: "280%",
                left: "-90%",
                top: "-90%",
                animation: "spin 30s linear infinite reverse"
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-300" />
            </div>
          </div>
          
          {/* Floating cubes */}
          <div 
            className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg"
            style={{
              top: "20%",
              right: "25%",
              animation: "float 4s ease-in-out infinite",
              transform: "rotate(45deg)"
            }}
          />
          <div 
            className="absolute w-5 h-5 bg-gradient-to-br from-blue-300 to-blue-500 rounded-md shadow-lg"
            style={{
              bottom: "30%",
              right: "15%",
              animation: "float 5s ease-in-out infinite 0.5s",
              transform: "rotate(12deg)"
            }}
          />
          <div 
            className="absolute w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg shadow-lg"
            style={{
              top: "60%",
              right: "35%",
              animation: "float 3.5s ease-in-out infinite 1s",
              transform: "rotate(-20deg)"
            }}
          />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Interactive3DCard;
