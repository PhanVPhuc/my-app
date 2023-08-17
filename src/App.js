import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function App(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default App;
