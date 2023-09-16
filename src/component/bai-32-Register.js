import React, { useState } from "react";
import Error from "./Error-form";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Bai32Login from "./bai-32-Login";

function Bai32(props) {
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  }

  function sexOption() {
    const arr = [
      {
        id: "",
        name: "vui lòng chon",
      },
      {
        id: 1,
        name: "Male",
      },
      {
        id: 2,
        name: "Female",
      },
      {
        id: 3,
        name: "Attack Helicopter",
      },
    ];
    return arr.map((item) => {
      // dùng map thì phải có 2 hàm return
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  }

  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }

    // if (event.target.file.size > 10e6) {
    //   window.alert("Please upload a file smaller than 10 MB");
    //   return false;
    // }
  };

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
    }
  }
  const navigateLogin = () => {
    Navigate("/login");
  };
  // console.log(inputs);
  localStorage.setItem("info", JSON.stringify(inputs));
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
          ></input>{" "}
          <br />
          Pass :{" "}
          <input
            type="pass"
            name="pass"
            placeholder="Pass ? "
            onChange={handleInput}
          ></input>{" "}
          <br />
          Avatar :
          <input type="file" onChange={onImageChange} className="filetype" />
          <img alt="preview image" src={image} />
          <br />
          Sex :
          <select>
            {sexOption()}
            {/* nhớ kỹ , khi bốc hàm vào thì phải có () , vd : {demo()} */}
          </select>
        </div>
        <button type="submit"> Submit </button>
        {/* <button onClick={navigateLogin}>LOGIN</button> */}
      </form>
      <ul>
        <li>
          <Link to="/login">
            <i className="fa fa-lock" /> Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Bai32;

// tạo onSubmit button , set size ảnh về dưới 10mb
// kiểm tra onChange function để đưa con nào thiếu để xuất lỗi
