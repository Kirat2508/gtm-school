export type WorkflowModule = {
  id: string;
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  tint: string;
  border: string;
  badge: string;
  icon: "building" | "chart" | "target" | "users";
};

export const workflowModules: WorkflowModule[] = [
  {
    id: "foundation",
    number: "1",
    title: "Foundation",
    description:
      "Build a strong GTM foundation with the right ICP, positioning, and messaging.",
    cta: "Get Started →",
    href: "#topics",
    image: "/images/card-1.png",
    tint: "#F7EDE3",
    border: "rgba(196, 120, 90, 0.22)",
    badge: "#C4785A",
    icon: "building",
  },
  {
    id: "revenue",
    number: "2",
    title: "Revenue and Conversion",
    description:
      "Turn interest into revenue with better funnels, offers, and conversion systems.",
    cta: "Drive Revenue →",
    href: "#topics",
    image: "/images/card-2.png",
    tint: "#E8F0E9",
    border: "rgba(90, 140, 110, 0.28)",
    badge: "#5A8C6E",
    icon: "chart",
  },
  {
    id: "channel",
    number: "3",
    title: "Cracking the Channel",
    description:
      "Choose the right channels, craft the right playbook, and win consistently.",
    cta: "Explore Channels →",
    href: "#channels",
    image: "/images/card-3.png",
    tint: "#EDE8F4",
    border: "rgba(120, 100, 160, 0.28)",
    badge: "#7A649C",
    icon: "target",
  },
  {
    id: "demand",
    number: "4",
    title: "Buying Demand",
    description:
      "Create demand that pulls, nurtures, and turns into long-term customers.",
    cta: "Create Demand →",
    href: "#register",
    image: "/images/card-4.png",
    tint: "#F7F0D8",
    border: "rgba(180, 150, 60, 0.28)",
    badge: "#C4A035",
    icon: "users",
  },
];
