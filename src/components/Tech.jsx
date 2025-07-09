import React, { useEffect, useState, Suspense } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

let BallCanvas = null;

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mobile = window.innerWidth < 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
      setIsMobile(mobile);

      if (!mobile) {
        import("./canvas/Ball").then((mod) => {
          BallCanvas = mod.default;
          setCanRender3D(true);
        });
      }
    }
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {canRender3D ? (
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <BallCanvas icon={technology.icon} />
            </Suspense>
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
