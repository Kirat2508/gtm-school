export type EventTopic = {
  id: string;
  title: string;
  icon: "users" | "chat" | "hashtag" | "rocket" | "global" | "code";
};

export const eventTopics: EventTopic[] = [
  {
    id: "icp",
    title: "Who Actually Buys: Locking Your ICP",
    icon: "users",
  },
  {
    id: "narrative",
    title: "Story That Sells: Narrative and Messaging",
    icon: "chat",
  },
  {
    id: "reddit",
    title: "Reddit and Forums: Winning Where Buyers Ask",
    icon: "hashtag",
  },
  {
    id: "product-hunt",
    title: "Product Hunt and the Launch Playbook",
    icon: "rocket",
  },
  {
    id: "geography",
    title: "Geography-Wise GTM: India to US, EU and Middle East",
    icon: "global",
  },
  {
    id: "ai-agents",
    title: "GTM With AI Agents: Build One Live",
    icon: "code",
  },
];
