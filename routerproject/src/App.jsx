import { Router, Route, Routes } from "react-router-dom";
import { Useref, Fetch } from "./Useref";
import Child1 from "./Child1";
import { Child2 } from "./Child2";
import { useState } from "react";

const App = () => {
  const [sendData, setSendData] = useState("");

  return (
    <>
      {/* <Useref />
      <Fetch /> */}
      <Child1 setData={setSendData} />
      <Child2 sendData={sendData} />
    </>
  );
};

export default App;
