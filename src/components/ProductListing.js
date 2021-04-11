import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui four column doubling stackable grid container">
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
