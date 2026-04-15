import React, { useState } from "react";
import "./form.css";
const Form = () => {
  const [formData, setFormData] = React.useState({
    Name: "",
    email: "",
    password: "",
  });

  const [errMsg, setErrorMsg] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   console.log("formData", formData);
  return (
    <div className="MainDivFOrm">
      <input name="name" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input name="password" onChange={handleChange} />
    </div>
  );
};

const BigForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    err: "",
    isval: true,
  });
  function HandeChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const HandelOnsubmit = (e) => {
    e.preventDefault();
    const validate = isValidated(formData);
    setErrorMsg(validate);
  };

  const isValidated = ({ email, password, confirmPassword }) => {
    try {
      if (!email || !email.includes("@")) {
        return {
          err: "email is not valid",
          isval: false,
        };
      } else if (password || password.length < 6) {
        return {
          err: "short password",
          isval: false,
        };
      } else if (!(password === confirmPassword)) {
        return {
          err: "password and confirmPassword is not same",
          isval: false,
        };
      }

      return {
        err: "validated succesfully",
        isval: true,
      };
    } catch (error) {
      return {
        err: error,
        isval: false,
      };
    }
  };

  setTimeout(() => {
    setErrorMsg({
      err: "",
      err: true,
    });
  }, 3000);

  return (
    <>
      <div className="form-container">
        <h1>Form Submission</h1>

        <form className="form-card" onSubmit={HandelOnsubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              placeholder="Enter your Name"
              onChange={HandeChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              placeholder="Enter your Email"
              onChange={HandeChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password || ""}
              placeholder="Enter your Password"
              onChange={HandeChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword || ""}
              placeholder="Confirm your Password"
              onChange={HandeChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>

          <p
            className="errorMsg"
            style={{
              display: !errorMsg.isval ? "flex" : "none",
              color: "red",
              fontWeight: "bold",
              margin: "auto",
              textAlign: "center",
            }}
          >
            {!errorMsg.isval && errorMsg.err}
          </p>
        </form>
      </div>
    </>
  );
};

export { Form, BigForm };
