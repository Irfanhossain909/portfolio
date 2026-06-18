import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import UpcomingProjectsSection from "@/components/UpcomingProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import ContactDialog from "@/components/ContactDialog";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-background">
          <Navbar onContactClick={openContact} />
          <HeroSection onContactClick={openContact} />
          <AboutSection />
          <ExperienceSection />
          <CertificatesSection />
          <ProjectsSection />
          <UpcomingProjectsSection />
          <SkillsSection />
          <ServicesSection />
          <ContactSection onContactClick={openContact} />
          <Footer />
          <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
        </div>
      )}
    </>
  );
};

export default Index;
