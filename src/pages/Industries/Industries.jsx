// Industries component with proper SEO handling
import React from "react";
import { useSEO } from "../../hooks/useSEO";
import { slugToSeoKeyMap } from "../../utils/seoMapping";
import { useLocation } from "react-router-dom";

const Industries = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const industrySlug = pathParts[pathParts.length - 1];

  // Use the mapped SEO key or fallback to 'industries' for the main industries page
  const seoKey =
    industrySlug && industrySlug !== "industries"
      ? slugToSeoKeyMap[industrySlug]
      : "industries";

  useSEO(seoKey || "notFound");

  return (
    <div className="mt-80">
      <h1>Industries We Serve</h1>
      {/* Your industries content here */}
    </div>
  );
};

export default Industries;
