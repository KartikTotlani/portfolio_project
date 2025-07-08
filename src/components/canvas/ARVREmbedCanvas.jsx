import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
const ARVRModel = () => {
  const model = useGLTF("/models/arvr.glb");
  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <primitive object={model.scene} scale={2.5} position-y={-1} rotation-y={-2}/>
    </mesh>
  );
};

const ARVREmbedCanvas = () => (
  <Canvas
    shadows
    frameloop="demand"
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
  >
    <Suspense fallback={<CanvasLoader />}>
      {/* 💡 add lights here */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ARVRModel />
      <Preload all />
    </Suspense>
  </Canvas>
);

export default ARVREmbedCanvas;
