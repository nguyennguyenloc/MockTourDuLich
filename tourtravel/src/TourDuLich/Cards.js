import React from "react";
import "./Cards.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Component } from "react";
import { detailsTourTravelAction } from "../redux/actions/tourTravelActions";

class Cards extends Component {
  renderCarItems = () => {
    return this.props.tourList.map((items, index) => {
      return (
        <div key={index} className="col-4">
          <li className="cards__item">
            <Link
              onClick={() => {
                console.log("chi tiết ", items);
                this.props.xemChiTiet(items);
              }}
              className="cards__item__link"
              to={items.path}
            >
              <figure
                className="cards__item__pic-wrap"
                data-category={items.label}
              >
                <img
                  className="cards__item__img"
                  src={items.img}
                  alt="TravelImage"
                />
              </figure>
              <div className="cards__item__info">
                <h5 className="cards__item__text">{items.text}</h5>
              </div>
            </Link>
          </li>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="cards">
          <h1>Check out theses EPIC Destinations</h1>
          <div className="cards__container">
            <div className="cards__wrapper row">{this.renderCarItems()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tourList: state.tourTravelReducer.tourList,
    cart: state.tourTravelReducer.cart,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    xemChiTiet: (sanpham) => {
      dispatch(detailsTourTravelAction(sanpham));
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Cards);
