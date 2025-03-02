import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import CouponCard from '../components/CouponCard';
import { coupons } from '../data/coupons';
import { Tag } from 'lucide-react';
import Footer from '../components/Footer';

const NewCouponsPage = () => {
  // In a real app, you would track when coupons were added to the database
  // For this demo, we'll simulate "new" coupons by taking a random selection
  // and pretending they were recently added
  
  // Create a copy of coupons and shuffle them
  const shuffled = [...coupons].sort(() => 0.5 - Math.random());
  
  // Take the first 8 as our "new" coupons
  const newCoupons = shuffled.slice(0, 8);

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
            <Link to="/popular-deals" className="text-gray-300 hover:text-indigo-400 font-medium">Popular Deals</Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-100 mb-8">New Coupons</h1>
          <div className="bg-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
            <div className="space-y-6">
              <p className="text-gray-300 mb-6">
                Check out our latest additions! These coupons have been recently added to our collection.
                Be among the first to take advantage of these fresh deals before they expire.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newCoupons.map((coupon) => (
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

export default NewCouponsPage;