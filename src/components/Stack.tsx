import { languages, skillGroups } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="tecnologias" className="section">
      <Reveal>
        <h2 className="section-title">Tecnologias</h2>
      </Reveal>

      <div className="stack-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 110}>
            <h3 className="group-title">{group.title}</h3>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="languages">
        <h3 className="group-title">Idiomas</h3>
        <ul className="language-list">
          {languages.map((language) => (
            <li key={language.name} className="language">
              <span>{language.name}</span>
              <span className="language-level">{language.level}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
