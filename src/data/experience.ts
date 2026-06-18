export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export const experiences: Experience[] = [
  {
    title: "Jr. Flutter Developer",
    company: "Sparktech Agency",
    period: "May 2025 — Present",
    location: "Dhaka, Bangladesh",
    description:
      "Developing and maintaining Android & iOS applications using Flutter, with Firebase integration, REST APIs, WebSockets, and production-ready releases.",
    highlights: [
      "Built cross-platform apps with Flutter, Dart, Riverpod, and GetX",
      "Integrated Firebase Authentication, FCM, REST APIs, and WebSockets for real-time features",
      "Used Flutter Platform Channels to bridge native Android/iOS capabilities where needed",
      "Optimized performance and collaborated with design and backend teams",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GetX",
      "Platform Channels",
      "Firebase",
      "FCM",
      "REST APIs",
      "In-App Purchases",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company: "IRD Foundation",
    period: "Jan 2025 — Apr 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Developed pixel-perfect Flutter UI screens, improved AI-generated designs, and built offline-first features with local database storage.",
    highlights: [
      "Refined AI-generated UI designs for better accuracy and user experience",
      "Built offline-first features using SQLite (Sqflite) and local data management",
      "Performed application testing, issue tracking, and quality assurance",
    ],
    technologies: ["Flutter", "Dart", "GetX", "SQLite", "Sqflite", "Local Database"],
  },
];

export const education: Education = {
  degree: "B.Sc. in Computer Science and Engineering",
  institution: "Bangladesh University of Business and Technology (BUBT)",
  period: "June 2025 — Present",
  location: "Dhaka, Bangladesh",
};
