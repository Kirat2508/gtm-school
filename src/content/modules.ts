export type ModuleItem = {
  id: string;
  letter: string;
  sessions: number;
  title: string;
  description: string;
  color: string;
  icon: "Search" | "DollarSign" | "Eye" | "Target" | "Handshake" | "Cpu";
};

export const modules: ModuleItem[] = [
  {
    id: "a",
    letter: "A",
    sessions: 4,
    title: "Know Your Market",
    description:
      "ICP, positioning, messaging, pricing. You leave with a filled ICP one-pager and 20 target accounts you can email on Monday.",
    color: "#E84393",
    icon: "Search",
  },
  {
    id: "b",
    letter: "B",
    sessions: 3,
    title: "Make Your First Dollar",
    description:
      "Pipeline building, cold outreach, founder-led marketing, landing pages. You leave with a 30-day pipeline plan and your first outreach message drafted and ready to send.",
    color: "#F47A72",
    icon: "DollarSign",
  },
  {
    id: "c",
    letter: "C",
    sessions: 7,
    title: "Get Discovered",
    description:
      "SEO, AEO, GEO, Reddit, Instagram, community, Product Hunt. You leave with a site audit scorecard, a content calendar, and a launch runbook.",
    color: "#F5B041",
    icon: "Eye",
  },
  {
    id: "d",
    letter: "D",
    sessions: 2,
    title: "Spend Smart",
    description:
      "Your first ad budget, ABM for small teams. You leave with a two-channel test plan with kill criteria before you spend a single rupee.",
    color: "#8B6914",
    icon: "Target",
  },
  {
    id: "e",
    letter: "E",
    sessions: 3,
    title: "Close the Deal",
    description:
      "PLG vs SLG, enterprise selling, international GTM. You leave with a stakeholder map for one live deal and an objection handling sheet.",
    color: "#C2185B",
    icon: "Handshake",
  },
  {
    id: "f",
    letter: "F",
    sessions: 1,
    title: "Automate and Scale",
    description:
      "GTM with AI agents. The series finale. You leave with one working AI agent for GTM, built in the room.",
    color: "#1A1210",
    icon: "Cpu",
  },
];
