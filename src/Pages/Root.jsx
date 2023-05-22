import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "src/Components/Layout/Navbar/Navbar";
import Footer from "src/Components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
