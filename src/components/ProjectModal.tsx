import { useEffect, useRef } from "react";
import { statusLabel } from "../data/portfolio";
import type { Project } from "../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// Usa o <dialog> nativo do navegador: ele já cuida de fechar com Esc,
// prender o foco dentro da janela e devolver o foco ao botão que abriu.
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { title, status, description, tags, repos, liveUrl } = project;

  useEffect(() => {
    const dialog = dialogRef.current;
    // O "!dialog.open" evita abrir duas vezes (o StrictMode roda o efeito 2x em dev).
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-title"
      onClose={onClose}
      // Clique fora do conteúdo (no fundo escurecido) também fecha.
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="modal-body">
        <div className="modal-head">
          <span className={`status status--${status}`}>
            {statusLabel[status]}
          </span>
          <button type="button" className="modal-close" onClick={close}>
            Fechar
          </button>
        </div>

      <h3 id="modal-title" className="project-title modal-title">
        {title}
      </h3>

        <div className="modal-description">
          {description.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {tags.length > 0 && (
          <div>
            <h4 className="group-title">Tecnologias</h4>
            <ul className="tag-list">
              {tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}

        {((repos && repos.length > 0) || liveUrl) && (
        <div className="card-links">
          {repos?.map((repo) => (
            <a key={repo.url} className="link" href={repo.url} target="_blank" rel="noreferrer">
              {repo.label}
            </a>
          ))}
          {liveUrl && (
              <a className="link" href={liveUrl} target="_blank" rel="noreferrer">
                Ver online
              </a>
          )}</div>
      )}
      </div>
    </dialog>
  );
}
