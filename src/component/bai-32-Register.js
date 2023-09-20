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

  const handleFile = (e) => {
    //khai báo xx vì file là 1 array , khi đó ta xài xx[0(ten file)].size(kich thuoc) để gọi ra file ảnh ta vừa chọn
    let xx = e.target.files;
    // lấy hết , đưa vào 1 file . Sau đó gọi thẳng file xuống xử lí
    setInputs((state) => ({
      ...state,
      image: xx[0], // Lưu file được chọn vào biến image
    }));
    // có thực sự đưa hết vào useState không nhỉ ?

    let maxSize = 1024 * 1024;
    if (xx[0].size >= maxSize) {
      window.alert("NO NO, chúng tôi chỉ chấp nhận file ảnh < 2mb");
      e.preventDefault();
    } else {
      window.alert("OK");
    }
  };
  const [previewImage, setPreviewImage] = useState(null);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // setImage(URL.createObjectURL(e.target.files[0]));
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const [getFile, setFile] = useState(""); // lấy toàn bộ data của file

  function xulyFile(e) {
    setFile(e.target.files);
  }
  function xulyForm(e) {
    if (getFile == "") {
      window.alert("vui long upload file");
    } else {
      // console.log(getFile); => nó sẽ trả về 1 mảng cho mình
      let getSize = getFile[0].size;
      let getName = getFile[0].name;

      if (!getName) {
        window.alert(getName + " khong hop le ");
      }
      if (getSize > 1024 * 1024) {
        window.alert(
          "File phai nho hon 1mb cho nen " + getSize + "mb qua kich co 1mb"
        );
      }
    }
  }

  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState({});

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    //  const imgSize = e.target.files[0].size; cái này nghĩa là gì ta ?
    // nếu dùng nó tại đây thì ta thực sự có thể lấy được size như name hay value như trên hay k ?
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
    if (inputs.image && inputs.image.size > maxSize) {
      errorSubmit.size = "Vui lòng chọn lại ảnh";
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
          <input
            type="file"
            onChange={onImageChange}
            onChangeCapture={handleFile}
            className="filetype"
            accept="image/png, image/jpeg , image/jpg"
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
