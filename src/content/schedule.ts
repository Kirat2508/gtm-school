import { site } from "./site";

export type Session = {
  id: string;
  date: string;
  title: string;
  venue: string;
  deliverable: string;
  eventUrl: string;
};

export type ScheduleModule = {
  moduleId: string;
  letter: string;
  title: string;
  color: string;
  sessions: Session[];
};

const e = site.eventUrlPlaceholder;

export const schedule: ScheduleModule[] = [
  {
    moduleId: "a",
    letter: "A",
    title: "Know Your Market",
    color: "#E84393",
    sessions: [
      {
        id: "s1",
        date: "Sat, Sept 6, 2026",
        title: "ICP Deep Dive",
        venue: "TBD · Bangalore",
        deliverable: "ICP one-pager + 20 target accounts",
        eventUrl: e,
      },
      {
        id: "s2",
        date: "Sun, Sept 7, 2026",
        title: "Positioning That Sticks",
        venue: "TBD · Bangalore",
        deliverable: "Positioning statement + differentiator proof sheet",
        eventUrl: e,
      },
      {
        id: "s3",
        date: "Sat, Sept 13, 2026",
        title: "Messaging & Pitch",
        venue: "TBD · Bangalore",
        deliverable: "Message house + recorded 90-second pitch",
        eventUrl: e,
      },
      {
        id: "s4",
        date: "Sun, Sept 14, 2026",
        title: "Pricing Without Panic",
        venue: "TBD · Bangalore",
        deliverable: "Tiering model + 30-day pricing experiment plan",
        eventUrl: e,
      },
    ],
  },
  {
    moduleId: "b",
    letter: "B",
    title: "Make Your First Dollar",
    color: "#F47A72",
    sessions: [
      {
        id: "s5",
        date: "Sat, Sept 20, 2026",
        title: "Pipeline Building & Cold Outreach",
        venue: "TBD · Bangalore",
        deliverable: "30-day pipeline plan + drafted outreach message",
        eventUrl: e,
      },
      {
        id: "s6",
        date: "Sun, Sept 21, 2026",
        title: "Founder-Led Marketing",
        venue: "TBD · Bangalore",
        deliverable: "Founder-led marketing calendar + first post drafted",
        eventUrl: e,
      },
      {
        id: "s7",
        date: "Sat, Sept 27, 2026",
        title: "Landing Pages That Convert",
        venue: "TBD · Bangalore",
        deliverable: "A live landing page URL + conversion checklist",
        eventUrl: e,
      },
    ],
  },
  {
    moduleId: "c",
    letter: "C",
    title: "Get Discovered",
    color: "#F5B041",
    sessions: [
      {
        id: "s8",
        date: "Sun, Sept 28, 2026",
        title: "SEO for Early-Stage Startups",
        venue: "TBD · Bangalore",
        deliverable: "SEO site audit scorecard + 5-action fix list",
        eventUrl: e,
      },
      {
        id: "s9",
        date: "Sat, Oct 4, 2026",
        title: "AEO & GEO: Visibility in AI Answers",
        venue: "TBD · Bangalore",
        deliverable: "AEO/GEO action plan for ChatGPT and Perplexity",
        eventUrl: e,
      },
      {
        id: "s10",
        date: "Sun, Oct 5, 2026",
        title: "Reddit & Forums",
        venue: "TBD · Bangalore",
        deliverable: "Reddit/forum channel shortlist + 3 drafted posts",
        eventUrl: e,
      },
      {
        id: "s11",
        date: "Sat, Oct 11, 2026",
        title: "Content Systems That Compound",
        venue: "TBD · Bangalore",
        deliverable: "30-day content calendar + POV statement",
        eventUrl: e,
      },
      {
        id: "s12",
        date: "Sun, Oct 12, 2026",
        title: "Instagram & Short-Form",
        venue: "TBD · Bangalore",
        deliverable: "Instagram/short-form shot list + first reel outlined",
        eventUrl: e,
      },
      {
        id: "s13",
        date: "Sat, Oct 18, 2026",
        title: "Community as a Channel",
        venue: "TBD · Bangalore",
        deliverable: "Community engagement playbook + first contribution plan",
        eventUrl: e,
      },
      {
        id: "s14",
        date: "Sun, Oct 19, 2026",
        title: "Product Hunt Launch",
        venue: "TBD · Bangalore",
        deliverable: "Product Hunt launch runbook + supporter outreach list",
        eventUrl: e,
      },
    ],
  },
  {
    moduleId: "d",
    letter: "D",
    title: "Spend Smart",
    color: "#8B6914",
    sessions: [
      {
        id: "s15",
        date: "Sat, Oct 25, 2026",
        title: "Your First Ad Budget",
        venue: "TBD · Bangalore",
        deliverable: "Two-channel ad test plan with kill criteria",
        eventUrl: e,
      },
      {
        id: "s16",
        date: "Sun, Oct 26, 2026",
        title: "ABM for Small Teams",
        venue: "TBD · Bangalore",
        deliverable: "ABM tiered account list + one mapped campaign",
        eventUrl: e,
      },
    ],
  },
  {
    moduleId: "e",
    letter: "E",
    title: "Close the Deal",
    color: "#C2185B",
    sessions: [
      {
        id: "s17",
        date: "Sat, Nov 1, 2026",
        title: "PLG vs SLG",
        venue: "TBD · Bangalore",
        deliverable: "PLG vs SLG decision doc + activation metric",
        eventUrl: e,
      },
      {
        id: "s18",
        date: "Sun, Nov 2, 2026",
        title: "Enterprise Selling",
        venue: "TBD · Bangalore",
        deliverable: "Enterprise stakeholder map + objection handling sheet",
        eventUrl: e,
      },
      {
        id: "s19",
        date: "Sat, Nov 8, 2026",
        title: "International GTM",
        venue: "TBD · Bangalore",
        deliverable: "Geography expansion scorecard + first market shortlist",
        eventUrl: e,
      },
    ],
  },
  {
    moduleId: "f",
    letter: "F",
    title: "Automate and Scale",
    color: "#1A1210",
    sessions: [
      {
        id: "s20",
        date: "Sun, Nov 9, 2026",
        title: "GTM with AI Agents",
        venue: "TBD · Bangalore",
        deliverable: "One working AI agent for GTM + prompt/workflow file",
        eventUrl: e,
      },
    ],
  },
];
