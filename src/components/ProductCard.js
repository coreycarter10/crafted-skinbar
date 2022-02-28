import React from "react";
import CartIcon from "./CartIcon";

const ProductCard = ({ data, addToCart }) => {
  <div className="product-card">
    <h3>{data.name}</h3>
    <p>{data.description}</p>
    <span id="cart-icon" onClick={() => addToCart(data.id)}>
      <CartIcon />
    </span>
  </div>;
};

export default ProductCard;
