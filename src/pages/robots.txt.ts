import type { APIRoute } from 'astro';
import { getPublicSiteUrl, isIndexingEnabled } from '../utils/seo';

export const GET: APIRoute = () => {
  const siteUrl = getPublicSiteUrl();
  const indexing = isIndexingEnabled();

  let body = '';

  if (indexing && siteUrl) {
    body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
  } else {
    body = `# Infotech Computers Website Robots Configuration
# Staging / Preview mode (Indexing disabled until production domain is verified)
# Crawlers are allowed to fetch pages to read the page-level 'noindex' directive
User-agent: *
Allow: /
`;
  }

  return new Response(body.trim() + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
