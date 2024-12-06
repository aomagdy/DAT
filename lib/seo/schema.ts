import { Organization, WithContext } from 'schema-dts'

export const getOrganizationSchema = (): WithContext<Organization> => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DATGenius',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://datgenius.com',
  logo: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`,
  description: 'AI-powered DAT preparation platform offering personalized study plans and comprehensive practice materials.',
  sameAs: [
    'https://facebook.com/datgenius',
    'https://twitter.com/datgenius',
    'https://linkedin.com/company/datgenius',
    'https://instagram.com/datgenius'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'support@datgenius.com',
    availableLanguage: ['English']
  }
})