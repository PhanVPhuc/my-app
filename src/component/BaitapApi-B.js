import React, { useEffect, useState } from "react";

function AxiosB(props) {
  const data = props.data;

  console.log(data);

  return <div className="App">This is page B</div>;
}

export default AxiosB;
