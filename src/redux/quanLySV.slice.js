import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    name: "",
    brand: "",
    processor: "",
    ram: "",
    screen: "",
    os: "",
    card: "",
    storage: "",
  },

  touches: {
    name: false,
    brand: false,
    processor: false,
    ram: false,
    screen: false,
    os: false,
    card: false,
    storage: false,
  },

  errors:{
    name: "",
    brand: "",
    processor: "",
    ram: "",
    screen: "",
    os: "",
    card: "",
    storage: "",
  }
};

const quanLySVSlice = createSlice({
  name: "quanLySVSlice",
  initialState,
  reducers: {
    handleChangeValue: (state,action)=>{
      state.values[action.payload.nameType] = action.payload.nameValue;
    },
    handleBlur:(state,action) =>{
      state.touches[action.payload.nameType] = true;
    },
    handleValidate: (state,action) =>{
      switch(action.payload){
        case 'name':
          // state.errors[action.payload] = new Validatorx
      }
    }
  },
});

export const {handleChangeValue,handleBlur,handleValidate} = quanLySVSlice.actions;
export const quanLySVReducer = quanLySVSlice.reducer;
