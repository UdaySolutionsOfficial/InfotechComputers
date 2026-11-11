import type { APIRoute } from 'astro';
import { getPublicSiteUrl } from '../utils/seo';

export const GET: APIRoute = () => {
  const siteUrl = getPublicSiteUrl();

  let xml = '';

  if (siteUrl) {
    const urls = [
      { loc: `${siteUrl}/`, changefreq: 'weekly', priority: '1.0' },
      { loc: `${siteUrl}/courses/`, changefreq: 'weekly', priority: '0.8' },
      { loc: `${siteUrl}/services/`, changefreq: 'monthly', priority: '0.8' },
    ];

    xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
  } else {
    xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- 
  Infotech Computers Website Sitemap
  NOTE: Production domain has not yet been configured in environment (PUBLIC_SITE_URL).
  To publish canonical sitemap URLs, set PUBLIC_SITE_URL=https://<your-domain> in your environment.
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;
  }

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
