import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { BACKENDURL } from '../../constant';
const DoctorSignupForm = () => {
  const [specialization, setSpecialization] = useState([]);
  const[loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specializationId: '',
    contactno:  '',  
    yearofexperience: ''
  });

  const [errors, setErrors] = useState({});

  // const specializations = [ ];

  const fetchdata = async() => {
    try {
      // setLoading(true)
      const response = await axios.get(`${BACKENDURL}/specilization/getspecilization`)
      console.log(response.data)
      setSpecialization(response.data.data)
      
    } catch (error) {
      console.error(error);
  
      
    }
    finally{
      setLoading(false);
    }
   }
   
  console.log(specialization);
  
   useEffect(() => {
     fetchdata();
   },[])
  






  // Validate individual fields
  const validateField = (name, value) => {
    let formErrors = {};

    switch (name) {
      case 'name':
        formErrors.name = value.trim() ? '' : 'Name is required';
        break;
      case 'email':
        formErrors.email = !value ? 'Email is required' : !/\S+@\S+\.\S+/.test(value) ? 'Email address is invalid' : '';
        break;
      case 'password':
        formErrors.password = !value ? 'Password is required' : value.length < 6 ? 'Password must be at least 6 characters' : '';
        break;
        case 'specializationId':
          formErrors.specializationId = value ? '' : 'Specialization is required';
          break; 
      case 'contactno':  
        formErrors.contactno = !value ? 'Contact number is required' : !/^\d{10}$/.test(value) ? 'Contact number must be 10 digits' : '';
        break;
      case 'yearofexperience': 
        formErrors.yearofexperience = !value ? 'Year of experience is required' : !/^\d+$/.test(value) ? 'Year of experience must be a number' : '';
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, ...formErrors }));
  };

  // Validate all fields before submission
  const validate = () => {
    const formErrors = {};

    if (!formData.name.trim()) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email address is invalid';
    if (!formData.password) formErrors.password = 'Password is required';
    else if (formData.password.length < 6) formErrors.password = 'Password must be at least 6 characters';
    if (!formData.specializationId) formErrors.specializationId = 'Specialization is required';
    if (!formData.contactno) formErrors.contactno = 'Contact number is required';  // Updated to match database column name
    else if (!/^\d{10}$/.test(formData.contactno)) formErrors.contactno = 'Contact number must be 10 digits';  // Updated to match database column name
    if (!formData.yearofexperience) formErrors.yearofexperience = 'Year of experience is required';  // Updated to match database column name
    else if (!/^\d+$/.test(formData.yearofexperience)) formErrors.yearofexperience = 'Year of experience must be a number';  // Updated to match database column name

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value); // Validate field on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      SignupDatadoctor();
      console.log('Form data submitted:', formData);
    }
  };

  const SignupDatadoctor = async () => {
    try {
      const response = await axios.post(`${BACKENDURL}/doctor/signupdoctor`, formData);
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
      setErrors({ email: err.response.data.message });
    }
  };

  return (
    // <Container className="doctor-signup-form" style={{ maxWidth: '600px', marginTop: '50px' }}>
    //   <h2 className="text-center mb-4">Doctor Signup</h2>
    //   <Form noValidate onSubmit={handleSubmit}>
    //     <Row>
    //       <Col md={12} className="mb-3">
    //         <Form.Group controlId="formName">
    //           <Form.Label>Name</Form.Label>
    //           <Form.Control
    //             type="text"
    //             placeholder="Enter your name"
    //             name="name"
    //             value={formData.name}
    //             onChange={handleChange}
    //             isInvalid={!!errors.name}
    //             className="form-control-custom"
    //           />
    //           <Form.Control.Feedback type="invalid">
    //             {errors.name}
    //           </Form.Control.Feedback>
    //         </Form.Group>
    //       </Col>

    //       <Col md={12} className="mb-3">
    //         <Form.Group controlId="formEmail">
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control
    //             type="email"
    //             placeholder="Enter your email"
    //             name="email"
    //             value={formData.email}
    //             onChange={handleChange}
    //             isInvalid={!!errors.email}
    //             className="form-control-custom"
    //           />
    //           <Form.Control.Feedback type="invalid">
    //             {errors.email}
    //           </Form.Control.Feedback>
    //         </Form.Group>
    //       </Col>

    //       <Col md={12} className="mb-3">
    //         <Form.Group controlId="formPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             type="password"
    //             placeholder="Enter a password"
    //             name="password"
    //             value={formData.password}
    //             onChange={handleChange}
    //             isInvalid={!!errors.password}
    //             className="form-control-custom"
    //           />
    //           <Form.Control.Feedback type="invalid">
    //             {errors.password}
    //           </Form.Control.Feedback>
    //         </Form.Group>
    //       </Col>

    //       <Col md={12} className="mb-3">
    //         <Form.Group controlId="formSpecialization">
    //           <Form.Label>Specialization</Form.Label>
    //           <Form.Control
    //             type="text"
    //             placeholder="Enter your specialization"
    //             name="specialization"
    //             value={formData.specialization}
    //             onChange={handleChange}
    //             isInvalid={!!errors.specialization}
    //             className="form-control-custom"
    //           />
    //           <Form.Control.Feedback type="invalid">
    //             {errors.specialization}
    //           </Form.Control.Feedback>
    //         </Form.Group>
    //       </Col>

    //       <Col md={12} className="mb-3">
    //         <Form.Group controlId="formContactNumber">
    //           <Form.Label>Contact Number</Form.Label>
    //           <Form.Control
    //             type="text"
    //             placeholder="Enter your contact number"
    //             name="contactno"  
    //             value={formData.contactno}  
    //             onChange={handleChange}
    //             isInvalid={!!errors.contactno}  
    //             className="form-control-custom"
    //           />
    //           <Form.Control.Feedback type="invalid">
    //             {errors.contactno}  
    //           </Form.Control.Feedback>
    //         </Form.Group>
    //       </Col>

    //       <Col md={12} className="mb-3">
    //         <Form.Group controlId="formYearOfExperience">
    //           <Form.Label>Year of Experience</Form.Label>
    //           <Form.Control
    //             type="text"
    //             placeholder="Enter your years of experience"
    //             name="yearofexperience"  
    //             value={formData.yearofexperience}  
    //             onChange={handleChange}
    //             isInvalid={!!errors.yearofexperience}  
    //             className="form-control-custom"
    //           />
    //           <Form.Control.Feedback type="invalid">
    //             {errors.yearofexperience} 
    //           </Form.Control.Feedback>
    //         </Form.Group>
    //       </Col>

    //       <Col md={12} className="text-center">
    //         <Button variant="primary" type="submit" className="submit-btn">
    //           Sign Up
    //         </Button>
    //       </Col>
    //     </Row>
    //   </Form>
    // </Container>
    <Container className="doctor-signup-form" style={{ maxWidth: '600px'}}>
    <h3 className="text-center">Doctor Signup</h3>
    <Form noValidate onSubmit={handleSubmit}>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              className="form-control-custom"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6} className="mb-3">
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              className="form-control-custom"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-3">
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter a password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              className="form-control-custom"
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6} className="mb-3">
          <Form.Group controlId="formSpecialization">
            <Form.Label>Specialization</Form.Label>
            <Form.Control
              as="select"
              name="specialization"
              value={formData.specializationId}
              onChange={handleChange}
              isInvalid={!!errors.specializationId}
              className="form-control-custom"
            >
              <option value="">Select your specialization</option>

              {  specialization.map((specialization, index) => (
                <option key={index} value={specialization.id}>
                  {specialization.name}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.specialization}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-3">
          <Form.Group controlId="formContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your contact number"
              name="contactno"
              value={formData.contactno}
              onChange={handleChange}
              isInvalid={!!errors.contactno}
              className="form-control-custom"
            />
            <Form.Control.Feedback type="invalid">
              {errors.contactno}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6} className="mb-3">
          <Form.Group controlId="formYearOfExperience">
            <Form.Label>Year of Experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your years of experience"
              name="yearofexperience"
              value={formData.yearofexperience}
              onChange={handleChange}
              isInvalid={!!errors.yearofexperience}
              className="form-control-custom"
            />
            <Form.Control.Feedback type="invalid">
              {errors.yearofexperience}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={12} className="text-center">
          <Button variant="primary" type="submit" className="submit-btn">
            Sign Up
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>
);
  // );
};

export default DoctorSignupForm;
