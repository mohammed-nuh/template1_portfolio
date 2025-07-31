import { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Channel from "./components/Channel";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";

function App() {
  const cartRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-light text-dark min-vh-100 d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects ref={cartRef} /></section>
        <section id="achievements">
          <Achievements onCartClick={() => cartRef.current?.scrollIntoView({ behavior: "smooth" })} />
        </section>
        <section id="channel"><Channel /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
