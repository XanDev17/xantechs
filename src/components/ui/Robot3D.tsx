import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

interface Robot3DProps {
  eyeOffset: { x: number; y: number };
  headRotation: { x: number; y: number };
  armRotation: { leftX: number; leftY: number; rightX: number; rightY: number };
  fingerCurl: number;
  elbowBend: number;
  shoulderCompress: { left: number; right: number };
  wristRotation: { left: number; right: number };
}

function RobotModel({
  eyeOffset,
  headRotation,
  armRotation,
  fingerCurl,
  elbowBend,
  shoulderCompress,
  wristRotation,
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

  // Sleek black metallic materials
  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0a0a0a",
        metalness: 0.95,
        roughness: 0.15,
      }),
    []
  );

  const glossyBlackMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#080808",
        metalness: 1.0,
        roughness: 0.08,
      }),
    []
  );

  const visorMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#151515",
        metalness: 0.95,
        roughness: 0.05,
        envMapIntensity: 3,
      }),
    []
  );

  const eyeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        emissive: "#ffffff",
        emissiveIntensity: 0.8,
        metalness: 0.2,
        roughness: 0.1,
      }),
    []
  );

  const jointMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1a1a1a",
        metalness: 0.85,
        roughness: 0.2,
      }),
    []
  );

  // Animate
  useFrame((state) => {
    // Subtle idle breathing animation
    if (bodyRef.current) {
      bodyRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
    }

    // Head rotation
    if (headRef.current) {
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        (headRotation.x * Math.PI) / 180,
        0.08
      );
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        (headRotation.y * Math.PI) / 180,
        0.08
      );
    }

    // Eye tracking
    if (leftEyeRef.current) {
      leftEyeRef.current.position.x = THREE.MathUtils.lerp(
        leftEyeRef.current.position.x,
        -0.12 + eyeOffset.x * 0.012,
        0.12
      );
      leftEyeRef.current.position.y = THREE.MathUtils.lerp(
        leftEyeRef.current.position.y,
        0.02 + eyeOffset.y * 0.012,
        0.12
      );
    }
    if (rightEyeRef.current) {
      rightEyeRef.current.position.x = THREE.MathUtils.lerp(
        rightEyeRef.current.position.x,
        0.12 + eyeOffset.x * 0.012,
        0.12
      );
      rightEyeRef.current.position.y = THREE.MathUtils.lerp(
        rightEyeRef.current.position.y,
        0.02 + eyeOffset.y * 0.012,
        0.12
      );
    }

    // Left arm with natural resting pose
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = THREE.MathUtils.lerp(
        leftArmRef.current.rotation.z,
        0.15 + (armRotation.leftX * Math.PI) / 180,
        0.08
      );
      leftArmRef.current.rotation.x = THREE.MathUtils.lerp(
        leftArmRef.current.rotation.x,
        (armRotation.leftY * Math.PI) / 180,
        0.08
      );
      leftArmRef.current.position.y = THREE.MathUtils.lerp(
        leftArmRef.current.position.y,
        0.55 + shoulderCompress.left * 0.008,
        0.08
      );
    }

    // Right arm with natural resting pose
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
        rightArmRef.current.rotation.z,
        -0.15 + (armRotation.rightX * Math.PI) / 180,
        0.08
      );
      rightArmRef.current.rotation.x = THREE.MathUtils.lerp(
        rightArmRef.current.rotation.x,
        (armRotation.rightY * Math.PI) / 180,
        0.08
      );
      rightArmRef.current.position.y = THREE.MathUtils.lerp(
        rightArmRef.current.position.y,
        0.55 + shoulderCompress.right * 0.008,
        0.08
      );
    }

    // Elbows
    if (leftElbowRef.current) {
      leftElbowRef.current.rotation.x = THREE.MathUtils.lerp(
        leftElbowRef.current.rotation.x,
        (elbowBend * Math.PI) / 180,
        0.08
      );
    }
    if (rightElbowRef.current) {
      rightElbowRef.current.rotation.x = THREE.MathUtils.lerp(
        rightElbowRef.current.rotation.x,
        (elbowBend * Math.PI) / 180,
        0.08
      );
    }

    // Wrists
    if (leftWristRef.current) {
      leftWristRef.current.rotation.z = THREE.MathUtils.lerp(
        leftWristRef.current.rotation.z,
        (wristRotation.left * Math.PI) / 180,
        0.08
      );
      leftWristRef.current.rotation.x = THREE.MathUtils.lerp(
        leftWristRef.current.rotation.x,
        (fingerCurl * 25 * Math.PI) / 180,
        0.08
      );
    }
    if (rightWristRef.current) {
      rightWristRef.current.rotation.z = THREE.MathUtils.lerp(
        rightWristRef.current.rotation.z,
        (wristRotation.right * Math.PI) / 180,
        0.08
      );
      rightWristRef.current.rotation.x = THREE.MathUtils.lerp(
        rightWristRef.current.rotation.x,
        (fingerCurl * 25 * Math.PI) / 180,
        0.08
      );
    }
  });

  return (
    <group ref={bodyRef} position={[0, 0, 0]} scale={0.58}>
      {/* Head */}
      <group ref={headRef} position={[0, 2.1, 0]}>
        {/* Main head - smooth rounded helmet */}
        <mesh material={glossyBlackMaterial}>
          <sphereGeometry args={[0.32, 64, 64]} />
        </mesh>
        {/* Face plate - curved visor */}
        <mesh position={[0, -0.02, 0.18]} material={visorMaterial} rotation={[0.1, 0, 0]}>
          <sphereGeometry args={[0.28, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
        </mesh>
        {/* Left eye */}
        <mesh ref={leftEyeRef} position={[-0.12, 0.02, 0.3]} material={eyeMaterial}>
          <circleGeometry args={[0.035, 32]} />
        </mesh>
        {/* Right eye */}
        <mesh ref={rightEyeRef} position={[0.12, 0.02, 0.3]} material={eyeMaterial}>
          <circleGeometry args={[0.035, 32]} />
        </mesh>
        {/* Head accent line */}
        <mesh position={[0, 0.2, 0]} material={jointMaterial}>
          <torusGeometry args={[0.22, 0.015, 16, 64]} />
        </mesh>
      </group>

      {/* Neck */}
      <group position={[0, 1.8, 0]}>
        <mesh material={jointMaterial}>
          <cylinderGeometry args={[0.06, 0.08, 0.12, 32]} />
        </mesh>
        {/* Neck segment rings */}
        {[0.03, 0, -0.03].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={bodyMaterial}>
            <torusGeometry args={[0.07, 0.012, 8, 32]} />
          </mesh>
        ))}
      </group>

      {/* Torso */}
      <group position={[0, 1.2, 0]}>
        {/* Shoulder bar */}
        <mesh position={[0, 0.45, 0]} material={glossyBlackMaterial}>
          <boxGeometry args={[1.0, 0.12, 0.28]} />
        </mesh>
        {/* Shoulder caps */}
        <mesh position={[-0.45, 0.45, 0]} material={glossyBlackMaterial}>
          <sphereGeometry args={[0.14, 32, 32]} />
        </mesh>
        <mesh position={[0.45, 0.45, 0]} material={glossyBlackMaterial}>
          <sphereGeometry args={[0.14, 32, 32]} />
        </mesh>
        {/* Upper chest */}
        <mesh position={[0, 0.2, 0]} material={glossyBlackMaterial}>
          <boxGeometry args={[0.6, 0.35, 0.32]} />
        </mesh>
        {/* Lower chest - tapered */}
        <mesh position={[0, -0.1, 0]} material={bodyMaterial}>
          <boxGeometry args={[0.5, 0.3, 0.28]} />
        </mesh>
        {/* Center seam */}
        <mesh position={[0, 0.1, 0.165]} material={jointMaterial}>
          <boxGeometry args={[0.02, 0.5, 0.01]} />
        </mesh>
        {/* Chest panels */}
        <mesh position={[-0.18, 0.2, 0.16]} material={jointMaterial}>
          <boxGeometry args={[0.12, 0.18, 0.02]} />
        </mesh>
        <mesh position={[0.18, 0.2, 0.16]} material={jointMaterial}>
          <boxGeometry args={[0.12, 0.18, 0.02]} />
        </mesh>
      </group>

      {/* Waist */}
      <group position={[0, 0.85, 0]}>
        <mesh material={jointMaterial}>
          <cylinderGeometry args={[0.18, 0.22, 0.15, 32]} />
        </mesh>
      </group>

      {/* Hips */}
      <group position={[0, 0.65, 0]}>
        <mesh material={bodyMaterial}>
          <boxGeometry args={[0.45, 0.18, 0.25]} />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.55, 0.55, 0]}>
        {/* Shoulder ball */}
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.09, 32, 32]} />
        </mesh>
        {/* Upper arm */}
        <mesh position={[0, -0.22, 0]} material={glossyBlackMaterial}>
          <capsuleGeometry args={[0.07, 0.26, 16, 32]} />
        </mesh>
        {/* Bicep detail */}
        <mesh position={[0, -0.15, 0.06]} material={jointMaterial}>
          <boxGeometry args={[0.06, 0.12, 0.02]} />
        </mesh>
        {/* Elbow + Forearm */}
        <group ref={leftElbowRef} position={[0, -0.42, 0]}>
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.06, 32, 32]} />
          </mesh>
          {/* Forearm */}
          <mesh position={[0, -0.2, 0]} material={glossyBlackMaterial}>
            <capsuleGeometry args={[0.055, 0.22, 16, 32]} />
          </mesh>
          {/* Wrist + Hand */}
          <group ref={leftWristRef} position={[0, -0.38, 0]}>
            <mesh material={jointMaterial}>
              <sphereGeometry args={[0.04, 32, 32]} />
            </mesh>
            {/* Palm */}
            <mesh position={[0, -0.07, 0]} material={glossyBlackMaterial}>
              <boxGeometry args={[0.08, 0.08, 0.04]} />
            </mesh>
            {/* Fingers */}
            {[-0.025, -0.008, 0.008, 0.025].map((x, i) => (
              <group key={i} position={[x, -0.13, 0]}>
                <mesh material={jointMaterial}>
                  <capsuleGeometry args={[0.01, 0.035, 8, 16]} />
                </mesh>
              </group>
            ))}
            {/* Thumb */}
            <group position={[-0.05, -0.07, 0]} rotation={[0, 0, 0.5]}>
              <mesh material={jointMaterial}>
                <capsuleGeometry args={[0.012, 0.03, 8, 16]} />
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.55, 0.55, 0]}>
        {/* Shoulder ball */}
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.09, 32, 32]} />
        </mesh>
        {/* Upper arm */}
        <mesh position={[0, -0.22, 0]} material={glossyBlackMaterial}>
          <capsuleGeometry args={[0.07, 0.26, 16, 32]} />
        </mesh>
        {/* Bicep detail */}
        <mesh position={[0, -0.15, 0.06]} material={jointMaterial}>
          <boxGeometry args={[0.06, 0.12, 0.02]} />
        </mesh>
        {/* Elbow + Forearm */}
        <group ref={rightElbowRef} position={[0, -0.42, 0]}>
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.06, 32, 32]} />
          </mesh>
          {/* Forearm */}
          <mesh position={[0, -0.2, 0]} material={glossyBlackMaterial}>
            <capsuleGeometry args={[0.055, 0.22, 16, 32]} />
          </mesh>
          {/* Wrist + Hand */}
          <group ref={rightWristRef} position={[0, -0.38, 0]}>
            <mesh material={jointMaterial}>
              <sphereGeometry args={[0.04, 32, 32]} />
            </mesh>
            {/* Palm */}
            <mesh position={[0, -0.07, 0]} material={glossyBlackMaterial}>
              <boxGeometry args={[0.08, 0.08, 0.04]} />
            </mesh>
            {/* Fingers */}
            {[-0.025, -0.008, 0.008, 0.025].map((x, i) => (
              <group key={i} position={[x, -0.13, 0]}>
                <mesh material={jointMaterial}>
                  <capsuleGeometry args={[0.01, 0.035, 8, 16]} />
                </mesh>
              </group>
            ))}
            {/* Thumb */}
            <group position={[0.05, -0.07, 0]} rotation={[0, 0, -0.5]}>
              <mesh material={jointMaterial}>
                <capsuleGeometry args={[0.012, 0.03, 8, 16]} />
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* Left Leg */}
      <group position={[-0.15, 0.5, 0]}>
        {/* Hip joint */}
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.08, 32, 32]} />
        </mesh>
        {/* Upper leg */}
        <mesh position={[0, -0.22, 0]} material={glossyBlackMaterial}>
          <capsuleGeometry args={[0.08, 0.28, 16, 32]} />
        </mesh>
        {/* Thigh detail */}
        <mesh position={[0, -0.15, 0.07]} material={jointMaterial}>
          <boxGeometry args={[0.06, 0.12, 0.02]} />
        </mesh>
        {/* Knee */}
        <mesh position={[0, -0.42, 0]} material={jointMaterial}>
          <sphereGeometry args={[0.065, 32, 32]} />
        </mesh>
        {/* Lower leg */}
        <mesh position={[0, -0.7, 0]} material={glossyBlackMaterial}>
          <capsuleGeometry args={[0.065, 0.35, 16, 32]} />
        </mesh>
        {/* Shin detail */}
        <mesh position={[0, -0.65, 0.055]} material={jointMaterial}>
          <boxGeometry args={[0.04, 0.2, 0.02]} />
        </mesh>
        {/* Ankle */}
        <mesh position={[0, -0.95, 0]} material={jointMaterial}>
          <sphereGeometry args={[0.045, 32, 32]} />
        </mesh>
        {/* Foot */}
        <mesh position={[0, -1.02, 0.03]} material={glossyBlackMaterial}>
          <boxGeometry args={[0.1, 0.06, 0.16]} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group position={[0.15, 0.5, 0]}>
        {/* Hip joint */}
        <mesh material={jointMaterial}>
          <sphereGeometry args={[0.08, 32, 32]} />
        </mesh>
        {/* Upper leg */}
        <mesh position={[0, -0.22, 0]} material={glossyBlackMaterial}>
          <capsuleGeometry args={[0.08, 0.28, 16, 32]} />
        </mesh>
        {/* Thigh detail */}
        <mesh position={[0, -0.15, 0.07]} material={jointMaterial}>
          <boxGeometry args={[0.06, 0.12, 0.02]} />
        </mesh>
        {/* Knee */}
        <mesh position={[0, -0.42, 0]} material={jointMaterial}>
          <sphereGeometry args={[0.065, 32, 32]} />
        </mesh>
        {/* Lower leg */}
        <mesh position={[0, -0.7, 0]} material={glossyBlackMaterial}>
          <capsuleGeometry args={[0.065, 0.35, 16, 32]} />
        </mesh>
        {/* Shin detail */}
        <mesh position={[0, -0.65, 0.055]} material={jointMaterial}>
          <boxGeometry args={[0.04, 0.2, 0.02]} />
        </mesh>
        {/* Ankle */}
        <mesh position={[0, -0.95, 0]} material={jointMaterial}>
          <sphereGeometry args={[0.045, 32, 32]} />
        </mesh>
        {/* Foot */}
        <mesh position={[0, -1.02, 0.03]} material={glossyBlackMaterial}>
          <boxGeometry args={[0.1, 0.06, 0.16]} />
        </mesh>
      </group>

      {/* Rim lighting */}
      <pointLight position={[-1.5, 1, -1]} color="#ffffff" intensity={0.4} distance={4} />
      <pointLight position={[1.5, 1, -1]} color="#ffffff" intensity={0.4} distance={4} />
      <pointLight position={[0, 2.5, 1]} color="#ffffff" intensity={0.2} distance={3} />
    </group>
  );
}

export default function Robot3DCanvas(props: Robot3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 4.2], fov: 38 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 5]} intensity={1.5} />
      <directionalLight position={[-2, 2, -3]} intensity={0.4} />
      <spotLight position={[0, 5, 4]} intensity={1.2} angle={0.5} penumbra={0.6} />
      <Environment preset="studio" />
      <RobotModel {...props} />
    </Canvas>
  );
}
