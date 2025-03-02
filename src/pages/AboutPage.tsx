import React from 'react';
import PageLayout from '../components/PageLayout';

const AboutPage = () => {
  return (
    <PageLayout title="About E-comCoupons.com">
      <div className="prose prose-invert max-w-none">
        <h2>Welcome to E-comCoupons.com</h2>
        <p>
          E-comCoupons.com is dedicated to helping e-commerce businesses save money and grow by providing access to the best deals, 
          discounts, and promotional offers for essential online tools and services.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to empower e-commerce entrepreneurs and businesses of all sizes by making premium tools and services 
          more accessible through verified discount codes and special offers.
        </p>

        <h3>What Makes Us Different</h3>
        <p>
          Unlike many coupon aggregator sites, E-comCoupons.com is specifically focused on e-commerce tools and services. We don't 
          simply collect coupons from across the web - we work directly with service providers to ensure that every coupon 
          code on our platform is:
        </p>
        <ul>
          <li><strong>Verified and tested</strong> - We personally verify each code before publishing</li>
          <li><strong>Guaranteed redeemable</strong> - Our centralized sourcing approach means higher success rates</li>
          <li><strong>Relevant to e-commerce</strong> - Carefully curated for online business needs</li>
          <li><strong>Exclusive when possible</strong> - We negotiate special deals you won't find elsewhere</li>
        </ul>

        <h3>Our Categories</h3>
        <p>
          We organize our coupons into five key categories that cover the essential tools and services for running a successful 
          e-commerce business:
        </p>
        <ul>
          <li><strong>Website</strong> - Platforms and tools to build and optimize your online store</li>
          <li><strong>Online Marketplaces</strong> - Deals for selling on popular marketplaces</li>
          <li><strong>Email Marketing</strong> - Services to grow and engage your customer base</li>
          <li><strong>Automation</strong> - Tools to streamline your operations and save time</li>
          <li><strong>Project Management</strong> - Solutions to keep your business organized</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default AboutPage;