import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isValid : localStorage.getItem('userType') ? true  : false,
    userType: localStorage.getItem('userType') ? JSON.parse(localStorage.getItem('userType')): null,
    showLoginModal: false
}

const Reducer = createSlice({
    name : 'login',
    initialState,
    reducers : {    
        valid: (state, action) => {
            state.isValid = true;
            console.log('payload is:',action.payload)
            state.userType = action.payload;  // Update userType based on payload
        },
        inValid: (state) => {
            state.isValid = false;
            state.userType = null;
            localStorage.removeItem('userType');
            localStorage.removeItem('patientInfo');
            localStorage.removeItem('doctorInfo');
            localStorage.removeItem('adminInfo');
            localStorage.removeItem('patientData')

        
        },
        setShowLoginModal:(state, action)=>{
            console.log(action);
            state.showLoginModal = action.payload;
        }
    },
})

export const {valid, inValid ,setShowLoginModal } = Reducer.actions;
export  default Reducer.reducer;