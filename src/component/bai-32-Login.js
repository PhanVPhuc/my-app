import React, { useState } from "react";
import Bai32 from "./bai-32-Register";
import Error from "./Error-form";
import { Link, Navigate, Route, Routes } from "react-router-dom";

function Bai32Login() {
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  }
  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState({});
  const handleInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: valueInput }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;

    if (inputs.email == "") {
      errorSubmit.email = "vui long nhap email";
      flag = false;
    }
    if (inputs.pass == "") {
      errorSubmit.pass = " Vui long nhap Pass! ";
      flag = false;
    }
    if (!flag) {
      setError(errorSubmit);
    } else {
      setError({});
      // làm trong này vì khi ta để ở ngoài thì sẽ báo lỗi read only
      let jj = localStorage.getItem("info");
      if (jj) {
        jj = JSON.parse(jj);
        console.log(jj);
        if (jj.email == inputs.email && jj.pass == inputs.pass) {
          console.log("oke roi fen");
        } else {
          console.log(" khong oke roi fen");
        }
      }
    }
  }
  const navigateRegister = () => {
    Navigate("/register");
  };
  return (
    <div>
      <Error error={error} />
      <form enctype="multipart/form-data" onSubmit={handleSubmit}>
        <div>
          Email :
          <input
            type="email"
            name="email"
            placeholder="Email ? "
            onChange={(isEmail, handleInput)}
          ></input>
          <br />
          Pass :
          <input
            type="pass"
            name="pass"
            placeholder="Pass ? "
            onChange={handleInput}
          ></input>
        </div>
        <button type="submit"> Submit </button>
      </form>

      <Routes>
        <Route path="/register" element={<Bai32 />}></Route>
      </Routes>
      <ul>
        <li>
          <Link to="/register">
            <i className="fa fa-lock" /> REGISTER
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Bai32Login;
