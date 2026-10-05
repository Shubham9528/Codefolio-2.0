import { SmoothScroll } from "./components/layout/SmoothScroll";
import { StatusBar } from "./components/layout/StatusBar";
import { Footer } from "./components/layout/Footer";
import { FloatingNav } from "./components/layout/FloatingNav";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="portfolio-frame">
      <SmoothScroll />
      <StatusBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
}

export default App;
