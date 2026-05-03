import { personal } from "@/data/resume";
import Logo from "@/components/Logo";
import { Mail, CalendarDays } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactLinks = [
  { icon: Mail, href: `mailto:${personal.email}`, display: personal.email },
  { icon: GithubIcon, href: `https://github.com/${personal.github}`, display: `github.com/${personal.github}` },
  { icon: LinkedinIcon, href: `https://linkedin.com/in/${personal.linkedin}`, display: `linkedin.com/in/${personal.linkedin}` },
  { icon: CalendarDays, href: `https://cal.com/${personal.cal}`, display: `cal.com/${personal.cal}` },
];

export default function Hero() {
  return (
    <section className="pt-10 pb-6 px-6 max-w-3xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        <div className="flex-2 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <Logo size={24} />
            <h1 className="text-2xl font-semibold whitespace-nowrap">
              {personal.name}
            </h1>
          </div>
          <p className="text-sm text-ink-muted mb-5">
            {personal.subtitle}
          </p>
          <nav className="flex gap-5 text-xs">
            {["About", "Experience", "Skills"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="text-ink-muted hover:text-(--color-ink) transition-colors underline underline-offset-4 decoration-border"
              >
                {s}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px lg:h-auto lg:w-px bg-border lg:self-stretch" />

        <div className="flex-1 flex flex-col justify-center gap-3">
          {contactLinks.map(({ icon: Icon, href, display }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-ink-muted hover:text-(--color-ink) transition-colors group"
            >
              <Icon size={13} className="shrink-0" />
              <span className="underline underline-offset-4 decoration-border group-hover:decoration-current truncate">
                {display}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
