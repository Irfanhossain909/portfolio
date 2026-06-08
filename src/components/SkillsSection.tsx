import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend / Mobile",
    icon: Smartphone,
    skills: ["Flutter", "React", "GetX", "TypeScript", "Tailwind", "UI/UX"],
  },
  {
    title: "Backend / APIs",
    icon: Server,
    skills: ["REST APIs", "Dio", "Socket.IO", "Firebase", "Node.js", "GraphQL"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "CI/CD", "VS Code", "Postman", "Figma", "Docker"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Skills</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * gi }}
              className="glass-card-hover p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <group.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + si * 0.05 + gi * 0.1 }}
                    className="text-sm px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
