import { ROUTES, START_PROJECT_HREF } from "./routes";

export const HOME_HERO = {
  /** Rendered line by line for the mask reveal */
  headline: ["We build", "what's next."],
  supporting: "Brand. Communication. Technology.",
  primary: { label: "Start a project", href: START_PROJECT_HREF },
  secondary: { label: "Explore what we do", href: ROUTES.services },
} as const;

/** The hero's closing animation: three disciplines converge into one name */
export const HOME_CONVERGE = {
  words: ["Strategy", "Creativity", "Technology"],
  result: "Sam-Olayemi",
  caption: "Three disciplines. One team.",
} as const;

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

export const HOME_BRAND = {
  eyebrow: "Brand",
  title: ["Your brand", "should say", "something."],
  body: "We help businesses find their position, sharpen their voice, and create brands people remember.",
  services: [
    "brand-strategy",
    "marketing-strategy",
    "strategic-communications",
    "content-creation",
    "copywriting",
    "creative-direction",
  ],
  /* TODO(content): the brief was cut off at "Create meaningful…"; confirm the Connect line */
  journey: [
    { step: "Discover", line: "Understand the business." },
    { step: "Define", line: "Find the position." },
    { step: "Express", line: "Build the identity and voice." },
    { step: "Connect", line: "Create meaningful connections with the people who matter." },
  ],
} as const;

export const HOME_TECHNOLOGY = {
  eyebrow: "Technology",
  title: ["Engineered", "to last."],
  body: "From internal tools to customer-facing platforms, we design and engineer digital products that help businesses operate, scale and compete.",
  services: ["software-engineering", "web-development", "digital-products", "backend-engineering", "cloud-infrastructure", "technical-consulting"],
  stack: ["TypeScript", "Node.js", "NestJS", "React", "Next.js", "Redis", "Docker", "AWS", "DigitalOcean", "Linode"],
} as const;

export const HOME_STRATEGY = {
  eyebrow: "Strategy",
  title: ["Think it", "through."],
  body: "When the problem is bigger than a deliverable, we help you think it through, plan it and get your team moving.",
  services: ["business-consulting", "campaign-planning", "project-management", "workshops", "training", "public-speaking"],
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
  title: ["Build", "something", "meaningful."],
  description: "Tell us what you're working on, what you're trying to solve, or where you want to go next.",
} as const;

export const HOME_PROCESS = {
  eyebrow: "How we work",
  title: "Six stages. One team the whole way.",
  description: "The same process holds whether we're building a brand, a campaign or a platform.",
} as const;
