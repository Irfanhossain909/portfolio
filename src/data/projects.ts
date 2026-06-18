/**
 * ============================================
 * PROJECT LIST — নতুন project add করতে এখানে entry যোগ করুন
 * ============================================
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
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

export const projectCategories = ["All", "Streaming", "E-Commerce", "Business", "HRMS"];

export const projects: Project[] = [
  {
    id: "creepy-shorts",
    title: "Creepy Shorts",
    category: "Streaming",
    description:
      "Streaming platform for movies and short videos using Bunny.net — with guest mode, user authentication, Apple/Google in-app purchases, and deep linking for video sharing.",
    icon: "/images/apps/creepy-shorts.png",
    tech: ["Flutter", "GetX", "Bunny.net", "In-App Purchase", "Deep Linking"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.rubengalindo.creepyshorts&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/creepy-shorts/id6758427319",
    appleAppId: "6758427319",
  },
  {
    id: "ways2shop",
    title: "Ways2Shop",
    category: "E-Commerce",
    description:
      "On-demand service marketplace connecting customers with providers — subscription plans, Stripe payments, in-app purchases, real-time chat via WebSockets, and Google Maps for booking & tracking.",
    icon: "/images/apps/ways2shop.png",
    tech: ["Flutter", "GetX", "WebSockets", "Stripe", "Google Maps", "In-App Purchase"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.troyajaga.waystooshop&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/ways2shop/id6756764605",
    appleAppId: "6756764605",
  },
  {
    id: "el-mago",
    title: "El Mago",
    category: "Business",
    description:
      "Secure productivity app for managing client details, orders, shipping records, and account information — with U.S.-based data storage, no ads, and a fast, privacy-focused interface.",
    icon: "/images/apps/el-mago.png",
    tech: ["Flutter", "REST API", "Secure Storage", "GetX"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.elmago.elmago&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/el-mago/id6758325627",
    appleAppId: "6758325627",
  },
  {
    id: "flxbook",
    title: "FlxBook",
    category: "Business",
    description:
      "Service booking app connecting customers and providers — find and book services, manage bookings, and communicate through real-time chat for smooth collaboration.",
    icon: "/images/apps/flxbook.png",
    tech: ["Flutter", "REST API", "Real-time Chat", "GetX"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.cordarry.flexbook&pcampaignid=web_share",
  },
  {
    id: "hrm-employee",
    title: "HRM Employee",
    category: "HRMS",
    description:
      "All-in-one mobile HR companion for employees — attendance check-in/out, leave requests, payslips, tasks, team messaging, profile management, and document uploads.",
    icon: "/images/apps/hrm-employee.png",
    tech: ["Flutter", "HRMS", "REST API", "Real-time Chat", "GetX"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.hrmfirm.employee&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/us/app/hrmfirm-employee/id6772901160",
    appleAppId: "6772901160",
  },
  {
    id: "hrm-employer",
    title: "HRM Employer",
    category: "HRMS",
    description:
      "Employer-side HRMS app for managing employees, attendance, leave requests, payslips, tasks, team messaging, and compliance reporting from a mobile-first dashboard.",
    icon: "/images/apps/hrm-employer.png",
    tech: ["Flutter", "HRMS", "REST API", "Clean Architecture", "GetX"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.hrmfirm.employer&pcampaignid=web_share",
  },
];
