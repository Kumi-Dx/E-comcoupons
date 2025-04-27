import React, { useState } from 'react';
import { Copy, ExternalLink, Clock, BookOpen } from 'lucide-react';
import { Coupon } from '../types';
import { Link } from 'react-router-dom';

interface CouponCardProps {
  coupon: Coupon;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon }) => {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate days left until expiration
  const today = new Date();
  const expiryDate = new Date(coupon.expiryDate);
  const daysLeft = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Fallback image URL based on store name
  const getFallbackImage = () => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(coupon.store)}&background=6366f1&color=fff&size=128`;
  };

  // Check if this is a Helium 10 coupon
  const isHelium10 = coupon.store === 'Helium 10';
  
  // Check if this is a Make coupon
  const isMake = coupon.store === 'Make.com';
  
  // Check if this is a Shopify coupon
  const isShopify = coupon.store === 'Shopify';

  // Check if this is a Moosend coupon
  const isMoosend = coupon.store === 'Moosend';

  // Check if this is a Jotform coupon
  const isJotform = coupon.store === 'Jotform';

  // Check if this is an Apollo coupon
  const isApollo = coupon.store === 'Apollo.io';

  // Check if this is a Lovable coupon
  const isLovable = coupon.store === 'Lovable';

  // Check if this is a Keap coupon
  const isKeap = coupon.store === 'Keap';

  const isInternalLink = coupon.link.startsWith('/');

  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 border border-gray-700">
      {/* Store Logo and Discount Badge */}
      <div className="relative">
        <div className="w-full h-40 bg-gray-700 flex items-center justify-center overflow-hidden">
          <img 
            src={imageError ? getFallbackImage() : coupon.storeImage} 
            alt={`${coupon.store} logo`} 
            className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain"
            onError={() => setImageError(true)}
          />
        </div>
        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg font-semibold">
          {coupon.discount}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-gray-100">{coupon.store}</h3>
          {!isHelium10 && (
            <span className={`text-xs px-2 py-1 rounded-full ${
              daysLeft <= 3 ? 'bg-red-900 text-red-100' : 'bg-green-900 text-green-100'
            }`}>
              {daysLeft <= 0 ? 'Expired' : `${daysLeft} days left`}
            </span>
          )}
        </div>
        
        <p className="text-gray-400 text-sm mb-4">{coupon.description}</p>
        
        {/* Expiry Date */}
        {!isHelium10 && (
          <div className="flex items-center text-gray-500 text-xs mb-4">
            <Clock size={14} className="mr-1" />
            <span>Expires: {new Date(coupon.expiryDate).toLocaleDateString()}</span>
          </div>
        )}
        
        {/* Coupon Code - Only show if there is a code */}
        {coupon.code && (
          <div className="flex items-center mb-4">
            <div className="flex-1 bg-gray-700 border border-dashed border-gray-600 rounded-l-md p-2 text-center font-mono text-sm text-gray-300">
              {coupon.code}
            </div>
            <button 
              onClick={handleCopyCode}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-r-md transition-colors duration-200"
            >
              {copied ? 'Copied!' : <Copy size={18} />}
            </button>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="space-y-2">
          {/* Shop Now Button */}
          {isInternalLink ? (
            <Link 
              to={coupon.link}
              className="block w-full bg-gray-700 hover:bg-gray-600 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              Read Review <ExternalLink size={14} className="ml-1" />
            </Link>
          ) : (
            <a 
              href={coupon.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gray-700 hover:bg-gray-600 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              Shop Now <ExternalLink size={14} className="ml-1" />
            </a>
          )}
          
          {/* Blog Link for Helium 10 */}
          {isHelium10 && (
            <Link 
              to="/blog/helium10-amazon-seller-tool" 
              className="block w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              Read Our Review <BookOpen size={14} className="ml-1" />
            </Link>
          )}
          
          {/* Blog Link for Make */}
          {isMake && (
            <Link 
              to="/blog/make-automation-platform" 
              className="block w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              Read Our Review <BookOpen size={14} className="ml-1" />
            </Link>
          )}
          
          {/* Blog Link for Shopify */}
          {isShopify && (
            <Link 
              to="/blog/shopify-ecommerce-platform" 
              className="block w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              Read Our Review <BookOpen size={14} className="ml-1" />
            </Link>
          )}

          {/* Blog Link for Moosend */}
          {isMoosend && (
            <Link 
              to="/blog/moosend-email-marketing" 
              className="block w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              Read Our Review <BookOpen size={14} className="ml-1" />
            </Link>
          )}

          {/* Blog Link for Jotform */}
          {isJotform && (
            <Link 
              to="/blog/jotform-online-forms" 
              className="block w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              Read Our Review <BookOpen size={14} className="ml-1" />
            </Link>
          )}

          {/* Blog Link for Apollo */}
          {isApollo && (
            <Link 
              to="/blog/apollo-sales-intelligence" 
              className="block w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              Read Our Review <BookOpen size={14} className="ml-1" />
            </Link>
          )}

          {/* Blog Link for Lovable */}
          {isLovable && (
            <Link 
              to="/blog/vibe-coding-lovable" 
              className="block w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              What Is Vibe Coding <BookOpen size={14} className="ml-1" />
            </Link>
          )}

          {/* Blog Link for Keap */}
          {isKeap && (
            <Link 
              to="/blog/keap-automation-platform" 
              className="block w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 text-center py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
            >
              Read Our Review <BookOpen size={14} className="ml-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CouponCard;