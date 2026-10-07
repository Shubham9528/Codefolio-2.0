import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      lerp: 0.05,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children || null;
}
