import React, { useEffect, useState } from "react";

function AxiosB(props) {
  const data = props.data;

  function renderData() {
    // console.log(data); //kiểm tra đã lấy được data từ api chưa ?
    if (!data) return null; // Check nếu data tồn tại trong hàm

    if (data.length > 0) {
      return data.map((value, key) => {
        return (
          <div key={value.id}>
            <p>- ID: {value.id}</p>
            <p>- Name: {value.name}</p>
            <p>- Username: {value.username}</p>
            <p>- Email: {value.email} </p>
            <p>- Address </p>
            <ul>
              <li>
                <p>+ Street : {value.address.street} </p>
              </li>
              <li>
                <p>+ Suite : {value.address.suite} </p>
              </li>
            </ul>
            <p>- Phone : {value.phone} </p>
            <p>- Website : {value.website} </p>
            <p>- Company</p>
            <ul>
              <li>
                <p>+ Name : {value.company.name} </p>
              </li>
              <li>
                <p>+ CatchPhrase : {value.company.catchPhrase} </p>
              </li>
            </ul>
          </div>
        );
      });
    }
  }
  return (
    <div>
      <p>ALOO B page</p>
      <ul>{renderData()}</ul>
    </div>
  );
}

export default AxiosB;
