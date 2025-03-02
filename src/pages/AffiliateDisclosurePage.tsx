import React from 'react';
import PageLayout from '../components/PageLayout';

const AffiliateDisclosurePage = () => {
  return (
    <PageLayout title="Affiliate Disclosure">
      <div className="prose prose-invert max-w-none">
        <h2>FTC Compliant Affiliate Disclosure</h2>
        <p>
          <strong>Last Updated: March 1, 2025</strong>
        </p>

        <p>
          This disclosure is provided in accordance with the Federal Trade Commission's 16 CFR § 255: "Guides Concerning the 
          Use of Endorsements and Testimonials in Advertising."
        </p>

        <h3>What Are Affiliate Links?</h3>
        <p>
          Some of the links on E-comCoupons.com are "affiliate links." This means that if you click on the link and purchase the item 
          or sign up for a service, E-comCoupons.com will receive an affiliate commission. This is at no additional cost to you. In fact, 
          in many cases, our affiliate relationships allow us to offer you exclusive discounts that you wouldn't find elsewhere.
        </p>

        <h3>Our Commitment to Transparency</h3>
        <p>
          We want to be completely transparent about our business model. Here's what you should know:
        </p>
        <ul>
          <li>E-comCoupons.com is compensated for referring traffic and business to these companies</li>
          <li>The affiliate commissions we receive help us maintain and improve this website</li>
          <li>Our recommendations are based on our genuine assessment of the value these services provide</li>
          <li>We only promote products and services that we believe will benefit e-commerce businesses</li>
          <li>Affiliate relationships do not influence which coupons we display or how we rank them</li>
        </ul>

        <h3>Services We Have Affiliate Relationships With</h3>
        <p>
          We currently maintain affiliate relationships with many of the services featured on our site, including but not limited to:
        </p>
        <ul>
          <li>Website builders and e-commerce platforms</li>
          <li>Email marketing services</li>
          <li>Online marketplace selling programs</li>
          <li>Automation and workflow tools</li>
          <li>Project management software</li>
        </ul>

        <h3>How We Select Coupons</h3>
        <p>
          Our primary goal is to provide valuable, working coupons to our users. We select coupons based on:
        </p>
        <ul>
          <li>Relevance to e-commerce businesses</li>
          <li>Value of the discount or offer</li>
          <li>Reliability of the service provider</li>
          <li>Verification that the coupon works</li>
        </ul>
        <p>
          While we do earn commissions from many of the companies featured on our site, we include coupons based on their 
          value to our users, not based on the commission they generate for us.
        </p>

        <h3>Your Trust Matters</h3>
        <p>
          We believe in building long-term relationships with our users based on trust and value. If you ever have concerns 
          about any recommendation or coupon on our site, please contact us.
        </p>

        <p>
          By using E-comCoupons.com, you acknowledge that you understand this disclosure and that we may receive compensation for 
          some of the products and services we recommend.
        </p>
      </div>
    </PageLayout>
  );
};

export default AffiliateDisclosurePage;