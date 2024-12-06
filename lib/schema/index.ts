import { WithContext, Organization, WebSite, Article, FAQPage, Product, Course } from 'schema-dts'

export const getOrganizationSchema = (): WithContext<Organization> => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DATGenius',
  url: process.env.NEXT_PUBLIC_BASE_URL,
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

export const getWebsiteSchema = (): WithContext<WebSite> => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DATGenius',
  url: process.env.NEXT_PUBLIC_BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${process.env.NEXT_PUBLIC_BASE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
})

export const getCourseSchema = (plan: string): WithContext<Course> => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: `DATGenius ${plan} Plan`,
  description: `Comprehensive DAT preparation course with ${plan.toLowerCase()} features`,
  provider: {
    '@type': 'Organization',
    name: 'DATGenius',
    sameAs: process.env.NEXT_PUBLIC_BASE_URL
  },
  courseCode: `DAT-${plan.toUpperCase()}`,
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online'
  }
})

export const getArticleSchema = (article: any): WithContext<Article> => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  image: article.image,
  datePublished: article.date,
  author: {
    '@type': 'Person',
    name: article.author
  }
})

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>): WithContext<FAQPage> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})

export const getProductSchema = (plan: any): WithContext<Product> => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `DATGenius ${plan.name} Plan`,
  description: plan.description,
  offers: {
    '@type': 'Offer',
    price: plan.price.monthly,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  }
})