import React from "react";
import { useState } from "react";
import LoginButton from "./LoginButon";
import LogoutButton from "./LogoutButton";

function Login() {
  const [isToogle, setIsToogle] = useState(true);

  function handleLoginClick() {
    setIsToogle(!isToogle);
  }
  const handleLogoutClick = () => {
    setIsToogle(!isToogle);
  };
  function renderButton() {
    let button;
    if (isToogle) {
      button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={handleLoginClick} />;
    }
    return button;
  }
  return (
    <div className="App">
      <h1> Chao em </h1>
      {renderButton()}
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
