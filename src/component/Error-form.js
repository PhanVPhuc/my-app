import React, { useState } from "react";

function Error(props) {
  console.log(props);
  function renderError() {
    let { errors } = props;
    if (Object.keys(errors).length > 0) {
      return Object.keys(errors).map((key, index) => {
        return <li key={index}>{errors[key]} </li>;
      });
    }
  }
  return <ul>{renderError()}</ul>;
}
export default Error;
