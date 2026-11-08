import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="section">
      <Reveal>
        <h2 className="section-title">Sobre mim</h2>
      </Reveal>
      <div className="about-text">
        {profile.about.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index * 100}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
