import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
    </>
  );
};

export default Parent;
