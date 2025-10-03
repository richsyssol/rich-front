import React from "react";
import { useSEO } from "../../hooks/useSEO";

const AboutPage = () => {
  useSEO("about");

  return <div className="mt-80">Hello this is about us page</div>;
};

export default AboutPage;
