import AxiosA from "./BaitapApi-A";
import React from "react";
function AxiosB({ data }) {
  // Xử lý dữ liệu trong biến data ở đây
  if (!data) {
    return <div>Dữ liệu chưa được truyền vào</div>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default AxiosB;
