import type { FaqItem } from "@/types";

/** Company-level answers on the homepage, written to be quoted as-is by search and AI assistants */
export const COMPANY_FAQ: readonly FaqItem[] = [
  {
    question: "Who is Sam-Olayemi?",
    answer:
      "Sam-Olayemi is a multidisciplinary company working across brand strategy, marketing, strategic communications and software engineering. It helps businesses, organisations and leaders build brands, communicate clearly and engineer digital products, with strategy, creative and technology handled by one team.",
  },
  {
    question: "What services does Sam-Olayemi provide?",
    answer:
      "Sam-Olayemi works in three areas. Brand, marketing and communication covers brand strategy, marketing strategy, strategic communications, social media strategy, content, copywriting, ghostwriting, creative direction and campaigns. Software engineering and digital products covers software engineering, web development, product and MVP development, backend engineering, cloud infrastructure and technical consulting. Strategy and advisory covers consulting, project management, training, workshops and public speaking.",
  },
  {
    question: "Does Sam-Olayemi provide software engineering?",
    answer:
      "Yes. Sam-Olayemi designs and builds web applications, SaaS platforms, APIs, backend systems and business websites, and sets up cloud infrastructure and CI/CD. Backend work is typically built with Node.js and NestJS and deployed on AWS, DigitalOcean or Linode using Docker.",
  },
  {
    question: "Does Sam-Olayemi provide branding?",
    answer:
      "Yes. Sam-Olayemi provides brand strategy, including positioning, brand architecture, identity strategy, messaging and voice, along with creative direction, copywriting and content to bring the brand to life.",
  },
  {
    question: "Who does Sam-Olayemi work with?",
    answer:
      "Sam-Olayemi works with founders and startups, small and medium-sized businesses, larger companies, organisations and institutions, and individual executives who need personal branding, ghostwriting or speaking support.",
  },
  {
    question: "What types of software does Sam-Olayemi build?",
    answer:
      "Sam-Olayemi builds web applications, SaaS platforms, MVPs for new products, internal business tools, APIs and integrations, e-commerce and CMS-driven websites, and backend systems with databases, caching and job queues.",
  },
  {
    question: "What is Sam-Olayemi's approach?",
    answer:
      "Every engagement follows six stages: discover, define, create, build, launch and optimise. Strategy comes first, and the same team carries it through creative work and technology to launch, so the idea that's agreed is the idea that ships.",
  },
  {
    question: "How can someone start a project with Sam-Olayemi?",
    answer:
      "Fill in the project inquiry form on the contact page. It asks what you need, a few details about the project, your timeline and budget range, and how to reach you. Sam-Olayemi replies to every project inquiry within two working days.",
  },
] as const;

/** Practical questions about working together, on the contact page */
export const CONTACT_FAQ: readonly FaqItem[] = [
  {
    question: "What happens after I send an inquiry?",
    answer:
      "We read it, ask any questions we need answered, and suggest a short call. If we're the right fit, we follow up with a written proposal covering scope, timeline and cost.",
  },
  {
    question: "Can we hire you for a single service?",
    answer:
      "Yes. Many projects are one piece of work, such as a positioning, a website or an API. We'll point out where other disciplines might help, but we won't insist on them.",
  },
  {
    question: "Do you work with individuals and small businesses?",
    answer:
      "Yes. We work with individual executives and founders as well as startups, SMEs and larger organisations. The budget ranges in the form help us suggest a sensible scope.",
  },
  {
    question: "Can you work alongside our team or other suppliers?",
    answer:
      "Yes. We often work with in-house teams and other agencies, whether that means leading the work, filling a gap or reviewing what's already there.",
  },
  {
    question: "What if I'm not sure what I need yet?",
    answer:
      "That's common. Choose “Other” or “Consulting” and describe the problem in your own words. Working out what's needed is often the first part of the job.",
  },
] as const;
