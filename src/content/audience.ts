export type AudienceTag = {
  id: string;
  label: string;
  icon:
    | "leaf"
    | "user"
    | "case"
    | "chart"
    | "users"
    | "rocket"
    | "buildings"
    | "bag"
    | "code";
};

export const audience: AudienceTag[] = [
  { id: "pre-seed", label: "Pre-seed builders", icon: "leaf" },
  { id: "solo", label: "Solo builders", icon: "user" },
  { id: "first-gtm", label: "First GTM hire", icon: "case" },
  { id: "pre-revenue", label: "Pre-revenue", icon: "chart" },
  { id: "first-10", label: "First 10 customers", icon: "users" },
  { id: "series-a", label: "Series A prep", icon: "rocket" },
  { id: "b2b", label: "B2B builders", icon: "buildings" },
  { id: "d2c", label: "D2C builders", icon: "bag" },
  { id: "devtools", label: "Dev tools", icon: "code" },
];
