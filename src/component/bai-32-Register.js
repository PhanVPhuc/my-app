import React from "react";

function Bai32() {
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  }

  const Select = ({ id, option, onChange }) => {
    return (
      <select id={id} onChange={onChange}>
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
  const [id, setId] = React.useState("");
  const handleChange = (e) => setId(e.target.id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Sex: id,
    };
    const json = JSON.stringify(data);
    console.clear();
    console.log(json);
  };
  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      <div>
        Email :
        <input
          type="email"
          name="email"
          placeholder="Email ? "
          onChange={isEmail}
        ></input>
        Pass : <input type="pass" name="pass" placeholder="Pass ? "></input>
        Avatar : <input type="file"> </input>
        Sex :<select value={id} option={arr} onChange={handleChange} />
      </div>
      <button type="submit"> Submit ! </button>
    </form>
  );
}

export default Bai32;
