import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import formatCurrency from "../currency";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "bootstrap/dist/js/bootstrap.min.js";

export default function CartScreen(props) {
  const [qtycount, setQtycount] = useState(1);
  return (
    <div>
      <div className="cart-page-design">
        <div className="cart-page-header">
          <h2>My Cart (1 item)</h2>
          <button className="close-button" onClick={props.close}>
            <CloseIcon></CloseIcon>
          </button>
        </div>
        <div className="cart-price-detail">
          <div className="sub-total">
            <div className="row align-items-center">
              <div className="col-md-9 col-sm-9 col-9">
                {" "}
                <h5>Sub Total</h5>
              </div>
              <div className="col-md-3 col-sm-3 col-3">
                <div className="price">
                  <p>{formatCurrency(29)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dlvry-chrg">
            <div className="row align-items-center">
              <div className="col-md-9 col-sm-9 col-9">
                {" "}
                <h5>Delivery Charges</h5>
              </div>
              <div className="col-md-3 col-sm-3 col-3">
                <div className="price">
                  <p>+{formatCurrency(50)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-item-detail my-2">
          <div className="sub-total">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-3 col-3">
                <img src="images/organic-a2-milk.png" className="ful-wid-img" />
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                {" "}
                <h5>
                  A2 Gir Cow Milk
                  <br></br>500ml
                </h5>
                <div className="qty-price-calc">
                  <button
                    className="no-btn-brdr space-arnd"
                    type="button"
                    disabled={qtycount === 1 ? true : false}
                    onClick={() => setQtycount((qtycount) => qtycount - 1)}
                  >
                    <RemoveCircleOutlineIcon className="custom-icon-color" />
                  </button>
                  <span className=" space-arnd">{qtycount}</span>

                  <button
                    className="no-btn-brdr"
                    type="button"
                    onClick={() => setQtycount((qtycount) => qtycount + 1)}
                  >
                    <AddCircleOutlineIcon className="custom-icon-color  space-arnd" />
                  </button>
                  <span className=" space-arnd">x</span>
                  <span className=" space-arnd">{formatCurrency(29)}</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-3">
                <div className="price">
                  <p>{formatCurrency(qtycount * 29)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-page-footer">
          <div className="cart-last-min-buy">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header p-0" id="headingOne">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <div className="row m-0">
                      <div className="col-md-10 col-sm-10 col-10 bg-red">
                        <h2>Last Minute Buys</h2>
                      </div>
                      <div className="col-md-2 col-sm-2 col-2 bg-dark-red">
                        <ExpandLessIcon className="collapsed-open"></ExpandLessIcon>
                        <ExpandMoreIcon className="collapsed-close"></ExpandMoreIcon>
                      </div>
                    </div>
                  </button>
                </div>

                <div
                  id="collapseOne"
                  class="collapse "
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body p-0">
                    <div className="last-min-buy-scroll">
                      <div className="row align-items-center m-0">
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="card">
                            <div className="last-mint-item">
                              <div className="offer">
                                <button>5% OFF</button>
                              </div>
                              <img
                                src="images/organic-a2-milk.png"
                                className="ful-wid-img"
                              />
                              <h5>
                                <span className="blk-txt">
                                  {formatCurrency(30)}
                                </span>
                                <strike>{formatCurrency(40)}</strike>
                              </h5>
                              <h4>A2 Gir Cow Milk</h4>
                              <h6>250 ml</h6>
                              <button type="submit">Add to Cart</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="card">
                            <div className="last-mint-item">
                              <div className="offer">
                                <button>5% OFF</button>
                              </div>
                              <img
                                src="images/sign-up.png"
                                className="ful-wid-img"
                              />
                              <h5>
                                <span className="blk-txt">
                                  {formatCurrency(250)}
                                </span>
                                <strike>{formatCurrency(300)}</strike>
                              </h5>
                              <h4>A2 Gir Cow Ghee</h4>
                              <h6>250 ml</h6>
                              <button type="submit">Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center m-0">
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="card">
                            <div className="last-mint-item">
                              <div className="offer">
                                <button>5% OFF</button>
                              </div>
                              <img
                                src="images/organic-a2-milk.png"
                                className="ful-wid-img"
                              />
                              <h5>
                                <span className="blk-txt">
                                  {formatCurrency(30)}
                                </span>
                                <strike>{formatCurrency(40)}</strike>
                              </h5>
                              <h4>A2 Gir Cow Milk</h4>
                              <h6>250 ml</h6>
                              <button type="submit">Add to Cart</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="card">
                            <div className="last-mint-item">
                              <div className="offer">
                                <button>5% OFF</button>
                              </div>
                              <img
                                src="images/sign-up.png"
                                className="ful-wid-img"
                              />
                              <h5>
                                <span className="blk-txt">
                                  {formatCurrency(250)}
                                </span>
                                <strike>{formatCurrency(300)}</strike>
                              </h5>
                              <h4>A2 Gir Cow Ghee</h4>
                              <h6>250 ml</h6>
                              <button type="submit">Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center m-0">
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="card">
                            <div className="last-mint-item">
                              <div className="offer">
                                <button>5% OFF</button>
                              </div>
                              <img
                                src="images/organic-a2-milk.png"
                                className="ful-wid-img"
                              />
                              <h5>
                                <span className="blk-txt">
                                  {formatCurrency(30)}
                                </span>
                                <strike>{formatCurrency(40)}</strike>
                              </h5>
                              <h4>A2 Gir Cow Milk</h4>
                              <h6>250 ml</h6>
                              <button type="submit">Add to Cart</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                          <div className="card">
                            <div className="last-mint-item">
                              <div className="offer">
                                <button>5% OFF</button>
                              </div>
                              <img
                                src="images/sign-up.png"
                                className="ful-wid-img"
                              />
                              <h5>
                                <span className="blk-txt">
                                  {formatCurrency(250)}
                                </span>
                                <strike>{formatCurrency(300)}</strike>
                              </h5>
                              <h4>A2 Gir Cow Ghee</h4>
                              <h6>250 ml</h6>
                              <button type="submit">Add to Cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-page-proceed">
            <h2>Promo code can be applied on payment page</h2>
            <div className="cart-page-proceed-btn">
              <button>
                <p>Proceed to Checkout</p>
                <span className="price-right">
                  {formatCurrency(qtycount * 29 + 50)}
                  <span>
                    {" "}
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
