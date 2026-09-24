import type { Article } from "@/types";

/**
 * Journal articles. The body is plain structured blocks rather than HTML,
 * so it maps directly onto CMS portable text or rich-text fields later.
 * Newest first is enforced in `src/api`, so order here doesn't matter.
 */
export const ARTICLES: readonly Article[] = [
  {
    slug: "why-most-brands-dont-have-a-positioning-problem",
    title: "Why Most Brands Don't Have a Positioning Problem",
    category: "Branding",
    excerpt:
      "When a brand isn't landing, the instinct is to reposition. More often the positioning is fine. The problem is that nobody is saying it the same way twice.",
    publishedAt: "2026-09-24",
    seo: {
      title: "Why Most Brands Don't Have a Positioning Problem",
      description:
        "Before you reposition, check whether your brand has a positioning problem or a consistency problem. How to tell the difference and what to do about it.",
    },
    body: [
      {
        type: "p",
        text: "When a brand stops landing, the usual response is a repositioning project. New research, a new statement, sometimes a new name. Occasionally that's exactly right. More often, the positioning was never the problem.",
      },
      {
        type: "p",
        text: "The problem is that the organisation describes itself five different ways. The website says one thing, the sales deck another, the founder a third on LinkedIn. Customers don't reject the position. They never clearly receive it.",
      },
      { type: "h2", text: "A quick test" },
      {
        type: "p",
        text: "Ask five people in your business to describe, in one sentence, who you serve and why those customers choose you. Don't let them look anything up. Then compare the answers.",
      },
      {
        type: "list",
        items: [
          "If the answers agree but customers still don't get it, you may have a positioning problem.",
          "If the answers disagree, you have a consistency problem, and repositioning will only add a sixth version.",
          "If nobody can answer in one sentence, you have a clarity problem, which comes before both.",
        ],
      },
      { type: "h2", text: "Why consistency breaks down" },
      {
        type: "p",
        text: "Positioning usually lives in a document written once and read rarely. Meanwhile, people write copy under deadline, agencies interpret briefs, and new hires learn the story from whoever sits next to them. Each small drift is reasonable. Together they dissolve the position.",
      },
      {
        type: "quote",
        text: "A position only exists in the market if it exists, consistently, in everything you publish.",
      },
      { type: "h2", text: "What to do instead" },
      {
        type: "p",
        text: "Before commissioning a new strategy, turn the one you have into tools people actually use. That means a message hierarchy that says what to lead with for each audience, a short voice guide with real before-and-after examples, and a handful of approved proof points.",
      },
      {
        type: "p",
        text: "Then rewrite the three places customers meet you most: usually the homepage, the sales conversation and the channel where you publish most often. If the brand still doesn't land once those agree, you've earned a positioning project, and you'll know exactly what it needs to fix.",
      },
    ],
  },
  {
    slug: "before-building-custom-software",
    title: "What Businesses Should Know Before Building Custom Software",
    category: "Software Engineering",
    excerpt:
      "Custom software can be a real advantage or an expensive distraction. Six questions to answer before you commit budget to a build.",
    publishedAt: "2026-09-24",
    seo: {
      title: "What to Know Before Building Custom Software",
      description:
        "Thinking about custom software for your business? Six questions to answer first, covering scope, ownership, cost of change, and when to buy instead of build.",
    },
    body: [
      {
        type: "p",
        text: "Custom software is one of the few investments that can give a business a genuine operational advantage. It's also one of the easiest ways to spend a year and a budget on something nobody uses. The difference is usually decided before a single line of code is written.",
      },
      { type: "h2", text: "1. What problem, for whom, measured how?" },
      {
        type: "p",
        text: "“We need an app” isn't a problem statement. “Our field team loses two hours a day re-entering orders” is. A clear problem tells you what to build first, what to leave out and how you'll know it worked.",
      },
      { type: "h2", text: "2. Should you build it at all?" },
      {
        type: "p",
        text: "If the process is standard, such as accounting, payroll or a basic online shop, a mature product will usually beat a custom build on cost and reliability. Build when the process is what makes you different, or when off-the-shelf tools force you into workarounds that cost more than the software would.",
      },
      { type: "h2", text: "3. What's the smallest useful version?" },
      {
        type: "p",
        text: "The first release should test the riskiest assumption, not deliver every feature on the wish list. A smaller first version reaches users sooner, and their behaviour will change your priorities anyway.",
      },
      { type: "h2", text: "4. Who owns it after launch?" },
      {
        type: "list",
        items: [
          "Make sure you own the code, the cloud accounts and the domain, not your supplier.",
          "Ask for documentation and automated tests as deliverables, not extras.",
          "Budget for maintenance: security updates, bug fixes and small improvements never stop.",
        ],
      },
      { type: "h2", text: "5. How expensive will change be?" },
      {
        type: "p",
        text: "Your needs will change, so the real question isn't what the first version costs but what the tenth change costs. Clear architecture, tests and sensible technology choices keep that number low. Clever shortcuts make it climb.",
      },
      { type: "h2", text: "6. Who on your side decides?" },
      {
        type: "p",
        text: "Software projects stall when nobody in the business has the time or authority to make product decisions. Name one person who can answer questions within a day. It will save more time than any technical choice.",
      },
      {
        type: "p",
        text: "If you can answer these six questions, you're ready to talk about technology. If you can't, that conversation is the right place to start, and it's much cheaper than finding out halfway through a build.",
      },
    ],
  },
  {
    slug: "how-ai-is-changing-brand-content",
    title: "How AI Is Changing Brand Content",
    category: "AI",
    excerpt:
      "AI has made content cheap to produce. That makes a clear brand voice, real expertise and good editorial judgement more valuable, not less.",
    publishedAt: "2026-09-24",
    seo: {
      title: "How AI Is Changing Brand Content",
      description:
        "AI makes content cheaper to produce, which raises the value of voice, expertise and editorial judgement. What brands should change, and what they shouldn't.",
    },
    body: [
      {
        type: "p",
        text: "Generative AI has changed the economics of content. A first draft that once took a morning now takes a minute. Many teams have responded by publishing more, and their audiences have responded by paying less attention.",
      },
      { type: "h2", text: "When everyone can produce, production stops being the advantage" },
      {
        type: "p",
        text: "If a competent generic article can be produced instantly, competent generic articles are worth very little. What holds attention now is what a model can't supply on its own: first-hand experience, a genuine point of view, specific examples and a recognisable voice.",
      },
      {
        type: "quote",
        text: "AI raises the floor for content. It does nothing for the ceiling. The ceiling is still judgement.",
      },
      { type: "h2", text: "Where AI genuinely helps" },
      {
        type: "list",
        items: [
          "Research and summarising: getting up to speed on a topic or a long transcript quickly.",
          "Variation: adapting an approved message for different formats, lengths and channels.",
          "Editing support: checking clarity, consistency and reading level against your guidelines.",
          "Operations: tagging, organising and repurposing a content library.",
        ],
      },
      { type: "h2", text: "Where it needs a firm hand" },
      {
        type: "p",
        text: "Unchecked AI copy drifts towards the average, which is the opposite of what a brand is for. It also states things confidently that aren't true. Every claim, statistic and quote needs a human check, and anything published under a person's name should reflect what they actually think.",
      },
      { type: "h2", text: "What to change now" },
      {
        type: "p",
        text: "Write your voice guidelines as if a machine will read them, because one will. Be specific about the words you use and avoid, and include real examples. Invest more in the inputs AI can't invent: interviews with your experts, customer stories and original thinking. And measure content by what it achieves, not by how much of it there is.",
      },
      {
        type: "p",
        text: "Used well, AI gives a small team the reach of a large one. Used carelessly, it makes a brand sound like everyone else. The difference is strategy and editorial judgement, which is still human work.",
      },
    ],
  },
  {
    slug: "your-website-is-part-of-your-brand-strategy",
    title: "Why Your Website Is Part of Your Brand Strategy",
    category: "Strategy",
    excerpt:
      "Speed, structure and clarity are brand decisions. A slow, confusing website says something about your business, whatever the copy claims.",
    publishedAt: "2026-09-24",
    seo: {
      title: "Why Your Website Is Part of Your Brand Strategy",
      description:
        "Your website's speed, structure and clarity shape how people judge your brand. Why the website belongs in brand strategy, not just the IT budget.",
    },
    body: [
      {
        type: "p",
        text: "Many organisations treat the website as the last step of a brand project: the strategy is agreed, the identity is designed, and then someone is asked to “put it on the website”. That order gets something important backwards.",
      },
      { type: "h2", text: "The website is where the brand is tested" },
      {
        type: "p",
        text: "For most prospective customers, the website is the first place they check whether your claims hold up. If the positioning says you're precise but the site is cluttered, or you promise responsiveness but the page takes eight seconds to load on a phone, visitors believe the experience, not the copy.",
      },
      {
        type: "list",
        items: [
          "Speed says whether you respect people's time.",
          "Structure says whether you understand what they came for.",
          "Clarity says whether you know what you do.",
          "Accessibility says who you're willing to serve.",
        ],
      },
      { type: "h2", text: "Plan the words and the build together" },
      {
        type: "p",
        text: "When copy is written after the design, it gets squeezed into boxes that were drawn for placeholder text. When the build is planned without the strategy, the structure reflects the organisation chart instead of the customer's questions. The strongest websites come from treating strategy, content and engineering as one piece of work.",
      },
      {
        type: "quote",
        text: "A website isn't a brochure for the brand. For many customers, it is the brand.",
      },
      { type: "h2", text: "What that means in practice" },
      {
        type: "p",
        text: "Start with the questions your best customers ask before they buy, and structure the site to answer them in order. Write the key pages before designing them. Treat performance, accessibility and search visibility as requirements from day one, not as fixes after launch. And make sure your team can update the site easily, because a brand that can't keep its website current soon looks out of date.",
      },
    ],
  },
] as const;
