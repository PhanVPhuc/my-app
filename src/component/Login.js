import React from "react";
import { useState } from "react";
import LoginButton from "./LoginButon";
import LogoutButton from "./LogoutButton";
import Error from "./Error-form";

// function Login() {
//   const [isToogle, setIsToogle] = useState(true);

//   function handleLoginClick() {
//     setIsToogle(!isToogle);
//   }
//   const handleLogoutClick = () => {
//     setIsToogle(!isToogle);
//   };
//   function renderButton() {
//     let button;
//     if (isToogle) {
//       button = <LogoutButton onClick={handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={handleLoginClick} />;
//     }
//     return button;
//   }

function Login(props) {
  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: valueInput }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    let errorsSubmit = {};
    let flag = true;
    if (inputs.email == "") {
      errorsSubmit.email = "vui long nhap Email";
      flag = false;
    }
    if (inputs.pass == "") {
      errorsSubmit.pass = " Vui long nhap Pass! ";
      flag = false;
    }
    if (!flag) {
      // setErrors({});
      setErrors(errorsSubmit);
      // console.log("ads");
    } else {
      setErrors({});
      // setErrors(errorsSubmit);
      // console.log("ads");
    }
    localStorage.setItem("info", JSON.stringify(inputs));
  }
  // function local() {
  //   const jj = {};
  //   jj = localStorage.getItem("info");
  //   if (jj) {
  //     jj = JSON.parse(jj);
  //     inputs = jj;
  //   }
  // }

  // function renderError() {
  //   if (Object.keys(errors).length > 0) {
  //     return Object.keys(errors).map((key, index) => {
  //       return <li key={index}> {errors[key]}</li>;
  //     });
  //   }
  // }
  return (
    <div className="App">
      <h1> Hello em , ít thì 5 quả trứng , nhiều thì 1 tên lửa </h1>
      {/* {renderButton()} */}
      {/* {renderError() */}
      <Error error={errors} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInput}
        ></input>

        <input
          type="password"
          placeholder="Nhap pass di "
          name="pass"
          onChange={handleInput}
        ></input>

        <button type="submit" className="btn btn-default">
          Login !
        </button>
      </form>
    </div>
    //what the hell ??

    // <div className="App">
    //   <section id="form">
    //     {/*form*/}
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-sm-4 col-sm-offset-1">
    //           <div className="login-form">
    //             {/*login form*/}
    //             <h2>Login to your account</h2>
    //             <form action="#">
    //               <input type="text" placeholder="Name" />
    //               <input type="email" placeholder="Email Address" />
    //               <span>
    //                 <input type="checkbox" className="checkbox" />
    //                 Keep me signed in
    //               </span>
    //               <button type="submit" className="btn btn-default">
    //                 Login
    //               </button>
    //             </form>
    //           </div>
    //           {/*/login form*/}
    //         </div>
    //         <div className="col-sm-1">
    //           <h2 className="or">OR</h2>
    //         </div>
    //         <div className="col-sm-4">
    //           <div className="signup-form">
    //             {/*sign up form*/}
    //             <h2>New User Signup!</h2>
    //             <form action="#">
    //               <input type="text" placeholder="Name" />
    //               <input type="email" placeholder="Email Address" />
    //               <input type="password" placeholder="Password" />
    //               <button type="submit" className="btn btn-default">
    //                 Signup
    //               </button>
    //             </form>
    //           </div>
    //           {/*/sign up form*/}
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   {/*/form*/}
    // </div>
  );
}

export default Login;
