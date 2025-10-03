import React from "react";

import Banner from "./Banner";
import Products from "./Product";
import Counter from "./Counter";
import IndustryAll from "./IndustryAll";
import FlexBanner from "./FlexBanner";
import Enquiry from "../../components/Form/Enquiry";
import BenfitsHome from "./BenfitsHome";
import Offer from "./Offer";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import EnquiryFlex from "./EnquiryFlex";
// import Blogs from "./Blogs";
import Blog from "./Blog";

function Home() {
  return (
    <div className="mt-50">
      <Banner />
      <Products />
      <Counter />
      <IndustryAll />
      <FlexBanner />
      <Enquiry />
      <BenfitsHome />
      <Offer />
      <Testimonials />
      <Faq />
      {/* <Blogs /> */}
      <Blog />
      <EnquiryFlex />
    </div>
  );
}

export default Home;
