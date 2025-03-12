import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "../src/Pages/Home";
import About from "../src/Pages/About";

import Contact from "../src/Pages/Contact";

import Header from "../src/Components/Header/Navbar";
import Footer from "../src/Components/Footer/Footer";

import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/ScrollButton/ScrollToTop";

import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      {/* <Popup /> */}
      <ScrollToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
    
          <Route path="/contact" element={<Contact />} />
       

         
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
