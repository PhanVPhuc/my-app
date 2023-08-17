import React from "react";
function Nhu(props) {
  console.log(props);
  return (
    <>
      đây là trang Nhu : {props.data4.name}
      {/* TUI LA NHU  */}
      ĐÂY LÀ trang Nhu : {props.data5}
    </>
  );
}

export default Nhu;
