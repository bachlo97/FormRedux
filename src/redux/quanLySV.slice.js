import { createSlice } from "@reduxjs/toolkit";
import { Validator } from "../module/QLSV/components/form-dang-ky/utils/validator";

const getStudentListFromLocal = () => {
  let res = localStorage.getItem("dssv");

  if (res) {
    return JSON.parse(res);
  }
  return [];
};

const initialState = {
  values: {
    maSV: "",
    name: "",
    sdt: "",
    email: "",
  },

  touches: {
    maSV: false,
    name: false,
    sdt: false,
    email: false,
  },

  errors: {
    maSV: "",
    name: "",
    sdt: "",
    email: "",
  },
  dssv: getStudentListFromLocal(),
  buttonState: false,
  checkSearch: false,
};
const quanLySVSlice = createSlice({
  name: "quanLySVSlice",
  initialState,
  reducers: {
    handleChangeValue: (state, action) => {
      state.values[action.payload.nameType] = action.payload.nameValue;
    },
    handleBlur: (state, action) => {
      state.touches[action.payload] = true;
    },
    handleValidate: (state, action) => {
      const value = state.values[action.payload];
      switch (action.payload) {
        case "maSV":
          state.errors[action.payload] = new Validator(value)
            .require()
            .checkNumber()
            .checkUsedId(state.dssv,state.buttonState)
            .getMessage();
          break;
        case "name":
          state.errors[action.payload] = new Validator(value)
            .require()
            .string()
            .min(2)
            .getMessage();
          break;
        case "email":
          state.errors[action.payload] = new Validator(value)
            .require()
            .email()
            .getMessage();
          break;

        case "sdt":
          state.errors[action.payload] = new Validator(value)
            .require()
            .checkNumber()
            .min(9)
            .max(11)
            .getMessage();
          break;
        default:
      }
    },
    handleSubmit: (state) => {
      const check = Object.entries(state.errors).every(
        ([, value]) => value === ""
      );
      if (check) {
        if (!state.buttonState) {
          //* Gửi dữ liệu xuống table (xử lý thêm SV)
          const newSV = { ...state.values };
          state.dssv.push(newSV);
          
        } else {
          //* Cập nhật lại table (xử lý chỉnh sửa SV)
          const newSV = {...state.values}
          const index = state.dssv.findIndex(item => item.maSV === newSV.maSV)
          state.dssv[index] = newSV
        } 
        //Reset form
        for (let key in state.values) {
          state.touches[key] = false;
          state.values[key] = "";
        }

        localStorage.setItem("dssv", JSON.stringify(state.dssv));
        state.buttonState = false;
      }
    },
    deleteStudent: (state, action) => {
      state.dssv = state.dssv.filter((item) => item.maSV !== action.payload);
      localStorage.setItem("dssv", JSON.stringify(state.dssv));
    },
    renderFormToEdit: (state, action) => {
      let sv = state.dssv.find((item) => item.maSV === action.payload);
      state.values = sv;
      state.errors = { maSV: "", name: "", sdt: "", email: "" };
      state.buttonState = true;
    },
    searchStudent : (state,action) => {
      const newDSSV = getStudentListFromLocal()
      state.dssv = newDSSV.filter(item => item.name.trim().toUpperCase().search(action.payload.trim().toUpperCase()) !== -1)
      if(action.payload.trim() === ''){
        state.dssv = getStudentListFromLocal()
        state.checkSearch = false
      }else{
        state.checkSearch = true
      }

    }
  },
});

export const {
  handleChangeValue,
  handleBlur,
  handleValidate,
  handleSubmit,
  deleteStudent,
  renderFormToEdit,
  searchStudent
} = quanLySVSlice.actions;
export const quanLySVReducer = quanLySVSlice.reducer;
