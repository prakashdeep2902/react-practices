import "./goku.css";
import { ProfileCatd } from "./component/ProfileCard";

import NewProps from "./component/NewProps";
import Buttons from "./component/Buttons";
import { users } from "./component/usersJson";
import UsersCards from "./component/usersCards/UsersCards.jsx";

let count = 0;
const App = () => {
  const arr = ["prakash", "akash", "vikash", "sharma"];

  let isshowImage = true;
  function handelclick() {
    count++;
    console.log(count);
  }

  const userDetails = new Object({
    name: "Prakash",
    age: 26,
    job: "software Enginner",
    brothers: {
      elderBrother: {
        name: "akash Deep Sharma",
        age: 39,
        marriageStatus: true,
        kids: 1,
        kidNames: ["chiku"],
        wifeName: "sridevi",
        job: "data analyst",
        workPlace: "qualcomm",
      },

      youngerBorther: {
        name: "vikash Deep Sharma",
        age: 30,
        marriageStatus: true,
        kids: false,
        kidNames: [""],
        wifeName: "reema kumari",
        job: "Youtube Manger",
        workPlace: "English With Rani Mama",
      },
    },
  });

  const handelImageClick = () => {
    isshowImage = isshowImage == false ? true : false;

    console.log(users);
  };

  return (
    <>
      <div className="main">
        <h1>akas</h1>
        {console.log(isshowImage)}
        {isshowImage ? (
          <ProfileCatd />
        ) : (
          <div>
            <h1>bro</h1>
          </div>
        )}

        {arr.map((val) => {
          return <h1 style={{ color: "red" }}>{val}</h1>;
        })}
      </div>

      <div
        className="counterDiv"
        style={{ border: "2px solid red", width: "10rem" }}
      >
        <h1>{count}</h1>
        <button className="counterBtn" onClick={handelclick}>
          count
        </button>
      </div>

      <button
        onClick={(e) => {
          const name = e.target.textContent;
        }}
      >
        show alert
      </button>

      <NewProps names={arr} user={userDetails} />

      <Buttons click={handelImageClick} />

      <UsersCards usersDetails={users} />

      <h2>Hello Prakash</h2>
      <h1>this is childern</h1>

      <userDetails />
      <UsersCards usersDetails={users} />
    </>
  );
};

export default App;
