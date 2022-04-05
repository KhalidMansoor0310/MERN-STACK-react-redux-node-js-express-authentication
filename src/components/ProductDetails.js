import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts ,removeselectedProducts } from "../redux/actions/productActions";
function ProductDetails() {
  const { product_id } = useParams();
  console.log(product_id);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${product_id}`
    );
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (product_id && product_id !== "") fetchData(product_id);
    return () => {
      dispatch(removeselectedProducts());
    };
  }, [product_id]);
  const product = useSelector(state => state.product);

  return (
    <div className="ui grid container">
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={product.image} />
            </div>
            <div className="column rp">
              <h1>{product.title}</h1>
              <h2>
                <a className="ui teal tag label">${product.price}</a>
              </h2>
              <h3 className="ui brown block header">{product.category}</h3>
              <p>{product.description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default ProductDetails
