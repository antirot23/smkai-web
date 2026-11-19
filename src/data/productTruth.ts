/** Keep in sync with antirot-web/src/data/productTruth.ts */

export type FeatureStatus = 'available' | 'testing' | 'planned';

export type ProductFeature = {
  id: string;
  name: string;
  shortDescription: string;
  status: FeatureStatus;
  category: 'core' | 'community' | 'companion' | 'platform';
};

export const PRODUCT_TRUTH = {
  version: '2026-11-19',
  brand: {
    name: 'AntiRot',
    alternateNames: ['Anti Rot', 'Antirot'],
    tagline: "Think. Don't Doomscroll.",
    positioning:
      'A social app that rewards participation over passive scrolling — daily questions, short video perspectives, and community conversation spaces.',
    philosophy:
      'Humanity did not evolve through scrolling. It evolved through questions. AntiRot is built for active participation: respond, discuss, match, and create — not endless consumption.',
  },
  company: {
    name: 'SMKAI Ventures',
    legalName: 'SMKAI Ventures Private Limited',
    siteUrl: 'https://smkaiventures.com/',
    productSiteUrl: 'https://joinantirot.com/',
    email: 'Antirot12@gmail.com',
    phone: '+91 91311 40406',
    address: '54 Bhat Gali, Bahadurganj, Ujjain, 456010',
    incorporated: 'May 19, 2026',
    founders: [
      { name: 'Kaustubhi Shastri', role: 'Founder, Chairperson & Director' },
      { name: 'Anshul Maheshwari', role: 'Co-Founder, CEO & Director' },
    ],
  },
  platforms: {
    android: {
      available: true,
      packageId: 'com.antirot',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.antirot',
      label: 'Available on Google Play',
    },
    ios: {
      available: false,
      note: 'iOS project exists in the app repo; not publicly listed as available.',
    },
    web: {
      available: false,
      note: 'joinantirot.com is the product site and share-link gateway, not a full web client.',
    },
  },
  releaseStatus: {
    label: 'Available on Android',
    summary:
      'AntiRot is installable on Google Play. Some community modes and paid Pro checkout remain behind feature flags while we expand carefully.',
    waitlistFormUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSd3NG6TAiwc6lQxkNLwVegiMS19ck20qpmhcORqQObo83xPww/viewform?usp=sharing&ouid=116044772597740770916',
  },
  features: [
    {
      id: 'daily-friction',
      name: 'Daily Friction',
      shortDescription:
        'Daily current-affairs questions on Home that spark thought and invite Sip responses — typically multiple prompts, not a single question.',
      status: 'available',
      category: 'core',
    },
    {
      id: 'sips',
      name: 'Sips',
      shortDescription:
        'Short video perspectives tied to questions and headlines. Watch, respond, comment, and follow creators.',
      status: 'available',
      category: 'core',
    },
    {
      id: 'chai-tapri',
      name: 'Chai Tapri',
      shortDescription:
        'Community stalls and member-created Tapris for text conversation, invites, and moderated spaces.',
      status: 'available',
      category: 'community',
    },
    {
      id: 'chat-buddy',
      name: '1:1 Chat Buddy',
      shortDescription:
        'Interest-based matching into timed one-to-one conversations (default session length: 10 minutes).',
      status: 'available',
      category: 'community',
    },
    {
      id: 'pass-the-cup',
      name: 'Pass the Cup',
      shortDescription:
        'Collaborative storytelling rooms where members take turns writing a shared story.',
      status: 'available',
      category: 'community',
    },
    {
      id: 'direct-chat',
      name: 'Direct Chat & Buzz',
      shortDescription:
        'Private messages, message requests, stickers, and Buzz Friends prompts from the app FAB.',
      status: 'available',
      category: 'core',
    },
    {
      id: 'aro',
      name: 'Aro',
      shortDescription:
        'In-app AI companion for product guidance and conversation. Broader automated moderation tooling is still evolving.',
      status: 'available',
      category: 'companion',
    },
    {
      id: 'safety',
      name: 'Safety & Moderation Controls',
      shortDescription:
        'Report content, block users, Tapri mute/kick/ban tools, account deletion, and community guidelines (13+).',
      status: 'available',
      category: 'platform',
    },
    {
      id: 'current-affairs-adda',
      name: 'Current Affairs Adda',
      shortDescription:
        'Structured headline discussion rooms. Built in the app; currently off by default pending rollout.',
      status: 'testing',
      category: 'community',
    },
    {
      id: 'anonymous-debate',
      name: 'Anonymous Debate',
      shortDescription:
        'Real-time team debates with spectator voting. Full client/backend stack exists; fail-closed until intentional launch.',
      status: 'testing',
      category: 'community',
    },
    {
      id: 'antirot-plus',
      name: 'AntiRot+ (Pro)',
      shortDescription:
        'Paid plan for higher limits (more Tapris, more Pass the Cup rooms, and Debate access when Debate is on). Checkout is currently gated.',
      status: 'testing',
      category: 'platform',
    },
    {
      id: 'brew-and-build',
      name: 'Brew & Build / Chai Circuit',
      shortDescription:
        'Creator and puzzle/circuit surfaces exist partially; the Chai Tapri Brew stall still routes through a work-in-progress experience.',
      status: 'testing',
      category: 'community',
    },
  ] as ProductFeature[],
  pricing: {
    free: {
      label: 'Free',
      summary: 'Core participation features with fair-use limits on Tapri creation and Pass the Cup rooms.',
    },
    pro: {
      label: 'AntiRot+',
      publicPriceClaim: null as string | null,
      note:
        'Pro checkout is feature-flagged. Do not publish a live price on marketing pages until payments are confirmed live. Internal targets have used ₹399/month (live plan) and ₹499 (UAT).',
      benefitsWhenEnabled: [
        'Higher Tapri creation limits',
        'More Pass the Cup rooms per day',
        'Unlimited Debate participation when Debate is enabled',
        'Higher member caps on owned Tapris',
      ],
    },
  },
  differentiators: [
    'Idea-first loop: questions and headlines invite responses instead of pure influencer feeds.',
    'Indianised community framing through Chai Tapri stalls and Tapri rooms.',
    'Structured social modes: timed Chat Buddy, collaborative Pass the Cup writing, short video Sips.',
    'Participation over passive doomscrolling as the product philosophy.',
  ],
  safetyNotes: [
    'Not intended for users under 13.',
    'Reporting, blocking, Tapri moderation tools, and account deletion are available in-product.',
    'Aro assists conversation; community guidelines still describe broader automated moderation as evolving.',
  ],
} as const;

export const availableFeatures = () =>
  PRODUCT_TRUTH.features.filter((f) => f.status === 'available');

export const testingFeatures = () =>
  PRODUCT_TRUTH.features.filter((f) => f.status === 'testing');

export const plannedFeatures = () =>
  PRODUCT_TRUTH.features.filter((f) => f.status === 'planned');

export const statusLabel = (status: FeatureStatus): string => {
  switch (status) {
    case 'available':
      return 'Available now';
    case 'testing':
      return 'In testing';
    case 'planned':
      return 'Planned';
  }
};
