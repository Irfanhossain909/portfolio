import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Cross-platform mobile apps built with Flutter — beautiful, fast, and production-ready.",
    features: ["iOS & Android", "Custom Animations", "Offline Support", "Push Notifications"],
  },
  {
    icon: Globe,
    title: "API Integration",
    desc: "Seamless backend connections using REST, GraphQL, and real-time websockets.",
    features: ["REST & GraphQL", "Socket.IO", "Authentication", "Data Sync"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces designed for usability and visual impact.",
    features: ["Modern UI", "Responsive Design", "Prototyping", "Design Systems"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Services</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            What I <span className="gradient-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card-hover p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
