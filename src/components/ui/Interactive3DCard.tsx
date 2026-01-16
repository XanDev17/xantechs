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
          <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute w-48 h-48 bg-cyan-400/15 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: "1s" }} />
          
          {/* Robot figure - humanoid upper body */}
          <div 
            ref={robotRef}
            className="relative" 
            style={{ perspective: "1000px" }}
          >
            <div className="robot-float">
              {/* Head - more realistic humanoid shape */}
              <div 
                className="relative mx-auto"
                style={{ 
                  transform: `perspective(600px) rotateX(${headRotation.x}deg) rotateY(${headRotation.y}deg)`,
                  transition: "transform 0.15s ease-out"
                }}
              >
                {/* Skull shape */}
                <div 
                  className="relative w-20 h-24 mx-auto"
                  style={{
                    background: "linear-gradient(180deg, #f8f8f8 0%, #e8e8e8 40%, #d8d8d8 100%)",
                    borderRadius: "45% 45% 42% 42% / 40% 40% 55% 55%",
                    boxShadow: "0 8px 40px rgba(255,255,255,0.5), inset 0 -8px 20px rgba(0,0,0,0.08), inset 0 8px 15px rgba(255,255,255,0.9)"
                  }}
                >
                  {/* Forehead accent */}
                  <div 
                    className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-6 rounded-full"
                    style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)" }}
                  />
                  
                  {/* Face plate / visor area */}
                  <div 
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-10 rounded-lg overflow-hidden"
                    style={{
                      background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)",
                      boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5), 0 0 20px rgba(59,130,246,0.3)"
                    }}
                  >
                    {/* Eyes container */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-5">
                      {/* Left eye */}
                      <div className="relative">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{
                            background: "radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6 50%, #1d4ed8)",
                            boxShadow: "0 0 15px rgba(59,130,246,0.9), 0 0 30px rgba(59,130,246,0.5)",
                            transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                            transition: "transform 0.1s ease-out"
                          }}
                        >
                          {/* Pupil */}
                          <div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"
                            style={{ boxShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                          />
                        </div>
                      </div>
                      {/* Right eye */}
                      <div className="relative">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{
                            background: "radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6 50%, #1d4ed8)",
                            boxShadow: "0 0 15px rgba(59,130,246,0.9), 0 0 30px rgba(59,130,246,0.5)",
                            transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                            transition: "transform 0.1s ease-out"
                          }}
                        >
                          {/* Pupil */}
                          <div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"
                            style={{ boxShadow: "0 0 8px rgba(255,255,255,0.8)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chin detail */}
                  <div 
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-3 rounded-full"
                    style={{ background: "linear-gradient(180deg, #d0d0d0 0%, #e0e0e0 100%)" }}
                  />
                </div>
                
                {/* Ear panels */}
                <div 
                  className="absolute top-10 -left-1 w-3 h-8 rounded-full"
                  style={{ background: "linear-gradient(90deg, #c0c0c0 0%, #e0e0e0 100%)" }}
                />
                <div 
                  className="absolute top-10 -right-1 w-3 h-8 rounded-full"
                  style={{ background: "linear-gradient(-90deg, #c0c0c0 0%, #e0e0e0 100%)" }}
                />
              </div>
              
              {/* Neck - more mechanical */}
              <div className="mx-auto w-6 h-4 relative">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, #d0d0d0 0%, #a0a0a0 50%, #d0d0d0 100%)",
                    borderRadius: "2px"
                  }}
                />
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-neutral-400 rounded-full" />
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-neutral-400 rounded-full" />
              </div>
              
              {/* Torso - more humanoid shape */}
              <div className="relative mx-auto">
                {/* Shoulders */}
                <div 
                  className="w-48 h-8 mx-auto"
                  style={{
                    background: "linear-gradient(180deg, #f0f0f0 0%, #d8d8d8 100%)",
                    borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                    boxShadow: "0 -4px 20px rgba(255,255,255,0.4)"
                  }}
                />
                
                {/* Main torso */}
                <div 
                  className="w-36 h-40 mx-auto relative"
                  style={{
                    background: "linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 50%, #d0d0d0 100%)",
                    borderRadius: "10% 10% 30% 30% / 5% 5% 20% 20%",
                    boxShadow: "0 10px 50px rgba(255,255,255,0.3), inset 0 -10px 30px rgba(0,0,0,0.05)"
                  }}
                >
                  {/* Chest plates */}
                  <div className="absolute top-4 left-4 w-12 h-16 rounded-lg" 
                    style={{ 
                      background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(200,200,200,0.3) 100%)",
                      boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1)"
                    }} 
                  />
                  <div className="absolute top-4 right-4 w-12 h-16 rounded-lg" 
                    style={{ 
                      background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(200,200,200,0.3) 100%)",
                      boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1)"
                    }} 
                  />
                  
                  {/* Core reactor */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)",
                      boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)"
                    }}
                  >
                    <div className="absolute inset-2 rounded-full border border-blue-400/50">
                      <div className="absolute inset-1 rounded-full bg-blue-500 animate-pulse"
                        style={{ boxShadow: "0 0 20px rgba(59,130,246,1), 0 0 40px rgba(59,130,246,0.5)" }}
                      />
                    </div>
                  </div>
                  
                  {/* Abdominal sections */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col gap-1.5">
                    <div className="w-16 h-3 bg-neutral-300/50 rounded-sm" />
                    <div className="w-14 h-3 bg-neutral-300/50 rounded-sm mx-auto" />
                    <div className="w-12 h-3 bg-neutral-300/50 rounded-sm mx-auto" />
                  </div>
                </div>
              </div>
              
              {/* Left Arm - more realistic */}
              <div 
                className="absolute left-[-36px] top-32 flex flex-col items-center origin-top"
                style={{ 
                  transform: `rotate(${armRotation.left}deg)`,
                  transition: "transform 0.2s ease-out"
                }}
              >
                {/* Shoulder joint */}
                <div 
                  className="w-10 h-10 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #f0f0f0, #c0c0c0)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                  }}
                />
                {/* Upper arm */}
                <div 
                  className="w-6 h-20 -mt-1"
                  style={{
                    background: "linear-gradient(90deg, #d0d0d0 0%, #f0f0f0 50%, #d0d0d0 100%)",
                    borderRadius: "20px"
                  }}
                />
                {/* Elbow joint */}
                <div 
                  className="w-7 h-7 rounded-full -mt-1"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #e0e0e0, #a0a0a0)",
                    boxShadow: "inset 0 -2px 5px rgba(0,0,0,0.1)"
                  }}
                />
                {/* Forearm */}
                <div 
                  className="w-5 h-16 -mt-1"
                  style={{
                    background: "linear-gradient(90deg, #d0d0d0 0%, #f0f0f0 50%, #d0d0d0 100%)",
                    borderRadius: "15px"
                  }}
                />
                {/* Wrist */}
                <div className="w-4 h-2 bg-neutral-400 rounded-full" />
                {/* Hand */}
                <div className="relative">
                  <div 
                    className="w-8 h-10 rounded-lg"
                    style={{
                      background: "linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 100%)",
                      borderRadius: "30% 30% 40% 40%"
                    }}
                  />
                  {/* Fingers */}
                  <div className="absolute -bottom-4 left-0 flex gap-0.5">
                    <div className="w-1.5 h-5 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                    <div className="w-1.5 h-6 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                    <div className="w-1.5 h-6 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                    <div className="w-1.5 h-5 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                    <div className="w-1.5 h-4 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Right Arm - more realistic */}
              <div 
                className="absolute right-[-36px] top-32 flex flex-col items-center origin-top"
                style={{ 
                  transform: `rotate(${armRotation.right}deg)`,
                  transition: "transform 0.2s ease-out"
                }}
              >
                {/* Shoulder joint */}
                <div 
                  className="w-10 h-10 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 70% 30%, #f0f0f0, #c0c0c0)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                  }}
                />
                {/* Upper arm */}
                <div 
                  className="w-6 h-20 -mt-1"
                  style={{
                    background: "linear-gradient(90deg, #d0d0d0 0%, #f0f0f0 50%, #d0d0d0 100%)",
                    borderRadius: "20px"
                  }}
                />
                {/* Elbow joint */}
                <div 
                  className="w-7 h-7 rounded-full -mt-1"
                  style={{
                    background: "radial-gradient(circle at 70% 30%, #e0e0e0, #a0a0a0)",
                    boxShadow: "inset 0 -2px 5px rgba(0,0,0,0.1)"
                  }}
                />
                {/* Forearm */}
                <div 
                  className="w-5 h-16 -mt-1"
                  style={{
                    background: "linear-gradient(90deg, #d0d0d0 0%, #f0f0f0 50%, #d0d0d0 100%)",
                    borderRadius: "15px"
                  }}
                />
                {/* Wrist */}
                <div className="w-4 h-2 bg-neutral-400 rounded-full" />
                {/* Hand */}
                <div className="relative">
                  <div 
                    className="w-8 h-10 rounded-lg"
                    style={{
                      background: "linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 100%)",
                      borderRadius: "30% 30% 40% 40%"
                    }}
                  />
                  {/* Fingers */}
                  <div className="absolute -bottom-4 left-0 flex gap-0.5">
                    <div className="w-1.5 h-4 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                    <div className="w-1.5 h-5 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                    <div className="w-1.5 h-6 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                    <div className="w-1.5 h-6 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                    <div className="w-1.5 h-5 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
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
