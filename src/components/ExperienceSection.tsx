import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences, education } from "@/data/experience";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-primary rounded-sm" />
            <p className="text-primary font-medium text-sm tracking-widest uppercase">Experience</p>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Professional roles building Flutter apps with Firebase, APIs, WebSockets, and Platform
            Channels.
          </p>
        </motion.div>

        <div className="relative mb-12">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="relative sm:pl-14"
              >
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center">
                  <Briefcase size={18} className="text-primary" />
                </div>

                <div className="glass-card-hover p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-heading text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary text-sm font-medium mt-1">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 mt-3">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-secondary-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card-hover p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">{education.degree}</h3>
              <p className="text-primary text-sm font-medium mt-1">{education.institution}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {education.location} · {education.period}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
