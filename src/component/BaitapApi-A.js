import axios from "axios";
import React, { useEffect, useState } from "react";
import AxiosB from "./BaitapApi-B";

function AxiosA() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return <AxiosB data={data} />;
}
export default AxiosA;
