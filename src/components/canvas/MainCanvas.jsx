import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

import AvatarModel from "./AvatarCanvas";     // <== Rename AvatarCanvas to AvatarModel
import ARVRModel from "./ARVREmbedCanvas";         // <== Rename ARVREmbedCanvas to ARVRModel
import EarthModel from "./EarthCanvas";       // <== Rename EarthCanvas to EarthModel

const MainCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [0, 3, 10] }}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1, width: "100vw", height: "100vh" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 10, 5]} intensity={1.2} />
        <OrbitControls enableZoom={false} autoRotate />

        {/* Avatar in center hero section */}
        <AvatarModel position={[0, -1, 0]} scale={2.8} rotation={[0, 0, 0]} />

        {/* AR/VR model to the right of avatar */}
        <ARVRModel position={[3, -1, 0]} scale={2.4} rotation={[0, 0, 0]} />

        {/* Earth model, hidden by default. You can conditionally render with props or scroll position */}
        {/* Example: visible only when "showEarth" is true */}
        {/* {showEarth && <EarthModel position={[0, -2, -5]} scale={2} />} */}
        {/* For now, render it always but place it far in background */}
        <EarthModel position={[0, -3, -15]} scale={3} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MainCanvas;
