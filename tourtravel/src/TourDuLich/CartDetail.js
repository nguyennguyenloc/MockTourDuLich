import React from "react";

function CartDetail() {
  return (
    <div>
      <div style={{ minWidth: 1000 }} className="modal-dialog" role="document">
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
              <tbody>
                <tr>
                  <td>15988</td>
                  <td>3 days 2 hours</td>
                  <td>01 - 31/11/2021</td>
                  <td>Bus</td>
                  <td>Ho Chi Minh City</td>
                  <td>3.899,000</td>
                  <td>Delete</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4"></td>
                  <td>Total</td>
                  <td>3.899,000</td>
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
export default CartDetail;
