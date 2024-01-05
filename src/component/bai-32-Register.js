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

  const [previewImage, setPreviewImage] = useState(null);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // setImage(URL.createObjectURL(e.target.files[0]));
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const [getFile, setFile] = useState(""); // lấy toàn bộ data của file
  //  mặc địch chưa có data thì getFile = ""
  function xulyFile(e) {
    setFile(e.target.files);
  }

  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState({});

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setInputs((state) => ({
      ...state,
      [nameInput]: valueInput,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    let maxSize = 1024 * 1024;
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
    // dùng biến image khai báo trên xuống này để xử lí form

    if (getFile == "") {
      // errorSubmit = "vui long upload file"; // truyền biến toàn bộ =>  sai
      // khi có email và pass thì nó tắt nhưng vẫn bị stuck
      console.log(getFile);
      alert("vui long upload FILE ");
    } else {
      console.log(getFile);

      let getSize = getFile[0].size;
      let getName = getFile[0].name;

      console.log(maxSize + " VS " + getSize);
      if (getSize > maxSize) {
        alert("File phai nho hon 1mb");
        flag = false;
      }

      // Kiểm tra định dạng file
      let validExtensions = ["png", "jpg", "jpeg"];
      let fileExtension = getName
        .split(".")
        .pop()
        .toLowerCase();
      if (!validExtensions.includes(fileExtension)) {
        alert("File ảnh không hợp lệ!");
        flag = false;
      }
    }

    if (!flag) {
      setError(errorSubmit);
    } else {
      setError({});
    }
    localStorage.setItem("info", JSON.stringify(inputs));
  }
  const navigateLogin = () => {
    Navigate("/login");
  };
  // console.log(inputs);

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
          <input
            type="file"
            onChange={onImageChange}
            onChangeCapture={(handleSubmit, xulyFile)}
            // gọi xử lý file ra để truyền file vào useState
            //  không gọi thì nó sẽ luôn là " " và sẽ bị stuck code ( do ngu )
            className="filetype"
            // accept="image/png, image/jpeg , image/jpg"
          />
          <img alt="preview image" src={previewImage} />
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
