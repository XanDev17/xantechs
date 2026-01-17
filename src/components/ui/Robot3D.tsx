import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshReflectorMaterial } from "@react-three/drei";
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
        color: "#050505",
        metalness: 1.0,
        roughness: 0.05,
      }),
    []
  );

  const visorMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1a1a1a",
        metalness: 0.9,
        roughness: 0.1,
        envMapIntensity: 2,
      }),
    []
  );

  const eyeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        emissive: "#ffffff",
        emissiveIntensity: 0.5,
        metalness: 0.2,
        roughness: 0.1,
      }),
    []
  );

  const jointMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1a1a1a",
        metalness: 0.8,
        roughness: 0.25,
      }),
    []
  );

  // Animate
  useFrame(() => {
    // Head rotation
    if (headRef.current) {
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        (headRotation.x * Math.PI) / 180,
        0.1
      );
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        (headRotation.y * Math.PI) / 180,
        0.1
      );
    }

    // Eye tracking
    if (leftEyeRef.current) {
      leftEyeRef.current.position.x = THREE.MathUtils.lerp(
        leftEyeRef.current.position.x,
        -0.18 + eyeOffset.x * 0.015,
        0.15
      );
      leftEyeRef.current.position.y = THREE.MathUtils.lerp(
        leftEyeRef.current.position.y,
        0.05 + eyeOffset.y * 0.015,
        0.15
      );
    }
    if (rightEyeRef.current) {
      rightEyeRef.current.position.x = THREE.MathUtils.lerp(
        rightEyeRef.current.position.x,
        0.18 + eyeOffset.x * 0.015,
        0.15
      );
      rightEyeRef.current.position.y = THREE.MathUtils.lerp(
        rightEyeRef.current.position.y,
        0.05 + eyeOffset.y * 0.015,
        0.15
      );
    }

    // Left arm
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = THREE.MathUtils.lerp(
        leftArmRef.current.rotation.z,
        (armRotation.leftX * Math.PI) / 180 + 0.2,
        0.1
      );
      leftArmRef.current.rotation.x = THREE.MathUtils.lerp(
        leftArmRef.current.rotation.x,
        (armRotation.leftY * Math.PI) / 180,
        0.1
      );
      leftArmRef.current.position.y = THREE.MathUtils.lerp(
        leftArmRef.current.position.y,
        0.4 + shoulderCompress.left * 0.01,
        0.1
      );
    }

    // Right arm
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
        rightArmRef.current.rotation.z,
        (armRotation.rightX * Math.PI) / 180 - 0.2,
        0.1
      );
      rightArmRef.current.rotation.x = THREE.MathUtils.lerp(
        rightArmRef.current.rotation.x,
        (armRotation.rightY * Math.PI) / 180,
        0.1
      );
      rightArmRef.current.position.y = THREE.MathUtils.lerp(
        rightArmRef.current.position.y,
        0.4 + shoulderCompress.right * 0.01,
        0.1
      );
    }

    // Elbows
    if (leftElbowRef.current) {
      leftElbowRef.current.rotation.x = THREE.MathUtils.lerp(
        leftElbowRef.current.rotation.x,
        (elbowBend * Math.PI) / 180,
        0.1
      );
    }
    if (rightElbowRef.current) {
      rightElbowRef.current.rotation.x = THREE.MathUtils.lerp(
        rightElbowRef.current.rotation.x,
        (elbowBend * Math.PI) / 180,
        0.1
      );
    }

    // Wrists
    if (leftWristRef.current) {
      leftWristRef.current.rotation.z = THREE.MathUtils.lerp(
        leftWristRef.current.rotation.z,
        (wristRotation.left * Math.PI) / 180,
        0.1
      );
      leftWristRef.current.rotation.x = THREE.MathUtils.lerp(
        leftWristRef.current.rotation.x,
        (fingerCurl * 30 * Math.PI) / 180,
        0.1
      );
    }
    if (rightWristRef.current) {
      rightWristRef.current.rotation.z = THREE.MathUtils.lerp(
        rightWristRef.current.rotation.z,
        (wristRotation.right * Math.PI) / 180,
        0.1
      );
      rightWristRef.current.rotation.x = THREE.MathUtils.lerp(
        rightWristRef.current.rotation.x,
        (fingerCurl * 30 * Math.PI) / 180,
        0.1
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.2}>
      <group position={[0, -0.3, 0]} scale={1.1}>
        {/* Head */}
        <group ref={headRef} position={[0, 1.9, 0]}>
          {/* Main head - sleek rounded shape */}
          <mesh material={glossyBlackMaterial}>
            <sphereGeometry args={[0.42, 64, 64]} />
          </mesh>
          {/* Face visor - curved reflective surface */}
          <mesh position={[0, 0, 0.2]} material={visorMaterial}>
            <sphereGeometry args={[0.35, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
          </mesh>
          {/* Visor band - horizontal strip */}
          <mesh position={[0, 0.05, 0.38]} material={visorMaterial}>
            <boxGeometry args={[0.5, 0.12, 0.08]} />
          </mesh>
          {/* Left eye */}
          <mesh ref={leftEyeRef} position={[-0.18, 0.05, 0.4]} material={eyeMaterial}>
            <circleGeometry args={[0.045, 32]} />
          </mesh>
          {/* Right eye */}
          <mesh ref={rightEyeRef} position={[0.18, 0.05, 0.4]} material={eyeMaterial}>
            <circleGeometry args={[0.045, 32]} />
          </mesh>
          {/* Head top accent */}
          <mesh position={[0, 0.35, 0]} material={jointMaterial}>
            <sphereGeometry args={[0.15, 32, 32]} />
          </mesh>
        </group>

        {/* Neck */}
        <group position={[0, 1.55, 0]}>
          <mesh material={jointMaterial}>
            <cylinderGeometry args={[0.08, 0.1, 0.15, 32]} />
          </mesh>
          {/* Neck rings */}
          <mesh position={[0, 0.02, 0]} material={bodyMaterial}>
            <torusGeometry args={[0.1, 0.02, 16, 32]} />
          </mesh>
          <mesh position={[0, -0.02, 0]} material={bodyMaterial}>
            <torusGeometry args={[0.1, 0.02, 16, 32]} />
          </mesh>
        </group>

        {/* Torso */}
        <group position={[0, 0.85, 0]}>
          {/* Shoulder plate - wide and angular */}
          <mesh position={[0, 0.55, 0]} material={glossyBlackMaterial}>
            <boxGeometry args={[1.3, 0.15, 0.4]} />
          </mesh>
          {/* Shoulder curves */}
          <mesh position={[-0.55, 0.55, 0]} material={glossyBlackMaterial} rotation={[0, 0, -0.3]}>
            <sphereGeometry args={[0.18, 32, 32]} />
          </mesh>
          <mesh position={[0.55, 0.55, 0]} material={glossyBlackMaterial} rotation={[0, 0, 0.3]}>
            <sphereGeometry args={[0.18, 32, 32]} />
          </mesh>
          {/* Upper chest */}
          <mesh position={[0, 0.25, 0]} material={glossyBlackMaterial}>
            <boxGeometry args={[0.75, 0.35, 0.4]} />
          </mesh>
          {/* Lower torso - tapered */}
          <mesh position={[0, -0.15, 0]} material={bodyMaterial}>
            <cylinderGeometry args={[0.35, 0.3, 0.5, 32]} />
          </mesh>
          {/* Chest center line */}
          <mesh position={[0, 0.1, 0.21]} material={jointMaterial}>
            <boxGeometry args={[0.03, 0.6, 0.02]} />
          </mesh>
          {/* Side panels */}
          <mesh position={[-0.25, 0.2, 0.2]} material={jointMaterial}>
            <boxGeometry args={[0.15, 0.25, 0.03]} />
          </mesh>
          <mesh position={[0.25, 0.2, 0.2]} material={jointMaterial}>
            <boxGeometry args={[0.15, 0.25, 0.03]} />
          </mesh>
        </group>

        {/* Waist / Hip area */}
        <group position={[0, 0.25, 0]}>
          <mesh material={jointMaterial}>
            <cylinderGeometry args={[0.25, 0.28, 0.2, 32]} />
          </mesh>
        </group>

        {/* Left Arm */}
        <group ref={leftArmRef} position={[-0.72, 0.4, 0]}>
          {/* Shoulder ball joint */}
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.12, 32, 32]} />
          </mesh>
          {/* Upper arm */}
          <mesh position={[-0.05, -0.28, 0]} material={glossyBlackMaterial}>
            <capsuleGeometry args={[0.09, 0.32, 16, 32]} />
          </mesh>
          {/* Upper arm detail */}
          <mesh position={[-0.05, -0.2, 0.08]} material={jointMaterial}>
            <boxGeometry args={[0.08, 0.15, 0.03]} />
          </mesh>
          {/* Elbow + Forearm */}
          <group ref={leftElbowRef} position={[-0.05, -0.52, 0]}>
            {/* Elbow joint */}
            <mesh material={jointMaterial}>
              <sphereGeometry args={[0.08, 32, 32]} />
            </mesh>
            {/* Forearm */}
            <mesh position={[0, -0.25, 0]} material={glossyBlackMaterial}>
              <capsuleGeometry args={[0.07, 0.28, 16, 32]} />
            </mesh>
            {/* Wrist + Hand */}
            <group ref={leftWristRef} position={[0, -0.48, 0]}>
              {/* Wrist */}
              <mesh material={jointMaterial}>
                <sphereGeometry args={[0.055, 32, 32]} />
              </mesh>
              {/* Palm */}
              <mesh position={[0, -0.08, 0]} material={glossyBlackMaterial}>
                <boxGeometry args={[0.1, 0.1, 0.05]} />
              </mesh>
              {/* Fingers */}
              {[-0.035, -0.012, 0.012, 0.035].map((x, i) => (
                <group key={i} position={[x, -0.16, 0]}>
                  <mesh material={jointMaterial}>
                    <capsuleGeometry args={[0.012, 0.04, 8, 16]} />
                  </mesh>
                </group>
              ))}
              {/* Thumb */}
              <group position={[-0.065, -0.08, 0]} rotation={[0, 0, 0.6]}>
                <mesh material={jointMaterial}>
                  <capsuleGeometry args={[0.014, 0.035, 8, 16]} />
                </mesh>
              </group>
            </group>
          </group>
        </group>

        {/* Right Arm */}
        <group ref={rightArmRef} position={[0.72, 0.4, 0]}>
          {/* Shoulder ball joint */}
          <mesh material={jointMaterial}>
            <sphereGeometry args={[0.12, 32, 32]} />
          </mesh>
          {/* Upper arm */}
          <mesh position={[0.05, -0.28, 0]} material={glossyBlackMaterial}>
            <capsuleGeometry args={[0.09, 0.32, 16, 32]} />
          </mesh>
          {/* Upper arm detail */}
          <mesh position={[0.05, -0.2, 0.08]} material={jointMaterial}>
            <boxGeometry args={[0.08, 0.15, 0.03]} />
          </mesh>
          {/* Elbow + Forearm */}
          <group ref={rightElbowRef} position={[0.05, -0.52, 0]}>
            {/* Elbow joint */}
            <mesh material={jointMaterial}>
              <sphereGeometry args={[0.08, 32, 32]} />
            </mesh>
            {/* Forearm */}
            <mesh position={[0, -0.25, 0]} material={glossyBlackMaterial}>
              <capsuleGeometry args={[0.07, 0.28, 16, 32]} />
            </mesh>
            {/* Wrist + Hand */}
            <group ref={rightWristRef} position={[0, -0.48, 0]}>
              {/* Wrist */}
              <mesh material={jointMaterial}>
                <sphereGeometry args={[0.055, 32, 32]} />
              </mesh>
              {/* Palm */}
              <mesh position={[0, -0.08, 0]} material={glossyBlackMaterial}>
                <boxGeometry args={[0.1, 0.1, 0.05]} />
              </mesh>
              {/* Fingers */}
              {[-0.035, -0.012, 0.012, 0.035].map((x, i) => (
                <group key={i} position={[x, -0.16, 0]}>
                  <mesh material={jointMaterial}>
                    <capsuleGeometry args={[0.012, 0.04, 8, 16]} />
                  </mesh>
                </group>
              ))}
              {/* Thumb */}
              <group position={[0.065, -0.08, 0]} rotation={[0, 0, -0.6]}>
                <mesh material={jointMaterial}>
                  <capsuleGeometry args={[0.014, 0.035, 8, 16]} />
                </mesh>
              </group>
            </group>
          </group>
        </group>

        {/* Legs */}
        {/* Left leg */}
        <group position={[-0.2, 0, 0]}>
          {/* Hip joint */}
          <mesh position={[0, 0.08, 0]} material={jointMaterial}>
            <sphereGeometry args={[0.1, 32, 32]} />
          </mesh>
          {/* Upper leg */}
          <mesh position={[0, -0.25, 0]} material={glossyBlackMaterial}>
            <capsuleGeometry args={[0.1, 0.35, 16, 32]} />
          </mesh>
          {/* Knee */}
          <mesh position={[0, -0.52, 0]} material={jointMaterial}>
            <sphereGeometry args={[0.08, 32, 32]} />
          </mesh>
          {/* Lower leg */}
          <mesh position={[0, -0.85, 0]} material={glossyBlackMaterial}>
            <capsuleGeometry args={[0.08, 0.4, 16, 32]} />
          </mesh>
          {/* Ankle */}
          <mesh position={[0, -1.15, 0]} material={jointMaterial}>
            <sphereGeometry args={[0.06, 32, 32]} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -1.25, 0.04]} material={glossyBlackMaterial}>
            <boxGeometry args={[0.12, 0.08, 0.2]} />
          </mesh>
        </group>

        {/* Right leg */}
        <group position={[0.2, 0, 0]}>
          {/* Hip joint */}
          <mesh position={[0, 0.08, 0]} material={jointMaterial}>
            <sphereGeometry args={[0.1, 32, 32]} />
          </mesh>
          {/* Upper leg */}
          <mesh position={[0, -0.25, 0]} material={glossyBlackMaterial}>
            <capsuleGeometry args={[0.1, 0.35, 16, 32]} />
          </mesh>
          {/* Knee */}
          <mesh position={[0, -0.52, 0]} material={jointMaterial}>
            <sphereGeometry args={[0.08, 32, 32]} />
          </mesh>
          {/* Lower leg */}
          <mesh position={[0, -0.85, 0]} material={glossyBlackMaterial}>
            <capsuleGeometry args={[0.08, 0.4, 16, 32]} />
          </mesh>
          {/* Ankle */}
          <mesh position={[0, -1.15, 0]} material={jointMaterial}>
            <sphereGeometry args={[0.06, 32, 32]} />
          </mesh>
          {/* Foot */}
          <mesh position={[0, -1.25, 0.04]} material={glossyBlackMaterial}>
            <boxGeometry args={[0.12, 0.08, 0.2]} />
          </mesh>
        </group>

        {/* Subtle rim light effect */}
        <pointLight position={[-1, 1, -1]} color="#ffffff" intensity={0.3} distance={3} />
        <pointLight position={[1, 1, -1]} color="#ffffff" intensity={0.3} distance={3} />
      </group>
    </Float>
  );
}

export default function Robot3DCanvas(props: Robot3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 4], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-3, 3, -3]} intensity={0.4} />
      <spotLight position={[0, 5, 5]} intensity={0.8} angle={0.4} penumbra={0.5} />
      <Environment preset="studio" />
      <RobotModel {...props} />
    </Canvas>
  );
}
