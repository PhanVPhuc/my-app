import React from "react";

// function Bai32(props) {
//   function isEmail(email) {
//     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
//     return regex.test(email);
//   }

//   const arr = [
//     {
//       id: "",
//       name: "vui lòng chon",
//     },
//     {
//       id: 1,
//       name: "Male",
//     },
//     {
//       id: 2,
//       name: "Female",
//     },
//   ];
//   const data = {
//     sex: { arr },
//   };

//   function isSex = (e) => {
//     const [sex, setSex] = useState({
//       sex: "",
//     });
//     //  const handleChange = e=>{setSex({e.target.value });}
//     handleSex = (e) => {
//       const nameSex = e.target.value;
//     };
//   }

//   return (
//     <form enctype="multipart/form-data">
//       Email :
//       <input
//         type="email"
//         name="email"
//         placeholder="Email ? "
//         onChange={isEmail}
//       ></input>
//       Pass : <input type="pass" name="pass" placeholder="Pass ? "></input>
//       {/* Avatar : <input type="file"> </input> */}
//       Sex :<select></select>
//     </form>
//   );
// }

// export default Bai32;

// // what did i do ?

//Note: Uncomment import lines during working with JSX Compiler.
// import React from 'react';
// import ReactDOM from 'react-dom';

const colors = [
  {
    id: "",
    name: "vui lòng chon",
  },
  {
    id: "1",
    name: "Male",
  },
  {
    id: "2",
    name: "Female",
  },
];

const Bai32 = () => {
  const [color, setColor] = React.useState("");
  const handleChange = (e) => setColor(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      color: color,
    };
    const json = JSON.stringify(data);
    console.clear();
    console.log(json);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Choose your favorite color:
          <select value={color} onChange={handleChange}>
            {colors.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Bai32;
