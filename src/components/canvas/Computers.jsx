import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useMediaQuery } from "react-responsive";

const Computers = () => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  // Responsive
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  // Memoized position & scale to prevent unnecessary re-renders
  const { position, scale } = useMemo(() => {
    if (isMobile) return { position: [0, -1.4, -0.9], scale: 0.65 };
    if (isTablet) return { position: [0, -1.8, -1.5], scale: 0.95 };
    return { position: [0, -2.5, -1.5], scale: 1.4 }; // Default for Desktop
  }, [isMobile, isTablet, isDesktop]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight intensity={4} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.1}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <primitive object={scene} scale={scale} position={position} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand" // ✅ Fixed Typo
      shadows
      camera={{ position: [20, 10, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }} // 👈 Ensures canvas fits parent
      className="computerCanvas"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
