import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_SORT_LOW,
  PRODUCT_SORT_HIGH,
} from "../constants/productConstants";

const productList = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/" + productId
    );
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};
const sortProduct = (sort) => async (dispatch) => {
  const { data } = await axios.get("https://fakestoreapi.com/products/");
  if (sort === "low") {
    dispatch({ type: PRODUCT_SORT_LOW, payload: data });
  } else {
    dispatch({ type: PRODUCT_SORT_HIGH, payload: data });
  }
};

// const product =
export { productList, detailsProduct, sortProduct };
