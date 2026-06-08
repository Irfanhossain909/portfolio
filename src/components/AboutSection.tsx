import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Smartphone } from "lucide-react";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Flutter apps published on App Store & Google Play with clean architecture",
  },
  {
    icon: Code2,
    title: "Full Stack",
    desc: "End-to-end delivery — UI, API integration, state management & deployment",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimized, real-time apps that run smoothly on every device",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-primary rounded-sm" />
            <p className="text-primary font-medium text-sm tracking-widest uppercase">About</p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Know a little <span className="gradient-text">about me</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{profile.bio}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-8 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
