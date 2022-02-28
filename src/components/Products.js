import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Products = ({ update, setUpdate }) => {
  const [data, setData] = useState([]);

  const addToCart = (id) => {
    let object = {
      userID: 1,
      productID: id,
    };

    axios.post("http://localhost:4000/api/addToCart", object).then((res) => {
      console.log(res.data);
      setUpdate(++update);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/allProducts").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="page-container">
      <h2>Products Available</h2>
      {data.map((element, index) => {
        return <ProductCard data={element} key={index} addToCart={addToCart} />;
      })}
    </div>
  );
};

export default Products;
