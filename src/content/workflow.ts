export type WorkflowModule = {
  id: string;
  number: string;
  title: string;
  description: string;
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
      "Work out who actually buys, why you and not the alternative, and what to say to them. Leave with a written ICP, a positioning statement and 20 named accounts.",
    image: "/images/card-1.webp",
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
      "The unscalable things that produce your first paying customers. Leave with a 30-day pipeline plan, a content system you can run in 20 minutes a day, and a landing\u00A0page.",
    image: "/images/card-2.webp",
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
      "Find the two or three places your buyers already are, and learn the playbook for each. Reddit, Product Hunt, AI search, short-form, community.",
    image: "/images/card-3.webp",
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
      "Spend your first ad budget without burning it. Leave with a two-channel test plan, creative angles, and kill criteria written down before you spend a rupee.",
    image: "/images/card-4.webp",
    tint: "#F7F0D8",
    border: "rgba(180, 150, 60, 0.28)",
    badge: "#C4A035",
    icon: "users",
  },
];
