import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ApiConnect from "./ApiConnect";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <Header />
      <ApiConnect />
      <Outlet />
      <Footer />
    </>
  );
}

