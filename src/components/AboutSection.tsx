import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Layers } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Architecture-first approach with maintainable, scalable patterns" },
  { icon: Zap, title: "Performance", desc: "Optimized apps that run buttery smooth on any device" },
  { icon: Layers, title: "Full Stack", desc: "From UI pixels to API layers — end-to-end delivery" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Building the Future,<br />
            <span className="gradient-text">One App at a Time</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            I'm a passionate Flutter developer who loves turning complex problems into
            elegant mobile solutions. With deep expertise in GetX, Dio, and Socket.IO,
            I craft real-time applications that users love. Every line of code I write
            follows clean architecture principles — because great apps deserve great foundations.
          </p>
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
