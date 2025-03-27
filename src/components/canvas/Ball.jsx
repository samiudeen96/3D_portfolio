import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  // const decal = useTexture(props.imgUrl); // ✅ Correct usage

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} intensity={2} />

      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />

        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={0.8}
          flatShading
          map={props.imgUrl} // ✅ Use directly
        />
      </mesh>
    </Float>
  );
};


const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }} className="computerCanvas">
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
