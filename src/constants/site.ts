import { primaryPages } from './navigation'

export const footerLinks = [...primaryPages, { id: 'contact', label: 'Contact' as const }]

export const footerFields = [
  'Pharmaceutical & Chemical',
  'Environmental Engineering',
  'New Energy Engineering',
  'Oil & Gas Storage',
  'Municipal Engineering',
]

export const footerContact = [
  { label: 'Fujian Province, China', type: 'location' as const },
  { label: '+86 XXX XXXX XXXX', type: 'phone' as const },
  { label: 'info@fjmedical-engineering.com', type: 'email' as const },
]

export const socialIcons = [
  { label: 'Facebook', icon: '/assets/asset-icon-facebook.png' },
  { label: 'Twitter', icon: '/assets/asset-icon-twitter.png' },
  { label: 'LinkedIn', icon: '/assets/asset-icon-linkedin.png' },
]

export const footerDescription =
  'National-level engineering design institute specializing in comprehensive engineering services for pharmaceutical, chemical, and energy sectors.'
