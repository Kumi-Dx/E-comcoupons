import { Coupon } from '../types';

export const coupons: Coupon[] = [
  // Website Category
  {
    id: 'web2',
    store: 'Shopify',
    storeImage: 'https://logo.clearbit.com/shopify.com',
    code: '',
    discount: '$1/MONTH FOR 3 MONTHS',
    description: '3-day free trial then $1/month for first 3 months',
    expiryDate: '2025-10-15',
    category: 'website',
    link: 'https://shopify.pxf.io/c/6094593/1499965/13624'
  },
  {
    id: 'web3',
    store: 'Jotform',
    storeImage: '/jotform-logo.png',
    code: '',
    discount: '50% OFF FIRST YEAR',
    description: 'Get 50% off any paid plan for the first year',
    expiryDate: '2025-12-31',
    category: 'website',
    link: 'https://link.jotform.com/e-comcoupons-Q9C9swMGio'
  },

  // Online Marketplaces Category
  {
    id: 'market1',
    store: 'Helium 10',
    storeImage: 'https://logo.clearbit.com/helium10.com',
    code: 'PROSPER10',
    discount: '10% OFF FOREVER',
    description: 'Get 10% off forever on any plan',
    expiryDate: '2025-12-31',
    category: 'marketplace',
    link: 'https://bit.ly/47tMwU1'
  },
  {
    id: 'market2',
    store: 'Helium 10',
    storeImage: 'https://logo.clearbit.com/helium10.com',
    code: 'PROSPER20',
    discount: '20% OFF 6 MONTHS',
    description: '20% off for 6 months on any plan',
    expiryDate: '2025-12-31',
    category: 'marketplace',
    link: 'https://bit.ly/47tMwU1'
  },

  // Email Marketing Category
  {
    id: 'email1',
    store: 'Moosend',
    storeImage: 'https://logo.clearbit.com/moosend.com',
    code: 'AFF30',
    discount: '30% OFF FIRST MONTH',
    description: 'Get 30% off your first month on any plan',
    expiryDate: '2025-12-31',
    category: 'email',
    link: 'https://trymoo.moosend.com/ox4ds4y0y6fv'
  },

  // Automation Category
  {
    id: 'auto3',
    store: 'Make.com',
    storeImage: 'https://logo.clearbit.com/make.com',
    code: '',
    discount: 'FREE TRIAL - 1000 Ops/Month',
    description: 'Start with a free trial - No credit card required',
    expiryDate: '2025-10-31',
    category: 'automation',
    link: 'https://www.make.com/en/register?pc=prosper'
  },

  // Apollo.io (both Email Marketing and Automation categories)
  {
    id: 'apollo1',
    store: 'Apollo.io',
    storeImage: 'https://logo.clearbit.com/apollo.io',
    code: '',
    discount: 'FREE TRIAL + SPECIAL PRICING',
    description: 'Get started with Apollo.io and receive special partner pricing',
    expiryDate: '2025-12-31',
    category: 'email',
    link: 'https://get.apollo.io/grbvftwtz4oo'
  },
  {
    id: 'apollo2',
    store: 'Apollo.io',
    storeImage: 'https://logo.clearbit.com/apollo.io',
    code: '',
    discount: 'FREE TRIAL + SPECIAL PRICING',
    description: 'Get started with Apollo.io and receive special partner pricing',
    expiryDate: '2025-12-31',
    category: 'automation',
    link: 'https://get.apollo.io/grbvftwtz4oo'
  }
];