import React, { useEffect, useState } from "react";
import axios from "axios";
function DemoAxios() {
  // GET Request
  const [data, Setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") //lấy dữ liệu của fake API
      .then((res) => {
        Setdata(res.data); // truyền dữ liệu từ setData vào res.data . nghĩa là truyền vào data đoá
      })
      .catch((error) => console.log(error)); // gọi lỗi ra nếu lây api hỏng
  }, []);
  function renderData() {
    console.log(data); //kiểm tra đã lấy được data từ api chưa ?
    if (data.length > 0) {
      return data.map((value, key) => {
        return (
          <li key={key}>
            <p>{value.id}</p>
            <p>{value.name}</p>
          </li>
        );
      });
    }
  }

  //   POST Request
  // truyền dữ liệu vào api
  // muốn truyền bao nhiêu thì khai báo bấy nhiêu
  const [input, setInput] = useState(""); //khởi đầu là ""

  function handleChange(e) {
    setInput(e.target.value); //lấy value vừa nhập
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: input, // khai báo 1 phần tử input
    };
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        console.log(res);
      });
  }

  // DELETE Request
  // xóa 1 hoặc nhiều khỏi api bằng axios.delete
  const [inputId, setInputId] = useState(""); // khởi đầu của input là ""

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      id: inputId,
    };
    axios
      .delete("https://jsonplaceholder.typicode.com/users", data)
      .then((res) => {
        // res này là kết quả API trả về , có thể đúng hoặc sai , nên log ra xem
        console.log(res);
      });
  }

  return (
    <>
      //POST Request
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={input}
          onChange={handleChange}
        />
        <button type="submit"> Click me to SUSmit !</button>
      </form>
      // DELETE Request
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={input} onChange={handleChange} />
        <button type="submit">Delete</button>
      </form>
      // GET Request
      <ul>
        {renderData()}
        <p>Đã lấy được giá trị từ Fake API !</p>
      </ul>
    </>
  );
}

export default DemoAxios;
