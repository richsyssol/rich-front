import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// JSON data
const testimonialsData = {
  sectionTitle: "What Our Customers Saying",
  quotes: {
    image: "/qutoe.png",
    alt: "testimonials",
  },
  reviews: [
    {
      id: 1,
      quotes:
        "Excellent service! The Bulk SMS platform is very user-friendly and the delivery rates are impressive. Great support team!",
      username: "John Doe",
      designation: "Marketing Manager",
    },
    {
      id: 2,
      quotes:
        "Rich System Solution has transformed our customer communication. The API integration was seamless and the results are outstanding.",
      username: "Sarah Wilson",
      designation: "CTO",
    },
    {
      id: 3,
      quotes:
        "Best SMS service provider in India. Affordable pricing with excellent features. Highly recommended for businesses of all sizes.",
      username: "Mike Johnson",
      designation: "Business Owner",
    },
  ],
};

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    // Simulate API call
    setReviews(testimonialsData.reviews);
    setLoading(false);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonialsData.reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="card border border-blue-700 bg-base-100 shadow-xl flex flex-col sm:flex-row min-h-80"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Side - Title */}
          <div className="sm:w-1/3 bg-blue-900 rounded-ee-[100px] flex justify-center items-center px-20 quotes relative">
            <motion.h2
              className="text-2xl py-3 sm:py-0 sm:text-4xl text-white font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {testimonialsData.sectionTitle}
            </motion.h2>

            {/* Top Left Quote */}
            <motion.div
              className="absolute top-2 left-5 sm:top-10 sm:left-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src={testimonialsData.quotes.image}
                width={50}
                height={100}
                style={{ width: "50", height: "100" }}
                alt={testimonialsData.quotes.alt}
              />
            </motion.div>

            {/* Bottom Right Quote */}
            <motion.div
              className="absolute bottom-2 right-20 sm:bottom-10 sm:right-10 rotate-180"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img
                src={testimonialsData.quotes.image}
                width={50}
                height={100}
                style={{ width: "50", height: "100" }}
                alt={testimonialsData.quotes.alt}
              />
            </motion.div>
          </div>

          {/* Right Side - Reviews */}
          <div className="sm:w-2/3">
            {loading ? (
              <div className="flex flex-col justify-center py-10 sm:py-0 px-10 sm:px-20">
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ) : (
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center py-10 sm:py-0 px-10 sm:px-20"
              >
                <p className="text-justify">{reviews[currentReview]?.quotes}</p>
                <div className="py-10 sm:py-0">
                  <h2 className="text-end sm:mt-10 text-2xl">
                    - {reviews[currentReview]?.username}
                  </h2>
                  <h6 className="text-end">
                    {reviews[currentReview]?.designation === "0"
                      ? ""
                      : reviews[currentReview]?.designation}
                  </h6>
                </div>
              </motion.div>
            )}

            {/* Review Indicators */}
            {!loading && (
              <div className="flex justify-center space-x-2 pb-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview ? "bg-blue-900" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
