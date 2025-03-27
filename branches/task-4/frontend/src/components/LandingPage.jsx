import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default LandingPage;
