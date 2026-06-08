/**
 * Profile & contact data — এই file থেকে সব personal info update করুন।
 */

export type SocialPlatform = "facebook" | "whatsapp" | "linkedin" | "github";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export const profile = {
  /** Navbar ও Hero তে দেখাবে */
  name: "MD. IRFAN HOSSAIN",
  /** Hero section এর ছোট label */
  designation: "Full Stack App Developer",
  /** Hero section এর short intro */
  tagline:
    "I build high-performance mobile and web applications with clean architecture, seamless API integrations, and pixel-perfect UI.",
  /** About section এর long bio */
  bio: "I build high-performance, scalable mobile and web applications with clean architecture, seamless API integrations, and pixel-perfect UI. Dedicated to writing maintainable code and delivering exceptional user experiences across Android, iOS, and the web.",
  /** public/cv/ folder এ PDF রাখুন */
  cvPath: "/cv/irfan-cv.pdf",
  /** Profile photo — public/images/profile.png */
  image: "/images/profile.png",
  email: "irfanhpssain@gmail.com",
  phone: "+880 1762 226066",
  /** WhatsApp link — country code সহ, space/+ ছাড়া */
  whatsappNumber: "8801762226066",
  socials: [
    {
      platform: "linkedin" as SocialPlatform,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/irfanhossain909",
    },
    {
      platform: "github" as SocialPlatform,
      label: "GitHub",
      url: "https://github.com/Irfanhossain909",
    },
    {
      platform: "facebook" as SocialPlatform,
      label: "Facebook",
      url: "https://www.facebook.com/share/1E52M5387e/", // Ekhane amar profile URL bosaite hobe
    },
    {
      platform: "whatsapp" as SocialPlatform,
      label: "WhatsApp",
      url: "https://wa.me/8801762226066", // Ekhane phone number (country code shoho) bosaite hobe
    },
  ] satisfies SocialLink[],
};
