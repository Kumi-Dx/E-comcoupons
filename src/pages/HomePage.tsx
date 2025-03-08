import React, { useState, useEffect } from 'react';
import { Search, Tag, Globe, ShoppingCart, Mail, Zap, ClipboardList, ChevronRight, ChevronLeft, PlusCircle, MinusCircle, X } from 'lucide-react';
import CouponCard from '../components/CouponCard';
import { coupons } from '../data/coupons';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function HomePage() {
  const categories = [
    { id: 'website', name: 'Website Builders', icon: <Globe size={20} /> },
    { id: 'marketplace', name: 'Online Marketplaces', icon: <ShoppingCart size={20} /> },
    { id: 'email', name: 'Email Marketing', icon: <Mail size={20} /> },
    { id: 'automation', name: 'Automation', icon: <Zap size={20} /> },
    { id: 'project', name: 'Project Management', icon: <ClipboardList size={20} /> },
  ];

  const [activeCategory, setActiveCategory] = useState('website');
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [searchResults, setSearchResults] = useState<typeof coupons>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  // Hero section sliding text messages
  const heroTextMessages = [
    "Discover the best e-commerce deals and discounts to grow your online business.",
    "All coupons verified and tested — 98% success rate guaranteed.",
    "Save hundreds on essential tools to scale your e-commerce business faster."
  ];

  // Auto-rotate the hero text messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % heroTextMessages.length);
    }, 5000); // Change text every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase().trim();
    setIsSearching(true);
    
    // Search across all coupons regardless of category
    const results = coupons.filter(coupon => 
      coupon.store.toLowerCase().includes(term) || 
      coupon.description.toLowerCase().includes(term) || 
      coupon.code.toLowerCase().includes(term)
    );
    
    setSearchResults(results);
  }, [searchTerm]);

  // Get filtered coupons based on active category (when not searching)
  const filteredCoupons = coupons.filter(coupon => 
    coupon.category === activeCategory
  );

  const faqItems = [
    {
      question: "How do I use a coupon code?",
      answer: "To use a coupon code, click on the 'Copy' button next to the code, then click the 'Shop Now' button to visit the merchant's website. During checkout, look for a field labeled 'Coupon Code', 'Promo Code', or 'Discount Code'. Paste the copied code there and apply it to see your discount reflected in your total."
    },
    {
      question: "Are all the coupon codes guaranteed to work?",
      answer: "Unlike many coupon aggregator sites, we don't simply collect codes from across the web. We work directly with service providers to ensure that every coupon code on our platform is verified and tested. However, some codes may expire earlier than indicated or have specific eligibility requirements set by the merchant."
    },
    {
      question: "What's the catch?",
      answer: "There's no catch for you as a user! Our service is completely free to use with no registration required. We're able to offer this service because we earn a small commission when you make a purchase using our coupon codes through affiliate partnerships with the brands we feature. This affiliate relationship never affects the price you pay - you still get the full discount advertised. In fact, in many cases, our partnerships allow us to offer exclusive deals you won't find elsewhere. We only recommend tools and services we believe provide genuine value to e-commerce businesses."
    },
    {
      question: "How often are new coupons added?",
      answer: "We add new coupons periodically as we verify and establish relationships with service providers. For the most recent additions, check our 'New Coupons' page. You can also subscribe to our newsletter to get notified when new deals become available."
    }
  ];

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // Function to get the appropriate heading based on category
  const getCategoryHeading = (categoryId: string) => {
    switch(categoryId) {
      case 'website':
        return 'Website Builder Coupons';
      case 'marketplace':
        return 'Online Marketplace Coupons';
      case 'email':
        return 'Email Marketing Coupons';
      case 'automation':
        return 'Automation Coupons';
      case 'project':
        return 'Project Management Coupons';
      default:
        return `${categories.find(cat => cat.id === categoryId)?.name} Coupons`;
    }
  };

  // Clear search and return to category view
  const clearSearch = () => {
    setSearchTerm('');
    setIsSearching(false);
    setSearchResults([]);
  };

  // Handle newsletter form submission
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Tag className="text-indigo-400" size={24} />
            <h1 className="text-xl font-bold text-gray-100">E-comCoupons.com</h1>
          </Link>
          <div className="relative w-full max-w-md mx-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-2 border border-gray-600 rounded-md leading-5 bg-gray-700 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search for stores, codes, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
                onClick={clearSearch}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/popular-deals" className="text-gray-300 hover:text-indigo-400 font-medium">Popular Deals</Link>
            <Link to="/new-coupons" className="text-gray-300 hover:text-indigo-400 font-medium">New Coupons</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Hide when searching */}
      {!isSearching && (
        <section className="bg-indigo-900 text-white py-12 border-b border-indigo-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Save More with E-comCoupons.com</h2>
            
            {/* Sliding Text Gallery */}
            <div className="relative h-16 md:h-12 mb-8 overflow-hidden">
              {heroTextMessages.map((message, index) => (
                <p 
                  key={index}
                  className={`text-lg md:text-xl max-w-2xl mx-auto text-indigo-100 absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center ${
                    index === currentTextIndex 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                >
                  {message}
                </p>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  data-category={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-indigo-400 text-gray-900'
                      : 'bg-indigo-800 text-white hover:bg-indigo-700'
                  } transition-colors duration-200`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Encouraging Slogans - Hide when searching */}
      {!isSearching && (
        <div className="bg-gray-900 py-6 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center space-x-8 md:space-x-16">
              <div className="flex items-center">
                <span className="text-white font-medium text-lg md:text-xl tracking-wide">No signup required</span>
              </div>
              <div className="h-6 w-px bg-gray-700"></div>
              <div className="flex items-center">
                <span className="text-white font-medium text-lg md:text-xl tracking-wide">Copy & paste</span>
              </div>
              <div className="h-6 w-px bg-gray-700"></div>
              <div className="flex items-center">
                <span className="text-white font-medium text-lg md:text-xl tracking-wide">Instant savings</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Coupon Grid Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            {isSearching ? (
              <div className="flex items-center">
                <h3 className="text-2xl font-bold text-gray-100">
                  Search Results
                </h3>
                <span className="ml-3 text-gray-400">
                  {searchResults.length} {searchResults.length === 1 ? 'coupon' : 'coupons'} found for "{searchTerm}"
                </span>
                <button 
                  onClick={clearSearch}
                  className="ml-4 text-indigo-400 hover:text-indigo-300 flex items-center"
                >
                  <X size={16} className="mr-1" /> Clear search
                </button>
              </div>
            ) : (
              <h3 className="text-2xl font-bold text-gray-100">
                {getCategoryHeading(activeCategory)}
              </h3>
            )}
            
            {!isSearching && (
              <div className="flex space-x-2">
                <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300">
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {isSearching ? (
            searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {searchResults.map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-lg mb-2">No coupons found matching "{searchTerm}"</p>
                <p className="text-gray-500">Try a different search term or browse by category</p>
              </div>
            )
          ) : (
            filteredCoupons.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCoupons.map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No coupons found in this category.</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* All Categories Section - Hide when searching */}
      {!isSearching && (
        <section className="py-12 bg-gray-800 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-gray-100 mb-8">Browse All Categories</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {categories.map((category) => (
                <div key={category.id} className="bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-600">
                  <div className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-900 text-indigo-300 rounded-full mb-4">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-100">{category.name}</h4>
                    <p className="text-gray-400 mb-4">
                      {coupons.filter(coupon => coupon.category === category.id).length} coupons available
                    </p>
                    <button 
                      onClick={() => setActiveCategory(category.id)}
                      className="text-indigo-400 font-medium flex items-center hover:text-indigo-300"
                    >
                      View Coupons
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section - Hide when searching */}
      {!isSearching && (
        <section className="py-12 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium text-gray-100">{faq.question}</span>
                    {openFaq === index ? 
                      <MinusCircle size={20} className="text-indigo-400" /> : 
                      <PlusCircle size={20} className="text-indigo-400" />
                    }
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter - Hide when searching */}
      {!isSearching && (
        <section className="bg-gray-800 py-12 border-t border-gray-700">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Never Miss a Deal</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter and get the latest e-commerce coupons delivered to your inbox.</p>
            
            {formSubmitted ? (
              <div className="bg-green-900 text-green-100 p-4 rounded-md max-w-lg mx-auto">
                <p>Thank you for subscribing! You'll receive our next newsletter soon.</p>
              </div>
            ) : (
              <form 
                name="newsletter"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button 
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;