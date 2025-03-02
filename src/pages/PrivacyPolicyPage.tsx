import React from 'react';
import PageLayout from '../components/PageLayout';

const PrivacyPolicyPage = () => {
  return (
    <PageLayout title="Privacy Policy">
      <div className="prose prose-invert max-w-none">
        <h2>Privacy Policy</h2>
        <p>
          <strong>Last Updated: March 1, 2025</strong>
        </p>

        <p>
          At E-comCoupons.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and 
          safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not 
          agree with the terms of this privacy policy, please do not access the site.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>

        <h4>Personal Data</h4>
        <p>
          When you subscribe to our newsletter, we collect your email address. If you contact us, we may collect your name, 
          email address, and any information you provide in your message.
        </p>

        <h4>Derivative Data</h4>
        <p>
          Our servers automatically collect information when you access the Site, such as your IP address, browser type, 
          operating system, access times, and the pages you have viewed directly before and after accessing the Site.
        </p>

        <h4>Cookies and Web Beacons</h4>
        <p>
          We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize the Site and 
          improve your experience. For more information on how we use cookies, please refer to our Cookie Policy.
        </p>

        <h3>Use of Your Information</h3>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. 
          Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Send you newsletters and updates about new coupons and deals</li>
          <li>Respond to your inquiries and customer service requests</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
          <li>Notify you of updates to the Site</li>
        </ul>

        <h3>Disclosure of Your Information</h3>
        <p>
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>

        <h4>By Law or to Protect Rights</h4>
        <p>
          If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy 
          potential violations of our policies, or to protect the rights, property, and safety of others, we may share your 
          information as permitted or required by any applicable law, rule, or regulation.
        </p>

        <h4>Third-Party Service Providers</h4>
        <p>
          We may share your information with third parties that perform services for us or on our behalf, including payment 
          processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
        </p>

        <h4>Marketing Communications</h4>
        <p>
          With your consent, or with an opportunity for you to withdraw consent, we may share your information with third 
          parties for marketing purposes.
        </p>

        <h4>Affiliates</h4>
        <p>
          We may share your information with our affiliates, in which case we will require those affiliates to honor this 
          Privacy Policy.
        </p>

        <h3>Security of Your Information</h3>
        <p>
          We take reasonable measures to protect any personal information you submit through our website. However, please understand that no data transmission over the internet or storage system can be guaranteed to be 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
        </p>

        <h3>Your Rights</h3>
        <p>
          You have certain rights regarding your personal information:
        </p>
        <ul>
          <li>The right to access the personal information we have about you</li>
          <li>The right to rectify inaccurate personal information</li>
          <li>The right to request that we delete your personal information</li>
          <li>The right to restrict processing of your personal information</li>
          <li>The right to data portability</li>
          <li>The right to object to processing of your personal information</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;