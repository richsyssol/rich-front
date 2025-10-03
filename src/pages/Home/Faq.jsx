import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// JSON data
const faqData = {
  sectionTitle: "Frequently Asked Questions",
  sectionDescription: "Answers to Common Queries for Better Understanding",
  faqs: [
    {
      id: 1,
      question: "What is Rich System Solution?",
      answer:
        "Rich System Solution is a leading provider of Bulk SMS services and Marketing SMS services in India with over 6 years of experience.",
      product_name: "general",
      isVisibleHome: true,
    },
    {
      id: 2,
      question: "How does Bulk SMS service work?",
      answer:
        "Our Bulk SMS service allows you to send promotional or transactional messages to multiple recipients simultaneously through our robust platform.",
      product_name: "bulk-sms",
      isVisibleHome: true,
    },
    {
      id: 3,
      question: "What are the pricing plans?",
      answer:
        "We offer competitive pricing starting at Rs. 12,000 for 100,000 SMS with various packages to suit different business needs.",
      product_name: "pricing",
      isVisibleHome: true,
    },
    {
      id: 4,
      question: "Do you provide API integration?",
      answer:
        "Yes, we provide comprehensive API documentation and support for seamless integration with your existing systems.",
      product_name: "api",
      isVisibleHome: false,
    },
    {
      id: 5,
      question: "What is the delivery rate?",
      answer:
        "We maintain over 99% delivery rate with DND filtration and multi-language support to ensure your messages reach the intended recipients.",
      product_name: "delivery",
      isVisibleHome: true,
    },
  ],
};

const Faq = ({ subpage = 0 }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openItem, setOpenItem] = useState(0); // First item open by default

  useEffect(() => {
    // Simulate API call
    setFaqs(faqData.faqs);
    setLoading(false);
  }, []);

  const filteredFaqs = faqs.filter((faq) => {
    if (subpage.details && faq.product_name === subpage.details) {
      return true;
    }
    if (subpage === 0 && faq.isVisibleHome) {
      return true;
    }
    return false;
  });

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  if (loading) {
    return (
      <div className="py-10 sm:py-10 lg:py-10 flex items-center w-full">
        <div className="px-4 max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="animate-pulse h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-200 h-20 rounded-lg mb-5"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-10 lg:py-10 flex items-center w-full">
      <div className="px-4 max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {faqData.sectionTitle}
          </motion.h2>
          <motion.p
            className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqData.sectionDescription}
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === index}
                onToggle={() => toggleItem(index)}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component with proper accordion
const FaqItem = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <div className="bg-slate-50 shadow-md rounded-lg overflow-hidden">
      <motion.button
        className="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors duration-200"
        onClick={onToggle}
        whileHover={{ backgroundColor: "rgba(248, 250, 252, 1)" }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-medium text-gray-900 pr-4">
          {question}
        </span>
        <motion.svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faq;
