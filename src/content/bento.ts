export type BentoItem = {
  id: string;
  type: "stat" | "module" | "session" | "pipeline" | "note";
  title: string;
  subtitle?: string;
  meta?: string;
  color?: string;
  span?: string;
};

export const bentoItems: BentoItem[] = [
  {
    id: "s20",
    type: "stat",
    title: "20",
    subtitle: "hands-on sessions",
    meta: "Sept → Oct 2026",
    color: "#E84393",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "m1",
    type: "module",
    title: "Know Your Market",
    subtitle: "ICP · positioning · messaging · pricing",
    meta: "Module A · 4 sessions",
    color: "#E84393",
    span: "md:col-span-2",
  },
  {
    id: "ev1",
    type: "session",
    title: "ICP Deep Dive",
    subtitle: "Leave with an ICP one-pager + 20 target accounts",
    meta: "Sat, Sept 6 · Bangalore",
    color: "#F47A72",
    span: "md:col-span-1",
  },
  {
    id: "m2",
    type: "module",
    title: "Make Your First Dollar",
    subtitle: "Pipeline · outreach · founder-led marketing",
    meta: "Module B · 3 sessions",
    color: "#F47A72",
    span: "md:col-span-1",
  },
  {
    id: "pipe",
    type: "pipeline",
    title: "The journey",
    subtitle: "Market → Pipeline → Discovery → Spend → Close → Scale",
    meta: "Six modules · one playbook",
    color: "#F5B041",
    span: "md:col-span-2",
  },
  {
    id: "m3",
    type: "module",
    title: "Get Discovered",
    subtitle: "SEO · AEO · Reddit · Instagram · Product Hunt",
    meta: "Module C · 7 sessions",
    color: "#F5B041",
    span: "md:col-span-1",
  },
  {
    id: "ev2",
    type: "session",
    title: "Landing Pages That Convert",
    subtitle: "Ship a live URL + conversion checklist",
    meta: "Sat, Sept 27 · Bangalore",
    color: "#C2185B",
    span: "md:col-span-1",
  },
  {
    id: "m4",
    type: "module",
    title: "Spend Smart",
    subtitle: "Ads + ABM with kill criteria",
    meta: "Module D · 2 sessions",
    color: "#8B6914",
    span: "md:col-span-1",
  },
  {
    id: "note",
    type: "note",
    title: "Every session ends with a deliverable",
    subtitle: "Not slides. Not notes. Something you ship the next morning.",
    meta: "Free · In-person only",
    color: "#1A1210",
    span: "md:col-span-2",
  },
];
