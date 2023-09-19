import React from "react";
import Navbar from "../../common/components/navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../common/components/footer/footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
