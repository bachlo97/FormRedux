import { createSlice } from "@reduxjs/toolkit";
import { Validator } from "../module/QLSV/components/form-dang-ky/utils/validator";
// import
const getStudentListFromLocal = () =>{
  let res = localStorage.getItem('dssv')

  if(res){
    return JSON.parse(res)
  }
  return [];
}


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
  checkNoError:false,
  dssv: getStudentListFromLocal(),
  isFirstTimeVisit : true
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
    handleChangeTimeVisitToFalse: (state, action)=>{
      state.isFirstTimeVisit = false;
    },
    handleValidate: (state, action) => {
      const value = state.values[action.payload]
      switch (action.payload) {
        case 'maSV':
          state.errors[action.payload] = new Validator(value)
            .require()
            .checkNumber()
            .getMessage()
          break;
        case 'name':
          state.errors[action.payload] = new Validator(value)
            .require()
            .string()
            .min(2)
            .getMessage();
          break;
        case 'email':
          state.errors[action.payload] = new Validator(value)
            .require()
            .email()
            .getMessage();
          break;

        case 'sdt':
          state.errors[action.payload] = new Validator(value)
            .require()
            .checkNumber()
            .min(9)
            .max(11)
            .getMessage()
          break;
        default:
      }
    },
    resetForm: (state) => {

      for (let key in state.values) {
        state.touches[key] = false
        state.values[key] = '';
      }
    },
    checkError: (state) =>{
      const check = Object.entries(state.errors).every(([, value]) => value === "");
      if(check){
        state.checkNoError = true;
      }
    }
  },
});

export const { handleChangeValue, handleBlur, handleValidate,resetForm,checkErro, handleChangeTimeVisitToFalse} = quanLySVSlice.actions;
export const quanLySVReducer = quanLySVSlice.reducer;
