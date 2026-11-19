import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];

function read(path) {
  return readFileSync(join(root, path), 'utf8');
}

const sitemap = read('public/sitemap.xml');
const expected = [
  'https://smkaiventures.com/',
  'https://smkaiventures.com/privacy',
  'https://smkaiventures.com/terms',
  'https://smkaiventures.com/guidelines',
  'https://smkaiventures.com/delete-account',
];
for (const loc of expected) {
  if (!sitemap.includes(`<loc>${loc}</loc>`)) errors.push(`sitemap missing ${loc}`);
}

const robots = read('public/robots.txt');
if (!robots.includes('Sitemap: https://smkaiventures.com/sitemap.xml')) {
  errors.push('robots.txt missing sitemap');
}

const indexHtml = read('index.html');
if (indexHtml.includes('<title>smkai-web</title>')) {
  errors.push('index.html still has placeholder title smkai-web');
}
if (!indexHtml.includes('meta name="description"')) {
  errors.push('index.html missing description');
}

const truth = read('src/data/productTruth.ts');
if (/id: 'anonymous-debate'[\s\S]*?status: 'available'/.test(truth)) {
  errors.push('Debate must not be available in productTruth');
}
if (/id: 'current-affairs-adda'[\s\S]*?status: 'available'/.test(truth)) {
  errors.push('Adda must not be available in productTruth');
}

const constants = read('src/constants/index.ts');
if (constants.includes('20-minute')) {
  errors.push('Chat Buddy still claims 20-minute sessions (default is 10)');
}
if (constants.includes('Opening Beta Soon')) {
  errors.push('Stale beta roadmap copy still present');
}

for (const file of ['public/robots.txt', 'public/sitemap.xml', 'public/og-default.png', 'src/seo/SeoHead.tsx']) {
  if (!existsSync(join(root, file))) errors.push(`Missing ${file}`);
}

if (errors.length) {
  console.error('SEO validation failed:');
  for (const e of errors) console.error(' -', e);
  process.exit(1);
}

console.log('SEO validation passed for smkai-web.');
