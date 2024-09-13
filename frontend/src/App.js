import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindaDoctor from "./components/FindaDoctor";
import Emergency from "./components/Emergency";
import FindHospitals from "./components/FindHospitals";
import SetModal from "./components/SetModal";
import SignupDoctor from "./components/SignupDoctor";
import BookAmbulance from "./components/BookAmulance";
import BookAppointment from "./components/BookAppointment/BookAppointent";
import DoctorDashBoard from "./components/Doctor/DoctorSignup";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import DentistDoctors from "./components/DentistDoctor";
import { Neurology } from "./components/Neurology";
import DoctorSignupForm from "./components/Doctor/DoctorSignup";
// import { Cardiologist } from './components/Cardiologist';
// import Orthopedic from './components/Orthopedic';

import { lazy, Suspense } from "react";
import NotFound from "./components/Error/NotFound";
import DoctorManagement from "./components/Doctor/Doctors";
import DoctorRecord from "./components/Doctor/DoctorRecord";
import PatientProfile from "./components/Patient/PatientProfile";
import BookingForm from "./components/Booking";
// import SomeComponent from './components/Example';
// import SomeComponent1 from './components/DoctorProfile';
import AdminProfie from "./components/Admin/AdminProfie";
import DashboardDoctor from "./components/Doctor/DoctorProfile";
import DoctorProfile from "./components/Doctor/Profiledoctor";

import Patientrecord from './components/Patient/Patientrecord';
import AppointmentForm from "./components/BookAppointment/AppointmentForm";
import PatientDashBoard from "./components/Patient/Patient";
// import AdminDashboard from './components/Admindashboard';

import LoginModal from "./components/LoginPage";
import BookAppointmentRecord from "./components/BookAppointment/BookAppointmentRecord";
import LogoutPage from "./components/LogoutPage";
import PatientHome from "./components/Patient/PatientHome";
import AppointmentBooking from "./components/BookAppointment/AppointmentBooking";
import DoctorHome from "./components/Doctor/DoctorHome";
import DoctorAppointments from "./components/Doctor/DoctorAppointmentRecord";
import PatientFeedbackForm from "./components/Patient/PatientFeedbackForm";
import { Payment } from "./components/Payment/Payment";
// import SignupPatient from './components/SignupPatient';
const SignupPatient = lazy(() => import("./components/SignupPatient"));
const Cardiologist = lazy(() => import("./components/Cardiologist"));
const Orthopedic = lazy(() => import("./components/Orthopedic"));
// const LoginPage = lazy(() => import("./components/LoginPage"));
// const PatientLayout= lazy(() => import('./components/Patient'))
const AdminDashboard = lazy(() => import("./components/Admin/Admindashboard"));
// const Patientrecord = lazy(() => import("./components/Patientrecord"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/findadoctor" element={<FindaDoctor />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/example" element={<SetModal />} />
          <Route path="/signup-doctor" element={<SignupDoctor />} />
          {/* <Route path='/signup-patient' element={<SignupPatient />} /> */}
          <Route path="/doctordashboard" element={<DoctorDashBoard />} />
          <Route path="/patient1" element={<PatientProfile />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/dentist" element={<DentistDoctors />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/hospital" element={<FindHospitals />} />
          <Route path="/findadoctor" element={<FindaDoctor />} />
          <Route path="/bookambulance" element={<BookAmbulance />} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/profiledoctor" element={<DoctorProfile />} />
          <Route path="/appointmentform" element={<AppointmentForm />} />
          <Route path="*" element={<NotFound />} />

          {/* <Route path="/doctors" element={<DoctorManagement />} /> */}
          {/* <Route path="/doctors/doctordashboard" element={<DoctorSignupForm />} /> */}
          {/* <Route path="/doctors/appointmentrecord" element={<BookAppointmentRecord  />}           /> */}
          <Route
            path="/signup-patient"
            element={
              <Suspense fallback="loading......">
                <SignupPatient />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={<LoginModal />

            }
          />

          <Route
            path="/cardiologist"
            element={
              <Suspense fallback="loading......">
                <Cardiologist />
              </Suspense>
            }
          />
          <Route
            path="/orthopedic"
            element={
              <Suspense fallback="loading......">
                <Orthopedic />
              </Suspense>
            }
          />



          <Route path="/admindashboard" element={
            <Suspense fallback="loading......">
              <AdminDashboard />
            </Suspense>
          } >
            <Route path="/admindashboard" element={<DoctorManagement />} />
            <Route path="/admindashboard/" element={<AdminDashboard />} />
            <Route path="/admindashboard/doctordashboard" element={<DoctorSignupForm />} />
            <Route path="/admindashboard/appointmentrecord" element={<BookAppointmentRecord />} />
            <Route path="/admindashboard/patientrecord" element={<Patientrecord />} />
            <Route path="/admindashboard/doctorrecord" element={<DoctorRecord />} />
            <Route path="/admindashboard/adminprofile" element={<AdminProfie />} />
            {/* <Route path="profile" element={<AdminProfie />} /> */}
            {/* <Route path="patients" element={<PatientList />} /> */}
          </Route>
          <Route path="/logout" element={<LogoutPage />} />



          <Route path="/patientdashboard" element={<PatientDashBoard />} >
            <Route path="/patientdashboard/" element={<PatientHome />} />
            <Route path="/patientdashboard/patientprofile" element={<PatientProfile />} />
            <Route path="/patientdashboard/bookappointment" element={<AppointmentBooking />} />
            <Route path="/patientdashboard/feedback" element={<PatientFeedbackForm/>} />
          <Route path="/patientdashboard/payment" element={<Payment/>} />
          </Route>


          <Route path="/doctorboard" element={<DashboardDoctor />} >
            <Route path="/doctorboard/" element={<DoctorHome />} />
            <Route path="/doctorboard/doctorprofile" element={<DoctorProfile />} />
            <Route path="/doctorboard/appointment" element={<AppointmentForm />} />
            <Route path="/doctorboard/recorddoctor" element={<DoctorAppointments />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
