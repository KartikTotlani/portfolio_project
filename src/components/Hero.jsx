import { motion } from "framer-motion";
import { styles } from "../styles";
import React, { useState, useEffect, Suspense } from "react";
import fallbackImage_1 from "../assets/kt_gdgc_photo.png";
import ErrorBoundary from "./ErrorBoundary";

//let ARVREmbedCanvas = null;

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  //const [shouldRender3D, setShouldRender3D] = useState(false);
  const [ARVREmbedCanvas, setARVREmbedCanvas] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      );
      const mobile = width < 768 || isMobileDevice;
      setIsMobile(mobile);

      {
        /*if (!(width < 768 || isMobileDevice)) {
        // Only import AR/VR canvas on non-mobile
        import("./canvas/ARVREmbedCanvas").then((mod) => {
          ARVREmbedCanvas = mod.default;
          setShouldRender3D(true);
        });
      }
    }
  }, []);*/
      }

      // Only load 3D component if NOT mobile
      if (!mobile) {
        const Lazy3D = React.lazy(() => import("./canvas/ARVREmbedCanvas"));
        setARVREmbedCanvas(() => Lazy3D); // function reference for rendering
      }
    }
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Kartik Totlani</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I turn ideas into code, data into insights,
            <br className="sm:block hidden" />
            and side-projects into impactful builds across Full-Stack,
            Cybersecurity and Machine Learning.
          </p>
        </div>
      </div>

      {/*<div className="absolute bottom-0 right-0 w-[500px] h-[500px]">
        {!shouldRender3D ? (
          <img
            src={fallbackImage_1}
            alt="3D model preview"
            className="w-full h-full object-contain opacity-90 mix-blend-screen"
          />
        ) : (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="text-white flex justify-center items-center h-full w-full">
                  Loading 3D...
                </div>
              }
            >
              <ARVREmbedCanvas />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>*/}

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px]">
        {ARVREmbedCanvas ? (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="text-white flex justify-center items-center h-full w-full">
                  Loading 3D...
                </div>
              }
            >
              <ARVREmbedCanvas />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <img
            src={fallbackImage_1}
            alt="3D model preview"
            className="w-full h-full object-contain opacity-90 mix-blend-screen"
          />
        )}
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
