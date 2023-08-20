import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Phuc from "./Phuc";
import Nhu from "./Nhu";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./component/Login";
import Account from "./component/Account";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Malfuntion from "./component/404";
import Blog from "./component/Blog";
import Bdetail from "./component/Bdetail";

// import "./index.html";

// function Welcome(props) {
//   return <h1>Hello : {props.name}</h1>;
// }
function PhucHeo(data) {
  console.log(data);
  return data; // return đa ta để khi xuất hàm p ở dưới sẽ cho lại data trên
}
// let html = <Welcome name=" Phuc Phan" />;
let x = 123;
// let obj = {
//   name: "Phuc Phan",
//   age: 20,
//   123: " Text ? ",
// };
// let y = "Toi la Phuc";
let ham = <p> day la the p {PhucHeo(x)} </p>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/404" element={<Malfuntion />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail" element={<Bdetail />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
