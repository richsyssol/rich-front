// Updated Products component with proper SEO handling
import React from "react";
import { useSEO } from "../../hooks/useSEO";
import { slugToSeoKeyMap } from "../../utils/seoMapping";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const productSlug = pathParts[pathParts.length - 1];

  // Use the mapped SEO key or fallback to 'products' for the main products page
  const seoKey =
    productSlug && productSlug !== "products"
      ? slugToSeoKeyMap[productSlug]
      : "products";

  useSEO(seoKey || "notFound");

  return (
    <div className="mt-80">
      <h1>Products & Services</h1>
      {/* Your product content here */}
    </div>
  );
};

export default Products;
