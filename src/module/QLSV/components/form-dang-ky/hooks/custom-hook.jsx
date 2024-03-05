import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleBlur,
  handleChangeValue,
} from "../../../../../redux/quanLySV.slice";

const useCustomHook = () => {
  const dispatch = useDispatch();
  const valuesHook = useSelector((state) => state.quanLySVReducer.values);

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
  return [valuesHook, handleChangeValueHook];
};

export default useCustomHook;
