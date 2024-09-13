// import React, { useEffect, useState } from "react";
// import { Form, FormGroup, FormLabel, FormControl, Card, Row, Col, Button, Container } from "react-bootstrap";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setShowLoginModal } from "../store/reducer";
// import { useNavigate } from "react-router-dom";
// import { load } from "@cashfreepayments/cashfree-js";
// // import { useNavigate } from "react-router-dom";
// // import LoginModal from "./LoginPage";
// const AppointmentBooking = () => {
//   const [specialties, setSpecialties] = useState([]);
//   const [selectedSpecialty, setSelectedSpecialty] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [showDoctors, setShowDoctors] = useState(false);
//   const [doctors, setDoctors] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [orderId, setOrderId] = useState("");
//   const patientData = useSelector((state) => state.PatientInfo.patient);
//   // console.log(patientData);
//   localStorage.setItem('patientData', JSON.stringify(patientData));
//   const patientId = patientData ? patientData.id : "";
//   const patientEmail = patientData ? patientData.email : "";
//   const patientName = patientData ? patientData.fname : "";
//   const patientContactno = patientData ? patientData.phone : "";
//   console.log(patientId);
  
//   const [formData, setFormData] = useState({

//     userId: patientId,
//     name: patientName,
//     email: patientEmail,
//     phoneNumber: patientName,
//     totalFee: "7000", // Default value
//     amountPaid: "500",
//   });



//   const isValid = useSelector((state) => state.login.isValid)
//   console.log(isValid);
//   const dispatch = useDispatch()
//   const navigate = useNavigate()


//   const validateForm = () => {
//     let formErrors = {};
//     if (!selectedSpecialty) formErrors.specializationId = "Please select a specialty.";
//     if (!selectedDate) formErrors.date = "Please select an appointment date.";
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };







//   const fetchSpecialties = async () => {
//     try {
//       const response = await axios.get('/specilization/getspecilization');
//       setSpecialties(response.data.data);
//     } catch (error) {
//       console.error("Error fetching specialties:", error);
//     }
//   };

//   useEffect(() => {
//     fetchSpecialties();
//   }, [])


//   // const fetchDoctors = async (specialtyId) => {
//   //   try {
//   //     const response = await axios.get(`/appointment/appointmentlist?specializationId=${specialtyId}`);
//   //     setDoctors(response.data.data);
//   //     console.log(response.data.data)
//   //     setShowDoctors(true);
//   //   } catch (error) {
//   //     console.error("Error fetching doctors:", error);
//   //     setShowDoctors(false);
//   //   }
//   // };


//   const fetchDoctors = async (specialtyId) => {
//     try {
//       const response = await axios.get(`/appointment/appointmentlist?specializationId=${specialtyId}`);

//       // Check if response contains data
//       if (response.data && Array.isArray(response.data.data)) {
//         setDoctors(response.data.data);
//         setShowDoctors(true);
//       } else {
//         console.error("Unexpected response structure:", response.data);
//         setDoctors([]);
//         setShowDoctors(false);
//         alert("No doctors found for the selected specialty.");
//       }
//     } catch (error) {
//       console.error("Error fetching doctors:", error);
//       setShowDoctors(false);
//       alert("An error occurred while fetching doctors. Please try again.");
//     }
//   };



//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!selectedSpecialty || !selectedDate) {
//       alert('Please select a specialty and date.');
//       return;
//     }
//     if (validateForm()) {
//       fetchDoctors(selectedSpecialty);
//       // Viewdoctor();
//     }
//   }
//   // Display the available doctors





//   const handleBookAppointment = async (appointment) => {

//     if (!isValid) {
//       dispatch(setShowLoginModal(true))
//     }
//     else {
//       const appointmentData = {

//         // specialty: selectedSpecialty,
//         // date: selectedDate,

//         // doctor:appointment.name,
//         // doctorContact: doctor.contact,
//         // fees: doctor.fees,
//         // time: doctor.time,
//         // id: doctor.id,
//         ...appointment,
//         bookedBy: patientId,
//         patientEmail: patientEmail,
//       };


//       try {

//         const response = await axios.post("/appointment/appointmentbook", appointmentData);
//         console.log('Response:', response);
        
//         await  handlePayment();
//         console.log(response.data.success);
        
//         if (response.data.success) {

//           console.log('Navigating to payment page with data:', appointmentData);
//           // state: {
//           //   doctorName: appointment.doctorName,  
//           //   totalFee: appointment.feeAmount,     
//           //   appointmentDetails: appointmentData  
//           // }

//           // alert(`Appointment successfully booked with ${doctor.name} on ${selectedDate}`);
//           // setSelectedDoctor(doctor);
//           setSelectedSpecialty("");
//           setSelectedDate("");
//           setShowDoctors(false);



//           // await sendAppointmentEmail(appointmentData);
//         } else {
//           alert(`Failed to book appointment: ${response.data.message || 'Unknown error'}`);
//         }
//       } catch (error) {
//         console.error('Error booking appointment:', error);
//         alert(`An error occurred while booking the appointment: ${error.response?.data?.message || error.message}`);

//       }
//     }
//   };




//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//   }
//   const getSessionId = async () => {
//     try {
//       let res = await axios.post(
//         "/payment/patient",
//         formData
//       );
//       if (res.data && res.data.payment_session_id) {
//         console.log(res.data.payment_session_id);
//         setOrderId(res.data.order_id);
//         return res.data.payment_session_id;

//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   let cashfree;
//   const initializeSDK = async function () {
//     cashfree = await load({
//       mode: "sandbox",
//     });
//   };
//   initializeSDK();

//   const handlePayment = async (e) => {
    
//     // Validate form before proceeding
//     // e.preventDefault();
//     if (!validateForm()) {
//       console.log("Form validation failed");
//       return; // If validation fails, stop the execution
//     }

//     let sessionId = await getSessionId();
//     let checkoutOptions = {
//       paymentSessionId: sessionId,
//       redirectTarget: "_modal",
//     };
//     console.log(sessionId);


//     try {
//       console.log(formData);

//       cashfree
//         .checkout(checkoutOptions)
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => console.log(err));
//     } catch (err) {
//       console.log(err);
//     }
//   };
















//   // Get today's date in the format yyyy-mm-dd
//   const today = new Date().toISOString().split('T')[0];



//   return (
//     <>

//       <Container className="mt-5">
//         <h1 className="bg-light mb-4" style={{ textAlign: 'center', width: '38rem', margin: 'auto' }}>Book an Appointment</h1>
//         <Form onSubmit={handleSubmit} className="appointment-form p-4 shadow-sm rounded">
//           <Row>
//             {/* Specialty Select Box */}
//             <Col xs={12} md={6}>
//               <FormGroup controlId="specialtySelect">
//                 <FormLabel className="form-label">Select Specialty</FormLabel>
//                 <FormControl
//                   as="select"
//                   value={selectedSpecialty}
//                   onChange={(e) => setSelectedSpecialty(e.target.value)}
//                   className={`form-select ${errors.specializationId ? 'is-invalid' : ''}`}
//                   required
//                 >
//                   <option value="">Select a specialty</option>
//                   {specialties.map((specialty, index) => (
//                     <option key={index} value={specialty.id}>
//                       {specialty.name}
//                     </option>
//                   ))}
//                 </FormControl>
//                 {errors.specializationId && <div className="invalid-feedback">{errors.specializationId}</div>}
//               </FormGroup>
//             </Col>

//             {/* Date Picker */}
//             <Col xs={12} md={6}>
//               <FormGroup controlId="datePicker">
//                 <FormLabel className="form-label">Select Appointment Date</FormLabel>
//                 <FormControl
//                   type="date"
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   className={`form-select ${errors.date ? 'is-invalid' : ''}`}
//                   min={today} // Prevent past dates from being selected
//                   required
//                 />
//                 {errors.date && <div className="invalid-feedback">{errors.date}</div>}
//               </FormGroup>
//             </Col>
//           </Row>

//           {/* Submit Button */}
//           <Button type="submit" className="w-100 mt-3" style={{ backgroundColor: '#004d66' }}>
//             Show Available Doctors
//           </Button>
//         </Form>

//         {/* Display Doctors as Cards */}
//         {showDoctors && doctors.length > 0 && (
//           <Row className="mt-4">
//             {doctors.map((doctor, index) => {
//               console.log("Doctor:", doctor); // Log each doctor object
//               if (doctor.appointments && doctor.appointments.length > 0) {
//                 return doctor.appointments.map((appointment, idx) => (
//                   <Col sm={12} md={6} lg={4} key={`${index}-${idx}`} className="mb-3">
//                     <Card className="doctor-card shadow-sm h-100">
//                       <Card.Body>
//                         <Card.Title>{doctor.name}</Card.Title>
//                         <Card.Text>Contact: {doctor.contactno}</Card.Text>
//                         <Card.Text>Date: {appointment.date}</Card.Text>
//                         <Card.Text>Timing: {appointment.time}</Card.Text>
//                         <Button onClick={() => handleBookAppointment(appointment)} style={{ backgroundColor: '#004d66' }}>
//                           Book an Appointment
                         

//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>

//                 ));
//               } else {
//                 return (
//                   <Col sm={12} md={6} lg={4} key={index} className="mb-3">
//                     <Card className="doctor-card shadow-sm h-100">
//                       <Card.Body>
//                         <Card.Title>{doctor.name}</Card.Title>
//                         <Card.Text>No available appointments</Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 );
//               }
//             })}
//           </Row>
//         )}



//         {/* Display Confirmation (if needed) */}
//         {selectedDoctor && (
//           <div className="mt-4">
//             <h3>Appointment Confirmation</h3>hha
//             <p><strong>Doctor:</strong> {selectedDoctor.name}</p>
//             <p><strong>Specialty:</strong> {selectedSpecialty}</p>
//             <p><strong>Date:</strong> {selectedDate}</p>
//             <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
//             <p><strong>Fees:</strong> {selectedDoctor.fees}</p>
//             <p><strong>Timing:</strong> {selectedDoctor.time}</p>
//           </div>
//         )}
//       </Container>

//     </>
//   );
// };

// export default AppointmentBooking;




import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormLabel, FormControl, Card, Row, Col, Button, Container } from "react-bootstrap";
// import Footer from "../Footer";
// import Navbarline from '../Reusable/Navbar'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "../store/reducer";
import { BACKENDURL } from "../../constant";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import LoginModal from "./LoginPage";

const BookAppointment = () => {
  const [specialties, setSpecialties] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showDoctors, setShowDoctors] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [errors, setErrors] = useState({});
  const patientData = useSelector((state) => state.PatientInfo.patient);
  console.log(patientData);
  localStorage.setItem('patientData', JSON.stringify(patientData));
  const patientId = patientData ? patientData.id : "";
  const patientEmail = patientData ? patientData.email : "";
  console.log(patientId)

  const isValid = useSelector((state) => state.login.isValid)
  console.log(isValid);
  const dispatch = useDispatch()
  const navigate = useNavigate()



  // const navigate = useNavigate()
  // const {isValid }= useSelector((state) => state.login )


  // useEffect(() => {
  //   if(!isValid){
  //     navigate('/?login=true')
  //     // <LoginModal  show setShow setShowlogin/>
  //   }
  // },[]);

  // Specialties with doctor detail

  // const specialties = [];
  // {
  // Cardiologist: [
  //   { name: "Dr. Aftab Khan", contact: "090801235", fees: "2000", time: '7:00 am - 2:00 pm' },
  //   { name: "Dr. Jane Smith", contact: "0908013333", fees: "2000", time: '9:00 am - 12:00 pm' },
  // ],
  // Dermatologist: [
  //   { name: "Dr. Emily White", contact: "+1-234-567-8903" },
  //   { name: "Dr. Richard Brown", contact: "+1-234-567-8904" },
  // ],
  // Neurologist: [
  //   { name: "Dr. Parveen Gupta", contact: "9891907903" },
  //   { name: "Dr. Michael Blue", contact: "+1-234-567-8906" },
  // ],
  // Pediatrician: [
  //   { name: "Dr. Amy Black", contact: "+1-234-567-8907" },
  //   { name: "Dr. Tom Grey", contact: "+1-234-567-8908" },
  // ],
  // Psychiatrist: [
  //   { name: "Dr. Anna Red", contact: "+1-234-567-8909" },
  //   { name: "Dr. Peter Yellow", contact: "+1-234-567-8910" },
  // ],
  // Surgeon: [
  //   { name: "Dr. Brian Orange", contact: "+1-234-567-8911" },
  //   { name: "Dr. Nancy Purple", contact: "+1-234-567-8912" },
  // ],
  // };



  const validateForm = () => {
    let formErrors = {};
    if (!selectedSpecialty) formErrors.specializationId = "Please select a specialty.";
    if (!selectedDate) formErrors.date = "Please select an appointment date.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };







  const fetchSpecialties = async () => {
    try {
      const response = await axios.get(`${BACKENDURL}/specilization/getspecilization`);
      setSpecialties(response.data.data);
    } catch (error) {
      console.error("Error fetching specialties:", error);
    }
  };

  useEffect(() => {
    fetchSpecialties();
  }, [])


  // const fetchDoctors = async (specialtyId) => {
  //   try {
  //     const response = await axios.get(`/appointment/appointmentlist?specializationId=${specialtyId}`);
  //     setDoctors(response.data.data);
  //     console.log(response.data.data)
  //     setShowDoctors(true);
  //   } catch (error) {
  //     console.error("Error fetching doctors:", error);
  //     setShowDoctors(false);
  //   }
  // };


  const fetchDoctors = async (specialtyId) => {
    try {
      const response = await axios.get(`${BACKENDURL}/appointment/appointmentlist?specializationId=${specialtyId}`);

      // Check if response contains data
      if (response.data && Array.isArray(response.data.data)) {
        setDoctors(response.data.data);
        setShowDoctors(true);
      } else {
        console.error("Unexpected response structure:", response.data);
        setDoctors([]);
        setShowDoctors(false);
        alert("No doctors found for the selected specialty.");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setShowDoctors(false);
      alert("An error occurred while fetching doctors. Please try again.");
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!selectedSpecialty || !selectedDate) {
      alert('Please select a specialty and date.');
      return;
    }
    if (validateForm()) {
      fetchDoctors(selectedSpecialty);
      // Viewdoctor();
    }
  }
  // Display the available doctors





  const handleBookAppointment = async (appointment) => {

    if (!isValid) {
      dispatch(setShowLoginModal(true));
      return
    }
    else {
      const appointmentData = {

        // specialty: selectedSpecialty,
        // date: selectedDate,

        // doctor:appointment.name,
        // doctorContact: doctor.contact,
        // fees: doctor.fees,
        // time: doctor.time,
        // id: doctor.id,
        ...appointment,
        bookedBy: patientId,
        patientEmail: patientEmail,

      };


      try {
        const response = await axios.post(`${BACKENDURL}/appointment/appointmentbook`, appointmentData);
        console.log('Response:', response);


        if (response.data.success) {
          // alert(`Appointment successfully booked with ${doctor.name} on ${selectedDate}`);
          // setSelectedDoctor(doctor);
          setSelectedSpecialty("");
          setSelectedDate("");
          setShowDoctors(false);
           

          navigate('/patientdashboard/payment', {
            // state: {
            //   doctorName: appointment.doctorName,  // Assuming appointment has doctorName
            //   totalFee: appointment.feeAmount,     // Assuming appointment has feeAmount
            //   appointmentDetails: appointmentData  // Send complete appointment data
            // }
          });
          // await sendAppointmentEmail(appointmentData);
        } else {
          alert(`Failed to book appointment: ${response.data.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error booking appointment:', error);
        alert(`An error occurred while booking the appointment: ${error.response?.data?.message || error.message}`);
      
      }
    }
  };



  // const sendAppointmentEmail = async (appointmentData) => {
  //   try {
  //     const response = await axios.post('/appointment/sendappointmentmail', appointmentData);
  //     console.log('Email sent successfully:', response.data.message);
  //     alert('Appointment booked successfully! Confirmation email sent.');
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert("The appointment was booked, but we couldn't send the confirmation email.");
  //   }
  // };




  // Get today's date in the format yyyy-mm-dd
  const today = new Date().toISOString().split('T')[0];



  return (
    <>
      <Container className="mt-5">
        <h1 className="bg-light mb-4" style={{ textAlign: 'center', width: '38rem', margin: 'auto' }}>Book an Appointment</h1>
        <Form onSubmit={handleSubmit} className="appointment-form p-4 shadow-sm rounded">
          <Row>
            {/* Specialty Select Box */}
            <Col xs={12} md={6}>
              <FormGroup controlId="specialtySelect">
                <FormLabel className="form-label">Select Specialty</FormLabel>
                <FormControl
                  as="select"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className={`form-select ${errors.specializationId ? 'is-invalid' : ''}`}
                  required
                >
                  <option value="">Select a specialty</option>
                  {specialties.map((specialty, index) => (
                    <option key={index} value={specialty.id}>
                      {specialty.name}
                    </option>
                  ))}
                </FormControl>
                {errors.specializationId && <div className="invalid-feedback">{errors.specializationId}</div>}
              </FormGroup>
            </Col>

            {/* Date Picker */}
            <Col xs={12} md={6}>
              <FormGroup controlId="datePicker">
                <FormLabel className="form-label">Select Appointment Date</FormLabel>
                <FormControl
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={`form-select ${errors.date ? 'is-invalid' : ''}`}
                  min={today} // Prevent past dates from being selected
                  required
                />
                {errors.date && <div className="invalid-feedback">{errors.date}</div>}
              </FormGroup>
            </Col>
          </Row>

          {/* Submit Button */}
          <Button type="submit" className="w-100 mt-3" style={{ backgroundColor: '#004d66' }}>
            Show Available Doctors
          </Button>
        </Form>

        {/* Display Doctors as Cards */}
        {showDoctors && doctors.length > 0 && (
          <Row className="mt-4">
            {doctors.map((doctor, index) => {
              console.log("Doctor:", doctor); // Log each doctor object
              if (doctor.appointments && doctor.appointments.length > 0) {
                return doctor.appointments.map((appointment, idx) => (
                  <Col sm={12} md={6} lg={4} key={`${index}-${idx}`} className="mb-3">
                    <Card className="doctor-card shadow-sm h-100">
                      <Card.Body>
                        <Card.Title>{doctor.name}</Card.Title>
                        <Card.Text>Contact: {doctor.contactno}</Card.Text>
                        <Card.Text>Date: {appointment.date}</Card.Text>
                        <Card.Text>Timing: {appointment.time}</Card.Text>
                        <Button onClick={() => handleBookAppointment(appointment)} style={{ backgroundColor: '#004d66' }}>
                          Book an Appointment
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ));
              } else {
                return (
                  <Col sm={12} md={6} lg={4} key={index} className="mb-3">
                    <Card className="doctor-card shadow-sm h-100">
                      <Card.Body>
                        <Card.Title>{doctor.name}</Card.Title>
                        <Card.Text>No available appointments</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              }
            })}
          </Row>
        )}

        {/* Display Confirmation (if needed) */}
        {selectedDoctor && (
          <div className="mt-4">
            <h3>Appointment Confirmation</h3>
            <p><strong>Doctor:</strong> {selectedDoctor.name}</p>
            <p><strong>Specialty:</strong> {selectedSpecialty}</p>
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
            <p><strong>Fees:</strong> {selectedDoctor.fees}</p>
            <p><strong>Timing:</strong> {selectedDoctor.time}</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default BookAppointment;
