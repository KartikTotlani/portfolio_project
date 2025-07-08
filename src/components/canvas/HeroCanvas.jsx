import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const AvatarModel = () => {
  const avatar = useGLTF("/avatar.glb");
  return <primitive object={avatar.scene} scale={2.5} position={[-2, 0, 0]} />;
};

const HeroCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls autoRotate enableZoom={false} />
        <AvatarModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HeroCanvas;