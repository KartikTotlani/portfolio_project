import { motion } from "framer-motion";
import { styles } from "../styles";
import React, { useState, useEffect, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import fallbackImage_1 from "../assets/kt_gdgc_photo.png";
// import { ComputersCanvas } from "./canvas";
const ARVREmbedCanvas = React.lazy(() => import("./canvas/ARVREmbedCanvas"));

const Hero = () => {
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
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

      {/* 🔄 ARVR Canvas Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px]">
        {isMobile ? (
          <img
            src={fallbackImage_1}
            alt="3D model preview"
            className="w-full h-full object-contain mix-blend-normal opacity-90 absolute bottom-0 left-0.5 right-0.5 bg-center"
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
