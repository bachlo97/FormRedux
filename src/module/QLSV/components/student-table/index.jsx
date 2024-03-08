import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudent,
  renderFormToEdit,
} from "../../../../redux/quanLySV.slice";

function StudentTable() {
  const dssv = useSelector((state) => state.quanLySVReducer.dssv);
  const checkSearch = useSelector(
    (state) => state.quanLySVReducer.checkSearch
  );
  const buttonState = useSelector(state => state.quanLySVReducer.buttonState)
  const dispatch = useDispatch();
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
          {dssv.length ? (
            dssv.map((item) => {
              return (
                <tr key={item.maSV}>
                  <th scope="row">{item.maSV}</th>
                  <td>{item.name}</td>
                  <td>{item.sdt}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className={`btn btn-primary me-4 ${!checkSearch ? 'd-inline' : 'd-none'}`}
                      onClick={() => {
                        dispatch(renderFormToEdit(item.maSV));
                      }}
                    >
                      Sửa
                    </button>
                    <button
                      className={`btn btn-danger ${!checkSearch ? 'd-inline' : 'd-none'}`}
                      onClick={() => {
                        dispatch(deleteStudent(item.maSV));
                      }}
                      disabled={buttonState}
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td style={{border:'none'}}>
                <p className="text-danger text-center">Not any thing...</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
