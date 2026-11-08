import { useEffect, useRef } from "react";

// A linha roxa fixa na lateral: ela preenche conforme você desce a página.
// Atualiza o estilo direto no elemento (sem useState) para não re-renderizar
// o React a cada pixel de rolagem.
export function Rail() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const fill = fillRef.current;
      if (!fill) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      fill.style.transform = `scaleY(${Math.min(1, Math.max(0, progress))})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="rail" aria-hidden="true">
      <div className="rail-fill" ref={fillRef} />
    </div>
  );
}
