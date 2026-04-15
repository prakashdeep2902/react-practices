import { useState } from "react";
import "./usestate.css";
const Counter = () => {
  const [Counter, setCounter] = useState(1);

  function handelClick(e) {
    const symbal = e.target.textContent.trim();
    switch (symbal) {
      case "+":
        setCounter((prev) => prev + 1);
        break;
      case "-":
        setCounter((prev) => (prev == 0 ? 0 : prev - 1));
        break;
      default:
        console.log("this is not good");
    }
  }

  return (
    <>
      <div
        className="counterMainDiv"
        style={{
          display: "flex",
          width: "10rem",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{
            border: "none",
            width: "3rem",
            borderRadius: ".5rem",
            background: "green",
            fontSize: "2rem",
            color: "white",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onClick={handelClick}
        >
          +
        </button>
        <span
          style={{
            fontSize: "3rem",
          }}
        >
          {Counter}
        </span>
        <button
          style={{
            border: "none",
            width: "3rem",
            borderRadius: ".5rem",
            background: "green",
            fontSize: "2rem",
            color: "white",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onClick={handelClick}
        >
          -
        </button>
      </div>
    </>
  );
};

const PlayWithObject = ({ usersDetails }) => {
  const [Users, SetUsers] = useState([]);
  const [isUsers, setisUsers] = useState(false);
  const [Text, setText] = useState("OFF");
  function Handelobj() {
    setisUsers((val) => {
      const newVal = !val;
      if (newVal) {
        SetUsers(usersDetails);
        setText("ON");
      } else {
        SetUsers([]);
        setText("OFF");
      }

      return newVal;
    });
  }

  return (
    <>
      <div className="mainDivOfuseState">
        <button onClick={Handelobj}>
          {isUsers
            ? "Click for remove all users"
            : "Click for Bring All users "}
        </button>

        <button>{Text}</button>

        <div className="cardsContainer">
          {Users?.map(
            ({ id, name, phone, username, email, addess, company }) => (
              <div className="card" key={id}>
                <ol>
                  <li>
                    <span>Name:</span>
                    {name}
                  </li>
                  <li>
                    <span>Phone:</span>
                    {phone}
                  </li>
                  <li>
                    <span>Email:</span>
                    {email}
                  </li>
                  <li>
                    <span>User Name:</span>
                    {username}
                  </li>
                </ol>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export { Counter, PlayWithObject };
