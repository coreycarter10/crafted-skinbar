import React from "react";

const ItemCard = ({ data, removeItem }) => {
  return (
    <div className="product-card">
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <button onClick={() => removeItem(data.cart_id)}>Remove</button>
    </div>
  );
};

export default ItemCard;
