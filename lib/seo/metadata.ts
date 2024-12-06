import { Metadata } from 'next'

export const getPageMetadata = (page: string): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://datgenius.com'
  
  const metadata: Record<string, Metadata> = {
    home: {
      title: 'DATGenius | AI-Powered DAT Prep Platform for Higher Scores',
      description: 'Transform your DAT preparation with personalized AI learning, adaptive study plans, and comprehensive practice materials. Join thousands of successful dental school applicants.',
      openGraph: {
        title: 'DATGenius | AI-Powered DAT Prep Platform for Higher Scores',
        description: 'Transform your DAT preparation with personalized AI learning, adaptive study plans, and comprehensive practice materials.',
        url: baseUrl
      }
    },
    features: {
      title: 'Smart DAT Prep Features: AI Tutoring & Adaptive Learning | DATGenius',
      description: 'Experience revolutionary DAT prep with AI-powered study plans, 3D interactive models, and real-time performance analytics. Try our adaptive learning platform today.',
      openGraph: {
        title: 'Smart DAT Prep Features: AI Tutoring & Adaptive Learning | DATGenius',
        description: 'Experience revolutionary DAT prep with AI-powered study plans, 3D interactive models, and real-time performance analytics.',
        url: `${baseUrl}/features`
      }
    },
    pricing: {
      title: 'DAT Prep Plans: Flexible & Affordable Options | DATGenius',
      description: 'Find the perfect DAT prep plan for your goals. Choose from Basic, Standard, or Premium packages with AI tutoring, practice tests, and score improvement guarantee.',
      openGraph: {
        title: 'DAT Prep Plans: Flexible & Affordable Options | DATGenius',
        description: 'Find the perfect DAT prep plan for your goals. Choose from Basic, Standard, or Premium packages with AI tutoring.',
        url: `${baseUrl}/pricing`
      }
    },
    resources: {
      title: 'Free DAT Study Resources & Practice Materials | DATGenius',
      description: 'Access comprehensive DAT study guides, practice tests, video tutorials, and success stories. Get expert tips and strategies for acing the Dental Admission Test.',
      openGraph: {
        title: 'Free DAT Study Resources & Practice Materials | DATGenius',
        description: 'Access comprehensive DAT study guides, practice tests, video tutorials, and success stories.',
        url: `${baseUrl}/resources`
      }
    },
    about: {
      title: 'About DATGenius: Leading Innovation in DAT Preparation',
      description: 'Meet the team revolutionizing DAT prep through AI technology and personalized learning. Join thousands of successful students who achieved their dream scores.',
      openGraph: {
        title: 'About DATGenius: Leading Innovation in DAT Preparation',
        description: 'Meet the team revolutionizing DAT prep through AI technology and personalized learning.',
        url: `${baseUrl}/about`
      }
    },
    contact: {
      title: 'Contact DATGenius | 24/7 Support for DAT Prep',
      description: 'Get help with your DAT preparation journey. Our expert team is available 24/7 to answer your questions and provide personalized assistance.',
      openGraph: {
        title: 'Contact DATGenius | 24/7 Support for DAT Prep',
        description: 'Get help with your DAT preparation journey. Our expert team is available 24/7.',
        url: `${baseUrl}/contact`
      }
    }
  }

  return metadata[page] || {}
}