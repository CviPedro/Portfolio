import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

// Hook genérico: <T extends HTMLElement> deixa quem usa escolher o tipo do
// elemento (div, section...) e o ref já vem com o tipo certo.
// Devolve o ref para colocar no elemento e um boolean "já apareceu na tela?".
export function useInView<T extends HTMLElement>(
  threshold = 0.15,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return; // narrowing: depois deste if, element não é null

    // Navegadores muito antigos: mostra o conteúdo sem animar.
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // anima só uma vez
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
