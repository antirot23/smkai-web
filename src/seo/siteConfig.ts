export const SITE = {
  name: 'SMKAI Ventures',
  legalName: 'SMKAI Ventures Private Limited',
  url: 'https://smkaiventures.com',
  productName: 'AntiRot',
  productUrl: 'https://joinantirot.com',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.antirot',
  email: 'Antirot12@gmail.com',
  locale: 'en_IN',
  defaultOgImage: 'https://smkaiventures.com/og-default.png',
  twitterHandle: undefined as string | undefined,
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  robots?: string;
  type?: 'website' | 'article';
  image?: string;
};

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    title: 'SMKAI Ventures - Builders of AntiRot',
    description:
      'SMKAI Ventures builds AntiRot - THE NEXT GENERATION Social media. Learn what ships today, what is in testing, and how to get the app.',
    path: '/',
  },
  privacy: {
    title: 'Privacy Policy - AntiRot | SMKAI Ventures',
    description:
      'How AntiRot and SMKAI Ventures Private Limited collect, use, and protect personal data. Account deletion and privacy rights explained.',
    path: '/privacy',
  },
  terms: {
    title: 'Terms of Service - AntiRot | SMKAI Ventures',
    description:
      'Terms and conditions for using AntiRot, including eligibility, community standards, and platform rules from SMKAI Ventures.',
    path: '/terms',
  },
  guidelines: {
    title: 'Community Guidelines - AntiRot | SMKAI Ventures',
    description:
      'Community guidelines and copyright policy for AntiRot: respectful discussion, prohibited content, and reporting practices.',
    path: '/guidelines',
  },
  deleteAccount: {
    title: 'Delete Your AntiRot Account | SMKAI Ventures',
    description:
      'Step-by-step instructions to delete your AntiRot account in the app or by contacting SMKAI Ventures support.',
    path: '/delete-account',
    robots: 'noindex,follow',
  },
};
