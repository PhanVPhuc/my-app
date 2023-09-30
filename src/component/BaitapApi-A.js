import axios from "axios";
import React, { useEffect, useState } from "react";
import AxiosB from "./BaitapApi-B";

// A.js: Goi Api về, và gọi B vào trong A sau đó truyen object vao B
// B.js: lấy data từ props ra và viêt hàm MAP data render ra the UL va nhiều LI

const [data, setData] = useState([]);
useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setData(res.data);
    })
    .catch((error) => console.log(error));
}, []);

function AxiosA() {
  console.log(data);

  return <AxiosB data={data} />;
}
export default AxiosA;
