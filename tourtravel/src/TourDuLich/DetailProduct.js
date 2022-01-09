import React, { Component } from "react";
import { connect } from "react-redux";
import { cartTourTravelAction } from "../redux/actions/tourTravelActions";
class DetailProduct extends Component {
  renderItems = () => {
    return this.props.detailProduct.map((items, index) => {
      return (
        <div key={index} className="container mb-5">
          <h1>{items.title}</h1>
          <div className="row mb-5">
            <div className="col-8">
              <img
                style={{ width: "100%", backgroundSize: "auto" }}
                src={items.img1}
                alt="anh"
              />
            </div>
            <div className="col-4">
              <h2 className="text-center">COMBO {items.title}</h2>
              <table class="table">
                <tbody>
                  <tr>
                    <td>Tourr Id</td>
                    <td>{items.id}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{items.time}</td>
                  </tr>
                  <tr>
                    <td>Start</td>
                    <td>{items.start}</td>
                  </tr>
                  <tr>
                    <td>Vehicle</td>
                    <td>{items.vehicle}</td>
                  </tr>
                  <tr>
                    <td>Place</td>
                    <td>{items.place}</td>
                  </tr>
                </tbody>
              </table>
              <div class="card text-center">
                <div class="card-body">
                  <h4 class="card-title">Prince: {items.prince} đ</h4>
                  <button
                    onClick={() => {
                      this.props.cart(items);
                    }}
                    class="card-text w-100 p-2"
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img src={items.img2} style={{ width: "100%" }} alt="ok" />
            </div>
            <div className="col-4">
              <img src={items.img3} style={{ width: "100%" }} alt="ok" />
            </div>
            <div className="col-4">
              <img src={items.img4} style={{ width: "100%" }} alt="ok" />
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderItems()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    detailProduct: state.tourTravelReducer.tourItem,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    cart: (sanpham) => {
      dispatch(cartTourTravelAction(sanpham));
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(DetailProduct);
