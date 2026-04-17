import { Link } from "react-router-dom";

const nav = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          border: "1px solid red",
          justifyContent: "space-around",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default nav;
