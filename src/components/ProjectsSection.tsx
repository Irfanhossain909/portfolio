import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FinTrack Pro",
    desc: "Real-time financial tracking app with live portfolio updates and push notifications.",
    tech: ["Flutter", "Socket.IO", "GetX", "REST API"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "MediConnect",
    desc: "Telemedicine platform connecting patients with doctors via video calls and chat.",
    tech: ["Flutter", "WebRTC", "Dio", "Firebase"],
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "DeliverEase",
    desc: "On-demand delivery app with real-time GPS tracking and route optimization.",
    tech: ["Flutter", "Google Maps", "Socket.IO", "GetX"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "EduVerse",
    desc: "Interactive e-learning platform with live classes, quizzes, and progress analytics.",
    tech: ["Flutter", "REST API", "GetX", "Hive"],
    color: "from-accent/10 to-primary/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Projects</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Selected <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card-hover group overflow-hidden"
            >
              {/* Project preview area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/40" />
                <span className="relative z-10 font-heading text-2xl font-bold text-foreground/80 group-hover:scale-105 transition-transform duration-500">
                  {project.title}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.desc}
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
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
