import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
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
            <Link to="/about" className="text-gray-300 hover:text-indigo-400 font-medium">About Us</Link>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-100 mb-8">{title}</h1>
          <div className="bg-gray-800 rounded-lg shadow-md p-8 border border-gray-700">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageLayout;