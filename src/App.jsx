import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import StarsLazy from "./components/canvas/StarsLazy";

import { Hero, Navbar } from "./components";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Works = lazy(() => import("./components/Works"));
const Tech = lazy(() => import("./components/Tech"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));

//import CanvasManager from "./components/canvas/CanvasManager";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />

          {/* Single CanvasManager instead of multiple canvases }
          <Suspense fallback={<div>Loading 3D Canvas...</div>}>
            <CanvasManager />
          </Suspense>*/}
        </div>

        <Suspense fallback={<div className="min-h-screen">Loading About...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen">Loading Experience...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen">Loading Works...</div>}>
          <Works />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen">Loading Tech...</div>}>
          <Tech />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen">Loading Feedbacks...</div>}>
          <Feedbacks />
        </Suspense>

        <div className="relative z-0">
          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
