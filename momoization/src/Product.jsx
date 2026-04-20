import React, { useEffect, useState } from "react";

const Product = () => {
  const [prodcut, setProduct] = useState({});

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((errer) => {
        console.log(errer);
      });
  }, []);

  console.log("prodcut", prodcut);

  return <></>;
};

export default Product;
