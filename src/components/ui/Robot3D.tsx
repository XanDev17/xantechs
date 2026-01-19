import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
interface Robot3DProps {
  eyeOffset: {
    x: number;
    y: number;
  };
  headRotation: {
    x: number;
    y: number;
  };
  armRotation: {
    leftX: number;
    leftY: number;
    rightX: number;
    rightY: number;
  };
  fingerCurl: number;
  elbowBend: number;
  shoulderCompress: {
    left: number;
    right: number;
  };
  wristRotation: {
    left: number;
    right: number;
  };
}

// Glowing thruster component
function Thruster({
  position,
  scale = 1
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const thrusterRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const thrusterMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#00ffff",
    emissive: "#00ffff",
    emissiveIntensity: 2,
    transparent: true,
    opacity: 0.9
  }), []);
  const glowMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#00ffff",
    emissive: "#00ffff",
    emissiveIntensity: 1.5,
    transparent: true,
    opacity: 0.3
  }), []);
  useFrame(state => {
    if (thrusterRef.current) {
      thrusterRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 8) * 0.2;
      (thrusterRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 2 + Math.sin(state.clock.elapsedTime * 12) * 0.5;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(scale * (1 + Math.sin(state.clock.elapsedTime * 6) * 0.15));
    }
  });
  return <group position={position}>
      {/* Core thruster */}
      <mesh ref={thrusterRef} material={thrusterMaterial}>
        <coneGeometry args={[0.03 * scale, 0.12 * scale, 16]} />
      </mesh>
      {/* Outer glow */}
      <mesh ref={glowRef} material={glowMaterial}>
        <sphereGeometry args={[0.06 * scale, 16, 16]} />
      </mesh>
      {/* Thruster ring */}
      <mesh position={[0, 0.05 * scale, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.025 * scale, 0.008 * scale, 8, 16]} />
        <meshStandardMaterial color="#0088aa" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>;
}

// Exposed cable component
function Cable({
  start,
  end,
  color = "#333333"
}: {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}) {
  const cableMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color,
    metalness: 0.3,
    roughness: 0.7
  }), [color]);
  const midY = (start[1] + end[1]) / 2 - 0.02;
  return <group>
      <mesh position={[start[0], start[1], start[2]]} material={cableMaterial}>
        <sphereGeometry args={[0.012, 8, 8]} />
      </mesh>
      <mesh position={[(start[0] + end[0]) / 2, midY, (start[2] + end[2]) / 2]} material={cableMaterial}>
        <capsuleGeometry args={[0.008, Math.abs(end[0] - start[0]) * 0.8, 4, 8]} />
      </mesh>
      <mesh position={[end[0], end[1], end[2]]} material={cableMaterial}>
        <sphereGeometry args={[0.012, 8, 8]} />
      </mesh>
    </group>;
}

// Armor plate component
function ArmorPlate({
  position,
  rotation = [0, 0, 0],
  size,
  material
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  size: [number, number, number];
  material: THREE.Material;
}) {
  return <mesh position={position} rotation={rotation} material={material}>
      <boxGeometry args={size} />
    </mesh>;
}
function RobotModel({
  eyeOffset,
  headRotation,
  armRotation,
  fingerCurl,
  elbowBend,
  shoulderCompress,
  wristRotation
}: Robot3DProps) {
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftElbowRef = useRef<THREE.Group>(null);
  const rightElbowRef = useRef<THREE.Group>(null);
  const leftWristRef = useRef<THREE.Group>(null);
  const rightWristRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftKneeRef = useRef<THREE.Group>(null);
  const rightKneeRef = useRef<THREE.Group>(null);

  // Biomechanical materials
  const armorMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#1a1a1a",
    metalness: 0.85,
    roughness: 0.2
  }), []);
  const ceramicMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#2a2a2a",
    metalness: 0.4,
    roughness: 0.3
  }), []);
  const frameMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#0d0d0d",
    metalness: 0.95,
    roughness: 0.1
  }), []);
  const hydraulicMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#444444",
    metalness: 0.7,
    roughness: 0.4
  }), []);
  const jointMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#222222",
    metalness: 0.6,
    roughness: 0.5
  }), []);
  const visorMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#001a1a",
    metalness: 0.95,
    roughness: 0.05,
    envMapIntensity: 4
  }), []);
  const eyeMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#00ffff",
    emissive: "#00ffff",
    emissiveIntensity: 1.5,
    metalness: 0.2,
    roughness: 0.1
  }), []);
  const accentMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#00aaaa",
    emissive: "#00ffff",
    emissiveIntensity: 0.3,
    metalness: 0.8,
    roughness: 0.2
  }), []);

  // Human-like walking animation
  useFrame(state => {
    const time = state.clock.elapsedTime;

    // Walking parameters - slower, more natural pace
    const walkSpeed = 1.8; // Slower for more realistic human gait
    const strideLength = 0.28; // How far legs swing

    // Walking cycle phase (0 to 2π)
    const walkCycle = time * walkSpeed;

    // === BODY MOTION ===
    if (bodyRef.current) {
      // Vertical bob - humans bob twice per stride (once per foot strike)
      // Lowest point when foot strikes, highest at mid-stance
      const verticalBob = Math.abs(Math.sin(walkCycle * 2)) * 0.018;
      bodyRef.current.position.y = -0.3 + verticalBob;

      // Lateral sway - weight shifts side to side with each step
      const lateralSway = Math.sin(walkCycle) * 0.018;
      bodyRef.current.position.x = lateralSway * 0.3;
      bodyRef.current.rotation.z = lateralSway * 0.8;

      // Pelvic rotation - hips rotate opposite to shoulders
      const pelvicRotation = Math.sin(walkCycle) * 0.04;
      bodyRef.current.rotation.y = pelvicRotation;

      // Slight forward lean while walking
      bodyRef.current.rotation.x = 0.02;
    }

    // === LEG MOTION ===
    // Human gait: swing phase (leg moving forward) and stance phase (leg on ground)
    if (leftLegRef.current) {
      // Left leg swing with slight ease-in-out feel
      const leftSwing = Math.sin(walkCycle) * strideLength;
      leftLegRef.current.rotation.x = leftSwing;
      // Slight outward rotation during swing
      leftLegRef.current.rotation.z = Math.sin(walkCycle) > 0 ? -0.02 : 0;
    }
    if (rightLegRef.current) {
      const rightSwing = Math.sin(walkCycle + Math.PI) * strideLength;
      rightLegRef.current.rotation.x = rightSwing;
      rightLegRef.current.rotation.z = Math.sin(walkCycle + Math.PI) > 0 ? 0.02 : 0;
    }

    // Knee bend - bends during swing phase, extends during stance
    // Humans bend knee more when leg swings back, less when forward
    if (leftKneeRef.current) {
      const leftPhase = Math.sin(walkCycle);
      // Knee bends when leg swings back (negative phase)
      const kneeBend = leftPhase < 0 ? Math.abs(leftPhase) * 0.45 : Math.abs(leftPhase) * 0.1;
      leftKneeRef.current.rotation.x = kneeBend;
    }
    if (rightKneeRef.current) {
      const rightPhase = Math.sin(walkCycle + Math.PI);
      const kneeBend = rightPhase < 0 ? Math.abs(rightPhase) * 0.45 : Math.abs(rightPhase) * 0.1;
      rightKneeRef.current.rotation.x = kneeBend;
    }

    // === HEAD MOTION ===
    if (headRef.current) {
      // Head stabilization - humans keep head steady, it counter-rotates against body
      // This is a key human trait - vestibulo-ocular reflex
      const headCounterRotation = -Math.sin(walkCycle) * 0.02;
      const headVerticalStabilization = -Math.abs(Math.sin(walkCycle * 2)) * 0.01;
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, headRotation.x * Math.PI / 180 + headVerticalStabilization - 0.03, 0.12);
      headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, headCounterRotation, 0.12);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, headRotation.y * Math.PI / 180 - Math.sin(walkCycle) * 0.015, 0.1);
    }

    // Eye tracking
    if (leftEyeRef.current) {
      leftEyeRef.current.position.x = THREE.MathUtils.lerp(leftEyeRef.current.position.x, -0.1 + eyeOffset.x * 0.015, 0.12);
      leftEyeRef.current.position.y = THREE.MathUtils.lerp(leftEyeRef.current.position.y, 0.03 + eyeOffset.y * 0.015, 0.12);
    }
    if (rightEyeRef.current) {
      rightEyeRef.current.position.x = THREE.MathUtils.lerp(rightEyeRef.current.position.x, 0.1 + eyeOffset.x * 0.015, 0.12);
      rightEyeRef.current.position.y = THREE.MathUtils.lerp(rightEyeRef.current.position.y, 0.03 + eyeOffset.y * 0.015, 0.12);
    }

    // === ARM MOTION ===
    // Human arm swing: arms swing opposite to legs (contralateral pattern)
    // Right arm forward when left leg forward, with natural elbow bend
    const armSwingAmplitude = 0.22;

    // Calculate user input influence
    const leftArmUserInput = Math.abs(armRotation.leftY) + Math.abs(armRotation.leftX);
    const rightArmUserInput = Math.abs(armRotation.rightY) + Math.abs(armRotation.rightX);
    const leftSwingReduction = Math.max(0, 1 - leftArmUserInput / 25);
    const rightSwingReduction = Math.max(0, 1 - rightArmUserInput / 25);
    if (leftArmRef.current) {
      // Left arm swings forward when right leg is forward (walkCycle + PI)
      const armSwing = Math.sin(walkCycle + Math.PI) * armSwingAmplitude * leftSwingReduction;

      // Natural arm swing with slight outward arc at front of swing
      leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, armSwing + armRotation.leftY * Math.PI / 180, 0.1);

      // Arm naturally swings slightly outward when moving forward
      const swingOutward = Math.sin(walkCycle + Math.PI) > 0 ? 0.03 : 0;
      const userRaise = Math.max(0, -armRotation.leftY) * 0.012;
      leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, 0.12 + swingOutward * leftSwingReduction + armRotation.leftX * Math.PI / 180 + userRaise, 0.1);

      // Shoulder rises slightly when arm swings back
      leftArmRef.current.position.y = THREE.MathUtils.lerp(leftArmRef.current.position.y, 1.65 + shoulderCompress.left * 0.01 + (armSwing < 0 ? 0.01 : 0), 0.1);
    }
    if (rightArmRef.current) {
      // Right arm swings forward when left leg is forward (walkCycle)
      const armSwing = Math.sin(walkCycle) * armSwingAmplitude * rightSwingReduction;
      rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, armSwing + armRotation.rightY * Math.PI / 180, 0.1);
      const swingOutward = Math.sin(walkCycle) > 0 ? -0.03 : 0;
      const userRaise = Math.max(0, -armRotation.rightY) * 0.012;
      rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -0.12 + swingOutward * rightSwingReduction + armRotation.rightX * Math.PI / 180 - userRaise, 0.1);
      rightArmRef.current.position.y = THREE.MathUtils.lerp(rightArmRef.current.position.y, 1.65 + shoulderCompress.right * 0.01 + (armSwing < 0 ? 0.01 : 0), 0.1);
    }

    // === ELBOW MOTION ===
    // Elbows bend more when arm swings back (natural human gait)
    if (leftElbowRef.current) {
      const armPhase = Math.sin(walkCycle + Math.PI);
      // Elbow bends when arm is behind body, extends when in front
      const naturalBend = armPhase < 0 ? Math.abs(armPhase) * 0.35 : 0.08;
      const userBend = Math.max(0, -armRotation.leftY / 50) * 0.5;
      leftElbowRef.current.rotation.x = THREE.MathUtils.lerp(leftElbowRef.current.rotation.x, naturalBend * leftSwingReduction + userBend + elbowBend * Math.PI / 180 * 0.4, 0.1);
    }
    if (rightElbowRef.current) {
      const armPhase = Math.sin(walkCycle);
      const naturalBend = armPhase < 0 ? Math.abs(armPhase) * 0.35 : 0.08;
      const userBend = Math.max(0, -armRotation.rightY / 50) * 0.5;
      rightElbowRef.current.rotation.x = THREE.MathUtils.lerp(rightElbowRef.current.rotation.x, naturalBend * rightSwingReduction + userBend + elbowBend * Math.PI / 180 * 0.4, 0.1);
    }

    // Wrists
    if (leftWristRef.current) {
      leftWristRef.current.rotation.z = THREE.MathUtils.lerp(leftWristRef.current.rotation.z, wristRotation.left * Math.PI / 180, 0.08);
      leftWristRef.current.rotation.x = THREE.MathUtils.lerp(leftWristRef.current.rotation.x, fingerCurl * 20 * Math.PI / 180, 0.08);
    }
    if (rightWristRef.current) {
      rightWristRef.current.rotation.z = THREE.MathUtils.lerp(rightWristRef.current.rotation.z, wristRotation.right * Math.PI / 180, 0.08);
      rightWristRef.current.rotation.x = THREE.MathUtils.lerp(rightWristRef.current.rotation.x, fingerCurl * 20 * Math.PI / 180, 0.08);
    }
  });
  return <group ref={bodyRef} position={[0, -0.3, 0]} scale={0.52}>
      {/* ========== HEAD ========== */}
      <group ref={headRef} position={[0, 2.2, 0]}>
        {/* Main skull - segmented armor */}
        <mesh material={armorMaterial}>
          <sphereGeometry args={[0.28, 32, 32]} />
        </mesh>
        {/* Top armor plate */}
        <ArmorPlate position={[0, 0.15, 0]} size={[0.35, 0.08, 0.3]} material={ceramicMaterial} />
        {/* Side armor plates */}
        <ArmorPlate position={[-0.22, 0, 0]} rotation={[0, 0, 0.3]} size={[0.08, 0.2, 0.22]} material={ceramicMaterial} />
        <ArmorPlate position={[0.22, 0, 0]} rotation={[0, 0, -0.3]} size={[0.08, 0.2, 0.22]} material={ceramicMaterial} />
        {/* Visor - curved face plate */}
        <mesh position={[0, 0, 0.2]} material={visorMaterial} rotation={[0.15, 0, 0]}>
          <sphereGeometry args={[0.24, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2.5]} />
        </mesh>
        {/* Visor frame */}
        <mesh position={[0, 0.08, 0.18]} rotation={[0.4, 0, 0]} material={frameMaterial}>
          <torusGeometry args={[0.18, 0.015, 8, 32, Math.PI]} />
        </mesh>
        {/* Eyes with glow */}
        <mesh ref={leftEyeRef} position={[-0.1, 0.03, 0.26]} material={eyeMaterial}>
          <circleGeometry args={[0.035, 32]} />
        </mesh>
        <mesh ref={rightEyeRef} position={[0.1, 0.03, 0.26]} material={eyeMaterial}>
          <circleGeometry args={[0.035, 32]} />
        </mesh>
        {/* Eye housings */}
        <mesh position={[-0.1, 0.03, 0.24]} material={frameMaterial}>
          <torusGeometry args={[0.045, 0.008, 8, 24]} />
        </mesh>
        <mesh position={[0.1, 0.03, 0.24]} material={frameMaterial}>
          <torusGeometry args={[0.045, 0.008, 8, 24]} />
        </mesh>
        {/* Antenna/sensor arrays */}
        <mesh position={[-0.2, 0.2, -0.05]} rotation={[0, 0, 0.4]} material={accentMaterial}>
          <capsuleGeometry args={[0.015, 0.12, 8, 16]} />
        </mesh>
        <mesh position={[0.2, 0.2, -0.05]} rotation={[0, 0, -0.4]} material={accentMaterial}>
          <capsuleGeometry args={[0.015, 0.12, 8, 16]} />
        </mesh>
        {/* Back head vents */}
        {[-0.08, 0, 0.08].map((x, i) => <mesh key={i} position={[x, 0, -0.26]} material={hydraulicMaterial}>
            <boxGeometry args={[0.04, 0.15, 0.02]} />
          </mesh>)}
      </group>

      {/* ========== NECK ========== */}
      <group position={[0, 1.9, 0]}>
        {/* Neck segments - visible mechanics */}
        <mesh material={hydraulicMaterial}>
          <cylinderGeometry args={[0.08, 0.1, 0.15, 16]} />
        </mesh>
        {/* Neck rings */}
        {[0.05, 0.02, -0.02, -0.05].map((y, i) => <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={frameMaterial}>
            <torusGeometry args={[0.085 + i * 0.003, 0.008, 8, 24]} />
          </mesh>)}
        {/* Exposed cables */}
        <Cable start={[-0.06, 0.05, 0.05]} end={[-0.08, -0.05, 0.06]} color="#444444" />
        <Cable start={[0.06, 0.05, 0.05]} end={[0.08, -0.05, 0.06]} color="#444444" />
      </group>

      {/* ========== TORSO ========== */}
      <group position={[0, 1.25, 0]}>
        {/* Shoulder mount - heavy armor */}
        <mesh position={[0, 0.4, 0]} material={armorMaterial}>
          <boxGeometry args={[0.95, 0.15, 0.32]} />
        </mesh>
        {/* Shoulder pauldrons */}
        <mesh position={[-0.42, 0.42, 0]} material={ceramicMaterial}>
          <sphereGeometry args={[0.14, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5]} />
        </mesh>
        <mesh position={[0.42, 0.42, 0]} material={ceramicMaterial}>
          <sphereGeometry args={[0.14, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.5]} />
        </mesh>
        {/* Chest plates - segmented */}
        <ArmorPlate position={[-0.15, 0.18, 0.12]} rotation={[0, 0.1, 0]} size={[0.22, 0.28, 0.08]} material={ceramicMaterial} />
        <ArmorPlate position={[0.15, 0.18, 0.12]} rotation={[0, -0.1, 0]} size={[0.22, 0.28, 0.08]} material={ceramicMaterial} />
        {/* Core chassis */}
        <mesh position={[0, 0.1, 0]} material={frameMaterial}>
          <boxGeometry args={[0.55, 0.45, 0.3]} />
        </mesh>
        {/* Center reactor/core glow */}
        <mesh position={[0, 0.15, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
        </mesh>
        <mesh position={[0, 0.15, 0.17]}>
          <torusGeometry args={[0.07, 0.012, 8, 24]} />
          <meshStandardMaterial color="#00aaaa" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Abdominal segments */}
        <mesh position={[0, -0.12, 0]} material={hydraulicMaterial}>
          <boxGeometry args={[0.4, 0.18, 0.24]} />
        </mesh>
        {/* Abdominal cables */}
        <Cable start={[-0.12, 0.02, 0.13]} end={[-0.1, -0.15, 0.12]} color="#333333" />
        <Cable start={[0.12, 0.02, 0.13]} end={[0.1, -0.15, 0.12]} color="#333333" />
        {/* Side vents */}
        {[-1, 1].map((side, i) => <group key={i} position={[side * 0.28, 0.05, 0]}>
            {[0.08, 0.02, -0.04].map((y, j) => <mesh key={j} position={[0, y, 0]} material={hydraulicMaterial}>
                <boxGeometry args={[0.03, 0.04, 0.2]} />
              </mesh>)}
          </group>)}
      </group>

      {/* ========== WAIST ========== */}
      <group position={[0, 0.88, 0]}>
        <mesh material={jointMaterial}>
          <cylinderGeometry args={[0.16, 0.2, 0.12, 16]} />
        </mesh>
        {/* Waist rings */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={accentMaterial}>
          <torusGeometry args={[0.17, 0.015, 8, 24]} />
        </mesh>
      </group>

      {/* ========== HIPS ========== */}
      <group position={[0, 0.7, 0]}>
        <mesh material={armorMaterial}>
          <boxGeometry args={[0.5, 0.15, 0.28]} />
        </mesh>
        {/* Hip armor plates */}
        <ArmorPlate position={[-0.22, 0, 0.08]} size={[0.12, 0.18, 0.12]} material={ceramicMaterial} />
        <ArmorPlate position={[0.22, 0, 0.08]} size={[0.12, 0.18, 0.12]} material={ceramicMaterial} />
      </group>

      {/* ========== LEFT ARM ========== */}
      <group ref={leftArmRef} position={[-0.52, 1.65, 0]}>
        {/* Shoulder joint - ball */}
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.1, 32, 32]} />
        </mesh>
        {/* Upper arm armor */}
        <mesh position={[0, -0.2, 0]} material={armorMaterial}>
          <capsuleGeometry args={[0.075, 0.24, 16, 32]} />
        </mesh>
        {/* Bicep plate */}
        <ArmorPlate position={[-0.05, -0.15, 0.05]} rotation={[0, 0, 0.2]} size={[0.04, 0.14, 0.08]} material={ceramicMaterial} />
        {/* Hydraulic detail */}
        <mesh position={[0.05, -0.2, 0]} material={hydraulicMaterial}>
          <capsuleGeometry args={[0.02, 0.15, 8, 16]} />
        </mesh>
        
        {/* Elbow + Forearm */}
        <group ref={leftElbowRef} position={[0, -0.4, 0]}>
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.065, 32, 32]} />
          </mesh>
          {/* Elbow piston */}
          <mesh position={[-0.05, 0.05, 0]} rotation={[0, 0, 0.5]} material={hydraulicMaterial}>
            <capsuleGeometry args={[0.018, 0.08, 8, 16]} />
          </mesh>
          {/* Forearm */}
          <mesh position={[0, -0.18, 0]} material={armorMaterial}>
            <capsuleGeometry args={[0.06, 0.2, 16, 32]} />
          </mesh>
          {/* Forearm plate */}
          <ArmorPlate position={[0, -0.15, 0.055]} size={[0.06, 0.16, 0.03]} material={ceramicMaterial} />
          
          {/* Wrist + Hand */}
          <group ref={leftWristRef} position={[0, -0.36, 0]}>
            <mesh material={jointMaterial}>
              <sphereGeometry args={[0.04, 32, 32]} />
            </mesh>
            {/* Palm - mechanical */}
            <mesh position={[0, -0.06, 0]} material={frameMaterial}>
              <boxGeometry args={[0.09, 0.08, 0.045]} />
            </mesh>
            {/* Fingers - articulated segments */}
            {[-0.028, -0.01, 0.01, 0.028].map((x, i) => <group key={i} position={[x, -0.12, 0]}>
                <mesh material={jointMaterial}>
                  <capsuleGeometry args={[0.012, 0.025, 8, 16]} />
                </mesh>
                <mesh position={[0, -0.035, 0]} material={frameMaterial}>
                  <capsuleGeometry args={[0.01, 0.02, 8, 16]} />
                </mesh>
              </group>)}
            {/* Thumb */}
            <group position={[-0.055, -0.06, 0.01]} rotation={[0, 0, 0.6]}>
              <mesh material={jointMaterial}>
                <capsuleGeometry args={[0.014, 0.025, 8, 16]} />
              </mesh>
            </group>
            {/* Palm thruster */}
            <Thruster position={[0, -0.07, -0.03]} scale={0.6} />
          </group>
        </group>
      </group>

      {/* ========== RIGHT ARM ========== */}
      <group ref={rightArmRef} position={[0.52, 1.65, 0]}>
        {/* Shoulder joint */}
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.1, 32, 32]} />
        </mesh>
        {/* Upper arm */}
        <mesh position={[0, -0.2, 0]} material={armorMaterial}>
          <capsuleGeometry args={[0.075, 0.24, 16, 32]} />
        </mesh>
        {/* Bicep plate */}
        <ArmorPlate position={[0.05, -0.15, 0.05]} rotation={[0, 0, -0.2]} size={[0.04, 0.14, 0.08]} material={ceramicMaterial} />
        {/* Hydraulic */}
        <mesh position={[-0.05, -0.2, 0]} material={hydraulicMaterial}>
          <capsuleGeometry args={[0.02, 0.15, 8, 16]} />
        </mesh>
        
        {/* Elbow + Forearm */}
        <group ref={rightElbowRef} position={[0, -0.4, 0]}>
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.065, 32, 32]} />
          </mesh>
          {/* Elbow piston */}
          <mesh position={[0.05, 0.05, 0]} rotation={[0, 0, -0.5]} material={hydraulicMaterial}>
            <capsuleGeometry args={[0.018, 0.08, 8, 16]} />
          </mesh>
          {/* Forearm */}
          <mesh position={[0, -0.18, 0]} material={armorMaterial}>
            <capsuleGeometry args={[0.06, 0.2, 16, 32]} />
          </mesh>
          {/* Forearm plate */}
          <ArmorPlate position={[0, -0.15, 0.055]} size={[0.06, 0.16, 0.03]} material={ceramicMaterial} />
          
          {/* Wrist + Hand */}
          <group ref={rightWristRef} position={[0, -0.36, 0]}>
            <mesh material={jointMaterial}>
              <sphereGeometry args={[0.04, 32, 32]} />
            </mesh>
            {/* Palm */}
            <mesh position={[0, -0.06, 0]} material={frameMaterial}>
              <boxGeometry args={[0.09, 0.08, 0.045]} />
            </mesh>
            {/* Fingers */}
            {[-0.028, -0.01, 0.01, 0.028].map((x, i) => <group key={i} position={[x, -0.12, 0]}>
                <mesh material={jointMaterial}>
                  <capsuleGeometry args={[0.012, 0.025, 8, 16]} />
                </mesh>
                <mesh position={[0, -0.035, 0]} material={frameMaterial}>
                  <capsuleGeometry args={[0.01, 0.02, 8, 16]} />
                </mesh>
              </group>)}
            {/* Thumb */}
            <group position={[0.055, -0.06, 0.01]} rotation={[0, 0, -0.6]}>
              <mesh material={jointMaterial}>
                <capsuleGeometry args={[0.014, 0.025, 8, 16]} />
              </mesh>
            </group>
            {/* Palm thruster */}
            <Thruster position={[0, -0.07, -0.03]} scale={0.6} />
          </group>
        </group>
      </group>

      {/* ========== LEFT LEG ========== */}
      <group ref={leftLegRef} position={[-0.14, 0.55, 0]}>
        {/* Hip joint */}
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.09, 32, 32]} />
        </mesh>
        {/* Upper leg armor */}
        <mesh position={[0, -0.22, 0]} material={armorMaterial}>
          <capsuleGeometry args={[0.085, 0.28, 16, 32]} />
        </mesh>
        {/* Thigh plates */}
        <ArmorPlate position={[-0.06, -0.15, 0.06]} rotation={[0, 0, 0.15]} size={[0.04, 0.16, 0.08]} material={ceramicMaterial} />
        <ArmorPlate position={[0, -0.2, 0.08]} size={[0.1, 0.12, 0.03]} material={ceramicMaterial} />
        {/* Hydraulic piston */}
        <mesh position={[0.06, -0.25, -0.04]} material={hydraulicMaterial}>
          <capsuleGeometry args={[0.018, 0.18, 8, 16]} />
        </mesh>
        
        {/* Knee + Lower Leg */}
        <group ref={leftKneeRef} position={[0, -0.44, 0]}>
          {/* Knee joint */}
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.07, 32, 32]} />
          </mesh>
          {/* Knee cap armor */}
          <mesh position={[0, 0, 0.06]} material={ceramicMaterial}>
            <sphereGeometry args={[0.055, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          </mesh>
          
          {/* Lower leg */}
          <mesh position={[0, -0.28, 0]} material={armorMaterial}>
            <capsuleGeometry args={[0.07, 0.35, 16, 32]} />
          </mesh>
          {/* Shin plate */}
          <ArmorPlate position={[0, -0.24, 0.06]} size={[0.08, 0.25, 0.03]} material={ceramicMaterial} />
          {/* Calf hydraulic */}
          <mesh position={[0, -0.21, -0.05]} material={hydraulicMaterial}>
            <capsuleGeometry args={[0.02, 0.2, 8, 16]} />
          </mesh>
          
          {/* Ankle */}
          <mesh position={[0, -0.54, 0]} material={jointMaterial}>
            <sphereGeometry args={[0.05, 32, 32]} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -0.61, 0.04]} material={armorMaterial}>
            <boxGeometry args={[0.11, 0.06, 0.18]} />
          </mesh>
          {/* Foot thruster */}
          <Thruster position={[0, -0.68, 0]} scale={1.2} />
        </group>
      </group>

      {/* ========== RIGHT LEG ========== */}
      <group ref={rightLegRef} position={[0.14, 0.55, 0]}>
        {/* Hip joint */}
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.09, 32, 32]} />
        </mesh>
        {/* Upper leg */}
        <mesh position={[0, -0.22, 0]} material={armorMaterial}>
          <capsuleGeometry args={[0.085, 0.28, 16, 32]} />
        </mesh>
        {/* Thigh plates */}
        <ArmorPlate position={[0.06, -0.15, 0.06]} rotation={[0, 0, -0.15]} size={[0.04, 0.16, 0.08]} material={ceramicMaterial} />
        <ArmorPlate position={[0, -0.2, 0.08]} size={[0.1, 0.12, 0.03]} material={ceramicMaterial} />
        {/* Hydraulic */}
        <mesh position={[-0.06, -0.25, -0.04]} material={hydraulicMaterial}>
          <capsuleGeometry args={[0.018, 0.18, 8, 16]} />
        </mesh>
        
        {/* Knee + Lower Leg */}
        <group ref={rightKneeRef} position={[0, -0.44, 0]}>
          {/* Knee joint */}
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.07, 32, 32]} />
          </mesh>
          {/* Knee cap */}
          <mesh position={[0, 0, 0.06]} material={ceramicMaterial}>
            <sphereGeometry args={[0.055, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          </mesh>
          
          {/* Lower leg */}
          <mesh position={[0, -0.28, 0]} material={armorMaterial}>
            <capsuleGeometry args={[0.07, 0.35, 16, 32]} />
          </mesh>
          {/* Shin plate */}
          <ArmorPlate position={[0, -0.24, 0.06]} size={[0.08, 0.25, 0.03]} material={ceramicMaterial} />
          {/* Calf hydraulic */}
          <mesh position={[0, -0.21, -0.05]} material={hydraulicMaterial}>
            <capsuleGeometry args={[0.02, 0.2, 8, 16]} />
          </mesh>
          
          {/* Ankle */}
          <mesh position={[0, -0.54, 0]} material={jointMaterial}>
            <sphereGeometry args={[0.05, 32, 32]} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -0.61, 0.04]} material={armorMaterial}>
            <boxGeometry args={[0.11, 0.06, 0.18]} />
          </mesh>
          {/* Foot thruster */}
          <Thruster position={[0, -0.68, 0]} scale={1.2} />
        </group>
      </group>

      {/* ========== BACK THRUSTERS ========== */}
      <group position={[0, 1.15, -0.18]}>
        <Thruster position={[-0.12, 0.1, 0]} scale={1} />
        <Thruster position={[0.12, 0.1, 0]} scale={1} />
        <Thruster position={[0, -0.05, 0]} scale={0.8} />
        {/* Thruster housings */}
        <mesh position={[-0.12, 0.15, 0]} material={armorMaterial}>
          <cylinderGeometry args={[0.05, 0.06, 0.08, 16]} />
        </mesh>
        <mesh position={[0.12, 0.15, 0]} material={armorMaterial}>
          <cylinderGeometry args={[0.05, 0.06, 0.08, 16]} />
        </mesh>
      </group>

      {/* ========== GROUND SHADOW ========== */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]} receiveShadow>
        <circleGeometry args={[0.45, 32]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.25} />
      </mesh>
      {/* Secondary softer shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.86, 0]} scale={[1.4, 1, 1]}>
        <circleGeometry args={[0.5, 32]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.1} />
      </mesh>

      {/* ========== LIGHTING ========== */}
      <pointLight position={[-1.5, 1, -1]} color="#ffffff" intensity={0.5} distance={5} />
      <pointLight position={[1.5, 1, -1]} color="#ffffff" intensity={0.5} distance={5} />
      <pointLight position={[0, -1, 2]} color="#00ffff" intensity={0.3} distance={3} />
      <pointLight position={[0, 0.5, 1]} color="#00ffff" intensity={0.2} distance={2} />
    </group>;
}
export default function Robot3DCanvas(props: Robot3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 3.5], fov: 45 }}
      style={{ height: "400px", width: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <Environment preset="city" />
      <RobotModel {...props} />
    </Canvas>
  );
}