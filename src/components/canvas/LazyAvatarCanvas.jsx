// components/canvas/LazyAvatarCanvas.jsx
import React from "react";
import { useInView } from "react-intersection-observer";
import AvatarCanvas from "./AvatarCanvas";

const LazyAvatarCanvas = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} style={{ height: "500px" }}>
      {inView && <AvatarCanvas />}
    </div>
  );
};

export default LazyAvatarCanvas;
