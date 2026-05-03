import { personal } from "@/data/resume";
import Logo from "@/components/Logo";

export default function Hero() {
  return (
    <section className="pt-14 pb-8 px-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-3">
        <Logo size={36} />
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          {personal.name}
        </h1>
      </div>
      <p className="text-sm text-[var(--color-ink-muted)] mb-7">
        {personal.subtitle}
      </p>
      <nav className="flex gap-5 text-xs">
        {["About", "Experience", "Skills", "Contact"].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors underline underline-offset-4 decoration-[var(--color-border)]"
          >
            {s}
          </a>
        ))}
      </nav>
    </section>
  );
}
