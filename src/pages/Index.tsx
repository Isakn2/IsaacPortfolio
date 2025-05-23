import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}