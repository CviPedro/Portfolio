import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <Reveal>
        <h1 className="hero-name">{profile.name}</h1>
      </Reveal>
      <Reveal delay={120}>
        <p className="hero-role">{profile.role}</p>
      </Reveal>
      <Reveal delay={240}>
        <p className="hero-text">{profile.summary}</p>
      </Reveal>
      <Reveal delay={360}>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projetos">
            Ver projetos
          </a>
          <a className="btn btn-secondary" href={profile.resumeUrl} download>
            Baixar currículo
          </a>
          <a
            className="btn btn-secondary"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
