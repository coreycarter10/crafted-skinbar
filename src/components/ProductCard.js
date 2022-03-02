import React from "react";
import CartIcon from "./CartIcon";

const ProductCard = ({ data, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{data.name}</h3>
      <h4>${data.price}</h4>
      <span id="cart-icon" onClick={() => addToCart(data.id)}>
        <CartIcon />
      </span>
    </div>
  );
};

export default ProductCard;
