import { skills } from "@/data/resume";
import Tags from "@/components/Tags";

export default function Skills() {
  return (
    <section id="skills" className="py-8 px-6 max-w-3xl mx-auto">
      <div className="border-t border-border pt-7">
        <h2 className="text-[10px] tracking-widest uppercase text-ink-muted mb-6">
          Skills
        </h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="grid grid-cols-[1fr_2fr] gap-5">
              <p className="text-xs text-ink-muted">{category}</p>
              <Tags items={items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
