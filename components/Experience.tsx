import { experience, education } from "@/data/resume";
import Tags from "@/components/Tags";

export default function Experience() {
  return (
    <section id="experience" className="py-8 px-6 max-w-3xl mx-auto">
      <div className="border-t border-border pt-7">
        <h2 className="text-[10px] tracking-widest uppercase text-ink-muted mb-7">
          Experience
        </h2>

        <div className="space-y-7">
          {experience.map((job) => (
            <div key={job.company + job.period} className="grid grid-cols-[1fr_2fr] gap-5">
              <div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {job.period}
                </p>
                <p className="text-xs text-ink-faint">{job.location}</p>
              </div>
              <div>
                <p className="font-medium text-sm text-(--color-ink)">{job.role}</p>
                <p className="text-xs text-ink-muted mb-2">{job.company}</p>
                <p className="text-xs text-ink-muted leading-relaxed mb-2 text-justify">
                  {job.description}
                </p>
                <Tags items={job.technologies} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-7">
          <h2 className="text-[10px] tracking-widest uppercase text-ink-muted mb-6">
            Education
          </h2>
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.degree} className="grid grid-cols-[1fr_2fr] gap-5">
                <p className="text-xs text-ink-muted">{e.period}</p>
                <div>
                  <p className="font-medium text-sm text-(--color-ink)">{e.degree}</p>
                  <p className="text-xs text-ink-muted">{e.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
