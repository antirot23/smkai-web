import { PRODUCT_TRUTH, statusLabel } from '@/data/productTruth';

export const COMPANY = {
  name: PRODUCT_TRUTH.company.name,
  legalName: PRODUCT_TRUTH.company.legalName,
  productName: PRODUCT_TRUTH.brand.name,
  vision: 'Replacing endless scrolling with meaningful thinking.',
  incorporated: PRODUCT_TRUTH.company.incorporated,
  productSiteUrl: PRODUCT_TRUTH.company.productSiteUrl,
  playStoreUrl: PRODUCT_TRUTH.platforms.android.playStoreUrl,
};

export const HERO_DATA = {
  badge: PRODUCT_TRUTH.releaseStatus.label,
  headline: PRODUCT_TRUTH.brand.tagline,
  subheadline:
    'AntiRot turns daily questions and ideas into short video perspectives, Tapri conversations, and collaborative storytelling. Built by SMKAI Ventures for the next generation of social media.',
};

export const MISSION_DATA = {
  title: 'The Problem',
  headline: "What if your attention wasn't the product?",
  description:
    'We started building AntiRot because we were exhausted. Modern social media has unintentionally created an ecosystem of passive consumption and brain rot. Algorithms reward low-effort outrage, and critical engagement gets harder to practice.',
  points: [
    {
      title: 'Active Participation',
      description:
        "You don't just consume content. Interactions begin with ideas — Daily Friction prompts, Sip responses, and community rooms that ask you to show up.",
    },
    {
      title: 'Reputation Driven',
      description:
        'Unlike platforms that reward virality at all costs, AntiRot is designed around curiosity, consistency, and genuine conversation.',
    },
  ],
};

export const PRODUCT_DATA = {
  title: 'How AntiRot solves it',
  subtitle: 'Every meaningful loop on the platform begins with an idea worth responding to.',
  features: [
    {
      title: 'Daily Friction',
      description:
        'The intellectual heartbeat of AntiRot. Each day, Home surfaces current-affairs questions that invite thought — and Sip responses.',
      status: 'available' as const,
    },
    {
      title: 'Sips',
      description:
        'Short Intelligent Perspectives: short video opinions linked to questions and headlines. A growing archive of how people actually think.',
      status: 'available' as const,
    },
    {
      title: 'Aro',
      description:
        'Your in-app AI companion for product guidance and conversation. Broader automated moderation tooling continues to evolve.',
      status: 'available' as const,
    },
  ],
};

export const CHAI_TAPRI_FEATURES = [
  {
    title: '1:1 Chat Buddy',
    description:
      'Interest-based matching into timed one-to-one conversations (default session: about 10 minutes).',
    status: 'available' as const,
  },
  {
    title: 'Pass the Cup',
    description: 'Collaborative storytelling rooms where members take turns writing a shared story.',
    status: 'available' as const,
  },
  {
    title: 'Your Chai Tapri',
    description:
      'Create or join text-based Tapri spaces with invites, join requests, and host moderation tools.',
    status: 'available' as const,
  },
  {
    title: 'Current Affairs Adda',
    description:
      'Structured headline discussion rooms. Built and in testing — currently off by default pending rollout.',
    status: 'testing' as const,
  },
  {
    title: 'Anonymous Debate',
    description:
      'Real-time team debates with spectator voting. In testing and fail-closed until intentional launch.',
    status: 'testing' as const,
  },
];

export const VISION_DATA = {
  quote:
    'We aim to build a platform where thinking becomes a habit again. A place where curiosity is rewarded and your conversations actually matter.',
  footer: 'Humanity didn\'t evolve through scrolling. It evolved through questions.',
};

export const FOUNDER_NOTE = {
  title: 'Why We Started AntiRot',
  content:
    'We noticed that our generation was spending hours every day consuming content, but feeling more disconnected and intellectually drained than ever. We wanted a place to debate, learn, and grow without the toxicity of engagement-bait algorithms. So we decided to build it ourselves.',
};

export const CURRENT_BUILDING = [
  { label: 'MVP Complete', status: 'done' as const },
  { label: 'Internal Testing', status: 'done' as const },
  { label: 'On Google Play (Android)', status: 'done' as const },
  { label: 'Expanding community modes', status: 'active' as const },
];

export const RECENT_PROGRESS = [
  'AntiRot installable on Google Play for Android',
  'Daily Friction, Sips, Chai Tapri, Chat Buddy, and Pass the Cup available',
  'Share links via joinantirot.com deep-link into the app',
  'Debate, Adda, and Pro checkout advancing carefully behind flags',
];

export const ROADMAP_DATA = [
  {
    phase: 'Available now',
    description: 'Android app on Google Play with core participation features.',
  },
  {
    phase: 'In testing',
    description: 'Anonymous Debate, Current Affairs Adda, and AntiRot+ checkout.',
  },
  {
    phase: 'Next',
    description: 'Broader rollout of flagged modes and polished onboarding.',
  },
  {
    phase: 'Later',
    description: 'Expanding the SMKAI ecosystem beyond AntiRot.',
  },
];

export const FAQ_DATA = [
  {
    question: 'What makes AntiRot different from traditional social media?',
    answer:
      'Instead of endless feeds designed to keep you scrolling, AntiRot centers daily thinking questions, short video responses (Sips), and structured community spaces. The goal is participation — not passive consumption.',
  },
  {
    question: 'What is available in AntiRot today?',
    answer:
      'On Android you can use Daily Friction, Sips, Chai Tapri communities, 1:1 Chat Buddy, Pass the Cup storytelling, Direct Chat, Buzz, Aro, and built-in safety controls. Get the app on Google Play or visit joinantirot.com.',
  },
  {
    question: 'What is still in testing?',
    answer:
      'Current Affairs Adda, Anonymous Debate, AntiRot+ checkout, and parts of Brew & Build / Chai Circuit are built but gated. We do not advertise them as generally available until they ship openly.',
  },
  {
    question: 'What is Chai Tapri?',
    answer:
      'Chai Tapri is our community-first discussion ecosystem inspired by Indian chai-stall culture. Available stalls and rooms include Chat Buddy, Pass the Cup, and member Tapris. Adda and Debate remain in testing.',
  },
  {
    question: 'How do you plan to monetize?',
    answer:
      'AntiRot is free to install. An optional AntiRot+ plan is designed for higher participation limits; checkout is currently gated. Longer-term ideas include responsible sponsorship and creator support — those are not live claims.',
  },
  {
    question: 'Who is the team behind this?',
    answer:
      'AntiRot is built by SMKAI Ventures Private Limited, founded by Kaustubhi Shastri and Anshul Maheshwari.',
  },
];

export { PRODUCT_TRUTH, statusLabel };
