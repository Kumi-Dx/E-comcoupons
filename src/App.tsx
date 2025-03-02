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
      </Routes>
    </Router>
  );
}

export default App;