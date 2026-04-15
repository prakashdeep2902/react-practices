import React, { useState } from "react";

import "./event.css";
const Event = () => {
  const [name, setName] = useState("");
  const [chnageName, setChangeName] = useState({
    name: "vikash",
    age: 21,
    working: "false",
  });

  function handelChange(e) {
    e.preventDefault();

    const newValue = e.target.value;

    console.log(newValue);

    setName(newValue);
  }

  const denounce = (fun, waitTime) => {
    let timId;
    return function (...arg) {
      clearTimeout(timId);
      timId = setTimeout(() => {
        fun.apply(this, arg);
      }, waitTime);
    };
  };

  const debounceChnage = denounce(onChangeSetName, 500);

  function onChangeSetName(e) {
    const InValue = e.target.value;

    setChangeName({
      ...chnageName,
      name: e.target.value,
    });
  }

  const DebounceonChangeSetName = denounce(onChangeSetName, 500);

  return (
    <>
      <div className="InputDiv">
        <h3>Enter Any Text</h3>
        <input type="text" onChange={debounceChnage} />
        <textarea name="" id="" value={name}>
          {name}
        </textarea>
      </div>

      <div className="InputDiv">
        <h3>Set Name</h3>
        <input type="text" onChange={onChangeSetName} />

        <div className="ShowingChnage">
          <ul>
            <li>
              <span>Name:</span>
              {chnageName.name}
            </li>
            <li>
              <span>age:</span>
              {chnageName.age}
            </li>
            <li>
              <span>working:</span>
              {chnageName.working}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Event;
