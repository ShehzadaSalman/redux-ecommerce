import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductsDetails = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (productId && productId !== "")  fetchProductsDetails();
    
  }, [productId]);

  return (
    <div style={{ marginTop: "80px" }}>
      <h1>{productId}</h1>
      <h2>why isn't the data being printed</h2>
      <h5>{JSON.stringify(product)}</h5>
    </div>
  );
};
export default ProductDetail;
