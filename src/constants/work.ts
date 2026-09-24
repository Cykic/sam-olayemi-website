import type { WorkCategory, WorkItem } from "@/types";

export const WORK_FILTERS: readonly { value: WorkCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "brand", label: "Brand" },
  { value: "marketing", label: "Marketing" },
  { value: "communication", label: "Communication" },
  { value: "technology", label: "Technology" },
  { value: "software", label: "Software" },
  { value: "strategy", label: "Strategy" },
];

/**
 * Selected work. There are no published client case studies yet, so these
 * are capability profiles: how each kind of engagement runs and what it
 * delivers. They name no clients and claim no results.
 *
 * To publish a case study, add an item with `kind: "case-study"`, a
 * `client` and a `year`. Case studies sort ahead of capabilities, and the
 * work page changes its heading once one exists.
 */
export const WORK_ITEMS: readonly WorkItem[] = [
  {
    slug: "brand-foundations",
    kind: "capability",
    title: "Brand foundations",
    label: "Brand Strategy",
    categories: ["brand", "strategy"],
    summary: "Positioning, messaging and voice for a business that has outgrown the way it describes itself.",
    services: ["brand-strategy", "workshops", "copywriting"],
    artwork: { variant: "orbits", tone: "signal" },
    story: {
      overview:
        "A business grows faster than its story. Sales, marketing and leadership each explain it differently, the website undersells it, and customers compare on price because nothing else stands out.",
      approach: [
        "Discovery interviews with leadership, customers and the people closest to the sale.",
        "A competitive map to find the position the business can credibly own.",
        "A working session to agree the positioning before a word of copy is written.",
      ],
      solution:
        "A positioning statement, a message hierarchy for each audience, a voice guide with before-and-after examples, and rewritten copy for the pages that matter most.",
      outcome:
        "Everyone describes the business the same way. New marketing, sales material and hires start from one shared foundation instead of a blank page.",
    },
  },
  {
    slug: "launch-campaign",
    kind: "capability",
    title: "Launch campaign",
    label: "Campaign",
    categories: ["marketing", "communication", "brand"],
    summary: "An integrated campaign that takes a new product or service to market with one clear idea.",
    services: ["campaign-planning", "creative-direction", "content-creation"],
    artwork: { variant: "signal", tone: "ink" },
    story: {
      overview:
        "A launch date is fixed and the product is nearly ready, but the story isn't. Channels, suppliers and internal teams are all waiting on a direction.",
      approach: [
        "One objective, agreed up front, with the measure that proves it.",
        "A single creative idea developed across hero, social, email and sales formats.",
        "A channel plan and timeline that sequence teasers, launch and follow-through.",
      ],
      solution:
        "The campaign idea, a full content suite adapted for every channel, a media and publishing plan, and a live dashboard to watch performance.",
      outcome:
        "The launch speaks with one voice. The team can see what's working within days and move budget towards it.",
    },
  },
  {
    slug: "executive-voice",
    kind: "capability",
    title: "Executive voice",
    label: "Ghostwriting",
    categories: ["communication", "brand"],
    summary: "A publishing programme that turns a founder's thinking into consistent thought leadership.",
    services: ["ghostwriting", "strategic-communications", "public-speaking"],
    artwork: { variant: "manuscript", tone: "paper" },
    story: {
      overview:
        "A founder or executive has a strong point of view, and the company's reputation depends on it being heard. There's never time to write, so it rarely is.",
      approach: [
        "Short recorded interviews to capture ideas, stories and the way they actually speak.",
        "A publishing plan built around three or four themes they want to be known for.",
        "A light approval rhythm, so publishing never waits on a busy diary.",
      ],
      solution:
        "Regular LinkedIn posts and long-form articles, speeches and talk outlines for key events, and a growing library of ideas to draw on.",
      outcome:
        "The executive shows up consistently, in their own voice, without writing from scratch. Their ideas become an asset the company can point to.",
    },
  },
  {
    slug: "mvp-to-market",
    kind: "capability",
    title: "MVP to market",
    label: "Digital Product",
    categories: ["software", "technology", "strategy"],
    summary: "Scoping, designing and engineering a first product release that real customers can use.",
    services: ["digital-products", "software-engineering", "brand-strategy"],
    artwork: { variant: "blueprint", tone: "slate" },
    story: {
      overview:
        "A founder has validated a problem and needs a product. The risk is building too much, too slowly, on foundations that won't survive growth.",
      approach: [
        "A product workshop to find the riskiest assumption and the smallest product that tests it.",
        "An architecture chosen for the next two years, not the next ten.",
        "Two-week build cycles, each ending in a working demo.",
      ],
      solution:
        "A production web application with an API, admin tools, automated tests, CI/CD and monitoring, plus the brand and launch copy to take it to users.",
      outcome:
        "The product is in customers' hands quickly, on a codebase that the next engineers can extend rather than replace.",
    },
  },
  {
    slug: "platform-backend",
    kind: "capability",
    title: "Platform backend",
    label: "Software Engineering",
    categories: ["software", "technology"],
    summary: "Re-engineering an overloaded backend into reliable services with room to grow.",
    services: ["backend-engineering", "cloud-infrastructure", "technical-consulting"],
    artwork: { variant: "stack", tone: "moss" },
    story: {
      overview:
        "A platform that worked for the first thousand users struggles under real load. Releases are risky, slow queries pile up, and the team is firefighting instead of building.",
      approach: [
        "An architecture and code review to find where time and reliability are really lost.",
        "Incremental changes behind stable APIs, so the product keeps running throughout.",
        "Queues, caching and observability added where the evidence points.",
      ],
      solution:
        "A restructured NestJS backend with clear service boundaries, Redis caching, background job queues, containerised deployments and automated pipelines.",
      outcome:
        "Releases become routine and the team spends its time on features again, with dashboards that show problems before users report them.",
    },
  },
  {
    slug: "brand-led-website",
    kind: "capability",
    title: "Brand-led website",
    label: "Website",
    categories: ["technology", "brand", "marketing"],
    summary: "A fast, accessible website where the strategy, the words and the build are planned together.",
    services: ["web-development", "copywriting", "brand-strategy"],
    artwork: { variant: "frames", tone: "clay" },
    story: {
      overview:
        "The website looks acceptable but doesn't do its job. It's slow on phones, hard to update, invisible in search and vague about what the business actually offers.",
      approach: [
        "Structure and messaging first: what each visitor needs, and what we want them to do.",
        "Copy written alongside the design, not poured in afterwards.",
        "A mobile-first build with performance, accessibility and SEO treated as requirements.",
      ],
      solution:
        "A modern website on a headless-ready stack, with clear service pages, structured data, an editable CMS and analytics connected to real enquiries.",
      outcome:
        "The site explains the business in seconds, loads quickly on any phone and gives the team a reliable way to publish and measure.",
    },
  },
] as const;
