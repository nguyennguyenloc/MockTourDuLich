import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import "./CartDetail";
import { Component } from "react";
import { connect } from "react-redux";
class Navbar extends Component {
  renderSoLuong = () => {
    return this.props.cart.reduce((tongSoLuong, spGH, index) => {
      return (tongSoLuong += spGH.soLuong);
    }, 0);
  };
  render() {
    const click = false;
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              TRAVEL <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon">
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-links">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-up" className="nav-links">
                  Sign Up
                </Link>
              </li>
            </ul>
            <Button buttonStyle="btn--outline">
              <Link to="/carts">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              ({this.props.number})
            </Button>
          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.tourTravelReducer.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
