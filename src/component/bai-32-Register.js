import React from "react";

function Bai32() {
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  }

  function Sexoption(e) {
    e.preventDefault();
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
    ];

    <select>
      {arr.data.map((key, value) => (
        <option value={key.id}>{value.name}</option>
      ))}
    </select>;
  }

  return (
    <form enctype="multipart/form-data">
      Email :
      <input
        type="email"
        name="email"
        placeholder="Email ? "
        onChange={isEmail}
      ></input>
      Pass : <input type="pass" name="pass" placeholder="Pass ? "></input>
      {/* Avatar : <input type="file"> </input> */}
      Sex :
      <select>
        <option onChange={Sexoption}></option>
      </select>
    </form>
  );
}

export default Bai32;

// what did i do ?
