// Resources component with proper SEO handling
import React from "react";
import { useSEO } from "../../hooks/useSEO";
import { slugToSeoKeyMap } from "../../utils/seoMapping";
import { useLocation } from "react-router-dom";

const Resources = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const resourceSlug = pathParts[pathParts.length - 1];

  // Use the mapped SEO key or fallback to 'resources' for the main resources page
  const seoKey =
    resourceSlug && resourceSlug !== "resources"
      ? slugToSeoKeyMap[resourceSlug]
      : "resources";

  useSEO(seoKey || "notFound");

  return (
    <div className="mt-80">
      <h1>Resources</h1>
      {/* Your resources content here */}
    </div>
  );
};

export default Resources;
