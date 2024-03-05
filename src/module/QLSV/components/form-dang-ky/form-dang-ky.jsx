import React from "react";
import Input from "./components/input";
import useCustomHook from "./hooks/custom-hook";
function FormDangKy() {
  const [valuesHook,handleChangeValueHook] =useCustomHook()
  console.log({valuesHook})
  console.log(handleChangeValueHook)
  return (
    <form className="form-sv" onSubmit={(e)=>{
      e.preventDefault()
    }}>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <Input label={"Mã SV"} onChange={handleChangeValueHook} name='name'/>
          </div>
          <div className="mb-3">
            <Input label={"Số điện thoại"} />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <Input label={"Họ tên"} />
          </div>
          <div className="mb-3">
          <Input label={"Email"} />
          </div>
        </div>
      </div>
      <button className ="btn btn-success tsv mt-2" onClick={handleChangeValueHook}>Thêm Sinh Viên</button>
    </form>
  );
}

export default FormDangKy;
