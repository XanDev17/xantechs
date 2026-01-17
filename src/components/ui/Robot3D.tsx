import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
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

  // Materials
  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#e8e8e8",
        metalness: 0.6,
        roughness: 0.3,
      }),
    []
  );

  const darkMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1a1a2e",
        metalness: 0.8,
        roughness: 0.2,
      }),
    []
  );

  const glowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#3b82f6",
        emissive: "#3b82f6",
        emissiveIntensity: 2,
        metalness: 0.2,
        roughness: 0.1,
      }),
    []
  );

  const coreMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#60a5fa",
        emissive: "#3b82f6",
        emissiveIntensity: 3,
        metalness: 0.1,
        roughness: 0.1,
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
        -0.25 + eyeOffset.x * 0.02,
        0.15
      );
      leftEyeRef.current.position.y = THREE.MathUtils.lerp(
        leftEyeRef.current.position.y,
        0.15 + eyeOffset.y * 0.02,
        0.15
      );
    }
    if (rightEyeRef.current) {
      rightEyeRef.current.position.x = THREE.MathUtils.lerp(
        rightEyeRef.current.position.x,
        0.25 + eyeOffset.x * 0.02,
        0.15
      );
      rightEyeRef.current.position.y = THREE.MathUtils.lerp(
        rightEyeRef.current.position.y,
        0.15 + eyeOffset.y * 0.02,
        0.15
      );
    }

    // Left arm
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = THREE.MathUtils.lerp(
        leftArmRef.current.rotation.z,
        (armRotation.leftX * Math.PI) / 180,
        0.1
      );
      leftArmRef.current.rotation.x = THREE.MathUtils.lerp(
        leftArmRef.current.rotation.x,
        (armRotation.leftY * Math.PI) / 180,
        0.1
      );
      leftArmRef.current.position.y = THREE.MathUtils.lerp(
        leftArmRef.current.position.y,
        -0.3 + shoulderCompress.left * 0.01,
        0.1
      );
    }

    // Right arm
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
        rightArmRef.current.rotation.z,
        (armRotation.rightX * Math.PI) / 180,
        0.1
      );
      rightArmRef.current.rotation.x = THREE.MathUtils.lerp(
        rightArmRef.current.rotation.x,
        (armRotation.rightY * Math.PI) / 180,
        0.1
      );
      rightArmRef.current.position.y = THREE.MathUtils.lerp(
        rightArmRef.current.position.y,
        -0.3 + shoulderCompress.right * 0.01,
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
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group position={[0, 0, 0]}>
        {/* Head */}
        <group ref={headRef} position={[0, 1.8, 0]}>
          {/* Skull */}
          <mesh material={bodyMaterial}>
            <sphereGeometry args={[0.5, 32, 32]} />
          </mesh>
          {/* Face visor */}
          <mesh position={[0, 0, 0.35]} material={darkMaterial}>
            <boxGeometry args={[0.7, 0.35, 0.2]} />
          </mesh>
          {/* Left eye */}
          <mesh ref={leftEyeRef} position={[-0.25, 0.15, 0.45]} material={glowMaterial}>
            <sphereGeometry args={[0.08, 16, 16]} />
          </mesh>
          {/* Right eye */}
          <mesh ref={rightEyeRef} position={[0.25, 0.15, 0.45]} material={glowMaterial}>
            <sphereGeometry args={[0.08, 16, 16]} />
          </mesh>
          {/* Ear panels */}
          <mesh position={[-0.55, 0, 0]} material={bodyMaterial}>
            <cylinderGeometry args={[0.08, 0.08, 0.25, 16]} />
          </mesh>
          <mesh position={[0.55, 0, 0]} material={bodyMaterial}>
            <cylinderGeometry args={[0.08, 0.08, 0.25, 16]} />
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 1.4, 0]} material={bodyMaterial}>
          <cylinderGeometry args={[0.12, 0.15, 0.2, 16]} />
        </mesh>

        {/* Torso */}
        <group position={[0, 0.6, 0]}>
          {/* Shoulders */}
          <mesh position={[0, 0.5, 0]} material={bodyMaterial}>
            <boxGeometry args={[1.4, 0.25, 0.5]} />
          </mesh>
          {/* Main body */}
          <mesh material={bodyMaterial}>
            <boxGeometry args={[0.9, 1, 0.5]} />
          </mesh>
          {/* Chest plates */}
          <mesh position={[-0.2, 0.2, 0.26]} material={darkMaterial}>
            <boxGeometry args={[0.25, 0.35, 0.05]} />
          </mesh>
          <mesh position={[0.2, 0.2, 0.26]} material={darkMaterial}>
            <boxGeometry args={[0.25, 0.35, 0.05]} />
          </mesh>
          {/* Core reactor */}
          <mesh position={[0, -0.1, 0.26]} material={coreMaterial}>
            <sphereGeometry args={[0.15, 32, 32]} />
          </mesh>
          {/* Core glow ring */}
          <mesh position={[0, -0.1, 0.26]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.18, 0.02, 16, 32]} />
            <meshStandardMaterial
              color="#60a5fa"
              emissive="#3b82f6"
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>

        {/* Left Arm */}
        <group ref={leftArmRef} position={[-0.8, 0.8, 0]}>
          {/* Shoulder joint */}
          <mesh material={bodyMaterial}>
            <sphereGeometry args={[0.15, 16, 16]} />
          </mesh>
          {/* Upper arm */}
          <mesh position={[0, -0.35, 0]} material={bodyMaterial}>
            <capsuleGeometry args={[0.1, 0.4, 8, 16]} />
          </mesh>
          {/* Elbow + Forearm */}
          <group ref={leftElbowRef} position={[0, -0.65, 0]}>
            {/* Elbow joint */}
            <mesh material={bodyMaterial}>
              <sphereGeometry args={[0.1, 16, 16]} />
            </mesh>
            {/* Forearm */}
            <mesh position={[0, -0.3, 0]} material={bodyMaterial}>
              <capsuleGeometry args={[0.08, 0.35, 8, 16]} />
            </mesh>
            {/* Wrist + Hand */}
            <group ref={leftWristRef} position={[0, -0.55, 0]}>
              {/* Wrist */}
              <mesh material={bodyMaterial}>
                <sphereGeometry args={[0.07, 16, 16]} />
              </mesh>
              {/* Palm */}
              <mesh position={[0, -0.12, 0]} material={bodyMaterial}>
                <boxGeometry args={[0.15, 0.15, 0.08]} />
              </mesh>
              {/* Fingers */}
              {[-0.05, -0.017, 0.017, 0.05].map((x, i) => (
                <group key={i} position={[x, -0.22, 0]}>
                  <mesh material={bodyMaterial}>
                    <capsuleGeometry args={[0.015, 0.06, 4, 8]} />
                  </mesh>
                </group>
              ))}
              {/* Thumb */}
              <group position={[-0.1, -0.1, 0]} rotation={[0, 0, 0.5]}>
                <mesh material={bodyMaterial}>
                  <capsuleGeometry args={[0.02, 0.05, 4, 8]} />
                </mesh>
              </group>
            </group>
          </group>
        </group>

        {/* Right Arm */}
        <group ref={rightArmRef} position={[0.8, 0.8, 0]}>
          {/* Shoulder joint */}
          <mesh material={bodyMaterial}>
            <sphereGeometry args={[0.15, 16, 16]} />
          </mesh>
          {/* Upper arm */}
          <mesh position={[0, -0.35, 0]} material={bodyMaterial}>
            <capsuleGeometry args={[0.1, 0.4, 8, 16]} />
          </mesh>
          {/* Elbow + Forearm */}
          <group ref={rightElbowRef} position={[0, -0.65, 0]}>
            {/* Elbow joint */}
            <mesh material={bodyMaterial}>
              <sphereGeometry args={[0.1, 16, 16]} />
            </mesh>
            {/* Forearm */}
            <mesh position={[0, -0.3, 0]} material={bodyMaterial}>
              <capsuleGeometry args={[0.08, 0.35, 8, 16]} />
            </mesh>
            {/* Wrist + Hand */}
            <group ref={rightWristRef} position={[0, -0.55, 0]}>
              {/* Wrist */}
              <mesh material={bodyMaterial}>
                <sphereGeometry args={[0.07, 16, 16]} />
              </mesh>
              {/* Palm */}
              <mesh position={[0, -0.12, 0]} material={bodyMaterial}>
                <boxGeometry args={[0.15, 0.15, 0.08]} />
              </mesh>
              {/* Fingers */}
              {[-0.05, -0.017, 0.017, 0.05].map((x, i) => (
                <group key={i} position={[x, -0.22, 0]}>
                  <mesh material={bodyMaterial}>
                    <capsuleGeometry args={[0.015, 0.06, 4, 8]} />
                  </mesh>
                </group>
              ))}
              {/* Thumb */}
              <group position={[0.1, -0.1, 0]} rotation={[0, 0, -0.5]}>
                <mesh material={bodyMaterial}>
                  <capsuleGeometry args={[0.02, 0.05, 4, 8]} />
                </mesh>
              </group>
            </group>
          </group>
        </group>

        {/* Point lights for glow effects */}
        <pointLight position={[0, 0.5, 0.5]} color="#3b82f6" intensity={0.5} distance={2} />
        <pointLight position={[0, 1.8, 0.6]} color="#60a5fa" intensity={0.3} distance={1} />
      </group>
    </Float>
  );
}

export default function Robot3DCanvas(props: Robot3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 1, 4], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 3, -5]} intensity={0.3} />
      <Environment preset="city" />
      <RobotModel {...props} />
    </Canvas>
  );
}
