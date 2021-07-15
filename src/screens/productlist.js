import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productList,
  detailsProduct,
  sortProduct,
} from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import formatCurrency from "../currency";
import { useHistory } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import ProductFilter from "../components/ProductFilter";

export default function Productlist() {
  const dispatch = useDispatch();
  const Listproduct = useSelector((state) => state.productList);
  const { products, loading, error } = Listproduct;
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartitems } = cart;

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  const productdetail = (product_id) => {
    dispatch(detailsProduct(product_id));
    history.push("/product/" + product_id);
  };

  const addtocart = (product) => {
    console.log(product);
    const format = {
      qty: 1,
    };
    const data = Object.assign(format, product);
    if (cartitems.length !== 0) {
      if (cartitems.find((cart) => cart.id === product.id)) {
        alert("this item is already in cart");
      } else {
        dispatch(addToCart(data));
      }
    } else {
      dispatch(addToCart(data));
    }
  };
  const [sort, setSort] = useState("");
  const pricesort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
    dispatch(sortProduct(sort));
  };

  return (
    <div className="Productlist">
      {loading && <LoadingBox></LoadingBox>}
      {error && <div>{error}</div>}
      <div className="row mx-0 my-4" id="product_list">
        <div className="col-lg-3">
          <h5>Sort</h5>
          <select onChange={(e) => pricesort(e)}>
            <option>Select</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
          <ProductFilter />
        </div>
        <div className="col-lg-9">
          <div className="row m-0">
            {products &&
              products.map((product) => (
                <div className="col-md-3 mb-3 filter_list">
                  <div className="card baseBlock">
                    <Link onClick={() => productdetail(product.id)}>
                      <figure>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.title}
                        />
                      </figure>
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">
                        {product.title.slice(0, 20)}
                      </h5>
                      <div className="">
                        <p className="card-title d-inline-block">
                          {product.category}
                        </p>
                        <p className="float-right">
                          {formatCurrency(product.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => addtocart(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
