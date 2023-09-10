import React, { useState } from "react";

// // cau truc 1 component : la nhung doan html dc viet ben trong js
// function App(props) {
//   const [getEmail, setEmail] = useState("");
//   const [getPass, setPass] = useState("");
//   const [err1, setErr1] = useState("");
//   const [err2, setErr2] = useState("");

//   function xulyEmail(e) {
//     // lay value nhap vao => setEmail
//     setEmail(e.target.value);
//   }

//   function xulyPass(e) {
//     // lay value nhap vao => setEmail
//     setPass(e.target.value);
//   }

//   function xulyForm(e) {
//     // dung lai form
//     e.preventDefault();
//     let x = 1;
//     if (getEmail == "") {
//       setErr1("vui long nhap email");
//       x = 2;
//     } else {
//       setErr1("");
//     }
//     if (getPass == "") {
//       setErr2("vui long nhap pass");
//       x = 2;
//     } else {
//       setErr2("");
//     }

//     // if(getEmail != "" && getPass !=""){
//     if (x == 1) {
//       alert("ok");
//     }
//   }

//   // chay lai khi state thay doi
//   return (
//     // viet html vaoday /
//     <>
//       <p>xu ly form </p>
//       <form onSubmit={xulyForm}>
//         <input type="text" id="123" value={getEmail} onChange={xulyEmail} />
//         <p>{err1}</p>

//         <input type="text" id="123" value={getPass} onChange={xulyPass} />
//         <p>{err2}</p>
//         <button>click</button>
//       </form>
//     </>
//   );
// }
// export default App;

function Test(props) {
  // textarea-tag

  // const [getContent, setContent] = useState("");
  // const [errE, setErrE] = useState("");

  // function handleContent(e) {
  //   // e.target.value : lay value nhap vao
  //   // e.target.id => lay id
  //   setContent(e.target.value);
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (getContent == "") {
  //     setErrE("Nhap content pls");
  //   }
  // }
  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <textarea onChange={handleContent}>{getContent}</textarea>
  //       <p>{errE} </p>
  //       <button type="submit"> click </button>
  //     </form>
  //   </div>
  // );

  // select-tag

  // console.log(props);

  const [getInput, setInput] = useState("");
  const [errE, setErrE] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (getInput == "") {
      setErrE("Nhap INPUT");
    } else {
      setErrE("U R GAY ");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={getInput} onChange={handleInput}>
          <option value=""> Vui long chon </option>
          <option value="1"> Male</option>
          <option value="2"> Female</option>
          <option value="3">ATTACK HELICOPTER</option>
        </select>
        <p> {errE} </p>
        <button type="submit"> CLick me ! </button>
      </form>
    </div>
  );
}

export default Test;
