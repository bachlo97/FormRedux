import React, { Children } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleBlur,
  handleChangeValue,
  handleValidate,
  handleSubmit,
} from "../../../../../redux/quanLySV.slice";

const useCustomHook = () => {
  const dispatch = useDispatch();
  const valuesHook = useSelector((state) => state.quanLySVReducer.values);
  const errorsHook = useSelector((state) => state.quanLySVReducer.errors);
  const touchesHook = useSelector((state) => state.quanLySVReducer.touches);
  const buttonStateHook = useSelector((state) => state.quanLySVReducer.buttonState);
  const checkSearchHook = useSelector((state) => state.quanLySVReducer.checkSearch);
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
    if (!allTouches) {
      Object.entries(touchesHook).forEach((resp) => {
        const [field, value] = resp;
        if (!value) {
          dispatch(handleBlur(field));
          dispatch(handleValidate(field));
        }
      });
    }

    dispatch(handleSubmit());
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

  return [
    { touchesHook, errorsHook,buttonStateHook,checkSearchHook},
    { getFieldProps, onSubmit },
  ];
};

export default useCustomHook;


