import { bio } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-8 px-6 max-w-3xl mx-auto">
      <div className="border-t border-border pt-7">
        <h2 className="text-[10px] tracking-widest uppercase text-ink-muted mb-4">
          About
        </h2>
        <p className="text-sm leading-relaxed text-(--color-ink) text-justify">
          {bio}
        </p>
      </div>
    </section>
  );
}
