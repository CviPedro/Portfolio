import { profile } from "../data/portfolio";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "sobre", label: "Sobre" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="header">
      <a className="header-name" href="#inicio">
        {profile.name}
      </a>
      <nav className="nav" aria-label="Seções do site">
        {navItems.map((item) => (
          <a key={item.id} className="nav-link" href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
