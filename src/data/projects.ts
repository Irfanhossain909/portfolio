/**
 * ============================================
 * PROJECT LIST — নতুন project add করতে এখানে entry যোগ করুন
 * ============================================
 *
 * প্রতিটি project object এ:
 * - id          : unique string (যেকোনো নাম)
 * - title       : app এর নাম
 * - description : সংক্ষিপ্ত বিবরণ
 * - icon        : app icon path (public/images/apps/ এ রাখুন) অথবা URL
 * - tech        : ব্যবহৃত technology array
 * - appStoreUrl : (optional) Apple App Store link
 * - playStoreUrl: (optional) Google Play Store link
 * - appleAppId  : (optional) শুধু number — ভবিষ্যতে auto-fetch এর জন্য
 *
 * উদাহরণ:
 * {
 *   id: "my-app",
 *   title: "My App",
 *   description: "App description here.",
 *   icon: "/images/apps/my-app-icon.png",
 *   tech: ["Flutter", "GetX"],
 *   playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.myapp",
 *   appStoreUrl: "https://apps.apple.com/app/id1234567890",
 * }
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  /** App icon — local path (public/) বা external URL */
  icon: string;
  tech: string[];
  /** Apple App Store URL — না থাকলে omit করুন */
  appStoreUrl?: string;
  /** Google Play Store URL — না থাকলে omit করুন */
  playStoreUrl?: string;
  /** Apple App ID (numbers only) — optional, future auto-fetch */
  appleAppId?: string;
}

export const projects: Project[] = [
  {
    id: "creepy-shorts",
    title: "Creepy Shorts",
    description:
      "Entertainment streaming app for short-form horror series, dramas, and exclusive video content — with secure login, HD playback, and in-app subscriptions on App Store & Google Play.",
    icon: "/images/apps/creepy-shorts.png",
    tech: ["Flutter", "GetX", "REST API", "In-App Purchase", "Firebase"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.rubengalindo.creepyshorts&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/creepy-shorts/id6758427319",
    appleAppId: "6758427319",
  },

  {
    id: "ways2shop",
    title: "Ways2Shop",
    description:
      "E-commerce mobile application that enables users to browse products, shop online, manage orders, and enjoy a seamless shopping experience with secure authentication and real-time updates.",
    icon: "/images/apps/ways2shop.png",
    tech: ["Flutter", "GetX", "REST API", "Firebase", "Payment Gateway", "In-App Purchase"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.troyajaga.waystooshop&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/ways2shop/id6756764605",
    appleAppId: "6756764605",
  },
];
