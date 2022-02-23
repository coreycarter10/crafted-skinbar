import React from "react";

const ServicePage = () => {
  const getServices = () => {
    axios.get("/services").then((res) => {
      console.log(res.data);
    });
  };

  return <div></div>;
};

export default ServicePage;
