import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
const isMobile = /Mobi|Android/i.test(navigator.userAgent);

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: isMobile ? 0.9 : 1.3,
      easing: (t) => 1 - Math.pow(1 - t, isMobile ? 2.5 : 3),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: isMobile ?6 : 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
};

export default useLenis;
