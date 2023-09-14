import React, { useState } from "react";

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

  function handleSubmit(e) {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
  }

  return (
    <form enctype="multipart/form-data">
      <div>
        Email :
        <input
          type="email"
          name="email"
          placeholder="Email ? "
          onChange={isEmail}
        ></input>{" "}
        <br />
        Pass : <input
          type="pass"
          name="pass"
          placeholder="Pass ? "
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
    </form>
  );
}

export default Bai32;
