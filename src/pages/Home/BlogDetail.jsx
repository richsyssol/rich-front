import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Share2, User, Clock } from "lucide-react";
import blogData from "../../data/blogData.json";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Blog types configuration
  const blogTypes = {
    "bulk-sms": { color: "text-rose-500", bgColor: "bg-rose-100" },
    "web-development": { color: "text-blue-500", bgColor: "bg-blue-100" },
    "digital-marketing": { color: "text-green-500", bgColor: "bg-green-100" },
  };

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      const foundBlog = blogData.blogPosts[id];
      setBlog(foundBlog);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const blogType = blog?.category
    ? blogTypes[blog.category]
    : blogTypes["bulk-sms"];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Function to parse and render HTML content safely
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blogs")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </section>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/blogs")}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blogs
            </button>

            <button
              onClick={handleShare}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
        </div>
      </nav>

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-4xl py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-gray-700 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => navigate("/blogs")}
            className="hover:text-gray-700 transition-colors"
          >
            Blogs
          </button>
          <span>/</span>
          <span className="text-gray-900 truncate">{blog.title}</span>
        </nav>

        {/* Category Badge */}
        <div className="mb-6">
          <span
            className={`inline-flex px-4 py-2 text-sm font-semibold tracking-widest uppercase rounded-full ${blogType.color} ${blogType.bgColor}`}
          >
            {blog.category.replace("-", " ")}
          </span>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4"
        >
          {blog.title}
        </motion.h1>

        {/* Excerpt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 leading-relaxed mb-8"
        >
          {blog.excerpt}
        </motion.p>

        {/* Meta Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-200 pb-8 mb-8"
        >
          <div className="flex items-center">
            <User className="w-5 h-5 mr-2" />
            <span className="font-medium">{blog.author}</span>
          </div>

          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <time dateTime={blog.publishedDate}>
              {formatDate(blog.publishedDate)}
            </time>
          </div>

          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>{blog.readTime}</span>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={blog.image}
            alt={blog.imageAlt}
            className="w-full h-64 lg:h-96 object-cover"
          />
        </motion.div>

        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900
            prose-headings:font-bold
            prose-h2:text-2xl
            prose-h3:text-xl
            prose-p:text-gray-700
            prose-p:leading-relaxed
            prose-ul:text-gray-700
            prose-li:text-gray-700
            prose-strong:text-gray-900
            prose-strong:font-bold
            prose-a:text-blue-600
            prose-a:no-underline
            prose-a:border-b-2
            prose-a:border-blue-200
            prose-a:hover:border-blue-600
            prose-blockquote:border-l-blue-500
            prose-blockquote:bg-blue-50
            prose-blockquote:py-2
            prose-blockquote:px-4
            prose-blockquote:rounded-r-lg
            mb-12"
          dangerouslySetInnerHTML={renderHTML(blog.content)}
        />

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-gray-700 font-medium text-lg">
              Found this article helpful?
            </span>
            <div className="flex space-x-4">
              <button
                onClick={handleShare}
                className="flex items-center px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors border border-gray-300 rounded-lg hover:border-gray-400 bg-white hover:bg-gray-50"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
