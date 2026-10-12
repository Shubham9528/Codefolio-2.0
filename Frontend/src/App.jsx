import { SmoothScroll } from "./components/layout/SmoothScroll";
import { StatusBar } from "./components/layout/StatusBar";
import { Footer } from "./components/layout/Footer";
import { FloatingNav } from "./components/layout/FloatingNav";

import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Experience } from "./components/sections/Experience";
import { Process } from "./components/sections/Process";
import { Skills } from "./components/sections/Skills";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";

import { ChatBot } from "./components/ui/ChatBot";

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
        <Experience />
        <Process />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingNav />
      <ChatBot />
    </div>
  );
}

export default App;
