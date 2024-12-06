import { ROUTES } from './constants'

export const siteConfig = {
  name: 'DATGenius',
  description: 'Transform your DAT preparation with personalized AI learning, adaptive study plans, and comprehensive practice materials.',
  url: process.env.NEXT_PUBLIC_BASE_URL,
  ogImage: '/og.png',
  links: {
    twitter: 'https://twitter.com/datgenius',
    github: 'https://github.com/datgenius'
  },
  nav: [
    { title: 'Features', href: ROUTES.FEATURES },
    { title: 'Pricing', href: ROUTES.PRICING },
    { title: 'About', href: ROUTES.ABOUT },
    { title: 'Contact', href: ROUTES.CONTACT }
  ],
  footerNav: {
    product: [
      { title: 'Features', href: ROUTES.FEATURES },
      { title: 'Pricing', href: ROUTES.PRICING }
    ],
    company: [
      { title: 'About', href: ROUTES.ABOUT },
      { title: 'Contact', href: ROUTES.CONTACT }
    ],
    legal: [
      { title: 'Privacy', href: '/privacy' },
      { title: 'Terms', href: '/terms' }
    ]
  }
}

export type SiteConfig = typeof siteConfig