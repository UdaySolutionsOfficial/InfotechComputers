/**
 * Asset Discovery & Resolution Utilities
 * Handles detection and fallback resolution for official branding assets:
 * - Institute Official Logo (public/images/branding/infotech-logo.*)
 * - N. Srinivas Sir Photograph (public/images/institute/srinivas-sir.*)
 * - USolve Partner Logo (public/images/branding/usolve-logo.*)
 */

/**
 * Returns the resolved path to the official Infotech Computers logo.
 * Specifically matches 'infotech-logo' and avoids partner logos.
 */
export function getOfficialLogoUrl(): string | null {
  const logoModules = import.meta.glob('/public/images/branding/*.{png,svg,webp,jpg,jpeg}', { eager: true });
  const keys = Object.keys(logoModules);
  
  if (keys.length === 0) return null;

  // Filter specifically for Infotech logo (exclude usolve or other partner logos and micro variants)
  const infotechKeys = keys.filter((k) => {
    const lower = k.toLowerCase();
    return (lower.includes('infotech') || lower.includes('logo')) && !lower.includes('usolve') && !lower.includes('micro');
  });

  if (infotechKeys.length === 0) return null;

  // Prefer SVG or PNG over JPG if multiple exist
  const sorted = [...infotechKeys].sort((a, b) => {
    if (a.endsWith('.svg')) return -1;
    if (b.endsWith('.svg')) return 1;
    if (a.endsWith('.png')) return -1;
    if (b.endsWith('.png')) return 1;
    return 0;
  });

  return sorted[0].replace(/^\/public/, '');
}

/**
 * Returns the resolved path to the official N. Srinivas Sir photograph.
 */
export function getRepresentativePhotoUrl(): string | null {
  const photoModules = import.meta.glob('/public/images/institute/*.{png,webp,jpg,jpeg}', { eager: true });
  const keys = Object.keys(photoModules);

  if (keys.length === 0) return null;

  // Filter specifically for srinivas or representative
  const srinivasKeys = keys.filter((k) => {
    const lower = k.toLowerCase();
    return lower.includes('srinivas') || lower.includes('sir') || lower.includes('rep');
  });

  const candidates = srinivasKeys.length > 0 ? srinivasKeys : keys;

  // Prefer web-optimized jpg if available for fast mobile performance
  const preferred = candidates.find(k => k.endsWith('srinivas-sir.jpg')) ||
                    candidates.find(k => k.endsWith('.jpg') || k.endsWith('.webp')) ||
                    candidates[0];

  return preferred.replace(/^\/public/, '');
}

/**
 * Returns the resolved path to the USolve partner 3D emblem logo for tooltips.
 */
export function getUSolveLogoUrl(): string {
  const partnerModules = import.meta.glob('/public/images/branding/*usolve*.{png,webp,jpg,jpeg}', { eager: true });
  const keys = Object.keys(partnerModules);

  if (keys.length > 0) {
    const webJpg = keys.find(k => k.endsWith('usolve-logo.jpg'));
    if (webJpg) return webJpg.replace(/^\/public/, '');
    return keys[0].replace(/^\/public/, '');
  }

  return '/images/branding/usolve-logo.jpg';
}

/**
 * Returns the resolved path to the Infotech Computers micro logo for compact collaboration pills.
 */
export function getInfotechMicroLogoUrl(): string {
  return '/images/branding/infotech-micro-logo.png';
}

/**
 * Returns the resolved path to the USolve transparent micro logo for compact collaboration pills.
 */
export function getUSolveMicroLogoUrl(): string {
  return '/images/branding/usolve-micro-logo.png';
}
