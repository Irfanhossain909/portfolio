import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import StoreLinks from "@/components/StoreLinks";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-primary rounded-sm" />
            <p className="text-primary font-medium text-sm tracking-widest uppercase">
              Laboratório
            </p>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Published mobile apps — tap App Store or Google Play to view on the store.
          </p>
        </motion.div>

        <div
          className={`grid gap-6 lg:gap-8 ${
            projects.length === 1
              ? "max-w-xl mx-auto"
              : "sm:grid-cols-2 xl:grid-cols-2"
          }`}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i }}
              className="glass-card-hover overflow-hidden flex flex-col"
            >
              {/* Preview banner */}
              <div className="h-44 bg-gradient-to-br from-primary/10 via-card to-muted flex items-center justify-center relative overflow-hidden border-b border-border">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="relative z-10 w-20 h-20 rounded-2xl shadow-lg object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&background=0d9488&color=fff&size=128&rounded=true`;
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <StoreLinks
                  appStoreUrl={project.appStoreUrl}
                  playStoreUrl={project.playStoreUrl}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
