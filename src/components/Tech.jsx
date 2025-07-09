import React, { useEffect, useState, Suspense } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ErrorBoundary from "./ErrorBoundary";

// Lazy import moved to top-level — avoids dynamic injection after render
const LazyBallCanvas = React.lazy(() => import("./canvas/Ball"));

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const mobile = width < 768 || isMobileDevice;
      setIsMobile(mobile);
    }
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {!isMobile ? (
            <ErrorBoundary>
              <Suspense fallback={<div className="text-white">Loading...</div>}>
                <LazyBallCanvas icon={technology.icon} />
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
