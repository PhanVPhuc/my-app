import React, { useEffect, useState } from "react";
import axios from "axios";
function DemoAxios() {
  // GET Request
  //   const [data, Setdata] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users") //lấy dữ liệu của fake API
  //       .then((res) => {
  //         Setdata(res.data); // truyền dữ liệu từ setData vào res.data . nghĩa là truyền vào data đoá
  //       })
  //       .catch((error) => console.log(error)); // gọi lỗi ra nếu lây api hỏng
  //   }, []);
  //   function renderData() {
  //     // console.log(data); //kiểm tra đã lấy được data từ api chưa ?
  //     if (data.length > 0) {
  //       return data.map((value, key) => {
  //         return (
  //           <li key={key}>
  //             <p>{value.id}</p>
  //             <p>{value.name}</p>
  //           </li>
  //         );
  //       });
  //     }
  //   }

  //   POST Request
  // truyền dữ liệu vào api
  const [input, setInput] = useState(""); //khởi đầu là ""

  function handleChange(e) {
    setInput(e.target.value); //lấy value vừa nhập
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: input,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        console.log(res);
      });
  }

  return (
    // GET Request
    // <ul>
    //   {renderData()}
    //   <p>Đã lấy được giá trị từ Fake API !</p>
    // </ul>

    //POST Request
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={input}
          onChange={handleChange}
        />
        <button type="submit"> Click me to SUSmit !</button>
      </form>
    </>
  );
}

export default DemoAxios;
