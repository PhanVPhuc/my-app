import { useState } from "react";

// cau truc 1 component : la nhung doan html dc viet ben trong js
function App(props) {
  const [getEmail, setEmail] = useState("");
  const [getPass, setPass] = useState("");
  const [err1, setErr1] = useState("");
  const [err2, setErr2] = useState("");

  function xulyEmail(e) {
    // lay value nhap vao => setEmail
    setEmail(e.target.value);
  }

  function xulyPass(e) {
    // lay value nhap vao => setEmail
    setPass(e.target.value);
  }

  function xulyForm(e) {
    // dung lai form
    e.preventDefault();
    let x = 1;
    if (getEmail == "") {
      setErr1("vui long nhap email");
      x = 2;
    } else {
      setErr1("");
    }
    if (getPass == "") {
      setErr2("vui long nhap pass");
      x = 2;
    } else {
      setErr2("");
    }

    // if(getEmail != "" && getPass !=""){
    if (x == 1) {
      alert("ok");
    }
  }

  // chay lai khi state thay doi
  return (
    // viet html vaoday /
    <>
      <p>xu ly form </p>
      <form onSubmit={xulyForm}>
        <input type="text" id="123" value={getEmail} onChange={xulyEmail} />
        <p>{err1}</p>

        <input type="text" id="123" value={getPass} onChange={xulyPass} />
        <p>{err2}</p>
        <button>click</button>
      </form>
    </>
  );
}
export default App;
