import React, { Children } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleBlur,
  handleChangeValue,
  handleValidate,
  resetForm,
} from "../../../../../redux/quanLySV.slice";

const useCustomHook = () => {
  const dispatch = useDispatch();
  const valuesHook = useSelector((state) => state.quanLySVReducer.values);
  const errorsHook = useSelector((state) => state.quanLySVReducer.errors);
  const touchesHook = useSelector((state) => state.quanLySVReducer.touches);
  const dssvHook = useSelector((state) => state.quanLySVReducer.dssv);
  const handleChangeValueHook = (e) => {
    dispatch(
      handleChangeValue({
        nameType: e.target.name,
        nameValue: e.target.value,
      })
    );
  };

  const handleBlurHook = (e) => {
    dispatch(handleBlur(e.target.name));
    dispatch(handleValidate(e.target.name));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const allTouches = Object.entries(touchesHook).every(([, value]) => value);
    console.log("first", touchesHook);
    if (!allTouches) {
      Object.entries(touchesHook).forEach((resp) => {
        const [field, value] = resp;
        if (!value) {
          dispatch(handleBlur(field));
          dispatch(handleValidate(field));
        }
      });
    }
    const checkNoError = Object.entries(errorsHook).every(
      ([, value]) => value === ""
    );


    if (!checkNoError) {
      return;
    }
    //reset
    dispatch(resetForm());
  };

  const getFieldProps = (name) => {
    return {
      name,
      value: valuesHook[name],
      error: touchesHook[name] && errorsHook[name],
      onChange: handleChangeValueHook,
      onBlur: handleBlurHook,
    };
  };

  //Lưu danh sách sinh viên vào localStorage:
  // localStorage.setItem('dssv',JSON.stringify(dssvHook))
  return [
    { touchesHook, errorsHook },
    { getFieldProps, onSubmit },
  ];
};

export default useCustomHook;


