import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number; // atraso em milissegundos
  className?: string;
}

// Envolve qualquer conteúdo e faz ele deslizar da esquerda para a direita
// quando entra na tela. A animação em si está em styles.css (.reveal).
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [ref, visible] = useInView<HTMLDivElement>();

  // Variáveis CSS não existem no tipo CSSProperties, por isso o "as".
  const style = { "--delay": `${delay}ms` } as CSSProperties;

  const classes = ["reveal", visible ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}
