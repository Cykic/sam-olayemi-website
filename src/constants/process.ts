import type { ProcessStep } from "@/types";

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "Understand the business, the audience, the challenge and the opportunity.",
  },
  {
    index: "02",
    title: "Define",
    description: "Set the strategy, positioning, requirements and direction, and agree how success is measured.",
  },
  {
    index: "03",
    title: "Create",
    description: "Develop the brand, campaign, content, product or technology in short, visible cycles.",
  },
  {
    index: "04",
    title: "Build",
    description: "Turn concepts into practical, scalable solutions that hold up in the real world.",
  },
  {
    index: "05",
    title: "Launch",
    description: "Deploy, publish, activate and execute, with everyone clear on their part.",
  },
  {
    index: "06",
    title: "Optimise",
    description: "Measure what happened, learn from it and keep improving.",
  },
] as const;
