import { Coupon } from '../types';

export const coupons: Coupon[] = [
  // Website Category
  {
    id: 'web1',
    store: 'Lovable',
    storeImage: 'https://hlhlfaidhsttgfyojoyw.supabase.co/storage/v1/object/sign/Affiliate%20Images/lovable-icon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBZmZpbGlhdGUgSW1hZ2VzL2xvdmFibGUtaWNvbi5wbmciLCJpYXQiOjE3NDE2NTg3NjgsImV4cCI6MTc3MzE5NDc2OH0.Hs5nYt5O4jZPZEXMxXQGOZNBXxQXxbKBXxXPPZXGVxE',
    code: '',
    discount: 'SPECIAL PARTNER PRICING',
    description: 'Get started with Lovable and receive special partner pricing',
    expiryDate: '2025-12-31',
    category: 'website',
    link: 'https://lovable.dev/?via=Prosper'
  },
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
    storeImage: 'https://hlhlfaidhsttgfyojoyw.supabase.co/storage/v1/object/sign/Affiliate%20Images/jotform-logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBZmZpbGlhdGUgSW1hZ2VzL2pvdGZvcm0tbG9nby5wbmciLCJpYXQiOjE3NDE2NTg3NjgsImV4cCI6MTc3MzE5NDc2OH0.Hs5nYt5O4jZPZEXMxXQGOZNBXxQXxbKBXxXPPZXGVxE',
    code: '',
    discount: '50% OFF FIRST YEAR',
    description: 'Get 50% off any paid plan for the first year',
    expiryDate: '2025-12-31',
    category: 'website',
    link: 'https://link.jotform.com/e-comcoupons-Q9C9swMGio'
  },
  {
    id: 'web4',
    store: 'AdCreative.ai',
    storeImage: 'https://logo.clearbit.com/adcreative.ai',
    code: '',
    discount: 'FREE TRIAL',
    description: 'Start your free trial with AdCreative.ai and create AI-powered ad creatives',
    expiryDate: '2025-12-31',
    category: 'website',
    link: 'https://free-trial.adcreative.ai/vhdimlho9ock'
  },
  {
    id: 'web5',
    store: 'AirOps',
    storeImage: 'https://logo.clearbit.com/airops.com',
    code: '',
    discount: 'SPECIAL PARTNER OFFER',
    description: 'Get started with AirOps and transform your data operations with AI',
    expiryDate: '2025-12-31',
    category: 'website',
    link: 'https://www.airops.com/?via=Prosper'
  },
  {
    id: 'web6',
    store: 'Glide',
    storeImage: 'https://logo.clearbit.com/glideapps.com',
    code: '',
    discount: 'SPECIAL PARTNER OFFER',
    description: 'Build powerful apps without code using Glide',
    expiryDate: '2025-12-31',
    category: 'website',
    link: 'https://join.glideapps.com/ubs12jpfe33m'
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
  {
    id: 'market3',
    store: 'Spocket',
    storeImage: 'https://logo.clearbit.com/spocket.co',
    code: '',
    discount: 'SPECIAL PARTNER OFFER',
    description: 'Get started with Spocket and streamline your dropshipping business',
    expiryDate: '2025-12-31',
    category: 'marketplace',
    link: 'https://get.spocket.co/z6m4265phc8u'
  },
  {
    id: 'market4',
    store: 'AMZ Scout',
    storeImage: 'https://logo.clearbit.com/amzscout.net',
    code: 'AMZ10',
    discount: '10% OFF MONTHLY',
    description: 'Get 10% off on monthly subscription',
    expiryDate: '2025-12-31',
    category: 'marketplace',
    link: 'https://amzscout.idevaffiliate.com/idevaffiliate.php?id=2308'
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
  {
    id: 'auto4',
    store: 'Keap',
    storeImage: 'https://logo.clearbit.com/keap.com',
    code: '',
    discount: 'FREE TRIAL + 50% OFF',
    description: 'Get started with a free trial and save 50% on your first 3 months',
    expiryDate: '2025-12-31',
    category: 'automation',
    link: 'https://get.keap.com/akcjyax2jwm7'
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
  },

  // 8fig Coupon
  {
    id: 'finance1',
    store: '8fig',
    storeImage: 'https://logo.clearbit.com/8fig.co',
    code: '',
    discount: 'SPECIAL PARTNER OFFER',
    description: 'Get flexible funding for your e-commerce business with special partner terms',
    expiryDate: '2025-12-31',
    category: 'automation',
    link: 'https://grow.8fig.co/os5cupg507nz'
  }
];