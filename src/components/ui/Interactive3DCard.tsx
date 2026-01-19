import { useRef, useState, Suspense } from "react";
import Robot3DCanvas from "./Robot3D";
interface SpotlightCardProps {
  children?: React.ReactNode;
  className?: string;
}
const Interactive3DCard = ({
  children,
  className = ""
}: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: 0,
    y: 0
  });
  const [isHovered, setIsHovered] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({
    x: 0,
    y: 0
  });
  const [headRotation, setHeadRotation] = useState({
    x: 0,
    y: 0
  });
  const [armRotation, setArmRotation] = useState({
    leftX: 0,
    leftY: 0,
    rightX: 0,
    rightY: 0
  });
  const [fingerCurl, setFingerCurl] = useState(0); // 0 = open, 1 = closed
  const [elbowBend, setElbowBend] = useState(0); // 0 = straight, higher = more bent
  const [shoulderCompress, setShoulderCompress] = useState({
    left: 0,
    right: 0
  }); // shoulder shrug/compression
  const [wristRotation, setWristRotation] = useState({
    left: 0,
    right: 0
  }); // wrist twist for waving

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !robotRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const robotRect = robotRef.current.getBoundingClientRect();

    // Spotlight position
    setSpotlightPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
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
    const normalizedX = distance > 0 ? deltaX / distance * Math.min(distance / 50, 1) * maxOffset : 0;
    const normalizedY = distance > 0 ? deltaY / distance * Math.min(distance / 50, 1) * maxOffset : 0;
    setEyeOffset({
      x: normalizedX,
      y: normalizedY
    });

    // Head rotation (tilt toward cursor)
    const maxRotation = 20;
    const rotateY = deltaX / rect.width * maxRotation * 2;
    const rotateX = -(deltaY / rect.height) * maxRotation;
    setHeadRotation({
      x: Math.max(-maxRotation, Math.min(maxRotation, rotateX)),
      y: Math.max(-maxRotation, Math.min(maxRotation, rotateY))
    });

    // Arm rotation - arms point toward cursor (X for side-to-side, Y for raise/lower)
    const leftArmX = Math.max(-45, Math.min(45, deltaX / rect.width * 60 - 20));
    const rightArmX = Math.max(-45, Math.min(45, deltaX / rect.width * 60 + 20));
    // Y rotation raises arms when cursor is above robot, lowers when below
    const armY = Math.max(-60, Math.min(30, -(deltaY / rect.height) * 80));
    setArmRotation({
      leftX: leftArmX,
      leftY: armY,
      rightX: rightArmX,
      rightY: armY
    });

    // Finger curl based on distance from robot - closer = more closed fist
    const normalizedDistance = Math.min(1, distance / 300);
    setFingerCurl(1 - normalizedDistance); // Closer = more curled

    // Elbow bends when arm is raised (negative armY means raised)
    const elbowBendAmount = Math.max(0, -armY / 60) * 90; // More raised = more bent
    setElbowBend(elbowBendAmount);

    // Shoulder compression - raises shoulder when arm goes up
    const leftShoulderLift = Math.max(0, -armY / 60) * 8;
    const rightShoulderLift = Math.max(0, -armY / 60) * 8;
    setShoulderCompress({
      left: leftShoulderLift,
      right: rightShoulderLift
    });

    // Wrist rotation follows horizontal cursor position for wave effect
    const wristTwist = deltaX / rect.width * 30;
    setWristRotation({
      left: wristTwist,
      right: -wristTwist
    });
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setEyeOffset({
      x: 0,
      y: 0
    });
    setHeadRotation({
      x: 0,
      y: 0
    });
    setArmRotation({
      leftX: 0,
      leftY: 0,
      rightX: 0,
      rightY: 0
    });
    setFingerCurl(0);
    setElbowBend(0);
    setShoulderCompress({
      left: 0,
      right: 0
    });
    setWristRotation({
      left: 0,
      right: 0
    });
  };
  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
            : "transparent",
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      {/* Robot container */}
      <div ref={robotRef} className="relative z-0">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><span className="loader"></span></div>}>
          <Robot3DCanvas
            eyeOffset={eyeOffset}
            headRotation={headRotation}
            armRotation={armRotation}
            fingerCurl={fingerCurl}
            elbowBend={elbowBend}
            shoulderCompress={shoulderCompress}
            wristRotation={wristRotation}
          />
        </Suspense>
      </div>
      
      {children}
    </div>
  );
};
export default Interactive3DCard;