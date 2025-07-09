import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Suspense } from "react";
import { useEffect } from "react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import ErrorBoundary from "./ErrorBoundary";
import fallbackImage_2 from "../assets/arvr_kt.png";
//import AvatarCanvas from "./canvas/AvatarCanvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//let AvatarCanvas = null;

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  //const [shouldRender3D, setShouldRender3D] = useState(false);
  const [AvatarCanvas, setAvatarCanvas] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      );
      //setIsMobile(width < 768 || isMobileDevice);
      const mobile = width < 768 || isMobileDevice;
      setIsMobile(mobile);

      {
        /*if (!(width < 768 || isMobileDevice)) {
        // Only import Avatar canvas on non-mobile
        import("./canvas/AvatarCanvas").then((mod) => {
          AvatarCanvas = mod.default;
          setShouldRender3D(true);
        });
      }
    }
  }, []);*/
      }
      // Only load 3D component if NOT mobile
      if (!mobile) {
        const Lazy3D = React.lazy(() => import("./canvas/AvatarCanvas"));
        setAvatarCanvas(() => Lazy3D); // function reference for rendering
      }
    }
  }, []);

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kartik Totlani",
          from_email: form.email,
          to_email: "totlanikartik@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/*<AvatarCanvas />*/}

        {/*<div className="absolute bottom-0 right-0 w-[500px] h-[560px]">
          {!shouldRender3D ? (
            <img
              src={fallbackImage_2}
              alt="3D model preview"
              className="object-contain opacity-90 mix-blend-screen absolute bottom-0 right-0 w-[500px] h-[420px] md:w-[1000px] md:h-[820px]"
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
              <AvatarCanvas />
            </Suspense>
          </ErrorBoundary>
        )}
        </div>*/}

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px]">
          {AvatarCanvas ? (
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="text-white flex justify-center items-center h-full w-full">
                    Loading 3D...
                  </div>
                }
              >
                <AvatarCanvas />
              </Suspense>
            </ErrorBoundary>
          ) : (
            <img
              src={fallbackImage_2}
              alt="3D model preview"
              className="object-contain opacity-90 mix-blend-screen absolute bottom-0 right-0 w-[500px] h-[420px] md:w-[1000px] md:h-[820px]"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
