import { combineReducers } from "redux";
import { productReducers, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducers,
  product: selectedProductReducer,
});

export default reducers;
