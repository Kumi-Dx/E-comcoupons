import React, { useState } from 'react';
import { Search, Tag, Globe, ShoppingCart, Mail, Zap, ClipboardList, ChevronRight, ChevronLeft } from 'lucide-react';
import CouponCard from './components/CouponCard';
import { coupons } from './data/coupons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
      </Routes>
    </Router>
  );
}

export default App;