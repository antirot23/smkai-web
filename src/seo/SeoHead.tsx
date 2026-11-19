import { Helmet } from 'react-helmet-async';
import { SITE, type PageSeo } from './siteConfig';

type SeoHeadProps = {
  page: PageSeo;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function SeoHead({ page, jsonLd }: SeoHeadProps) {
  const canonical = `${SITE.url}${page.path === '/' ? '/' : page.path}`;
  const image = page.image ?? SITE.defaultOgImage;
  const robots = page.robots ?? 'index,follow';
  const type = page.type ?? 'website';
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang="en" />
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={SITE.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
