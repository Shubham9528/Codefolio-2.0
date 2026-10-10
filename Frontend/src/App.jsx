import { Suspense, lazy } from "react";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import { StatusBar } from "./components/layout/StatusBar";
import { Footer } from "./components/layout/Footer";
import { FloatingNav } from "./components/layout/FloatingNav";
import { Hero } from "./components/sections/Hero";
import { ChatBot } from "./components/ui/ChatBot";

// Lazy loaded components (below the fold)
const About = lazy(() =>
  import("./components/sections/About").then((mod) => ({ default: mod.About })),
);
const Experience = lazy(() =>
  import("./components/sections/Experience").then((mod) => ({
    default: mod.Experience,
  })),
);
const Projects = lazy(() =>
  import("./components/sections/Projects").then((mod) => ({
    default: mod.Projects,
  })),
);
const Skills = lazy(() =>
  import("./components/sections/Skills").then((mod) => ({
    default: mod.Skills,
  })),
);
const Services = lazy(() =>
  import("./components/sections/Services").then((mod) => ({
    default: mod.Services,
  })),
);
const Process = lazy(() =>
  import("./components/sections/Process").then((mod) => ({
    default: mod.Process,
  })),
);
const Testimonials = lazy(() =>
  import("./components/sections/Testimonials").then((mod) => ({
    default: mod.Testimonials,
  })),
);
const Contact = lazy(() =>
  import("./components/sections/Contact").then((mod) => ({
    default: mod.Contact,
  })),
);

function App() {
  return (
    <div className="portfolio-frame">
      <SmoothScroll />
      <StatusBar />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <About />
          <Projects />
          <Services />
          <Experience />
          <Process />
          <Skills />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <FloatingNav />
      <ChatBot />
    </div>
  );
}

export default App;
