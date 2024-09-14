import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
//   profile?: ProfileModel
}

const initialState: AuthState = {

}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  }
})

export default authSlice;