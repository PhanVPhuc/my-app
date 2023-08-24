import React, { useState } from "react";
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
import LogoutButton from "./component/LogoutButton";
import LoginButton from "./component/LoginButon";

// import "./index.html";

// function Welcome(props) {
//   return <h1>Hello : {props.name}</h1>;
// }
// function PhucHeo(data) {
//   console.log(data);
//   return data; // return đa ta để khi xuất hàm p ở dưới sẽ cho lại data trên
// }
// let html = <Welcome name=" Phuc Phan" />;
// let x = 123;
// let obj = {
//   name: "Phuc Phan",
//   age: 20,
//   123: " Text ? ",
// };
// let y = "Toi la Phuc";
// let ham = <p> day la the p {PhucHeo(x)} </p>;

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }
//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div className="App">
//         <Greeting isLoggedIn={false} />
//         {button}
//       </div>
//     );
//   }
// }

// function Chu(props) {
//   return <h1>Welcome Back!</h1>;
// }
// function Khach(props) {
//   return <h1>Please sign up!</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <Chu />;
//   }
//   return <Khach />;
// }

// const numbers = [1, 2, 3, 4, 5];
// const Listed = numbers.map((numbers) => <li> {numbers} </li>);
// const doubled = numbers.map((numbers) => numbers * 2);
// console.log("doubled", doubled); //[2, 4, 6, 8, 10]

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((value, key) => <li key={key}>{value}</li>);
  return (
    <div className="App">
      <ul>{listItems}</ul>
    </div>
  );
}

const numbers = [1, 2, 3, 4, 5];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <LoginControl /> */}
    {/* <ul>{Listed}</ul> */}
    alooo
    <NumberList numbers={numbers} />
    {/* <React.StrictMode>
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
    </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
