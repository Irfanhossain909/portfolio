import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { useTypingEffect } from "@/hooks/useTypingEffect";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const typedTitle = useTypingEffect(profile.typingTitles);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-primary font-medium text-xs md:text-sm tracking-[0.2em] uppercase mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-bold leading-[1.1] mb-4"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="h-8 md:h-10 mb-5"
            >
              <p className="text-lg md:text-2xl font-medium text-muted-foreground">
                <span className="gradient-text">{typedTitle}</span>
                <span className="text-primary animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <a
                href={profile.cvPath}
                download
                className="glow-button flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Download size={18} />
                Download CV
              </a>
              <button
                type="button"
                onClick={onContactClick}
                className="glow-button-outline text-sm md:text-base"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {profile.stats.map((stat) => (
                <div key={stat.label} className="hero-stat-card">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="hero-portrait-wrap relative max-w-[340px] sm:max-w-[380px] mx-auto overflow-visible">
              <div className="hero-portrait-bg" />
              <div className="hero-portrait-ring" />

              <div className="hero-portrait-card relative z-[1]">
                <div className="hero-portrait-image-wrap">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="hero-portrait-image"
                    onError={(e) => {
                      e.currentTarget.src = "/images/profile.svg";
                    }}
                  />
                </div>
                <div className="hero-portrait-overlay" />
              </div>

              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 glass-card px-4 py-2 flex items-center gap-2">
                <span className="font-heading text-2xl font-bold text-primary">
                  {profile.experienceYears}
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  Years
                  <br />
                  Experience
                </span>
              </div>

              <div className="hero-badges-layer">
                {profile.heroTechBadges.map((badge) => (
                  <div
                    key={badge.name}
                    className={`absolute ${badge.position} ${badge.animation} z-20 hero-tech-badge`}
                    style={badge.style}
                  >
                    <img
                      src={badge.icon}
                      alt={badge.name}
                      className="hero-tech-badge-img"
                    />
                    <span className="hero-tech-badge-label">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a href="#about" aria-label="Scroll to about">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
