import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./style.css";

export const Spinner = () => {
  return <div className="loader"></div>;
};

export const ApiFetching = () => {
  useEffect(() => {
    const api = "https://jsonplaceholder.typicode.com/comments";

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>ApiFetching</div>;
};

export const CountFn = () => {
  const [count, setCount] = useState(1);
  const isFirstRender = useRef(true);

  function handelClick(e) {
    const symbol = e.target.textContent;

    switch (symbol) {
      case "+":
        setCount((pre) => pre + 1);

        break;

      case "-":
        setCount((pre) => pre - 1);
        break;

      default:
        console.log("erro");
    }
    console.log(symbol);
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const API = "https://jsonplaceholder.typicode.com/users";
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  return (
    <>
      <div className="countMainDiv">
        <button onClick={handelClick}>+</button>

        <span>{count}</span>

        <button onClick={handelClick}>-</button>
      </div>
    </>
  );
};

export const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [fdata, setFdata] = useState([]);
  const [err, setErr] = useState("");
  const api = `https://jsonplaceholder.typicode.com/posts`;

  useEffect(() => {
    async function fetchAPi() {
      try {
        const res = await axios.get(api);
        setUsers(res.data);
        setFdata(res.data);
      } catch (error) {
        setErr(error);
      }
    }

    fetchAPi();
  }, []);

  function fetchSearchData(e) {
    const InputValue = e.target.value;
    setUsers(() => fdata.filter((value) => value.title.includes(InputValue)));
  }

  console.log(users);
  return (
    <>
      <div className="FilterDiv">
        <h2>Search For Title</h2>
        <input type="text" onChange={fetchSearchData} />
      </div>

      <div>
        <ul>
          {err ? (
            <p>Error occurred</p>
          ) : users && users.length > 0 ? (
            users.map(({ id, title }) => <li key={id}>{title}</li>)
          ) : users && users.length === 0 ? (
            <p>Users Not Found</p>
          ) : (
            <Spinner />
          )}
        </ul>
      </div>
    </>
  );
};

// export const GetUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [originalUsers, setOriginalUsers] = useState([]);
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(true);

//   const api = `https://jsonplaceholder.typicode.com/posts`;

//   useEffect(() => {
//     async function fetchApi() {
//       try {
//         const res = await axios.get(api);
//         setUsers(res.data);
//         setOriginalUsers(res.data);
//       } catch (error) {
//         setErr(error.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchApi();
//   }, []);

//   function fetchSearchData(e) {
//     const inputValue = e.target.value.toLowerCase();

//     const filtered = originalUsers.filter((value) =>
//       value.title.toLowerCase().includes(inputValue),
//     );

//     setUsers(filtered);
//   }

//   if (loading) return <Spinner />;
//   if (err) return <p>{err}</p>;
//   if (users.length === 0) return <p>No Users Found</p>;

//   return (
//     <>
//       <div className="FilterDiv">
//         <h2>Search For Title</h2>
//         <input type="text" onChange={fetchSearchData} />
//       </div>

//       <ul>
//         {users.map(({ id, title }) => (
//           <li key={id}>{title}</li>
//         ))}
//       </ul>
//     </>
//   );
// };
