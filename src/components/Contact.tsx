import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const contactLinks: ContactLink[] = [
  {
    label: "E-mail",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedinUrl,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.githubUser,
    href: profile.githubUrl,
    external: true,
  },
  // Para mostrar o telefone/WhatsApp, adicione aqui (ele fica público no site):
  // { label: "WhatsApp", value: "(85) 9 9614-3456", href: "https://wa.me/5585996143456", external: true },
];

export function Contact() {
  return (
    <section id="contato" className="section">
      <Reveal>
        <h2 className="section-title">Contato</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="contact-text">
          Quer conversar sobre uma vaga ou um projeto?
          <br /> Escreva por um destes canais.
        </p>
      </Reveal>

      <ul className="contact-list">
        {contactLinks.map((link, index) => (
          <Reveal key={link.label} delay={index * 100}>
            <li>
              <a
                className="contact-link"
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <span>{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
