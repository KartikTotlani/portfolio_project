// src/components/canvas/StarsLazy.jsx

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StarsCanvas = React.lazy(() => import("./Stars"));

const StarsLazy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only load once
    threshold: 0.1,     // Load when 10% visible
  });

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (inView) setShouldRender(true);
  }, [inView]);

  return (
    <div ref={ref}>
      {shouldRender && (
        <React.Suspense fallback={<div>Loading Stars...</div>}>
          <StarsCanvas />
        </React.Suspense>
      )}
    </div>
  );
};

export default StarsLazy;
