import React from "react";
import Input from "./components/input";
import useCustomHook from "./hooks/custom-hook";
function FormDangKy() {
  const [, { onSubmit, getFieldProps }] = useCustomHook()
  console.log({onSubmit})
  return (
    <form className="form-sv" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <Input label={"Mã SV"} {...getFieldProps('maSV')}/>
          </div>
          <div className="mb-3">
            <Input label={"Số điện thoại"} {...getFieldProps('sdt')} />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <Input label={"Họ tên"} {...getFieldProps('name')}  />
          </div>
          <div className="mb-3">
            <Input label={"Email"} {...getFieldProps('email')} />
          </div>
        </div>
      </div>
      <button className="btn btn-success tsv mt-2">Thêm Sinh Viên</button>
    </form>
  );
}

export default FormDangKy;
