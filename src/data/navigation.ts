export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Courses', href: '/courses/' },
  { label: 'Digital Services', href: '/services/' },
  { label: 'Contact', href: '/#contact' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Institute', href: '/#about' },
  { label: 'All Courses', href: '/courses/' },
  { label: 'Digital Services', href: '/services/' },
  { label: 'Contact & Location', href: '/#contact' },
];
