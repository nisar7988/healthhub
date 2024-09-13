import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/store/userReducer';
import { Provider } from 'react-redux';
import adminReducer from './components/store/adminReducer';
import reducer from './components/store/reducer';
import doctorReducer from './components/store/doctorReducer';
import patientReducer from './components/store/patientReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    user: userReducer, 
    login: reducer,
    AdminInfo: adminReducer,
    DoctorInfo: doctorReducer,
    PatientInfo: patientReducer

  },
})
root.render(
  

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
