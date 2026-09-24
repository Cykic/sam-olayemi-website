export const ABOUT_HERO = {
  eyebrow: "About Sam-Olayemi",
  title: "We work where strategy, creativity and technology meet.",
  description:
    "Sam-Olayemi is a multidisciplinary company operating at the intersection of strategy, creativity, communication and technology.",
} as const;

export const ABOUT_STORY = {
  eyebrow: "Why one company",
  title: "Good ideas rarely fail in the meeting. They fail in the handover.",
  paragraphs: [
    "A strategy is agreed, then handed to a creative agency, which hands a design to a developer, who builds something the strategist never quite pictured. Each step is done competently. The result still disappoints, because nobody was holding the whole thing.",
    "Sam-Olayemi is built to hold the whole thing. Brand, marketing, communication, technology and strategy sit in one team, so decisions made at the start are still visible at launch, and a technical constraint can shape the message before it becomes a compromise.",
    "That doesn't mean every client needs everything. Plenty of our work is a single piece: a positioning, a speech, an API. But even then, it's done by people who understand what happens next.",
  ],
} as const;

export const ABOUT_DISCIPLINES = [
  { name: "Brand", body: "Positioning, identity strategy and voice." },
  { name: "Marketing", body: "Campaigns, channels and content that move people to act." },
  { name: "Communication", body: "Messages, stakeholders and the moments that matter." },
  { name: "Technology", body: "Websites, platforms and software built to last." },
  { name: "Strategy", body: "The decisions that make the rest of the work make sense." },
] as const;

export const ABOUT_BELIEFS = {
  eyebrow: "What we believe",
  title: "Think clearly. Create boldly. Build intelligently.",
  values: [
    {
      title: "Clarity beats volume.",
      body: "One clear message outperforms ten clever ones. We'd rather cut than add.",
    },
    {
      title: "Craft should survive contact with reality.",
      body: "Work is only good if it still works after launch: on a slow phone, in a busy inbox, under real traffic.",
    },
    {
      title: "Advice should be honest, even when it's inconvenient.",
      body: "If you don't need a new brand, a new app or a bigger budget, we'll say so.",
    },
    {
      title: "Ownership doesn't end at handover.",
      body: "We document, train and hand over so your team can carry the work forward without us.",
    },
  ],
} as const;

export const ABOUT_TEAM_INTRO = {
  eyebrow: "Leadership",
  title: "The people behind the work.",
} as const;
