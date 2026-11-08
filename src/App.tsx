import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Rail } from "./components/Rail";
import { Stack } from "./components/Stack";
import { profile } from "./data/portfolio";

export default function App() {
  return (
    <>
      <Rail />
      <Header />
      <main className="page">
        <div className="container">
          <Hero />
          <About />
          <Stack />
          <Projects />
          <Contact />
        </div>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.fullName}
      </footer>
    </>
  );
}
