import React from "react";
import "./itemcardstyles.css";

const ItemCard = ({ data, removeItem }) => {
  return (
    <div className="product-card">
      <h3>{data.name}</h3>
      <h4>${data.price}</h4>
      <button className="removeButton" onClick={() => removeItem(data.cart_id)}>
        Remove
      </button>
    </div>
  );
};

export default ItemCard;
