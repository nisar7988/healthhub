import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    doctor:  localStorage.getItem('doctorInfo') ? true : false,
    userType: JSON.parse(localStorage.getItem('doctorInfo')) || null,
}

const DoctorReducer = createSlice({
    name: 'DoctorInfo',
    initialState,
    reducers: {
        setDoctorInfo: (state, action) => {
            console.log('action:' , action.payload);

            state.doctor = action.payload[0]
            // console.log(state.doctor[0]);
            
        }
    }
})


export const { setDoctorInfo } = DoctorReducer.actions;
export default DoctorReducer.reducer;