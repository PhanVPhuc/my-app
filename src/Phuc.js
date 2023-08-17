import Nhu from "./Nhu";
import React from "react";

function Phuc(props) {
  console.log(props);
  return (
    <>
      đây là trang Phuc : {props.data2.name}
      {/* ĐÂY LÀ : {props.data3} */}
      <Nhu data4={props.data2} data5={props.data3} />
    </>
  );
}

export default Phuc;
