import React from "react";
import { useState } from "react";

function Login() {
  // const [name, setName] = useState("Moi ban nhap username");
  // const [pass, setPass] = useState("Moi ban nhap password");
  // const isLogin = () => {
  //   setName("Moi ban nhap username");
  //   setPass("Moi ban nhap password");
  // };

  function userGreeting(props) {
    return <h1>Welcome Back!</h1>;
  }
  function guestGreeting(props) {
    return <h1>Please sign up!</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <userGreeting />;
    }
    return <guestGreeting />;
  }

  return (
    <div className="App">
      <section id="form">
        {/*form*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-1">
              <div className="login-form">
                {/*login form*/}
                <h2>Login to your account</h2>
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email Address" />
                  <span>
                    <input type="checkbox" className="checkbox" />
                    Keep me signed in
                  </span>
                  <button type="submit" className="btn btn-default">
                    Login
                  </button>
                </form>
              </div>
              {/*/login form*/}
            </div>
            <div className="col-sm-1">
              <h2 className="or">OR</h2>
            </div>
            <div className="col-sm-4">
              <div className="signup-form">
                {/*sign up form*/}
                <h2>New User Signup!</h2>
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email Address" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" className="btn btn-default">
                    Signup
                  </button>
                </form>
              </div>
              {/*/sign up form*/}
            </div>
          </div>
        </div>
      </section>
      {/*/form*/}
    </div>
  );
}

export default Login;
