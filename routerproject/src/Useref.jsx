import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./random.css";
const Useref = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.style.background = "red";
  };
  return (
    <>
      <div
        ref={inputRef}
        style={{
          display: "flex",
          border: "1px solid red",
          width: "10rem",
          height: "10rem",
        }}
      ></div>
      <button onClick={focusInput}>Focus</button>
    </>
  );
};

const Fetch = () => {
  const [data, setData] = useState([]);
  const listRef = useRef();
  const isloadref = useRef(false);

  useEffect(() => {
    if (isloadref.current) return (isloadref.current = true);
    const APi =
      "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json";

    fetch(APi)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);
  return (
    <>
      <div className="mainDiv">
        {data &&
          data.map(({ id, image, description, name }) => {
            return (
              <div className="card" key={id}>
                <img src={image} alt="" />
                <span>{name}</span>
              </div>
            );
          })}

        <h1 ref={listRef}>Prakash</h1>
      </div>
    </>
  );
};

export { Useref, Fetch };
