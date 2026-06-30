import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";

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
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-primary rounded-sm" />
            <p className="text-primary font-medium text-sm tracking-widest uppercase">About Me</p>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Know a little <span className="gradient-text">about me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-5 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">{profile.bio}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-3/4 max-w-sm mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="glass-card-hover overflow-hidden rounded-2xl border border-border/50 shadow-lg">
              <video
                src={profile.aboutVideo}
                className="w-full aspect-video object-cover"
                playsInline
                controls
                preload="metadata"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profile.aboutHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-8 group"
            >
              <div className="text-3xl mb-5">{item.emoji}</div>
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
