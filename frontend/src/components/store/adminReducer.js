import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    admin :localStorage.getItem('adminInfo') ? true : false,
    userType: JSON.parse(localStorage.getItem('adminInfo')) || null,
}

const AdminReducer = createSlice({
    name : 'AdminInfo',
    initialState,
    reducers : {
        setAdminInfo : (state, action) => {
            console.log('action:' , action.payload);
            
            state.admin = action.payload[0];
            console.log(state.admin[0])
          },
    }
})


export const { setAdminInfo } = AdminReducer.actions;
export default AdminReducer.reducer;

