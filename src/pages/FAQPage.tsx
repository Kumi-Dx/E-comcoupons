import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { PlusCircle, MinusCircle } from 'lucide-react';

const FAQPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First one open by default

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

  return (
    <PageLayout title="Frequently Asked Questions">
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-8">
          Find answers to the most common questions about using E-comCoupons.com and redeeming offers. 
          If you can't find what you're looking for, feel free to contact us directly.
        </p>
        
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="bg-gray-700 rounded-lg border border-gray-600 overflow-hidden">
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
    </PageLayout>
  );
};

export default FAQPage;