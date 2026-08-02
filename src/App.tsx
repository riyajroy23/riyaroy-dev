import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Education />
        <Hobbies />
      </main>
      <Footer />
    </>
  );
}
