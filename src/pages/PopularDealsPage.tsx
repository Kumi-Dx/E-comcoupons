import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import CouponCard from '../components/CouponCard';
import { coupons } from '../data/coupons';
import { Tag } from 'lucide-react';
import Footer from '../components/Footer';

const PopularDealsPage = () => {
  // Simulate popular deals by sorting based on a popularity metric
  // In a real app, this would come from analytics data or click tracking
  const popularCoupons = [...coupons]
    .sort((a, b) => {
      // This is a simplified popularity algorithm - in a real app, you'd use actual metrics
      // For now, we'll use a combination of store name length and discount value as a mock metric
      const aPopularity = a.store.length + (a.discount.includes('OFF') ? parseInt(a.discount) || 10 : 5);
      const bPopularity = b.store.length + (b.discount.includes('OFF') ? parseInt(b.discount) || 10 : 5);
      return bPopularity - aPopularity;
    })
    .slice(0, 12); // Take top 12 most "popular" coupons

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 shadow-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Tag className="text-indigo-400" size={24} />
            <h1 className="text-xl font-bold text-gray-100">E-comCoupons.com</h1>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-indigo-400 font-medium">Home</Link>
            <Link to="/new-coupons" className="text-gray-300 hover:text-indigo-400 font-medium">New Coupons</Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-100 mb-8">Popular Deals</h1>
          <div className="bg-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
            <div className="space-y-6">
              <p className="text-gray-300 mb-6">
                These are our most popular deals based on user engagement and redemption rates. 
                Take advantage of these top-performing offers to maximize your savings.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularCoupons.map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PopularDealsPage;