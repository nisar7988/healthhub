import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { Form, Button, Modal, Row, Col} from 'react-bootstrap';

const SignupPatientModal = ({ show, setShow, setShowlogin }) => {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    phone: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    emergencyContact: '',
    medicalHistory: ''
  });
  // const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    localStorage.setItem('signupFormData', JSON.stringify({ ...formData, [name]: value }));

    // Simple validation
    const newErrors = { ...errors };
    switch (name) {
      case 'fname':
        newErrors.fname = value.length < 3 ? 'Name should be at least 3 characters' : '';
        break;
      case 'email':
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        newErrors.email = !emailRegex.test(value) ? 'Invalid email' : '';
        break;
        case 'phone':
          const phoneRegex = /^\d{10}$/;
          newErrors.phone = !phoneRegex.test(value) ? 'Phone number must be 10 digits' : '';
          break;
      case 'address':
        newErrors.address = value === '' ? 'Please enter your address' : '';
        break;
      case 'dateOfBirth':
        newErrors.dateOfBirth = value === '' ? 'Date must be filled' : '';
        break;
      case 'gender':
        newErrors.gender = value === '' ? 'Please select gender' : '';
        break;
      case 'emergencyContact':
        newErrors.emergencyContact = value === '' ? 'Emergency contact must be filled' : '';
        break;
      case 'medicalHistory':
        newErrors.medicalHistory = value === '' ? 'Medical history must be filled' : '';
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Validate all fields
    if (!formData.fname) validationErrors.fname = 'Please enter your name';
    if (!formData.email) validationErrors.email = 'Please enter your email';
    if (!formData.phone) validationErrors.phone = 'Please enter your phone number';
    if (!formData.password) validationErrors.password = 'Please enter your password';
    if (!formData.address) validationErrors.address = 'Please enter your address';
    if (!formData.gender) validationErrors.gender = 'Please select gender';
    if (!formData.dateOfBirth) validationErrors.dateOfBirth = 'Please enter your date of birth';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("submited");
      SignupData();
      setFormData({
        fname: '',
        email: '',
        phone: '',
        password: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        emergencyContact: '',
        medicalHistory: ''
      });
      // setSubmitted(true);
    }
    

  };



  useEffect(() => {
    // Retrieve data from localStorage when the modal is opened
    if (show) {
      const savedData = JSON.parse(localStorage.getItem('signupFormData'));
      if (savedData) {
        setFormData(savedData);
      }
    }
  }, [show]);
  const SignupData = async () => {
    // const data = {
    //   ...formData
    // };
    try {
      const response = await axios.post("/patient/signup", formData);
      console.log(response);


    }
    catch (err) {
      // console.log(err.response.data);
      setErrors({email:err.response.data.message});
      
      //   if (err.response && err.response.data) {
      //     setErrors({ email: err.response.data.message });
      //   } else {
      //     setErrors({ email: "An unexpected error occurred. Please try again." });
      //   }
      // }
      
      // console.log(response.data);
    }
    
  } 

  // const SignupData = async (req, res) => {
  //   try {
  //     const data = {
  //       fname: "John",          // Replace with actual form data
  //       email: "john@example.com",
  //       phone: "1234567890",
  //       username: "johnDoe",
  //       password: "password123",
  //       dateOfBirth: "1990-01-01",
  //       gender: "male",
  //       address: "123 Main St",
  //       emergencyContact: "100011",
  //       medicalHistory: "None",
  //       role:"patient"
  //     };
  //     console.log(req.status(200));

  //     // Sending POST request to the server
  //     const response = await axios.post("/auth/signup", data);

  //     // Handling the response
  //     console.log("Signup successful:", response.data);
  //   } catch (error) {
  //     // Handling errors
  //     console.log(error);
  //   }
  // };
   
  const clearFormData = () => {
    setFormData({
      fname: '',
      email: '',
      phone: '',
      password: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      emergencyContact: '',
      medicalHistory: ''
    });
  };
 
  const handleClose = () => {
    // setShow(false);   // Close the signup modal
    clearFormData();
    // console.log(clearFormData())
    setFormData({});
    console.log(FormData)
    setShowlogin(true);  // Open the login modal
    
  };


  return (
<Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Patient Sign-Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  placeholder="Enter full name"
                  value={formData.fname}
                  onChange={handleChange}
                  isInvalid={!!errors.fname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fname}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  isInvalid={!!errors.dateOfBirth}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.dateOfBirth}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  isInvalid={!!errors.gender}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.gender}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="optional-fields">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Medical History (Optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  isInvalid={!!errors.medicalHistory}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.medicalHistory}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Emergency Contact (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  name="emergencyContact"
                  placeholder="Enter emergency contact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  isInvalid={!!errors.emergencyContact}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.emergencyContact}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Button className="btn btnc w-100 mb-2" style={{backgroundColor:' #004d66'}} type="submit">Sign Up</Button>
          <p className="text-center">Already have an account?</p>
          <Button className="btn-default border w-100 bg-light" style={{color:'black'}} onClick={() => setShowlogin(true)}>Login</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}


export default SignupPatientModal;















