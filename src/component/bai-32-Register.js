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

  function handleFile(e) {
    //khai báo xx vì file là 1 array , khi đó ta xài xx[0(ten file)].size(kich thuoc) để gọi ra file ảnh ta vừa chọn
    let xx = e.target.files;
    console.log(xx[0].size);

    let maxSize = 1024 * 1024;
    console.log(maxSize);

    if (xx[0].size >= maxSize) {
      window.alert("NO NO , we only accept img file <  2mb");
      e.preventDefault();
    } else {
      window.alert("OKE");
    }
    const [image, setImage] = useState();
    // có thực sự đưa hết vào useState không nhỉ ?
    const onImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setImage(URL.createObjectURL(e.target.files[0]));
      }
    };
    // lấy hết , đưa vào 1 file . Sau đó gọi thẳng file xuống xử lí
  }

  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState({});

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    const imgInput = e.target.files;
    const imgSize = e.target.files[0].size;
    //  const imgSize = e.target.files[0].size; cái này nghĩa là gì ta ?
    // nếu dùng nó tại đây thì ta thực sự có thể lấy được size như name hay value như trên hay k ?
    setInputs((state) => ({
      ...state,
      [nameInput]: valueInput,
    }));
    // setImage((state) => ({
    //   ...state,
    //   [imgInput]: imgSize,
    // }));
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
    // if (image.size == "") {
    //   // hàm điều kiện cần được sửa lại
    //   // errorSubmit.size = " Vui long chon anh! ";
    //   console.log("Vui long chon anh !");
    //   flag = false;
    // } else if (image.size > maxSize) {
    //   // errorSubmit.size = " Vui long chon lai anh! ";
    //   console.log("Vui long chon lai !");
    //   flag = false;
    // }
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
          <input
            type="file"
            onChange={handleFile}
            className="filetype"
            accept="image/png, image/jpeg , image/jpg"
          />
          {/* <img alt="preview image" src={handleFile} /> */}
          {/* {fileSizeExceeded && (
            <p className="error">
              File size exceeded the limit of {maxFileSize / 1000} KB
            </p>
          )} */}
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
