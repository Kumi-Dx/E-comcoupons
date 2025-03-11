import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Calendar, User, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 'helium10-amazon-seller-tool',
      title: 'Helium 10: The Ultimate Amazon Seller Tool Suite in 2025',
      excerpt: 'Discover how Helium 10 can transform your Amazon business with powerful tools for product research, keyword optimization, listing management, and more.',
      date: 'March 3, 2025',
      author: 'Alex D.',
      category: 'Amazon Tools',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      featured: true
    },
    {
      id: 'make-automation-platform',
      title: 'Make.com: The Ultimate Automation Platform for E-commerce Businesses in 2025',
      excerpt: 'Learn how Make.com can streamline your e-commerce operations with powerful automation capabilities, connecting all your tools and eliminating manual tasks.',
      date: 'March 2, 2025',
      author: 'Brad V.',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      featured: false
    },
    {
      id: 'shopify-ecommerce-platform',
      title: 'Shopify: The Ultimate E-commerce Platform for Growing Businesses in 2025',
      excerpt: 'Explore why Shopify remains the top choice for e-commerce businesses of all sizes, with its powerful features, ease of use, and extensive app ecosystem.',
      date: 'March 2, 2025',
      author: 'Alex D.',
      category: 'E-commerce Platforms',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      featured: false
    },
    {
      id: 'moosend-email-marketing',
      title: 'Moosend: The Smart Choice for E-commerce Email Marketing in 2025',
      excerpt: 'Discover how Moosend helps e-commerce businesses boost sales with powerful email automation, personalization, and analytics features at competitive prices.',
      date: 'March 4, 2025',
      author: 'Alex D.',
      category: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      featured: false
    },
    {
      id: 'jotform-online-forms',
      title: 'Jotform: The Ultimate Form Builder for E-commerce Businesses in 2025',
      excerpt: 'Learn how Jotform can help you create powerful forms and surveys to collect customer data, process orders, and streamline your business operations.',
      date: 'March 9, 2025',
      author: 'Brad V.',
      category: 'Form Building',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      featured: false
    },
    {
      id: 'apollo-sales-intelligence',
      title: 'Apollo.io: Revolutionizing B2B Sales and Marketing in 2025',
      excerpt: 'Explore how Apollo.io combines comprehensive B2B data, powerful sales intelligence, and automated engagement tools to accelerate business growth.',
      date: 'March 9, 2025',
      author: 'Alex D.',
      category: 'Sales Intelligence',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
            <Link to="/new-coupons" className="text-gray-300 hover:text-indigo-400 font-medium">New Coupons</Link>
          </nav>
        </div>
      </header>

      {/* Blog Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-100 mb-8">E-commerce Blog</h1>
          
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-indigo-400 mb-4">Featured Article</h2>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <User size={16} className="mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-3">{featuredPost.title}</h3>
                    <div className="inline-block bg-indigo-900 text-indigo-200 text-xs px-3 py-1 rounded-full mb-4">
                      {featuredPost.category}
                    </div>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <Link 
                      to={`/blog/${featuredPost.id}`} 
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                      Read Full Article <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Regular Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700 flex flex-col">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{post.title}</h3>
                  <div className="inline-block bg-indigo-900 text-indigo-200 text-xs px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                </div>
                <div className="px-6 pb-6">
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Read Full Article <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;