# Product info sync

`src/data/productTruth.ts` must match `antirot-web/src/data/productTruth.ts`.

| Status | Meaning |
|--------|---------|
| `available` | Shipped and usable by default |
| `testing` | Built but gated / fail-closed |
| `planned` | Documented roadmap only |

Update both files when a feature ships or a flag flips. Run `yarn seo:check`. Do not publish Pro prices until payments are live.

Links: joinantirot.com (product) · Google Play (install) · this site (company + legal).
