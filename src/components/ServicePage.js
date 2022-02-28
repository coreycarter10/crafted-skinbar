import React from "react";
import axios from "axios";

const ServicePage = () => {
  const getServices = () => {
    axios.get("/services").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <h3>I have 3 services</h3>
    </div>
  );
};

export default ServicePage;
