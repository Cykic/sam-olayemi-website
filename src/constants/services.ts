import type { Pillar, PillarId, Service } from "@/types";

export const PILLARS: readonly Pillar[] = [
  {
    id: "brand",
    index: "01",
    name: "Brand, Marketing & Communication",
    shortName: "Brand",
    description:
      "We help businesses find their position, sharpen their voice and create brands people remember.",
  },
  {
    id: "strategy",
    index: "02",
    name: "Strategy & Advisory",
    shortName: "Strategy",
    description:
      "When the problem is bigger than a deliverable, we help you think it through, plan it and get your team moving on it.",
  },
  {
    id: "technology",
    index: "03",
    name: "Software Engineering & Digital Products",
    shortName: "Technology",
    description:
      "We design and engineer websites, platforms and software that stay fast, secure and maintainable after launch day.",
  },
] as const;

export const pillarById = (id: PillarId) => PILLARS.find((pillar) => pillar.id === id)!;

export const SERVICES: readonly Service[] = [
  /* ---------------------------------------------------------------- *
   * Brand, marketing & communication
   * ---------------------------------------------------------------- */
  {
    slug: "brand-strategy",
    name: "Brand Strategy",
    pillar: "brand",
    summary: "Positioning, messaging and voice that make your brand easy to choose.",
    description:
      "Most brands don't need a new logo first. They need a clear answer to three questions: who is this for, why should they care, and why us instead of the alternative. We work those answers out with you, then turn them into positioning, messaging and a voice your whole team can use.",
    includes: [
      "Brand positioning",
      "Brand architecture",
      "Brand identity strategy",
      "Messaging framework",
      "Brand voice and tone",
      "Audience definition",
      "Competitive positioning",
    ],
    approach: [
      "Interview leadership, customers and the people who sell for you.",
      "Map the competitive field and find the position worth owning.",
      "Write the positioning, message hierarchy and voice, then test them on real copy.",
    ],
    goodFitIf: [
      "You're launching, rebranding, merging or entering a new market.",
      "Your team describes the business five different ways.",
      "Customers compare you on price because nothing else stands out.",
    ],
    related: ["copywriting", "creative-direction", "marketing-strategy"],
    seo: {
      title: "Brand Strategy & Positioning",
      description:
        "Brand strategy from Sam-Olayemi: positioning, brand architecture, messaging and voice for startups, SMEs and organisations.",
    },
  },
  {
    slug: "marketing-strategy",
    name: "Marketing Strategy",
    pillar: "brand",
    summary: "A plan that connects who you're trying to reach with what you'll actually do each month.",
    description:
      "A marketing strategy should tell you what to do on Monday. We define your audiences, the channels that reach them, what you'll say, what it will cost and how you'll know it's working, and we keep it short enough that people actually use it.",
    includes: [
      "Market and audience analysis",
      "Channel strategy and mix",
      "Go-to-market planning",
      "Marketing budget allocation",
      "Measurement framework and KPIs",
      "Quarterly marketing roadmap",
    ],
    approach: [
      "Audit what you're doing now and what it's producing.",
      "Choose a few channels and messages worth committing to.",
      "Hand over a roadmap with owners, budget and measures.",
    ],
    goodFitIf: [
      "You're spending on marketing but can't say what's working.",
      "You're taking a product or service to a new market.",
      "Your marketing is a list of activities rather than a plan.",
    ],
    related: ["campaign-planning", "social-media-strategy", "brand-strategy"],
    seo: {
      title: "Marketing Strategy",
      description:
        "Marketing strategy and go-to-market planning from Sam-Olayemi: audiences, channels, budgets and measurement you can act on.",
    },
  },
  {
    slug: "strategic-communications",
    name: "Strategic Communications",
    pillar: "brand",
    summary: "The right message, to the right people, at the moment it matters.",
    description:
      "Announcements, change programmes, stakeholder updates and sensitive moments all need more than good writing. We plan what to say, who says it, in what order and through which channels, so your organisation is understood the way you intend.",
    includes: [
      "Communication strategy",
      "Stakeholder mapping",
      "Internal communications",
      "Announcement and launch planning",
      "Key messages and Q&A preparation",
      "Issues and reputation communication",
    ],
    approach: [
      "Map the audiences and what each needs to hear.",
      "Build the message house, sequence and spokespeople.",
      "Draft, rehearse and run the rollout with you.",
    ],
    goodFitIf: [
      "You have a launch, restructure or policy change to explain.",
      "Different stakeholders are hearing different stories.",
      "Leadership needs to communicate something difficult well.",
    ],
    related: ["ghostwriting", "public-speaking", "brand-strategy"],
    seo: {
      title: "Strategic Communications",
      description:
        "Strategic communications from Sam-Olayemi: stakeholder mapping, internal communications, announcements and key messages.",
    },
  },
  {
    slug: "social-media-strategy",
    name: "Social Media Strategy",
    pillar: "brand",
    summary: "A social presence with a point of view, a rhythm and a reason to follow.",
    description:
      "Posting every day isn't a strategy. We decide which platforms deserve your time, what you'll be known for on each, how content gets made and approved, and how the community is managed, so social supports the business instead of consuming it.",
    includes: [
      "Social media strategy",
      "Content pillars and formats",
      "Platform strategy",
      "Community management approach",
      "Editorial calendar",
      "Growth and measurement plan",
    ],
    approach: [
      "Review your channels, audience and competitors.",
      "Define pillars, formats and a publishing rhythm you can sustain.",
      "Set up the calendar, workflow and reporting.",
    ],
    goodFitIf: [
      "Your channels are active but don't add up to anything.",
      "You're unsure which platforms your customers actually use.",
      "Content creation is ad hoc and approvals are slow.",
    ],
    related: ["content-creation", "copywriting", "campaign-planning"],
    seo: {
      title: "Social Media Strategy",
      description:
        "Social media and content strategy from Sam-Olayemi: platform choice, content pillars, editorial planning and community strategy.",
    },
  },
  {
    slug: "content-creation",
    name: "Content Creation",
    pillar: "brand",
    summary: "Stories, visuals and campaigns that people stop scrolling for.",
    description:
      "We make content with a job to do: explain the product, build trust, start a conversation or move someone to act. Every piece starts from your strategy, so the work stays recognisably yours across formats and channels.",
    includes: [
      "Campaign content",
      "Social content",
      "Brand storytelling",
      "Visual content",
      "Editorial content",
      "Video concepts and scripts",
    ],
    approach: [
      "Agree the audience, message and job for each piece.",
      "Concept, write and design in short review cycles.",
      "Package everything for each channel, ready to publish.",
    ],
    goodFitIf: [
      "You know what to say but not how to make it interesting.",
      "You need a steady supply of on-brand content.",
      "A launch or campaign needs a full content suite.",
    ],
    related: ["copywriting", "social-media-strategy", "creative-direction"],
    seo: {
      title: "Content Creation",
      description:
        "Content creation from Sam-Olayemi: campaign and social content, brand storytelling, editorial content and video concepts.",
    },
  },
  {
    slug: "copywriting",
    name: "Copywriting",
    pillar: "brand",
    summary: "Clear, persuasive words for websites, campaigns and everything in between.",
    description:
      "Good copy makes a complicated offer feel obvious. We write website copy, campaigns, adverts, emails and sales material that sound like you on your best day, and we write for search and for people at the same time.",
    includes: [
      "Website copy",
      "Campaign copy",
      "Brand messaging",
      "Advertising copy",
      "Email copy",
      "Marketing and sales materials",
    ],
    approach: [
      "Learn the product, the customer and the objections.",
      "Write against a clear brief, with search intent where it matters.",
      "Edit until every line earns its place.",
    ],
    goodFitIf: [
      "Your website explains what you do but not why it matters.",
      "Your team writes everything, and it shows.",
      "You need copy that works for search without sounding like it.",
    ],
    related: ["brand-strategy", "web-development", "content-creation"],
    seo: {
      title: "Copywriting Services",
      description:
        "Copywriting from Sam-Olayemi: website, campaign, advertising and email copy that is clear, persuasive and search-aware.",
    },
  },
  {
    slug: "ghostwriting",
    name: "Ghostwriting",
    pillar: "brand",
    summary: "Your ideas, in your voice, published consistently under your name.",
    description:
      "Founders and executives usually have more to say than time to write it. We interview you, capture how you think and how you talk, and turn it into articles, LinkedIn posts, speeches and thought leadership you're proud to put your name to.",
    includes: [
      "Executive ghostwriting",
      "Founder content",
      "LinkedIn content",
      "Thought leadership articles",
      "Opinion pieces",
      "Speeches and keynotes",
    ],
    approach: [
      "Record short interviews to capture your ideas and voice.",
      "Draft to a publishing plan, with you approving every piece.",
      "Refine the voice as the body of work grows.",
    ],
    goodFitIf: [
      "You have a point of view but no time to write it down.",
      "Your profile matters to your company's reputation.",
      "You have a speech, article or book chapter to deliver.",
    ],
    related: ["strategic-communications", "public-speaking", "copywriting"],
    seo: {
      title: "Executive Ghostwriting",
      description:
        "Executive and founder ghostwriting from Sam-Olayemi: LinkedIn content, thought leadership, articles and speeches in your voice.",
    },
  },
  {
    slug: "creative-direction",
    name: "Creative Direction",
    pillar: "brand",
    summary: "One clear creative idea, carried consistently across everything you make.",
    description:
      "Creative direction is what keeps a campaign from looking like ten different vendors made it. We set the idea, the visual language and the standards, then guide designers, photographers and producers so the finished work is coherent and on-brief.",
    includes: [
      "Campaign creative direction",
      "Visual concepts",
      "Brand storytelling",
      "Art direction",
      "Creative production oversight",
      "Brand guidelines in use",
    ],
    approach: [
      "Turn strategy into a single creative idea and mood.",
      "Set the visual and verbal rules for the work.",
      "Direct production and review everything before it ships.",
    ],
    goodFitIf: [
      "Your brand looks different in every channel.",
      "You're coordinating several creative suppliers.",
      "A launch needs a strong, recognisable idea.",
    ],
    related: ["campaign-planning", "content-creation", "brand-strategy"],
    seo: {
      title: "Creative Direction",
      description:
        "Creative and art direction from Sam-Olayemi: campaign concepts, visual language and production oversight for coherent brand work.",
    },
  },
  {
    slug: "campaign-planning",
    name: "Campaign Planning",
    pillar: "strategy",
    summary: "Campaigns planned from objective to measurement, not from the first idea.",
    description:
      "We plan campaigns backwards from what they need to change: awareness, sign-ups, sales or sentiment. Then we build the idea, the channel plan, the timeline and the measures, and help you run it.",
    includes: [
      "Campaign strategy",
      "Creative concepts",
      "Channel and media planning",
      "Launch timeline",
      "Campaign execution",
      "Measurement and reporting",
    ],
    approach: [
      "Set one objective and how it will be measured.",
      "Develop the idea and the channel plan around it.",
      "Launch, watch the numbers and adjust in flight.",
    ],
    goodFitIf: [
      "You have a launch, season or moment to make the most of.",
      "Past campaigns created activity but not results.",
      "You need someone to hold creative, media and timelines together.",
    ],
    related: ["creative-direction", "marketing-strategy", "content-creation"],
    seo: {
      title: "Campaign Planning",
      description:
        "Campaign planning from Sam-Olayemi: campaign strategy, creative concepts, channel planning, execution and measurement.",
    },
  },

  /* ---------------------------------------------------------------- *
   * Software engineering & digital products
   * ---------------------------------------------------------------- */
  {
    slug: "software-engineering",
    name: "Software Engineering",
    pillar: "technology",
    summary: "Web applications, platforms and systems built to keep working as you grow.",
    description:
      "We build software the way it should be built for a business that intends to last: clear architecture, tested code, sensible infrastructure and documentation your next engineer can follow. From internal tools to SaaS platforms, we build what the business needs, not what's fashionable.",
    includes: [
      "Web applications",
      "Backend systems",
      "APIs",
      "Enterprise software",
      "SaaS platforms",
      "Microservices",
    ],
    approach: [
      "Clarify the problem, the users and the constraints before the stack.",
      "Build in short, demonstrable increments with automated tests.",
      "Ship with monitoring, documentation and a handover plan.",
    ],
    goodFitIf: [
      "You need custom software that off-the-shelf tools can't handle.",
      "An existing system has become slow, fragile or hard to change.",
      "You want engineering you can hand to an in-house team later.",
    ],
    related: ["backend-engineering", "cloud-infrastructure", "digital-products"],
    seo: {
      title: "Software Engineering & Development",
      description:
        "Software engineering from Sam-Olayemi: web applications, backend systems, APIs, SaaS platforms and enterprise software.",
    },
  },
  {
    slug: "web-development",
    name: "Web Development",
    pillar: "technology",
    summary: "Fast, accessible websites that explain your business and bring in enquiries.",
    description:
      "Your website is often the first serious conversation a customer has with you. We design and build sites that load quickly on a phone, read clearly, rank well and are easy for your team to update, whether that's a company site, a store or a web application.",
    includes: [
      "Corporate and business websites",
      "E-commerce",
      "CMS platforms",
      "Landing pages",
      "Web applications",
      "Technical SEO and performance",
    ],
    approach: [
      "Plan the structure and content before the visuals.",
      "Design mobile first, then build on a modern, fast stack.",
      "Launch with analytics, SEO foundations and CMS training.",
    ],
    goodFitIf: [
      "Your site is slow, dated or hard to update.",
      "Visitors arrive but don't get in touch or buy.",
      "You're launching a new brand, product or business.",
    ],
    related: ["copywriting", "brand-strategy", "software-engineering"],
    seo: {
      title: "Web Development & Website Design",
      description:
        "Web development from Sam-Olayemi: corporate websites, e-commerce, CMS platforms and landing pages that are fast, accessible and SEO-ready.",
    },
  },
  {
    slug: "digital-products",
    name: "Digital Product Development",
    pillar: "technology",
    summary: "From idea to MVP to a product people pay for.",
    description:
      "We help founders and teams decide what to build first, then build it properly. That means scoping an MVP that tests the riskiest assumption, designing an architecture that won't need a rewrite in a year, and shipping something real customers can use.",
    includes: [
      "MVP development",
      "Product architecture",
      "Technical strategy",
      "Product engineering",
      "API development",
      "System integrations",
    ],
    approach: [
      "Define the smallest product that proves the idea.",
      "Design and build it in two-week, demonstrable cycles.",
      "Launch, learn from usage and plan the next release.",
    ],
    goodFitIf: [
      "You have a product idea and need a technical partner.",
      "You've raised, or plan to raise, and need to ship.",
      "Your prototype needs to become production software.",
    ],
    related: ["software-engineering", "technical-consulting", "brand-strategy"],
    seo: {
      title: "Digital Product & MVP Development",
      description:
        "Digital product development from Sam-Olayemi: MVP development, product architecture, technical strategy and system integrations.",
    },
  },
  {
    slug: "backend-engineering",
    name: "Backend Engineering",
    pillar: "technology",
    summary: "APIs, data and services that stay reliable under real load.",
    description:
      "The backend is where most software succeeds or fails quietly. We design and build APIs, data models, queues and services with Node.js and NestJS, with the testing, observability and security that production traffic demands.",
    includes: [
      "Node.js and NestJS",
      "REST APIs",
      "Microservices",
      "Databases and data modelling",
      "Redis and caching",
      "Queues and background jobs",
      "Distributed systems",
    ],
    approach: [
      "Model the domain and the data before the endpoints.",
      "Build with tests, typed contracts and clear boundaries.",
      "Add caching, queues and monitoring where load demands it.",
    ],
    goodFitIf: [
      "You need an API for a web or mobile product.",
      "Your backend is slowing down as usage grows.",
      "You're integrating several systems that need to agree.",
    ],
    related: ["software-engineering", "cloud-infrastructure", "technical-consulting"],
    seo: {
      title: "Backend Engineering (Node.js & NestJS)",
      description:
        "Backend engineering from Sam-Olayemi: Node.js and NestJS APIs, microservices, databases, Redis, queues and distributed systems.",
    },
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    pillar: "technology",
    summary: "Deployment, hosting and pipelines that make releases routine.",
    description:
      "Good infrastructure is boring in the best way: deployments are routine, costs are predictable and outages are rare and short. We set up and improve cloud environments on AWS, DigitalOcean and Linode, with Docker and CI/CD pipelines your team can run.",
    includes: [
      "AWS",
      "DigitalOcean",
      "Linode",
      "Docker and containerisation",
      "CI/CD pipelines",
      "Cloud deployment",
      "Infrastructure architecture",
    ],
    approach: [
      "Review what runs where, what it costs and what could break.",
      "Containerise and automate builds, tests and deployments.",
      "Document, monitor and hand over runbooks.",
    ],
    goodFitIf: [
      "Deployments are manual, nervous events.",
      "Your hosting bill is growing faster than your usage.",
      "You're moving to the cloud or between providers.",
    ],
    related: ["backend-engineering", "software-engineering", "technical-consulting"],
    seo: {
      title: "Cloud Infrastructure & DevOps",
      description:
        "Cloud and infrastructure services from Sam-Olayemi: AWS, DigitalOcean and Linode deployments, Docker, CI/CD and infrastructure architecture.",
    },
  },
  {
    slug: "technical-consulting",
    name: "Technical Consulting",
    pillar: "technology",
    summary: "An independent view of your architecture, code and technical plans.",
    description:
      "Sometimes you need an experienced engineer to look at the system and tell you the truth. We review architecture and code, assess technical risk before an investment or acquisition, and help leadership make engineering decisions with confidence.",
    includes: [
      "Architecture reviews",
      "System design",
      "Technical due diligence",
      "Performance optimisation",
      "Engineering strategy",
      "Build-versus-buy decisions",
    ],
    approach: [
      "Read the code, the infrastructure and the roadmap.",
      "Interview the team and identify the real constraints.",
      "Deliver a clear written assessment with prioritised actions.",
    ],
    goodFitIf: [
      "You're about to invest heavily in a technical direction.",
      "You're investing in or acquiring a software company.",
      "Performance or reliability problems keep coming back.",
    ],
    related: ["software-engineering", "digital-products", "business-consulting"],
    seo: {
      title: "Technical Consulting & Architecture Reviews",
      description:
        "Technical consulting from Sam-Olayemi: architecture reviews, system design, technical due diligence, performance and engineering strategy.",
    },
  },

  /* ---------------------------------------------------------------- *
   * Strategy & advisory
   * ---------------------------------------------------------------- */
  {
    slug: "business-consulting",
    name: "Consulting",
    pillar: "strategy",
    summary: "Business, brand, digital and technology advice from people who also build.",
    description:
      "Our consulting draws on the same team that does the work, so the advice is practical. We help leadership teams work through growth, positioning, digital and technology questions, and leave them with decisions and a plan rather than a slide deck.",
    includes: [
      "Business consulting",
      "Digital strategy",
      "Brand consulting",
      "Marketing strategy",
      "Technology consulting",
      "Strategy workshops for leadership",
    ],
    approach: [
      "Frame the real question and what a good answer looks like.",
      "Gather evidence, test options and pressure-test assumptions.",
      "Agree a decision, a plan and who owns each part.",
    ],
    goodFitIf: [
      "You face a decision that cuts across brand, marketing and technology.",
      "You want an outside view before committing budget.",
      "Your plans are clear but progress isn't.",
    ],
    related: ["project-management", "workshops", "technical-consulting"],
    seo: {
      title: "Business, Digital & Technology Consulting",
      description:
        "Consulting from Sam-Olayemi: business, digital, brand, marketing and technology strategy with practical plans your team can execute.",
    },
  },
  {
    slug: "project-management",
    name: "Project Management",
    pillar: "strategy",
    summary: "Complex projects delivered on time, with everyone clear on what's next.",
    description:
      "Projects that span strategy, creative and technology have a lot of moving parts. We plan, coordinate and report on them, keep stakeholders aligned and suppliers accountable, and make sure decisions get made when they need to be.",
    includes: [
      "Project planning and scoping",
      "Delivery management",
      "Stakeholder coordination",
      "Supplier and vendor management",
      "Risk and issue management",
      "Progress reporting",
    ],
    approach: [
      "Agree scope, milestones, owners and how success is judged.",
      "Run a steady cadence of check-ins, reports and decisions.",
      "Close out with a handover and lessons learned.",
    ],
    goodFitIf: [
      "A project involves several teams or suppliers.",
      "Deadlines keep slipping and no one is sure why.",
      "You need a delivery lead for a defined period.",
    ],
    related: ["business-consulting", "software-engineering", "campaign-planning"],
    seo: {
      title: "Project Management",
      description:
        "Project management from Sam-Olayemi: planning, delivery management, stakeholder coordination and reporting for complex projects.",
    },
  },
  {
    slug: "training",
    name: "Training",
    pillar: "strategy",
    summary: "Practical training that leaves your team able to do the work themselves.",
    description:
      "We train teams in the skills we practise every day: brand and messaging, content and copywriting, communication, digital marketing and modern software practice. Sessions are built around your real work, so people leave with something they can use the next morning.",
    includes: [
      "Brand and messaging training",
      "Writing and copywriting training",
      "Communication skills",
      "Digital marketing training",
      "Software engineering practice",
      "Custom programmes for teams",
    ],
    approach: [
      "Assess the team's current skills and goals.",
      "Design sessions around your own material and challenges.",
      "Follow up with resources and a check-in on progress.",
    ],
    goodFitIf: [
      "You want to build skills in-house rather than outsource.",
      "A new team or function needs to get up to speed.",
      "You're rolling out a new brand or way of working.",
    ],
    related: ["workshops", "public-speaking", "business-consulting"],
    seo: {
      title: "Corporate Training",
      description:
        "Corporate training from Sam-Olayemi: brand, writing, communication, digital marketing and software engineering programmes for teams.",
    },
  },
  {
    slug: "workshops",
    name: "Workshops",
    pillar: "strategy",
    summary: "Focused sessions that get a room of people to a decision.",
    description:
      "A good workshop replaces weeks of emails. We design and facilitate sessions for brand discovery, strategy, product planning and team alignment, and we write up what was decided so it doesn't evaporate once everyone leaves the room.",
    includes: [
      "Brand discovery workshops",
      "Strategy and planning sessions",
      "Product discovery workshops",
      "Team alignment sessions",
      "Facilitation",
      "Written outcomes and next steps",
    ],
    approach: [
      "Agree the decision the session needs to produce.",
      "Design the agenda, exercises and pre-reading.",
      "Facilitate, then deliver a written summary and actions.",
    ],
    goodFitIf: [
      "A team needs to agree on direction quickly.",
      "You're starting a brand, product or strategy project.",
      "Meetings keep ending without decisions.",
    ],
    related: ["training", "business-consulting", "brand-strategy"],
    seo: {
      title: "Strategy & Brand Workshops",
      description:
        "Facilitated workshops from Sam-Olayemi: brand discovery, strategy, product discovery and team alignment sessions with written outcomes.",
    },
  },
  {
    slug: "public-speaking",
    name: "Public Speaking",
    pillar: "strategy",
    summary: "Talks on brand, communication and technology, plus coaching for your own speakers.",
    description:
      "We speak at conferences, company events and training days on brand, communication, strategy and technology. We also help executives prepare their own talks: shaping the argument, writing the speech and rehearsing the delivery.",
    includes: [
      "Keynotes and talks",
      "Panel participation and moderation",
      "Speech writing",
      "Executive speaker coaching",
      "Presentation design",
      "Event facilitation",
    ],
    approach: [
      "Understand the audience and what they should leave with.",
      "Build the argument, the story and the slides.",
      "Rehearse until the delivery feels natural.",
    ],
    goodFitIf: [
      "You're planning an event and need a speaker or moderator.",
      "An executive has an important talk coming up.",
      "Your team presents often and wants to do it better.",
    ],
    related: ["ghostwriting", "strategic-communications", "training"],
    seo: {
      title: "Public Speaking & Speaker Coaching",
      description:
        "Public speaking from Sam-Olayemi: keynotes and talks on brand, communication and technology, plus speech writing and executive coaching.",
    },
  },
] as const;

export const servicesByPillar = (pillar: PillarId) => SERVICES.filter((service) => service.pillar === pillar);
