import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact"; 

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
