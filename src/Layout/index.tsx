import React from "react";
import Header from "../components/Header";
import Home from "../components/home";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <div className="mx-auto ">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
