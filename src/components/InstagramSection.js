import React from "react";

const InstagramSection = () => {
  const getInstagram = () => {
    axios.get("https://instagram.com/craftedskinbar").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <div>{getInstagram}</div>
    </div>
  );
};

export default InstagramSection;
