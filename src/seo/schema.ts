import { PRODUCT_TRUTH } from '@/data/productTruth';
import { SITE } from './siteConfig';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    email: SITE.email,
    foundingDate: '2026-05-19',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '54 Bhat Gali, Bahadurganj',
      addressLocality: 'Ujjain',
      postalCode: '456010',
      addressCountry: 'IN',
    },
    founder: PRODUCT_TRUTH.company.founders.map((f) => ({
      '@type': 'Person',
      name: f.name,
      jobTitle: f.role,
    })),
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'SoftwareApplication',
        name: SITE.productName,
        url: SITE.productUrl,
      },
    },
  };
}

export function softwareApplicationSchema() {
  const available = PRODUCT_TRUTH.features
    .filter((f) => f.status === 'available')
    .map((f) => f.name);

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AntiRot',
    alternateName: ['Anti Rot', 'Antirot'],
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'Android',
    url: SITE.productUrl,
    downloadUrl: SITE.playStoreUrl,
    description: PRODUCT_TRUTH.brand.positioning,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Free to install on Google Play. Optional AntiRot+ checkout is currently gated.',
    },
    featureList: available.join(', '),
    publisher: {
      '@type': 'Organization',
      name: SITE.legalName,
      url: SITE.url,
    },
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    publisher: {
      '@type': 'Organization',
      name: SITE.legalName,
    },
  };
}

export function webPageSchema(name: string, path: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE.url}${path === '/' ? '/' : path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path === '/' ? '/' : item.path}`,
    })),
  };
}
