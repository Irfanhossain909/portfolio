/**
 * Profile & contact data — এই file থেকে সব personal info update করুন।
 */

export type SocialPlatform = "facebook" | "whatsapp" | "linkedin" | "github";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
  emoji: string;
}

export const profile = {
  /** Navbar ও Hero তে দেখাবে */
  name: "MD. IRFAN HOSSAIN",
  /** Hero section এর ছোট label */
  designation: "Mobile App Developer (Flutter)",
  location: "Dhaka, Bangladesh",
  /** Hero typing animation — rotating titles */
  typingTitles: [
    "Mobile App Developer",
    "Flutter Developer",
    "Platform Channels Expert",
    "Cross-Platform Developer",
  ],
  experienceYears: "2+",
  /** Hero section এর short intro */
  tagline:
    "Mobile App Developer (Flutter) with experience building Android & iOS apps, API integration, real-time features, payment systems, and native integrations through Platform Channels.",
  /** About section এর long bio */
  bio: "Mobile App Developer (Flutter) with hands-on experience building Android & iOS applications, API integration, real-time features, and payment systems. Experienced with FastAPI, Firebase, scalable app architecture, and Flutter Platform Channels for native Android/iOS functionality — including BLE, device integrations, and production-ready apps published on App Store & Google Play.",
  stats: [
    { value: 6, suffix: "+", label: "Published Apps" },
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 5, suffix: "+", label: "Projects Delivered" },
    { value: 5, suffix: "+", label: "Upcoming Builds" },
  ] satisfies Stat[],
  aboutHighlights: [
    {
      title: "Platform Channels",
      description:
        "Experienced in Flutter Platform Channels to connect Dart with native Android & iOS code — for BLE devices, hardware integrations, and custom native features.",
      emoji: "🔗",
    },
    {
      title: "Production-Ready Apps",
      description:
        "Published apps with streaming, HRMS, marketplace, payments, Firebase, WebSockets, and REST APIs on App Store & Google Play.",
      emoji: "🚀",
    },
    {
      title: "Clean Architecture",
      description:
        "Strong focus on Feature-First Architecture, dependency injection, Riverpod/GetX, and maintainable code for scalable mobile products.",
      emoji: "🏗️",
    },
  ] satisfies AboutHighlight[],
  heroTechBadges: [
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      position: "top-0 -left-4 sm:-left-8",
      animation: "animate-float",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      position: "top-8 -right-2 sm:-right-6",
      animation: "animate-float",
      style: { animationDelay: "1s" },
    },
    {
      name: "Channels",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
      position: "bottom-16 -left-2 sm:-left-4",
      animation: "animate-float",
      style: { animationDelay: "2s" },
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
      position: "bottom-4 -right-4 sm:-right-8",
      animation: "animate-float",
      style: { animationDelay: "0.5s" },
    },
  ],
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
