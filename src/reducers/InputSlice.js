import { createSlice } from '@reduxjs/toolkit'
export const InputSlice = createSlice({
  name: 'input',
  initialState: {
    AAAO1: 0,
    AAAO2: 0,
    EEEO1: 0,
    MMMO1: 1,
    CCCO1: 0,
    EEEO3: 0,
    EEEO2: 0,
    FFF01: 0,
    LLL05: 0,
    LLL01: 0,
    LLL02: 0,
    LLL03: 0,
    CCCO2: 0,
    IIIO1: 0,
    JJJO1: 0,
    GGGO1: 0,
    GGGO2: 0,
    HHH01: 0,
    HHH02: 0,
    HHH03: 0,
    Currency: '$',
    Auth: false,
    MenuIcon: true,
    Username: '',
    Email: '',
    UserId: '',
    Level: '',
    FirstName: '',
    Lastname: '',
    Aperiod: 0,
    RPeriod: 0
  },
  reducers: {
    InputHHH01: (state, action) => {
      state.HHH01 = action.payload
    },
    InputHHH02: (state, action) => {
      state.HHH02 = action.payload
    },
    InputHHH03: (state, action) => {
      state.HHH03 = action.payload
    },
    InputGGGO2: (state, action) => {
      state.GGGO2 = action.payload
    },
    InputFFF01: (state, action) => {
      state.FFF01 = action.payload
    },
    InputAAAO1: (state, action) => {
      state.AAAO1 = action.payload
    },
    InputLLL05: (state, action) => {
      state.LLL05 = action.payload
    },
    InputLLL01: (state, action) => {
      state.LLL01 = action.payload
    },
    InputLLL02: (state, action) => {
      state.LLL02 = action.payload
    },
    InputLLL03: (state, action) => {
      state.LLL03 = action.payload
    },
    InputAAAO2: (state, action) => {
      state.AAAO2 = action.payload
    },
    InputEEEO1: (state, action) => {
      state.EEEO1 = action.payload
    },
    InputMMMO1: (state, action) => {
      state.MMMO1 = action.payload
    },
    InputCCCO1: (state, action) => {
      state.CCCO1 = action.payload
    },
    InputEEEO3: (state, action) => {
      state.EEEO3 = action.payload
    },
    InputEEEO2: (state, action) => {
      state.EEEO2 = action.payload
    },
    InputCCCO2: (state, action) => {
      state.CCCO2 = action.payload
    },
    InputGGGO1: (state, action) => {
      state.GGGO1 = action.payload
    },
    InputIIIO1: (state, action) => {
      state.IIIO1 = action.payload
    },
    InputJJJO1: (state, action) => {
      state.JJJO1 = action.payload
    },
    InputCurrency: (state, action) => {
      state.Currency = action.payload
    },
    InputAuth: (state, action) => {
      state.Auth = action.payload
    },
    InputMenuIcon: (state, action) => {
      state.MenuIcon = action.payload
    },
    InputUsername: (state, action) => {
      state.Username = action.payload
    },
    InputEmail: (state, action) => {
      state.Email = action.payload
    },
    InputUserId: (state, action) => {
      state.UserId = action.payload
    },
    InputLevel: (state, action) => {
      state.Level = action.payload
    },
    InputFirstName: (state, action) => {
      state.FirstName = action.payload
    },
    InputLastname: (state, action) => {
      state.Lastname = action.payload
    },
    InputAperiod: (state, action) => {
      state.Aperiod = action.payload
    },
    InputRPeriod: (state, action) => {
      state.RPeriod = action.payload
    }
  },
})
export const {InputHHH01,InputHHH02,InputHHH03 ,InputGGGO2,InputFFF01,InputAAAO1,InputLLL01, InputAAAO2, InputEEEO1, InputMMMO1, InputCCCO1,InputLLL05,InputLLL02,InputLLL03, InputEEEO3, InputEEEO2, InputCCCO2, InputGGGO1, InputIIIO1, InputJJJO1, InputCurrency, InputMenuIcon, InputAuth, InputRPeriod, InputUsername, InputEmail,
  InputUserId, InputLevel, InputFirstName, InputLastname, InputAperiod } = InputSlice.actions
export default InputSlice.reducer