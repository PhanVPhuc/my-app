import React from "react";

function Bai32() {
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  }

  const Select = ({ id, option, onChange }) => {
    return (
      <select id={id} onChange={onChange}>
        {" "}
        {option.map((option) => {
          return (
            <option key={option.id} id={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    );
  };

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

  

  return (
    <form enctype="multipart/form-data">
      Email :{" "}
      <input
        type="email"
        name="email"
        placeholder="Email ? "
        onChange={isEmail}
      ></input>
      Pass : <input type="pass" name="pass" placeholder="Pass ? "></input>
      Avatar : <input type="file"> </input>
      Sex :{" "}
      <select>
        <option value=""> Vui long chon </option>
        <option value="1"> Male</option>
        <option value="2"> Female</option>
      </select>
    </form>
  );
}

export default Bai32;
