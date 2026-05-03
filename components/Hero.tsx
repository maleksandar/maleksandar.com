import { personal } from "@/data/resume";
import Logo from "@/components/Logo";

export default function Hero() {
  return (
    <section className="pt-10 pb-6 px-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-2">
        <Logo size={24} />
        <h1 className="text-2xl font-semibold whitespace-nowrap">
          {personal.name}
        </h1>
      </div>
      <p className="text-sm text-[var(--color-ink-muted)] mb-5">
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
