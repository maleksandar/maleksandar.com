import { bio } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-8 px-6 max-w-2xl mx-auto">
      <div className="border-t border-[var(--color-border)] pt-7">
        <h2 className="text-[10px] tracking-widest uppercase text-[var(--color-ink-muted)] mb-4">
          About
        </h2>
        <p className="text-sm leading-relaxed text-[var(--color-ink)] text-justify">
          {bio}
        </p>
      </div>
    </section>
  );
}
