import React, { useEffect, useState, Suspense } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ErrorBoundary from "./ErrorBoundary";

//let BallCanvas = null;

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  //const [canRender3D, setCanRender3D] = useState(false);
  const [BallCanvas, setBallCanvas] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      //const mobile = window.innerWidth < 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
      //setIsMobile(mobile);
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(
          navigator.userAgent
        );
        const mobile = width < 768 || isMobileDevice;
        setIsMobile(mobile);

        // Only load 3D component if NOT mobile
        if (!mobile) {
          const Lazy3D = React.lazy(() => import("./canvas/Ball"));
          setBallCanvas(() => Lazy3D); // function reference for rendering
        }
      }
    }
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {BallCanvas ? (
            <ErrorBoundary>
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <BallCanvas icon={technology.icon} />
            </Suspense>
            </ErrorBoundary>
          ) : (
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain p-2"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
