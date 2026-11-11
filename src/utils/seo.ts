import { instituteData } from '../data/institute';
import { getOfficialLogoUrl } from './assets';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  breadcrumbs?: Array<{ name: string; path: string }>;
  isHomePage?: boolean;
}

/**
 * Normalizes and validates the public site URL from environment.
 * Strict security: Returns null if empty, invalid, localhost, or preview URL.
 */
export function getPublicSiteUrl(): string | null {
  const envUrl = (import.meta.env.PUBLIC_SITE_URL || '').trim();

  if (!envUrl) return null;

  // Disallow localhost or unverified hosts from being treated as canonical
  if (
    envUrl.includes('localhost') || 
    envUrl.includes('127.0.0.1') || 
    envUrl.includes('vercel.app') || 
    envUrl.includes('netlify.app')
  ) {
    return null;
  }

  // Ensure starts with http:// or https://
  if (!envUrl.startsWith('http://') && !envUrl.startsWith('https://')) {
    return null;
  }

  // Remove trailing slashes
  return envUrl.replace(/\/+$/, '');
}

/**
 * Returns whether search indexing is safely enabled for this deployment.
 * Indexing is enabled ONLY when:
 * 1. A valid production PUBLIC_SITE_URL is configured
 * 2. PUBLIC_INDEXING_ENABLED is explicitly set to 'true'
 */
export function isIndexingEnabled(): boolean {
  const siteUrl = getPublicSiteUrl();
  if (!siteUrl) return false;

  const flag = (import.meta.env.PUBLIC_INDEXING_ENABLED || '').trim().toLowerCase();

  return flag === 'true';
}

/**
 * Formats clean, consistent canonical URL with trailing slashes.
 * Returns null if the production site URL has not been configured.
 */
export function getCanonicalUrl(pathname: string = '/'): string | null {
  const siteUrl = getPublicSiteUrl();
  if (!siteUrl) return null;

  // Clean path and guarantee leading and trailing slash
  let cleanPath = pathname.trim();
  if (!cleanPath.startsWith('/')) cleanPath = `/${cleanPath}`;
  if (!cleanPath.endsWith('/')) cleanPath = `${cleanPath}/`;

  return `${siteUrl}${cleanPath}`;
}

/**
 * Formats page title without duplicate brand suffixes.
 */
export function buildPageTitle(title?: string): string {
  if (!title) {
    return `${instituteData.name} Nidadavolu | Computer Courses & Training`;
  }

  // If the title already contains the institute name, use it directly
  if (title.toLowerCase().includes('infotech computers') || title.toLowerCase().includes('infotech')) {
    return title;
  }

  return `${title} | ${instituteData.name}`;
}

/**
 * Generates Schema.org EducationalOrganization structured data for Homepage.
 * Strict adherence to verified factual data only.
 */
export function getOrganizationStructuredData() {
  const siteUrl = getPublicSiteUrl();

  const data: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: instituteData.name,
    alternateName: 'Infotech Computers Nidadavolu',
    description: 'An established computer education and technology training institute in Nidadavolu, Andhra Pradesh.',
    foundingDate: `${instituteData.established}`,
    telephone: `+91-${instituteData.contact.phone}`,
    email: instituteData.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: instituteData.location.city,
      addressRegion: instituteData.location.state,
      addressCountry: 'IN',
    },
    sameAs: [
      instituteData.social.instagram,
      instituteData.location.googleMapsUrl,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+91-${instituteData.contact.phone}`,
      contactType: 'student admissions and enquiries',
      areaServed: 'IN',
      availableLanguage: ['en', 'te'],
    },
  };

  if (siteUrl) {
    data.url = siteUrl;
  }

  const officialLogo = getOfficialLogoUrl();
  if (officialLogo) {
    data.logo = siteUrl ? `${siteUrl}${officialLogo}` : officialLogo;
  }

  return data;
}

/**
 * Generates Schema.org BreadcrumbList structured data.
 */
export function getBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; path: string }>) {
  const siteUrl = getPublicSiteUrl();

  const itemListElement = breadcrumbs.map((crumb, index) => {
    let itemUrl = crumb.path;
    if (siteUrl) {
      const cleanPath = crumb.path.startsWith('/') ? crumb.path : `/${crumb.path}`;
      itemUrl = `${siteUrl}${cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`}`;
    }

    return {
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: itemUrl,
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}

/**
 * Assembles comprehensive SEO, OpenGraph, Twitter, and JSON-LD metadata.
 */
export function getSEOMetadata(props: SEOProps = {}) {
  const fullTitle = buildPageTitle(props.title);
  const description = props.description || instituteData.description;
  const canonical = getCanonicalUrl(props.canonicalPath);
  const siteUrl = getPublicSiteUrl();

  // Social sharing image
  const defaultOgImagePath = '/images/og-image.jpg';
  const ogImage = siteUrl ? `${siteUrl}${defaultOgImagePath}` : (props.ogImage || defaultOgImagePath);

  // Robots directive: If indexing is disabled or explicitly noindexed, output noindex
  const indexingAllowed = isIndexingEnabled() && !props.noindex;
  const robots = indexingAllowed ? 'index, follow' : 'noindex, nofollow';

  // Structured Data array
  const jsonLdScripts: Record<string, any>[] = [];

  if (props.isHomePage) {
    jsonLdScripts.push(getOrganizationStructuredData());
  }

  if (props.breadcrumbs && props.breadcrumbs.length > 0) {
    jsonLdScripts.push(getBreadcrumbStructuredData(props.breadcrumbs));
  }

  return {
    title: fullTitle,
    description,
    canonical,
    ogImage,
    ogType: props.ogType || 'website',
    robots,
    siteName: instituteData.name,
    locale: 'en_IN',
    jsonLdScripts,
    isProductionConfigured: !!siteUrl,
  };
}
