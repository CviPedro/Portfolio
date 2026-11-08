import { useState } from "react";
import { projects, statusLabel } from "../data/portfolio";
import type { Project } from "../types";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "./Reveal";

interface ThumbProps {
  src: string;
  alt: string;
}

// Miniatura que não quebra: se o arquivo ainda não existir, mostra um quadrado "Em breve".
function Thumb({ src, alt }: ThumbProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="thumb thumb--empty" aria-hidden="true">
        Em breve
      </div>
    );
  }

  return (
    <img
      className="thumb"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  // "wide" é o valor padrão quando imageShape não foi preenchido.
  const { title, status, summary, images, imageShape = "wide" } = project;

  return (
    <article className="project-card">
      <span className={`status status--${status}`}>{statusLabel[status]}</span>
      <h3 className="project-title">{title}</h3>
      <p className="project-summary">{summary}</p>

      {images.length > 0 && (
        <div className={`gallery gallery--${imageShape}`}>
          {images.slice(0, 3).map((src, index) => (
            <Thumb
              key={`${index}-${src}`}
              src={src}
              alt={`Captura de tela ${index + 1} do ${title}`}
            />
          ))}
        </div>
      )}

      {/* O botão cobre o card inteiro (ver .card-open::after em styles.css). */}
      <button
        type="button"
        className="card-open"
        aria-haspopup="dialog"
        onClick={onOpen}
      >
        Ver detalhes
        <span className="visually-hidden"> de {title}</span>
      </button>
    </article>
  );
}

export function Projects() {
  // Project | null: guarda o projeto aberto, ou null quando a janela está fechada.
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projetos" className="section">
      <Reveal>
        <h2 className="section-title">Projetos</h2>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 120}
            // Projeto finalizado ocupa a linha inteira; os em andamento dividem a linha.
            className={
              project.status === "finalizado" ? "slot span-all" : "slot"
            }
          >
            <ProjectCard project={project} onOpen={() => setSelected(project)} />
          </Reveal>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
