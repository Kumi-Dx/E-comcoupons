import { Coupon } from '../types';

export const coupons: Coupon[] = [
  // Website Category
  {
    id: 'web1',
    store: 'Wix',
    storeImage: 'https://logo.clearbit.com/wix.com',
    code: 'WIXPRO25',
    discount: '25% OFF',
    description: 'Get 25% off any premium plan',
    expiryDate: '2025-12-31',
    category: 'website',
    link: 'https://wix.com'
  },
  {
    id: 'web2',
    store: 'Shopify',
    storeImage: 'https://logo.clearbit.com/shopify.com',
    code: 'SHOPIFY3MO',
    discount: '3 MONTHS FREE',
    description: 'Get 3 months free on annual plans',
    expiryDate: '2025-10-15',
    category: 'website',
    link: 'https://shopify.com'
  },
  {
    id: 'web3',
    store: 'WordPress',
    storeImage: 'https://logo.clearbit.com/wordpress.com',
    code: 'WPBUSINESS20',
    discount: '20% OFF',
    description: 'Business plan discount',
    expiryDate: '2025-08-31',
    category: 'website',
    link: 'https://wordpress.com'
  },
  {
    id: 'web4',
    store: 'Squarespace',
    storeImage: 'https://logo.clearbit.com/squarespace.com',
    code: 'SQUARE15',
    discount: '15% OFF',
    description: 'Discount on all website plans',
    expiryDate: '2025-09-30',
    category: 'website',
    link: 'https://squarespace.com'
  },
  {
    id: 'web5',
    store: 'Webflow',
    storeImage: 'https://logo.clearbit.com/webflow.com',
    code: 'WEBFLOW20',
    discount: '20% OFF',
    description: 'Discount on annual plans',
    expiryDate: '2025-11-15',
    category: 'website',
    link: 'https://webflow.com'
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
    discount: '20% OFF',
    description: '20% off for 6 months on any plan',
    expiryDate: '2025-12-31',
    category: 'marketplace',
    link: 'https://bit.ly/47tMwU1'
  },
  {
    id: 'market3',
    store: 'Etsy',
    storeImage: 'https://logo.clearbit.com/etsy.com',
    code: 'ETSYSELLER',
    discount: 'FREE LISTING',
    description: '40 free listings for new sellers',
    expiryDate: '2025-12-31',
    category: 'marketplace',
    link: 'https://etsy.com'
  },
  {
    id: 'market4',
    store: 'Amazon Seller',
    storeImage: 'https://logo.clearbit.com/amazon.com',
    code: 'AMZPRO10',
    discount: '$10 OFF',
    description: '$10 off professional selling plan',
    expiryDate: '2025-10-01',
    category: 'marketplace',
    link: 'https://sell.amazon.com'
  },
  {
    id: 'market5',
    store: 'eBay',
    storeImage: 'https://logo.clearbit.com/ebay.com',
    code: 'EBAY25',
    discount: '25% OFF',
    description: '25% off store subscription',
    expiryDate: '2025-08-15',
    category: 'marketplace',
    link: 'https://ebay.com'
  },
  {
    id: 'market6',
    store: 'Walmart Marketplace',
    storeImage: 'https://logo.clearbit.com/walmart.com',
    code: 'WALMARTFREE',
    discount: 'FREE SETUP',
    description: 'Free seller account setup',
    expiryDate: '2025-09-15',
    category: 'marketplace',
    link: 'https://marketplace.walmart.com'
  },
  {
    id: 'market7',
    store: 'Alibaba',
    storeImage: 'https://logo.clearbit.com/alibaba.com',
    code: 'ALIBABA15',
    discount: '15% OFF',
    description: '15% off gold supplier membership',
    expiryDate: '2025-11-30',
    category: 'marketplace',
    link: 'https://alibaba.com'
  },

  // Email Marketing Category
  {
    id: 'email1',
    store: 'Mailchimp',
    storeImage: 'https://logo.clearbit.com/mailchimp.com',
    code: 'CHIMP100',
    discount: '$100 CREDIT',
    description: '$100 credit for new users',
    expiryDate: '2025-12-31',
    category: 'email',
    link: 'https://mailchimp.com'
  },
  {
    id: 'email2',
    store: 'Constant Contact',
    storeImage: 'https://logo.clearbit.com/constantcontact.com',
    code: 'CONTACT50',
    discount: '50% OFF',
    description: '50% off first 3 months',
    expiryDate: '2025-10-31',
    category: 'email',
    link: 'https://constantcontact.com'
  },
  {
    id: 'email3',
    store: 'Klaviyo',
    storeImage: 'https://logo.clearbit.com/klaviyo.com',
    code: 'KLAVIYO200',
    discount: '$200 CREDIT',
    description: '$200 credit for new accounts',
    expiryDate: '2025-09-30',
    category: 'email',
    link: 'https://klaviyo.com'
  },
  {
    id: 'email4',
    store: 'SendinBlue',
    storeImage: 'https://logo.clearbit.com/sendinblue.com',
    code: 'BLUE15',
    discount: '15% OFF',
    description: '15% off premium plans',
    expiryDate: '2025-08-31',
    category: 'email',
    link: 'https://sendinblue.com'
  },
  {
    id: 'email5',
    store: 'ConvertKit',
    storeImage: 'https://logo.clearbit.com/convertkit.com',
    code: 'CONVERT25',
    discount: '25% OFF',
    description: '25% off creator plan',
    expiryDate: '2025-11-15',
    category: 'email',
    link: 'https://convertkit.com'
  },

  // Automation Category
  {
    id: 'auto1',
    store: 'Zapier',
    storeImage: 'https://logo.clearbit.com/zapier.com',
    code: 'ZAPIER100',
    discount: '$100 CREDIT',
    description: '$100 credit for new users',
    expiryDate: '2025-12-15',
    category: 'automation',
    link: 'https://zapier.com'
  },
  {
    id: 'auto2',
    store: 'IFTTT',
    storeImage: 'https://logo.clearbit.com/ifttt.com',
    code: 'IFTTT10',
    discount: '10% OFF',
    description: 'Pro plan discount',
    expiryDate: '2025-09-01',
    category: 'automation',
    link: 'https://ifttt.com'
  },
  {
    id: 'auto3',
    store: 'Make (Integromat)',
    storeImage: 'https://logo.clearbit.com/make.com',
    code: 'MAKE50',
    discount: '50% OFF',
    description: '50% off first 3 months',
    expiryDate: '2025-10-31',
    category: 'automation',
    link: 'https://make.com'
  },
  {
    id: 'auto4',
    store: 'ActiveCampaign',
    storeImage: 'https://logo.clearbit.com/activecampaign.com',
    code: 'ACTIVE20',
    discount: '20% OFF',
    description: '20% off annual plans',
    expiryDate: '2025-08-15',
    category: 'automation',
    link: 'https://activecampaign.com'
  },
  {
    id: 'auto5',
    store: 'HubSpot',
    storeImage: 'https://logo.clearbit.com/hubspot.com',
    code: 'HUBSPOT25',
    discount: '25% OFF',
    description: '25% off marketing hub',
    expiryDate: '2025-11-30',
    category: 'automation',
    link: 'https://hubspot.com'
  },

  // Project Management Category
  {
    id: 'proj1',
    store: 'Asana',
    storeImage: 'https://logo.clearbit.com/asana.com',
    code: 'ASANA100',
    discount: '$100 OFF',
    description: '$100 off annual business plan',
    expiryDate: '2025-12-31',
    category: 'project',
    link: 'https://asana.com'
  },
  {
    id: 'proj2',
    store: 'Trello',
    storeImage: 'https://logo.clearbit.com/trello.com',
    code: 'TRELLO20',
    discount: '20% OFF',
    description: '20% off premium plans',
    expiryDate: '2025-10-15',
    category: 'project',
    link: 'https://trello.com'
  },
  {
    id: 'proj3',
    store: 'Monday.com',
    storeImage: 'https://logo.clearbit.com/monday.com',
    code: 'MONDAY20',
    discount: '20% OFF',
    description: '20% off any plan',
    expiryDate: '2025-09-30',
    category: 'project',
    link: 'https://monday.com'
  },
  {
    id: 'proj4',
    store: 'ClickUp',
    storeImage: 'https://logo.clearbit.com/clickup.com',
    code: 'CLICKUP15',
    discount: '15% OFF',
    description: '15% off business plan',
    expiryDate: '2025-08-31',
    category: 'project',
    link: 'https://clickup.com'
  },
  {
    id: 'proj5',
    store: 'Notion',
    storeImage: 'https://logo.clearbit.com/notion.so',
    code: 'NOTION25',
    discount: '25% OFF',
    description: '25% off team plan',
    expiryDate: '2025-11-15',
    category: 'project',
    link: 'https://notion.so'
  }
];