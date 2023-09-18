import React from "react";
import Navbar from "../../common/components/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
