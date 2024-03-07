import React from "react";
import FormDangKy from "./components/form-dang-ky/form-dang-ky";
import StudentTable from "./components/student-table";
import { useDispatch } from "react-redux";
import { searchStudent } from "../../redux/quanLySV.slice";

function QuanLySinhVien() {
  const dispatch = useDispatch()
  return (
    <div className="container">
      <div className="title" style={{ backgroundColor: "black" }}>
        <h4 className="text-white p-3">Thông tin sinh viên</h4>
      </div>
      <FormDangKy />
      <div className="mt-5">
        <div className="d-flex gap-2">
          <input placeholder="Nhập vào tên sinh viên cần tìm kiếm 🔎 " className="form-control w-25" onChange={(e) =>{
           dispatch(searchStudent(e.target.value))
           console.log(e.target.value.trim().toUpperCase())
          }} />
        </div>
      </div>

      <div className="mt-2">
        <StudentTable />
      </div>
    </div>
  );
}
export default QuanLySinhVien;
