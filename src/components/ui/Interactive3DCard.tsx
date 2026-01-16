import { useRef, useState } from "react";

interface SpotlightCardProps {
  children?: React.ReactNode;
  className?: string;
}

const Interactive3DCard = ({ children, className = "" }: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [headRotation, setHeadRotation] = useState({ x: 0, y: 0 });
  const [armRotation, setArmRotation] = useState({ left: 0, right: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !robotRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const robotRect = robotRef.current.getBoundingClientRect();
    
    // Spotlight position
    setSpotlightPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    // Calculate robot center (head area)
    const robotCenterX = robotRect.left + robotRect.width / 2;
    const robotCenterY = robotRect.top + 40;

    // Calculate offset from robot's perspective
    const deltaX = e.clientX - robotCenterX;
    const deltaY = e.clientY - robotCenterY;
    
    // Normalize eye movement (max 4px offset)
    const maxOffset = 4;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const normalizedX = distance > 0 ? (deltaX / distance) * Math.min(distance / 50, 1) * maxOffset : 0;
    const normalizedY = distance > 0 ? (deltaY / distance) * Math.min(distance / 50, 1) * maxOffset : 0;
    
    setEyeOffset({ x: normalizedX, y: normalizedY });

    // Head rotation (tilt toward cursor)
    const maxRotation = 20;
    const rotateY = (deltaX / rect.width) * maxRotation * 2;
    const rotateX = -(deltaY / rect.height) * maxRotation;
    
    setHeadRotation({ 
      x: Math.max(-maxRotation, Math.min(maxRotation, rotateX)), 
      y: Math.max(-maxRotation, Math.min(maxRotation, rotateY)) 
    });

    // Arm rotation - arms point toward cursor
    const leftArmRotation = Math.max(-45, Math.min(45, (deltaX / rect.width) * 60 - 20));
    const rightArmRotation = Math.max(-45, Math.min(45, (deltaX / rect.width) * 60 + 20));
    setArmRotation({ left: leftArmRotation, right: rightArmRotation });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setEyeOffset({ x: 0, y: 0 });
    setHeadRotation({ x: 0, y: 0 });
    setArmRotation({ left: 0, right: 0 });
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
          
          {/* Robot figure - upper body only */}
          <div 
            ref={robotRef}
            className="relative robot-container" 
            style={{ transform: "scale(1)" }}
          >
            {/* Head - with rotation following cursor */}
            <div 
              className="relative mx-auto w-24 h-24 bg-gradient-to-b from-white to-neutral-200 rounded-full shadow-lg mb-2 transition-transform duration-150 ease-out"
              style={{ 
                transform: `rotateX(${headRotation.x}deg) rotateY(${headRotation.y}deg) translateZ(10px)`,
                boxShadow: "0 4px 30px rgba(255,255,255,0.4), inset 0 -4px 10px rgba(0,0,0,0.1)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Face visor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-7 bg-gradient-to-r from-neutral-100 to-neutral-200 rounded-full flex items-center justify-center gap-4 shadow-inner">
                {/* Eyes - follow mouse */}
                <div 
                  className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] transition-transform duration-100 ease-out"
                  style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                />
                <div 
                  className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] transition-transform duration-100 ease-out"
                  style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
                />
              </div>
            </div>
            
            {/* Neck */}
            <div className="mx-auto w-8 h-5 bg-gradient-to-b from-neutral-100 to-neutral-300 rounded-sm" />
            
            {/* Torso */}
            <div 
              className="relative mx-auto w-40 h-44 bg-gradient-to-b from-white to-neutral-200 rounded-lg shadow-xl flex items-center justify-center"
              style={{ boxShadow: "0 8px 40px rgba(255,255,255,0.3), inset 0 -4px 15px rgba(0,0,0,0.05)" }}
            >
              {/* Chest plate */}
              <div className="w-24 h-14 bg-gradient-to-b from-neutral-100 to-neutral-200 rounded-md shadow-inner flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-blue-400/70 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
                </div>
              </div>
            </div>
            
            {/* Left Arm - moves with cursor */}
            <div 
              className="absolute left-[-40px] top-32 flex flex-col items-center transition-transform duration-200 ease-out origin-top"
              style={{ transform: `rotate(${armRotation.left}deg)` }}
            >
              {/* Shoulder */}
              <div className="w-8 h-8 bg-neutral-100 rounded-full shadow-lg" />
              {/* Upper arm */}
              <div className="w-5 h-20 bg-gradient-to-b from-white to-neutral-200 rounded-full shadow-md" />
              {/* Elbow */}
              <div className="w-6 h-6 bg-neutral-200 rounded-full shadow-md" />
              {/* Forearm */}
              <div className="w-4 h-16 bg-gradient-to-b from-white to-neutral-200 rounded-full shadow-md" />
              {/* Hand - with fingers */}
              <div className="relative">
                <div className="w-7 h-7 bg-neutral-100 rounded-full shadow-lg" />
                {/* Fingers */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-0.5">
                  <div className="w-1.5 h-4 bg-neutral-200 rounded-full" />
                  <div className="w-1.5 h-5 bg-neutral-200 rounded-full" />
                  <div className="w-1.5 h-5 bg-neutral-200 rounded-full" />
                  <div className="w-1.5 h-4 bg-neutral-200 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Right Arm - moves with cursor */}
            <div 
              className="absolute right-[-40px] top-32 flex flex-col items-center transition-transform duration-200 ease-out origin-top"
              style={{ transform: `rotate(${armRotation.right}deg)` }}
            >
              {/* Shoulder */}
              <div className="w-8 h-8 bg-neutral-100 rounded-full shadow-lg" />
              {/* Upper arm */}
              <div className="w-5 h-20 bg-gradient-to-b from-white to-neutral-200 rounded-full shadow-md" />
              {/* Elbow */}
              <div className="w-6 h-6 bg-neutral-200 rounded-full shadow-md" />
              {/* Forearm */}
              <div className="w-4 h-16 bg-gradient-to-b from-white to-neutral-200 rounded-full shadow-md" />
              {/* Hand - with fingers */}
              <div className="relative">
                <div className="w-7 h-7 bg-neutral-100 rounded-full shadow-lg" />
                {/* Fingers */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-0.5">
                  <div className="w-1.5 h-4 bg-neutral-200 rounded-full" />
                  <div className="w-1.5 h-5 bg-neutral-200 rounded-full" />
                  <div className="w-1.5 h-5 bg-neutral-200 rounded-full" />
                  <div className="w-1.5 h-4 bg-neutral-200 rounded-full" />
                </div>
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
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Interactive3DCard;
