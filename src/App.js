import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Bai32 from "./component/bai-32-Register";

function App(props) {
  // propslay cac bien truyen qua cac component
  // Let : khai báo biến cố định

  // Lưu data vào state (giống biến toàn cục )

  // const [getItem, setItem] = useState(true);

  // function change() {
  //   setItem(false);
  // }

  // // MAP theo array
  // function renderData() {
  //   let { arr } = props;
  //   // kiểm tra arr có dữ liệu hay không
  //   if (arr.length > 0) {
  //     // return map
  //     return arr.map((value, key) => {
  //       // return HTML
  //       return (
  //         // key : đánh dấu số thứ tự các thẻ khỏi trùng nhau
  //         <li key={key}>{value}</li>
  //       );
  //     });
  //   }
  // }

  // // MAP theo obj
  // function renderDataObj() {
  //   let { obj } = props;
  //   // kiểm tra obj có dữ liệu hay không
  //   if (Object.keys(obj).length > 0) {
  //     // return map
  //     return Object.keys(obj).map((key, index) => {
  //       // return HTML
  //       return (
  //         // key : đánh dấu số thứ tự các thẻ khỏi trùng nhau
  //         <li key={key}>{obj[key]}</li>
  //       );
  //     });
  //   }
  // }

  // re-return khi useState thay đổi ở funtion renderData
  return (
    <div>{/* <Header />
      {props.children}
      <Footer /> */}</div>

    // hiển thị html
    // <div>
    //   <p> MAP theo Array </p>
    //   <ul>{renderData()}</ul>
    //   <p> MAP theo Object </p>
    //   <ul>{renderDataObj()}</ul>
    // </div>

    // <>
    //   <p> Day la trang app</p>
    //   {getItem}
    //   <button onClick={change}> Click me! </button>
    // </>

    // <>
    //   <p> Day la trang thuat toan 3 ngoi </p>
    //   {getItem == true ? "Đúng" : "Sai"}
    //   <button onClick={change}> Click me! </button>
    // </>
  );
}

// cau truc 1 component : la nhung doan html dc viet ben trong js
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
export default App;
