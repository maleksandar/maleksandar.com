import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <footer className="px-6 py-10 max-w-3xl mx-auto">
        <p className="text-[10px] text-border">
          © {new Date().getFullYear()} Aleksandar Milosavljević
        </p>
      </footer>
    </main>
  );
}
