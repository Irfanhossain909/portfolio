import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, Calendar, GraduationCap, User } from "lucide-react";
import { certificates } from "@/data/certificates";

const tagStyles: Record<string, string> = {
  Flutter: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Android: "bg-green-500/10 text-green-400 border-green-500/20",
  Compose: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-primary rounded-sm" />
            <p className="text-primary font-medium text-sm tracking-widest uppercase">Certificate</p>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Professional courses and industrial training in Flutter, native Android, and modern UI
            development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-border hidden sm:block" />

          <div className="space-y-6">
            {certificates.map((cert, i) => (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="relative sm:pl-14"
              >
                <div className="hidden sm:flex absolute left-0 top-7 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center">
                  <Award size={18} className="text-primary" />
                </div>

                <div className="glass-card-hover p-6 md:p-8 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex-1">
                      <span
                        className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-3 ${
                          tagStyles[cert.tag] ?? "bg-primary/10 text-primary border-primary/20"
                        }`}
                      >
                        {cert.tag}
                      </span>
                      <h3 className="font-heading text-lg md:text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                        {cert.course}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0 sm:text-right">
                      <Calendar size={15} className="text-primary shrink-0" />
                      <span>{cert.duration}</span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border/60">
                      <Building2 size={16} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                          Institute
                        </p>
                        <p className="text-sm font-medium leading-relaxed">{cert.institute}</p>
                      </div>
                    </div>

                    {cert.sponsor && (
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border/60">
                        <GraduationCap size={16} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                            Sponsored by
                          </p>
                          <p className="text-sm font-medium leading-relaxed">{cert.sponsor}</p>
                        </div>
                      </div>
                    )}

                    {cert.trainer && (
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border/60">
                        <User size={16} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                            Trainer
                          </p>
                          <p className="text-sm font-medium leading-relaxed">{cert.trainer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
