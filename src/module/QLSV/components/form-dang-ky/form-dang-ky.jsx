import React from "react";
import Input from "./components/input";
import useCustomHook from "./hooks/custom-hook";
function FormDangKy() {
  const [{ buttonStateHook,checkSearchHook}, { onSubmit, getFieldProps }] = useCustomHook();
  return (
    <form className="form-sv" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <Input label={"Mã SV"} {...getFieldProps("maSV")} disabled={checkSearchHook || buttonStateHook} />
          </div>
          <div className="mb-3">
            <Input label={"Số điện thoại"} {...getFieldProps("sdt")} disabled={checkSearchHook} />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <Input label={"Họ tên"} {...getFieldProps("name")} disabled={checkSearchHook} />
          </div>
          <div className="mb-3">
            <Input label={"Email"} {...getFieldProps("email")} disabled={checkSearchHook} />
          </div>
        </div>
      </div>
      {buttonStateHook ? (
        <button className='btn btn-warning tsv mt-2'>Cập nhật sinh viên</button>
      ) : (
        <button className='btn btn-success tsv mt-2' disabled={checkSearchHook}>Thêm sinh viên</button>
      )}
    </form>
  );
}

export default FormDangKy;
