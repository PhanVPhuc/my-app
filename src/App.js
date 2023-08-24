import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function App(props) {
  // propslay cac bien truyen qua cac component
  // Let : khai báo biến cố định

  // Lưu data vào state (giống biến toàn cục )
  const [getItem, setItem] = useState(true);
  function change() {
    setItem(false);
  }

  return (
    <div>
      <Header />
      {props.children}
      <Footer />
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
