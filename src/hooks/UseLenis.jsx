import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const UseLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => t,
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
};

export default UseLenis;
