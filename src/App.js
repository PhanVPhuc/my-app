import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function App(props) {
  // propslay cac bien truyen qua cac component
  // Let : khai báo biến cố định

  // Lưu data vào state (giống biến toàn cục )
  // const [getItem, setItem] = useState(true);
  // function change() {
  //   setItem(false);
  // }

  // MAP theo array
  function renderData() {
    let { arr } = props;
    // kiểm tra arr có dữ liệu hay không
    if (arr.length > 0) {
      // return map
      return arr.map((value, key) => {
        // return HTML
        return (
          // key : đánh dấu số thứ tự các thẻ khỏi trùng nhau
          <li key={key}>{value}</li>
        );
      });
    }
  }

  // MAP theo obj
  function renderDataObj() {
    let { obj } = props;
    // kiểm tra obj có dữ liệu hay không
    if (Object.keys(obj).length > 0) {
      // return map
      return Object.keys(obj).map((key, index) => {
        // return HTML
        return (
          // key : đánh dấu số thứ tự các thẻ khỏi trùng nhau
          <li key={key}>{obj[key]}
            
          </li>
        );

      });
    }
  }

  // re-return khi useState thay đổi ở funtion renderData
  return (
    // <div>
    //   <Header />
    //   {props.children}
    //   <Footer />
    // </div>

    // hiển thị html
    <div>
      <p> MAP theo Array </p>
      <ul>{renderData()}</ul>
      <p> MAP theo Object </p>
      <ul>{renderDataObj()}</ul>
    </div>

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

export default App;
