import { motion } from "framer-motion";
import { styles } from "../styles";
import React, { useState, useEffect, Suspense } from "react";
import fallbackImage_1 from "../assets/kt_gdgc_photo.png";
import ErrorBoundary from "./ErrorBoundary";

const LazyARVREmbedCanvas = React.lazy(() => import("./canvas/ARVREmbedCanvas"));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  window.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    console.error("WebGL context lost", e);
    alert("WebGL context lost — try refreshing.");
  });
}, []);


  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const mobile = width < 768 || isMobileDevice;
      setIsMobile(mobile);
    }
  }, []);

  if (!mounted || isMobile == null) return null; // Prevent hydration mismatch on SSR

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

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px]">
        {!isMobile ? (
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="text-white flex justify-center items-center h-full w-full">
                  Loading 3D...
                </div>
              }
            >
              <LazyARVREmbedCanvas />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <img
            src={fallbackImage_1}
            alt="3D model preview"
className="w-full max-w-[430px] h-auto object-contain opacity-90 mix-blend-screen absolute bottom-0 right-0 sm:max-w-[700px] md:max-w-[800px] lg:max-w-[1000px]"
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
