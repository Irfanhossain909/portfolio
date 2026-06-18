import { Cpu, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Development",
    icon: Cpu,
    skills: [
      { name: "Flutter & Dart", level: 95 },
      { name: "Platform Channels", level: 90 },
      { name: "Riverpod / GetX", level: 90 },
      { name: "Google ML Kit (OCR)", level: 82 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "WebSockets", level: 88 },
      { name: "Firebase / FCM", level: 88 },
    ],
  },
  {
    title: "Tools & Architecture",
    icon: Wrench,
    skills: [
      { name: "Clean Architecture", level: 90 },
      { name: "SQLite / Hive", level: 85 },
      { name: "Stripe / IAP", level: 85 },
      { name: "Git & Postman", level: 88 },
    ],
  },
];
