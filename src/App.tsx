import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AffiliateDisclosurePage from './pages/AffiliateDisclosurePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import HomePage from './pages/HomePage';
import PopularDealsPage from './pages/PopularDealsPage';
import NewCouponsPage from './pages/NewCouponsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BlogPostHelium10 from './pages/BlogPostHelium10';
import BlogPostMake from './pages/BlogPostMake';
import BlogPostShopify from './pages/BlogPostShopify';
import BlogPostMoosend from './pages/BlogPostMoosend';
import BlogPostJotform from './pages/BlogPostJotform';
import BlogPostApollo from './pages/BlogPostApollo';
import BlogPostHelium10vsAmzScout from './pages/BlogPostHelium10vsAmzScout';
import BlogPostKeap from './pages/BlogPostKeap';
import BlogPostVibeCoding from './pages/BlogPostVibeCoding';
import BlogPostVibeCodingBusiness from './pages/BlogPostVibeCodingBusiness';
import BlogPostAdCreative from './pages/BlogPostAdCreative';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/popular-deals" element={<PopularDealsPage />} />
        <Route path="/new-coupons" element={<NewCouponsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/helium10-amazon-seller-tool" element={<BlogPostHelium10 />} />
        <Route path="/blog/make-automation-platform" element={<BlogPostMake />} />
        <Route path="/blog/shopify-ecommerce-platform" element={<BlogPostShopify />} />
        <Route path="/blog/moosend-email-marketing" element={<BlogPostMoosend />} />
        <Route path="/blog/jotform-online-forms" element={<BlogPostJotform />} />
        <Route path="/blog/apollo-sales-intelligence" element={<BlogPostApollo />} />
        <Route path="/blog/helium10-vs-amzscout-comparison" element={<BlogPostHelium10vsAmzScout />} />
        <Route path="/blog/keap-automation-platform" element={<BlogPostKeap />} />
        <Route path="/blog/vibe-coding-lovable" element={<BlogPostVibeCoding />} />
        <Route path="/blog/vibe-coding-business-owners" element={<BlogPostVibeCodingBusiness />} />
        <Route path="/blog/adcreative-ai-design" element={<BlogPostAdCreative />} />
      </Routes>
    </Router>
  );
}

export default App;