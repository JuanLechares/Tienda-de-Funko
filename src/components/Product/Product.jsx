import { Navigate } from "react-router-dom";
import "./product.css";
import PropTypes from "prop-types";

const Product = ({ title, collection, price, coutas, imgFront}) => {
  return (
    <div className="product-container">
      <div className="new-icon">new</div>
      <img className="product-img" src={imgFront}></img>
      <p className="product-col">{collection}</p>
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
      <p className="product-coutas">{coutas} cuotas sin interés</p>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string,
  collection: PropTypes.string,
  price: PropTypes.string,
  coutas: PropTypes.string,
  imgFront: PropTypes.string
};

export default Product;
