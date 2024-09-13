import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  patientId: null,
  userType: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.patientId = action.payload.patientId;
      state.userType = action.payload.userType;
    },
    clearUserData: (state) => {
      state.patientId = null;
      state.userType = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;

