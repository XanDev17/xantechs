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

        {/* CSS Robot Figure */}
        <div className="flex-1 relative hidden md:flex items-center justify-center overflow-hidden">
          {/* Glow background */}
          <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] animate-pulse" />
          
          {/* Robot figure */}
          <div className="relative robot-container" style={{ transform: "scale(0.85)" }}>
            {/* Head */}
            <div className="relative mx-auto w-20 h-20 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full shadow-lg mb-1">
              {/* Face visor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-6 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-full flex items-center justify-center gap-3">
                {/* Eyes */}
                <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              </div>
            </div>
            
            {/* Neck */}
            <div className="mx-auto w-6 h-4 bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-sm" />
            
            {/* Torso */}
            <div className="relative mx-auto w-32 h-36 bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-lg shadow-xl flex items-center justify-center">
              {/* Chest plate */}
              <div className="w-20 h-12 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-md shadow-inner flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-blue-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Arms */}
            <div className="absolute left-[-30px] top-28 flex flex-col items-center">
              {/* Shoulder */}
              <div className="w-6 h-6 bg-neutral-700 rounded-full" />
              {/* Upper arm */}
              <div className="w-4 h-16 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full" />
              {/* Elbow */}
              <div className="w-5 h-5 bg-neutral-600 rounded-full" />
              {/* Forearm */}
              <div className="w-3 h-12 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full" />
              {/* Hand */}
              <div className="w-5 h-5 bg-neutral-700 rounded-full" />
            </div>
            
            <div className="absolute right-[-30px] top-28 flex flex-col items-center">
              {/* Shoulder */}
              <div className="w-6 h-6 bg-neutral-700 rounded-full" />
              {/* Upper arm */}
              <div className="w-4 h-16 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full" />
              {/* Elbow */}
              <div className="w-5 h-5 bg-neutral-600 rounded-full" />
              {/* Forearm */}
              <div className="w-3 h-12 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full" />
              {/* Hand */}
              <div className="w-5 h-5 bg-neutral-700 rounded-full" />
            </div>
            
            {/* Waist */}
            <div className="mx-auto w-24 h-6 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-md mt-1" />
            
            {/* Legs */}
            <div className="flex justify-center gap-4 mt-1">
              {/* Left leg */}
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-neutral-700 rounded-full" />
                <div className="w-4 h-16 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full" />
                <div className="w-5 h-5 bg-neutral-600 rounded-full" />
                <div className="w-3 h-16 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full" />
                <div className="w-6 h-3 bg-neutral-800 rounded-sm" />
              </div>
              
              {/* Right leg */}
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-neutral-700 rounded-full" />
                <div className="w-4 h-16 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full" />
                <div className="w-5 h-5 bg-neutral-600 rounded-full" />
                <div className="w-3 h-16 bg-gradient-to-b from-neutral-700 to-neutral-900 rounded-full" />
                <div className="w-6 h-3 bg-neutral-800 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

      <style>{`
        .robot-container {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(0.85); }
          50% { transform: translateY(-15px) scale(0.85); }
        }
      `}</style>
    </div>
  );
};

export default Interactive3DCard;
