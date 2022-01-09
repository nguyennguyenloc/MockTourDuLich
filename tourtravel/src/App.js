import "./App.css";
import React from "react";
import Navbar from "./TourDuLich/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./TourDuLich/Page/Home";
import Product from "./TourDuLich/Page/Product";
import Footer from "./TourDuLich/Footer";
import Cart from "./TourDuLich/Page/Cart";

import { Component } from "react";
import { connect } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  renderSoLuong = () => {
    return this.props.cart.reduce((tongSoLuong, spGH, index) => {
      console.log("số lụowng ", spGH.soLuong);
      return (tongSoLuong += spGH.soLuong);
    }, 0);
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar number={this.renderSoLuong()} />
          <Routes>
            {/* <Route path="/" exact component={Home} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Product />} />
            <Route exact path="/carts" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.tourTravelReducer.cart,
  };
};

export default connect(mapStateToProps)(App);
