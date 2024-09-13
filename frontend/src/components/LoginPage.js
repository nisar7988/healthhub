import { Form, Button, Modal, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {  valid } from './store/reducer';
import { setAdminInfo } from './store/adminReducer';
import { setDoctorInfo } from './store/doctorReducer';
import { setPatientInfo } from './store/patientReducer';
import { BACKENDURL } from '../constant';


const LoginModal = ({ show, setShow, setShowlogin }) => {
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });



  const [showPassword, setShowPassword] = useState(false);


  // const isValid = useSelector((state) => state.login.isValid);

  const [userData, setuserData] = useState({});
  // console.log('userdata is',userData)
  const [Error , setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function handledata(data) {
    setuserData(data);
    console.log(data)
  }




  const changeHandle = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === 'email') {
      setNameError(value === '' ? 'Please enter your name' : value.length < 3 ? 'Name should be at least 3 characters' : '');
    } else if (name === 'password') {
      setPasswordError(value === '' ? 'Please enter your password' : value.length < 5 ? 'Password must be 6-10 characters long' : '');
    }
  };


  const handleUserTypeChange = (event) => setUserType(event.target.value);

  async function getUserProfile(formData, userType) {
    try {
      const response = await axios.get(`${BACKENDURL}/login/userinfo`, {
        params: {
          data: formData,
          role: userType,

        }
      });
      console.log(response.data.data[0]);
      console.log(response.data.data.length);
      if(response.data.data.length===0){
        // alert("Can't Find User");
        setServerError("Invalid Username or Password ! ")
        setError("Invalid Username or Password !");
      }
      else{
        setError('');
      }




      // .then((res) => {
      const Datainfo = response.data.data;

      console.log(Datainfo);

      if (response.data.page === "not found" || !Datainfo || Datainfo.length === 0) {
        setServerError('Unknown user type');
      } else {
        dispatch(valid(userType));
        // Mark the user as valid (logged in)
        localStorage.setItem('userType', JSON.stringify(userType));
        // Optionally handle data before navigating
        handledata(Datainfo); // Process data based on page type

        switch (userType) {
          // Conditional navigation
          case 'patient':
            navigate('/patientdashboard');
            localStorage.setItem('patientInfo', JSON.stringify(response.data.data));
            dispatch(setPatientInfo(Datainfo))
            break;
          case 'doctor':
            navigate('/doctorboard');
            localStorage.setItem('doctorInfo', JSON.stringify(response.data.data));
            dispatch(setDoctorInfo(Datainfo))
            break;

          case 'admin':
            navigate('/admindashboard');
            localStorage.setItem('adminInfo', JSON.stringify(response.data.data));
            dispatch(setAdminInfo(Datainfo));
            break;

          default:
            setServerError('Unknown user type');
            break;
        }
        // dispatch(valid()); // Mark the user as valid (logged in)
      }

    }
    catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
      
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation before sending the request
    if (!formData.email || !formData.password) {
      setServerError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post(`${BACKENDURL}/login`, { ...formData, userType });
         
     


      //function to fetch the all details of admin/patient/doctor


      await getUserProfile(formData, userType);
      // console.log(userData);


      if (response.data.status) {
         // After successful login
         setFormData({ email: '', password: '' }); // Reset form fields
         setServerError(''); // Clear any server error
         setNameError(''); // Clear name error
         setPasswordError(''); // Clear password error        



        // Success: Redirect based on user type
        switch (response.data.userType) {
          case 'patient':
            navigate('/patientdashboard');
            break;
          case 'doctor':
            navigate('/doctorboard');
            break;
          case 'admin':
            navigate('/admindashboard');
            break;
          default:
            setServerError('Unknown user type');

            break;
        }

      }
      else {
        setServerError('Login failed: Invalid credentials or user type');
        setServerError(''); // Clear any previous errors
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        // If the server returns a specific error response, display it
        setServerError(error.response.data.message || 'Incorrect email or password');
      } else {
        // For any other errors, display a generic error message
        setServerError('Login failed: Please check your credentials and try again.');
      }
    }
  };


  // if (isValid) {
  //   navigate('/'); // Or any other route you want
  //   return null; // Prevent modal from rendering
  // }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the password visibility
  };



  const handleClose = () => {
    setFormData({ email: '', password: '' }); // Reset form fields when modal is closed
    setNameError(''); // Clear name error
    setPasswordError(''); // Clear password error
    setServerError(''); // Clear server error
    setShow(false)
    setShowlogin(true);  // Open the login modal

  };

  return (
    <Modal show={show} onHide={handleClose} centered >
      {/* {console.log(userData)} */}
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-center">
          <Col>
            <Form>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="text"
                  type="text"
                  placeholder="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandle}
                />
                <label htmlFor="text">Email</label>
                <span style={{ color: 'red' }}>{nameError}</span>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={changeHandle}
                />
                <label htmlFor="Password">Password </label>
                <span style={{ color: 'red' }}>{passwordError}</span>
                {/* <VscEye/> */}
              </Form.Floating>

              {/* Show Password Toggle */}
              <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  onChange={toggleShowPassword}
                  checked={showPassword} // Sync with the state
                  className="me-2" // Adds some margin to the right of the checkbox
                />
                <Form.Label className="mb-0 ms-1" style={{fontWeight:'400'}}>Show Password</Form.Label> {/* Adds margin-left for space */}
              </Form.Group>
    

              <Form.Group className="mb-3">
                <Form.Label>Login As</Form.Label>
                <Form.Select value={userType} onChange={handleUserTypeChange}>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="admin">Admin</option>
                </Form.Select>
              </Form.Group>
              {/* <span style={{ color: 'red' }}>{serverError}</span> */}
                 
              <Button className="btn btn-success w-100 mb-3" style={{ backgroundColor: ' #004d66' }} type="submit" onClick={handleSubmit}
              >
                Login
              </Button>
              {/* <p>hii</p> */}
              {/* {Error} */}
              {Error && <p style={{ color: 'red' }}>{Error}</p>}
              <p className="text-center"> Don't have an account?</p>
              <Button onClick={() => { setShowlogin(false) }} className="btn-default border w-100 bg-light" style={{ color: 'black', }}>
                Create Account
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;





// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Basic validation before sending the request
//   if (!formData.email || !formData.password) {
//     setServerError('Please fill in all fields');
//     return;
//   }

//   try {
//     const response = await axios.post('/login', { ...formData, userType });

//     if (response.data.status) {
//       // Success: Redirect based on user type
//       switch (response.data.userType) {
//         case 'patient':
//           navigate('/patientdashboard');
//           break;
//         case 'doctor':
//           navigate('/doctordashboard');
//           break;
//         case 'admin':
//           navigate('/admindashboard');
//           break;
//         default:
//           setServerError('Unknown user type');
//           break;
//       }
//       setServerError(''); // Clear any previous errors
//     } else {
//       setServerError(response.data.msg);
//     }
//   } catch (error) {
//     console.error('Error logging in:', error);
//     setServerError('An error occurred. Please try again.');
//   }
// };
