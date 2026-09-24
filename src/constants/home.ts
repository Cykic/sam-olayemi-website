/** The cinematic scroll story: one scene per viewport */
export const HOME_STORY = {
  title: "Strategy without execution is just a plan.",
  scenes: [
    { key: "strategy", word: "Strategy", line: "Decide what matters.", body: "The audience, the position, the problem worth solving." },
    { key: "creativity", word: "Creativity", line: "Make it worth noticing.", body: "Brand, message and campaign people feel and remember." },
    { key: "technology", word: "Technology", line: "Make it work.", body: "Websites, platforms and software people use every day." },
    { key: "execution", word: "Execution", line: "Make it happen.", body: "Launched, measured and improved by the team that did the thinking." },
    { key: "result", word: "Result", line: "Ideas are easy.", body: "Execution is the advantage." },
  ],
} as const;

export const HOME_WORK = {
  eyebrow: "Work",
  title: "Selected capabilities.",
  description: "The brand, campaign, communication and technology work we take on, and how each engagement runs.",
} as const;

export const HOME_INSIGHTS = {
  eyebrow: "Insights",
  title: "Notes on brand, communication and technology.",
} as const;

export const HOME_FAQ_INTRO = {
  eyebrow: "In short",
  title: "Questions, answered.",
} as const;

export const CTA_BAND = {
  eyebrow: "Start a project",
  title: ["Have something", "worth building?"],
  description: "Tell us what you're working on, what you're trying to solve, or where you want to go next.",
} as const;

export const HOME_PROCESS = {
  eyebrow: "How we work",
  title: "Six stages. One team the whole way.",
  description: "The same process holds whether we're building a brand, a campaign or a platform.",
} as const;

export const EDITORIAL_HERO = {
  eyebrow: "Strategy × Creativity × Technology",
  headline: ["We build brands,", "shape communication", "and engineer", "digital products."],
  standfirst:
    "Sam-Olayemi turns business problems into brands, campaigns and software that people actually use, with strategy, creative and engineering handled by one team.",
  audiences: ["Founders", "SMEs", "Organisations", "Executives"],
} as const;

export const EDITORIAL_STATEMENT = {
  eyebrow: "The problem",
  lead: "Most businesses hire a brand agency, a marketing team and a software company,",
  accent: "then spend months getting them to agree.",
  body: "Every handover loses something. The strategy gets simplified, the creative drifts, and the software ends up solving a different problem. We keep strategy, creativity, communication and technology in one room, from the first question to the launch.",
} as const;

export const MARQUEE_ITEMS = [
  "Brand Strategy",
  "Messaging",
  "Social Strategy",
  "Content",
  "Copywriting",
  "Ghostwriting",
  "Creative Direction",
  "Campaigns",
  "Software Engineering",
  "Web Development",
  "Digital Products",
  "Cloud",
  "Consulting",
  "Training",
] as const;
