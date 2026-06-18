import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { upcomingProjects } from "@/data/upcomingProjects";

const UpcomingProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="upcoming" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-primary rounded-sm" />
            <p className="text-primary font-medium text-sm tracking-widest uppercase">In Progress</p>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Upcoming <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Currently building and exploring next-generation mobile apps — from AI chat and BLE health
            devices to ride-sharing, delivery, and customer loyalty platforms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {upcomingProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="glass-card-hover p-6 md:p-8 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <div className="flex items-start justify-between gap-3 mb-4 relative">
                <span className="text-3xl">{project.emoji}</span>
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  <Sparkles size={12} />
                  Coming Soon
                </span>
              </div>

              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit mb-3">
                {project.category}
              </span>

              <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <ul className="space-y-2 mb-5">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-secondary-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjectsSection;
