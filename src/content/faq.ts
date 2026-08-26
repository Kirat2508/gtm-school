export type FaqCard = {
  question: string;
  answer: string;
  number: string;
  accent: string;
  /** Solid pastel fill matching the reference swatches */
  tintSolid: string;
  border: string;
  image: string;
  y: string;
};

export const faqCards: FaqCard[] = [
  {
    number: "01",
    question: "Can I attend select sessions?",
    answer:
      "Yes. Each session is standalone with its own deliverable. Come to one or all 15 — attending in order gives the most value.",
    accent: "#5B8DEF",
    tintSolid: "#E8F1FF",
    border: "rgba(91, 141, 239, 0.35)",
    image: "/images/hero-vidhana.webp",
    y: "lg:translate-y-0",
  },
  {
    number: "02",
    question: "Is this really free?",
    answer:
      "Yes. No ticket price. No hidden upsell. Real GTM education for builders — not only the ones who can afford expensive cohorts.",
    accent: "#2ECC87",
    tintSolid: "#E5F9EF",
    border: "rgba(46, 204, 135, 0.35)",
    image: "/images/audience-lalbagh.webp",
    y: "lg:translate-y-12",
  },
  {
    number: "03",
    question: "What if I miss a session?",
    answer:
      "No recordings in Season 1. Sessions are independent, so missing one does not break the flow — just pick up at the next one.",
    accent: "#F07167",
    tintSolid: "#FDECEC",
    border: "rgba(240, 113, 103, 0.35)",
    image: "/images/partners-ubcity.webp",
    y: "lg:translate-y-3",
  },
  {
    number: "04",
    question: "Can I attend remotely?",
    answer:
      "In-person only. All sessions happen at venues across Bangalore. No remote option in Season 1.",
    accent: "#E6B422",
    tintSolid: "#FFF8DC",
    border: "rgba(230, 180, 34, 0.4)",
    image: "/images/channels-blossom.webp",
    y: "lg:translate-y-0",
  },
];
