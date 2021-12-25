import "./App.css";
import React from "react";
import Navbar from "./TourDuLich/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./TourDuLich/Page/Home";
import Product from "./TourDuLich/Page/Product";
import Footer from "./TourDuLich/Footer";
import Cart from "./TourDuLich/Page/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact component={Home} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/carts" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
