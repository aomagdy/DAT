import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export const getStripePriceId = (planId: string, interval: 'month' | 'year') => {
  const priceIds = {
    basic: {
      month: 'price_basic_monthly',
      year: 'price_basic_yearly',
    },
    standard: {
      month: 'price_standard_monthly',
      year: 'price_standard_yearly',
    },
    premium: {
      month: 'price_premium_monthly',
      year: 'price_premium_yearly',
    },
  };

  return priceIds[planId as keyof typeof priceIds]?.[interval];
};