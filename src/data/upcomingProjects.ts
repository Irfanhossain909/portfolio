export interface UpcomingProject {
  id: string;
  title: string;
  description: string;
  category: string;
  emoji: string;
  tech: string[];
  highlights: string[];
}

export const upcomingProjects: UpcomingProject[] = [
  {
    id: "ai-hatch-chat",
    title: "AI Hatch Chat",
    category: "AI",
    emoji: "🤖",
    description:
      "AI-powered conversational app with smart replies, context-aware chat flows, and seamless Flutter UI — built for natural, real-time user interactions.",
    tech: ["Flutter", "AI Integration", "REST API", "GetX"],
    highlights: [
      "Intelligent chat experience with AI-assisted responses",
      "Real-time messaging and smooth conversation UI",
      "Scalable Flutter architecture for future feature expansion",
    ],
  },
  {
    id: "health-device-ble",
    title: "Health Device BLE",
    category: "HealthTech",
    emoji: "🩺",
    description:
      "Health monitoring app connecting to wearable and medical devices over Bluetooth Low Energy (BLE) — syncing vitals, device pairing, and live health data on mobile.",
    tech: ["Flutter", "Platform Channels", "BLE", "Native Android/iOS"],
    highlights: [
      "Flutter Platform Channels for native BLE communication",
      "Device discovery, pairing, and real-time health data sync",
      "Cross-platform health tracking with secure local storage",
    ],
  },
  {
    id: "ride-sharing",
    title: "Ride Sharing App",
    category: "Mobility",
    emoji: "🚗",
    description:
      "On-demand ride-sharing platform with live GPS tracking, route navigation, driver-rider matching, and real-time trip updates.",
    tech: ["Flutter", "Google Maps", "WebSockets", "Platform Channels"],
    highlights: [
      "Live location tracking and route optimization",
      "Real-time ride status with WebSocket updates",
      "Multi-role flows for riders and drivers",
    ],
  },
  {
    id: "delivery-app",
    title: "Delivery App",
    category: "Logistics",
    emoji: "📦",
    description:
      "End-to-end delivery management app for placing orders, tracking shipments, managing drivers, and updating delivery status in real time.",
    tech: ["Flutter", "Google Maps", "REST API", "Push Notifications"],
    highlights: [
      "Order placement with live delivery tracking",
      "Driver assignment and route-based ETA updates",
      "Status notifications for customers and delivery agents",
    ],
  },
  {
    id: "customer-loyalty",
    title: "Customer Loyalty App",
    category: "Business",
    emoji: "🎁",
    description:
      "Customer rewards and loyalty platform with points, tiers, offers, and redemption flows — designed to boost retention and repeat engagement.",
    tech: ["Flutter", "Firebase", "REST API", "In-App Purchase"],
    highlights: [
      "Points, rewards, and tier-based loyalty system",
      "Offer redemption and purchase history tracking",
      "Push notifications for campaigns and rewards",
    ],
  },
];
