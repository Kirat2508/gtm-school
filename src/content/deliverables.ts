export type Deliverable = {
  id: string;
  title: string;
  sessionRef: string;
  icon: "FileText" | "CheckSquare" | "Code" | "Megaphone" | "Globe" | "Bot";
};

export const deliverables: Deliverable[] = [
  {
    id: "d1",
    title: "ICP one-pager + 20 target accounts",
    sessionRef: "Session 1 · Know Your Market",
    icon: "FileText",
  },
  {
    id: "d2",
    title: "Positioning statement + differentiator proof sheet",
    sessionRef: "Session 2 · Know Your Market",
    icon: "CheckSquare",
  },
  {
    id: "d3",
    title: "Message house + recorded 90-second pitch",
    sessionRef: "Session 3 · Know Your Market",
    icon: "Megaphone",
  },
  {
    id: "d4",
    title: "Tiering model + 30-day pricing experiment plan",
    sessionRef: "Session 4 · Know Your Market",
    icon: "FileText",
  },
  {
    id: "d5",
    title: "30-day pipeline plan + drafted outreach message",
    sessionRef: "Session 5 · Make Your First Dollar",
    icon: "CheckSquare",
  },
  {
    id: "d6",
    title: "Founder-led marketing calendar + first post drafted",
    sessionRef: "Session 6 · Make Your First Dollar",
    icon: "Megaphone",
  },
  {
    id: "d7",
    title: "A live landing page URL + conversion checklist",
    sessionRef: "Session 7 · Make Your First Dollar",
    icon: "Code",
  },
  {
    id: "d8",
    title: "SEO site audit scorecard + 5-action fix list",
    sessionRef: "Session 8 · Get Discovered",
    icon: "Globe",
  },
  {
    id: "d9",
    title: "AEO/GEO action plan for ChatGPT and Perplexity visibility",
    sessionRef: "Session 9 · Get Discovered",
    icon: "Bot",
  },
  {
    id: "d10",
    title: "Reddit/forum channel shortlist + 3 drafted posts",
    sessionRef: "Session 10 · Get Discovered",
    icon: "Megaphone",
  },
  {
    id: "d11",
    title: "30-day content calendar + POV statement",
    sessionRef: "Session 11 · Get Discovered",
    icon: "FileText",
  },
  {
    id: "d12",
    title: "Instagram/short-form shot list + first reel outlined",
    sessionRef: "Session 12 · Get Discovered",
    icon: "Megaphone",
  },
  {
    id: "d13",
    title: "Product Hunt launch runbook + supporter outreach list",
    sessionRef: "Session 14 · Get Discovered",
    icon: "CheckSquare",
  },
  {
    id: "d14",
    title: "Two-channel ad test plan with kill criteria",
    sessionRef: "Session 15 · Spend Smart",
    icon: "CheckSquare",
  },
  {
    id: "d15",
    title: "ABM tiered account list + one mapped campaign",
    sessionRef: "Session 16 · Spend Smart",
    icon: "Globe",
  },
  {
    id: "d16",
    title: "PLG vs SLG decision doc + activation metric",
    sessionRef: "Session 17 · Close the Deal",
    icon: "FileText",
  },
  {
    id: "d17",
    title: "Enterprise stakeholder map + objection handling sheet",
    sessionRef: "Session 18 · Close the Deal",
    icon: "CheckSquare",
  },
  {
    id: "d18",
    title: "One working AI agent for GTM + prompt/workflow file",
    sessionRef: "Session 20 · Automate and Scale",
    icon: "Bot",
  },
];
