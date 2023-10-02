import axios from "axios";
import React, { useEffect, useState } from "react";
import AxiosB from "./BaitapApi-B";

function AxiosA(props) {
  const [data, setData] = useState([]);

  // bai 18.1
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  //bai 18.2
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.data.length > 0) {
          const randomIndex = Math.floor(Math.random() * res.data.length);
          setData(res.data[randomIndex]);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return <AxiosB data={data} />;
}

export default AxiosA;
