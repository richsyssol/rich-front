import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

// JSON data
const blogData = {
  sectionTitle: "Insights & Trends",
  sectionDescription:
    "Stay updated on the latest trends and expert insights shaping Rich System Solution",
  blogs: [
    {
      id: 1,
      blog_heading: "How to manage your remote team with Bulk SMS?",
      introduction:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      blog_cat: "bulk-sms",
      created_at: "2024-01-15",
      blog_image: "/bulk-sms-blog.jfif",
      image_alt: "Bulk SMS Blog",
      isVisibleHome: true,
    },
    {
      id: 2,
      blog_heading: "Web Development Best Practices in 2024",
      introduction:
        "Learn the latest web development trends and best practices for building scalable applications.",
      blog_cat: "web-development",
      created_at: "2024-01-10",
      blog_image: "/web-dev-blog.jpg",
      image_alt: "Web Development Blog",
      isVisibleHome: true,
    },
    {
      id: 3,
      blog_heading: "Digital Marketing Strategies That Work",
      introduction:
        "Discover effective digital marketing strategies to grow your business online.",
      blog_cat: "digital-marketing",
      created_at: "2024-01-05",
      blog_image: "/digital-market-blog.jfif",
      image_alt: "Digital Marketing Blog",
      isVisibleHome: true,
    },
    {
      id: 4,
      blog_heading: "Advanced Bulk SMS Features",
      introduction:
        "Explore advanced features of our Bulk SMS platform for enterprise communication.",
      blog_cat: "bulk-sms",
      created_at: "2024-01-01",
      blog_image: "/advanced-sms.jpg",
      image_alt: "Advanced SMS Features",
      isVisibleHome: false,
    },
  ],
};

const Blog = ({ img, title }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setBlogs(blogData.blogs);
    setLoading(false);
  }, []);

  const visibleBlogs = blogs.filter((blog) => blog.isVisibleHome);

  if (loading) {
    return (
      <section className="flex items-center py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="animate-pulse h-12 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 rounded-lg h-80"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
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
            {blogData.sectionTitle}
          </motion.h2>
          <motion.p
            className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {blogData.sectionDescription}
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-8 gap-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {visibleBlogs.length > 0 ? (
            visibleBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard
                  id={blog.id}
                  title={blog.blog_heading}
                  description={blog.introduction}
                  type={blog.blog_cat}
                  created_at={blog.created_at}
                  blog_image={blog.blog_image}
                  image_alt={blog.image_alt}
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500 text-lg">
                No blogs available at the moment.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
