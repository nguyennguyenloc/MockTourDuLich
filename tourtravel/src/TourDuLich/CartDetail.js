import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTourTravelAction } from "../redux/actions/tourTravelActions";

class CartDetail extends Component {
  renderCar = () => {
    return this.props.cart.map((items, index) => {
      return (
        <tr key={Date.now()}>
          <td>{items.id}</td>
          <td>{items.time}</td>
          <td>{items.start}</td>
          <td>{items.vehicle}</td>
          <td>{items.place}</td>
          <td>{items.prince.toLocaleString()}</td>
          <td>
            <button
              // key={Date.now()}
              onClick={() => this.props.deleteCart(items)}
            >
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  renderSum = () => {
    return this.props.cart
      .reduce((tongTien, spGH, index) => {
        return (tongTien += spGH.prince * spGH.soLuong);
      }, 0)
      .toLocaleString();
  };
  render() {
    return (
      <div>
        <div
          style={{ minWidth: 1000 }}
          className="modal-dialog"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart</h5>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tour Id</th>
                    <th>Time</th>
                    <th>Start</th>
                    <th>Vehicel</th>
                    <th>Place</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderCar()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4"></td>
                    <td>Total</td>
                    <td>{this.renderSum()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.tourTravelReducer.cart,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    deleteCart: (sanpham) => {
      dispatch(deleteTourTravelAction(sanpham));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CartDetail);
