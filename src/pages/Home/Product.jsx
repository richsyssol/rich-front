import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// JSON data
const productsData = {
  sectionTitle: "Smart Communications",
  sectionDescription: "Seamless Connectivity for Every Business Need",
  products: [
    {
      id: 1,
      title: "Business Phone System",
      product_name: "business-phone",
      description:
        "Advanced cloud-based phone system with enterprise features and seamless integration for modern businesses.",
      image: "/images/phone-system.jpg",
    },
    {
      id: 2,
      title: "Video Conferencing",
      product_name: "video-conferencing",
      description:
        "High-quality video conferencing solution with screen sharing and collaboration tools for remote teams.",
      image: "/images/video-conf.jpg",
    },
    {
      id: 3,
      title: "Team Messaging",
      product_name: "team-messaging",
      description:
        "Real-time team messaging platform with file sharing and integration with popular productivity tools.",
      image: "/images/team-msg.jpg",
    },
    {
      id: 4,
      title: "Contact Center",
      product_name: "contact-center",
      description:
        "Omnichannel contact center solution with AI-powered routing and analytics for customer support.",
      image: "/images/contact-center.jpg",
    },
    {
      id: 5,
      title: "SMS Marketing",
      product_name: "sms-marketing",
      description:
        "Bulk SMS marketing platform with automation and personalization features for better engagement.",
      image: "/images/sms-marketing.jpg",
    },
    {
      id: 6,
      title: "API Integration",
      product_name: "api-integration",
      description:
        "Developer-friendly APIs to integrate communication features into your existing applications.",
      image: "/images/api-integration.jpg",
    },
  ],
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate API call with JSON data
    setProducts(productsData.products);

    // Cleanup function for cookies (if needed)
    return () => {
      deleteCookie("userFormSubmitted");
      deleteCookie("otpValidated");
    };
  }, []);

  const deleteCookie = (name) => {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
          {productsData.sectionTitle}
        </h2>
        <p className="max-w-xl mx-auto text-base leading-relaxed text-gray-600">
          {productsData.sectionDescription}
        </p>
      </motion.div>

      {/* Products Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          className="products-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  const img_url = import.meta.env.VITE_IMAGE_PATH + product.image;
  const redirect_url = `/products/${product.product_name}`;

  return (
    <motion.div
      whileHover={{
        // boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
        borderColor: "#2563eb",
      }}
      className="group bg-white mx-auto rounded-lg px-4 py-6 border-2 border-transparent hover:border-blue-600 cursor-pointer flex flex-col h-[450px] transition-all duration-300"
    >
      {/* Product Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="mb-4 overflow-hidden rounded-lg"
      >
        <img
          src={img_url}
          alt={product.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=${encodeURIComponent(
              product.title
            )}`;
          }}
        />
      </motion.div>

      {/* Product Title */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2"
      >
        {product.title}
      </motion.h3>

      {/* Product Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
        className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3"
      >
        {product.description}
      </motion.p>

      {/* View More Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.5 }}
        className="mt-auto"
      >
        <motion.a
          href={redirect_url}
          whileHover={{ x: 5 }}
          className="text-slate-500 group-hover:text-blue-700 font-medium transition-colors duration-300 inline-flex items-center"
        >
          View More
          <svg
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Products;
