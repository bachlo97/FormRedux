import React from "react";

function StudentTable() {
  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Mã SV</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button className="btn btn-primary me-4">Sửa</button>
              <button className="btn btn-danger">Xoá</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
