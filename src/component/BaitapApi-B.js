import React, { useEffect, useState } from "react";

function AxiosB(props) {
  // const data = props.data;
  const { data } = props;
  // console.log(props);
  function renderData() {
    // console.log(data); // kiểm tra đã lấy được data từ api chưa ?
    //
    //
    //  render data array
    // if (data.length > 0) {
    //   // nó là làm điều kiện cho array
    //   return data.map((value, key) => {
    //     return (
    //       <div key={key}>
    //         <p>- ID: {value.id}</p>
    //         <p>- Name: {value.name}</p>
    //         <p>- Username: {value.username}</p>
    //         <p>- Email: {value.email} </p>
    //         <p>- Address </p>
    //         <ul>
    //           <li>
    //             <p>+ Street : {value.address.street} </p>
    //           </li>
    //           <li>
    //             <p>+ Suite : {value.address.suite} </p>
    //           </li>
    //         </ul>
    //         <p>- Phone : {value.phone} </p>
    //         <p>- Website : {value.website} </p>
    //         <p>- Company</p>
    //         <ul>
    //           <li>
    //             <p>+ Name : {value.company.name} </p>
    //           </li>
    //           <li>
    //             <p>+ CatchPhrase : {value.company.catchPhrase} </p>
    //           </li>
    //         </ul>
    //       </div>
    //     );
    //   });
    // }
    //  //
    //  //
    // render data obj
    console.log({ data }.data);
    if (Object.keys.length > 0) {
      return (
        <div>
          <p>-ID : {data.id}</p>
          <p>- Name : {data.name} </p>
          <p>- Username: {data.username}</p>
          <p>- Email: {data.email} </p>
          <p>- Address </p>
          <ul>
            <li>
              <p>+ Street : {data.address} </p>
            </li>
            <li>
              <p>+ Suite : {data.suite} </p>
            </li>
          </ul>
          {/* <p>- Name: {data.name}</p>
          <p>- Username: {data.username}</p>
          <p>- Email: {data.email} </p>
          <p>- Address </p>
          <ul>
            <li>
              <p>+ Street : {data.address.street} </p>
            </li>
            <li>
              <p>+ Suite : {data.address.suite} </p>
            </li>
          </ul>
          <p>- Phone : {data.phone} </p>
          <p>- Website : {data.website} </p>
          <p>- Company</p>
          <ul>
            <li>
              <p>+ Name : {data.company.name} </p>
            </li>
            <li>
              <p>+ CatchPhrase : {data.company.catchPhrase} </p>
            </li>
          </ul> */}
        </div>
      );
    }
    //
  }
  return (
    <div>
      <p>pour data from B page to A page</p>
      {renderData()}
    </div>
  );
}

export default AxiosB;
