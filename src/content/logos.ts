export type ChannelLogo = {
  name: string;
  src: string;
  x: string;
  y: string;
  size: number;
  rotation: number;
};

/**
 * Logos stay in the RIGHT constellation only (x ≥ 0 within the right column),
 * so they never overlap the left cherry blossom.
 */
export const channelLogos: ChannelLogo[] = [
  { name: "LinkedIn", src: "/logos/linkedin.svg", x: "6%", y: "4%", size: 42, rotation: -5 },
  { name: "Slack", src: "/logos/slack.svg", x: "36%", y: "0%", size: 34, rotation: 4 },
  { name: "Reddit", src: "/logos/reddit.svg", x: "60%", y: "8%", size: 38, rotation: -3 },
  { name: "Notion", src: "/logos/notion.svg", x: "82%", y: "2%", size: 32, rotation: 5 },
  { name: "HubSpot", src: "/logos/hubspot.svg", x: "16%", y: "26%", size: 36, rotation: 3 },
  { name: "Google", src: "/logos/google.svg", x: "46%", y: "22%", size: 40, rotation: -4 },
  { name: "Instagram", src: "/logos/instagram.svg", x: "72%", y: "30%", size: 34, rotation: 6 },
  { name: "Claude", src: "/logos/claude.svg", x: "4%", y: "46%", size: 36, rotation: -4 },
  { name: "Product Hunt", src: "/logos/producthunt.svg", x: "32%", y: "44%", size: 38, rotation: 2 },
  { name: "YouTube", src: "/logos/youtube.svg", x: "58%", y: "50%", size: 36, rotation: -5 },
  { name: "TikTok", src: "/logos/tiktok.svg", x: "84%", y: "46%", size: 32, rotation: 4 },
  { name: "WhatsApp", src: "/logos/whatsapp.svg", x: "12%", y: "68%", size: 34, rotation: -3 },
  { name: "X", src: "/logos/x.svg", x: "40%", y: "70%", size: 32, rotation: 5 },
  { name: "Gmail", src: "/logos/gmail.svg", x: "66%", y: "66%", size: 34, rotation: -3 },
  { name: "Canva", src: "/logos/canva.svg", x: "86%", y: "72%", size: 32, rotation: 4 },
  { name: "Asana", src: "/logos/asana.svg", x: "28%", y: "88%", size: 30, rotation: -2 },
];

export const venuePartners = [
  { name: "Vedantu", color: "#FF6B35" },
  { name: "Flo 101", color: "#E84393" },
  { name: "Cashfree", color: "#1A73E8" },
  { name: "Paytm", color: "#00BAF2" },
  { name: "Leap Scholar", color: "#6C5CE7" },
  { name: "Bhive", color: "#F5B041" },
] as const;
