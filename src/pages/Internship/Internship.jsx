import React from "react";
import { useSEO } from "../../hooks/useSEO";

const InternshipPage = () => {
  useSEO("internship");

  return <div className="mt-80">Hello this is Internship us page</div>;
};

export default InternshipPage;
