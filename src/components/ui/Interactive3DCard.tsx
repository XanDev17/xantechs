'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

interface Interactive3DCardProps {
  children?: React.ReactNode;
  className?: string;
}

const Interactive3DCard = ({ children, className = "" }: Interactive3DCardProps) => {
  return (
    <Card className={`w-full min-h-[500px] md:h-[500px] bg-black/[0.96] relative overflow-hidden ${className}`}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-12 relative z-10 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h2>
          <p className="mt-3 md:mt-4 text-neutral-400 max-w-md text-sm sm:text-base md:text-lg leading-relaxed">
            Bring your ideas to life with cutting-edge technology. We create immersive digital experiences that captivate and convert.
          </p>
          {children}
        </div>

        {/* Right content - Spline Scene */}
        <div className="flex-1 relative h-[220px] sm:h-[260px] md:h-full order-1 md:order-2 overflow-visible">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full scale-[0.55] sm:scale-[0.65] md:scale-100 origin-center"
          />
        </div>
      </div>
    </Card>
  );
};

export default Interactive3DCard;
