import React from "react";
import { useSEO } from "../../hooks/useSEO";

const ContactPage = () => {
  useSEO("contact");

  return <div className="mt-80">Hello this is Contact us page</div>;
};

export default ContactPage;
