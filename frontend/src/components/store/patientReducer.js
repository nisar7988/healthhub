import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    patient:  JSON.parse(localStorage.getItem('patientInfo')) || null,
    userType: JSON.parse(localStorage.getItem('patientInfo')) || null,
}

const PatientReducer = createSlice({
    name: 'PatientInfo',
    initialState,
    reducers: {
        setPatientInfo: (state, action ) => {

            console.log("action :" , action.payload);
            
            state.patient = action.payload[0];
            console.log(state.patient);
            
            
        }

    }
})

export const { setPatientInfo } = PatientReducer.actions;
export default PatientReducer.reducer;