import React from "react";

function DetailProduct(props) {
  return (
    <>
      <div className="container mb-5">
        <h1>Da Lat</h1>
        <div className="row mb-5">
          <div className="col-8">
            <img
              style={{ width: "100%", backgroundSize: "auto" }}
              src="images/dalat1.jpg"
              alt="anh"
            />
          </div>
          <div className="col-4">
            <h2 className="text-center">COMBO DA LAT</h2>
            <table class="table">
              <tbody>
                <tr>
                  <td>Tourr Id</td>
                  <td>15988</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>3 days 2 hours</td>
                </tr>
                <tr>
                  <td>Start</td>
                  <td>01 - 31/11/2021</td>
                </tr>
                <tr>
                  <td>Vehicle</td>
                  <td>Bus</td>
                </tr>
                <tr>
                  <td>Place</td>
                  <td>Ho Chi Minh City</td>
                </tr>
              </tbody>
            </table>
            <div class="card text-center">
              <div class="card-body">
                <h4 class="card-title">Prince: 3,899,000 đ</h4>
                <button class="card-text w-100 p-2">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="images/dalat2.jpg" style={{ width: "100%" }} alt="ok" />
          </div>
          <div className="col-4">
            <img src="images/dalat4.jpg" style={{ width: "100%" }} alt="ok" />
          </div>
          <div className="col-4">
            <img src="images/dalat6.jpg" style={{ width: "100%" }} alt="ok" />
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailProduct;
