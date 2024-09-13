import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignupDoctor = () => {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    license: '',
    specialization: '',
    hospital: '',
    experience: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [licenseError, setLicenseError] = useState('');
  const [specializationError, setSpecializationError] = useState('');
  // const[hospitalError, setHospitalError] = useState('');
  const [experienceError, setExperienceError] = useState('');
  const [addressError, setAddressError] = useState('');


  const changeHandle = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...formData };

    switch (name) {
      case 'fname':
        newFormData.name = value;
        if (value === '') {
          setNameError('Please enter your name');
        } else if (value.length < 3) {
          setNameError('Name should be at least 3 characters');
        } else {
          setNameError('');
        }
        break;

      case 'password':
        newFormData.password = value;
        const regx = /^[a-zA-Z0-9!@#$%^&*]{6,10}$/;
        if (value === '') {
          setPasswordError('Please enter your password');
        } else if (!regx.test(value)) {
          setPasswordError('Password must be 6-10 characters long and include  !@#$%^&*');
        } else {
          setPasswordError('');
        }
        break;

      case 'phone':
        newFormData.phone = value;
        const regx1 = /^[0-9]{10}$/;
        if (value === '') {
          setPhoneError('Please enter your phone number');
        }
        else if (!regx1.test(value)) {
          setPhoneError('Phone number must be 10 digits long');
        }
        else {
          setPhoneError('');
        }
        break;

      case 'username':
        newFormData.username = value;
        if (value === '') {
          setUsernameError('Please enter your name');
        }
        else if (value.length < 3) {
          setUsernameError('Username should be at least 3 characters');
        }
        else {
          setUsernameError('');
        }
        break;

      case 'license':
        newFormData.license = value;
        if (value === '') {
          setLicenseError('Please enter your license number');
        }
        else if (value.length < 3) {
          setLicenseError('License number should be at least 3 characters');
        }
        else {
          setLicenseError('');
        }
        break;

      case 'specialization':
        newFormData.specialization = value;
        if (value === '') {
          setSpecializationError('Please enter your specialization');
        }
        else if (value.length < 3) {
          setSpecializationError('Specialization should be at least 3 characters');
        }
        else {
          setSpecializationError('');
        }
        break;

      case 'experience':
        newFormData.experience = value;
        if (value === '') {
          setExperienceError('Please enter your experience');
        }
        else if (value.length < 3) {
          setExperienceError('Experience should be at least 3 characters');
        }
        else {
          setExperienceError('');
        }
        break;

      case 'address':
        newFormData.address = value;
        const regxadddress = /^[a-zA-Z0-9\s,''-]*$/;
        if (value === '') {
          setAddressError('Please enter your address');
        }
        else if (!regxadddress.test(value)) {
          setAddressError('Invalid address');
        }
        else {
          setAddressError('');
        }
        break;

      case 'hospital':
        newFormData.hospital = value;
        break;



      default:
        break;
    }
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fname === '') {
      setNameError('Please enter your name');
    }
    if (formData.password === '') {
      setPasswordError('Please enter your password');
    }
    if (formData.phone === '') {
      setPhoneError('Please enter your phone number');
    }
    if (formData.address === "") {
      setAddressError('Please enter your address');
    }
    if (formData.experience === "") {
      setExperienceError('Please enter your experience');
    }
    if (formData.email === "") {
      setEmailError('Please enter your email');
    }
    if (formData.license === "") {
      setLicenseError('Please enter your license');
    }
    if (formData.username === "") {
      setUsernameError('Please enter your username');
    }
    if (formData.specialization === "") {
      setSpecializationError('Please enter your specialization');
    }


    if (formData.fname !== '' && formData.password !== '' && formData.address !== '' && formData.email !== '' && formData.experience !== '' && formData.license !== '' && formData.specialization !== '' && formData.username !== '') {
      alert('Form successfully submitted');
      // Clear form and errors
      setFormData({ fname: '', password: '', address: '', email: '', experience: '', license: '', specialization: '', username: '' });
      setNameError('');
      setPasswordError('');
      setAddressError('');
      setExperienceError('');
      setEmailError('');
      setLicenseError('');
      setSpecializationError('');
      setUsernameError('');
      setSubmitted(true);


    }
  };

   const navigate = useNavigate();
  const handleUserTypeChange = (event) => {
    navigate('/login')
  };
  
 


  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const validate = () => {
  //   const newErrors = {};
  //   if (!formData.fullName) newErrors.fullName = 'Full Name is required';
  //   if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
  //   if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit Phone Number is required';
  //   if (!formData.username) newErrors.username = 'Username is required';
  //   if (!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
  //   if (!formData.license) newErrors.license = 'Medical License is required';
  //   if (!formData.specialization) newErrors.specialization = 'Specialization is required';
  //   if (!formData.experience || isNaN(formData.experience) || formData.experience < 0) newErrors.experience = 'Valid Year of Experience is required';
  //   if (!formData.address) newErrors.address = 'Address is required';
  //   return newErrors;
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formErrors = validate();
  //   if (Object.keys(formErrors).length === 0) {
  //     // Form is valid, submit the form
  //     setSubmitted(true);
  //     console.log('Form Data:', formData);
  //   } else {
  //     setErrors(formErrors);
  //   }
  // };

  return (
    <Container className='mt-5'>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={10} lg={8} xl={7}>
          <h2 className='text-center mb-4'>Doctor Sign-Up</h2>
          <Form >
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label> Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    placeholder="Enter full name"
                    value={formData.fname}
                    onChange={changeHandle}
                  />

                  <span style={{ color: 'red' }}>{nameError}</span>
                </Form.Group>

              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={changeHandle}
                  />

                  <span style={{ color: 'red' }}>{emailError}</span>
                </Form.Group>

              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={changeHandle}
                  />

                  <span style={{ color: 'red' }}>{phoneError}</span>
                </Form.Group>

              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={changeHandle}
                  />

                  <span style={{ color: 'red' }}>{usernameError}</span>
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
                    onChange={changeHandle}
                  />

                  <span style={{ color: 'red' }}>{passwordError}</span>
                </Form.Group>

              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Medical License</Form.Label>
                  <Form.Control
                    type="text"
                    name="license"
                    placeholder="Enter medical license"
                    value={formData.license}
                    onChange={changeHandle}
                  />

                  <span style={{ color: 'red' }}>{licenseError}</span>
                </Form.Group>

              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Specialization</Form.Label>
                  <Form.Control
                    type="text"
                    name="specialization"
                    placeholder="Enter specialization"
                    value={formData.specialization}
                    onChange={changeHandle}
                  />

                  <span style={{ color: 'red' }}>{specializationError}</span>
                </Form.Group>

              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Year of Experience</Form.Label>
                  <Form.Control
                    type="number"
                    name="experience"
                    placeholder="Enter years of experience"
                    value={formData.experience}
                    onChange={changeHandle}
                  />

                  <span style={{ color: 'red' }}>{experienceError}</span>
                </Form.Group>

              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Hospital/Clinic (Optional)</Form.Label>
                  <Form.Control
                    type="text"
                    name="hospital"
                    placeholder="Enter hospital or clinic name"
                    value={formData.hospital}
                    onChange={changeHandle}
                  />
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
                    onChange={changeHandle}
                  />

                  <span style={{ color: 'red' }}>{addressError}</span>
                </Form.Group>
              </Col>
            </Row>

            <Button className='btn btn-success w-100' onClick={handleSubmit}>Sign Up</Button>
            <Button  onClick={handleUserTypeChange} className='btn-default border w-100 bg-light mt-3' style={{ color: 'black' }}>Login</Button>

          </Form>
          {submitted && <Alert variant="success" className="mt-3">Form submitted successfully!</Alert>}
        </Col>
      </Row>
    </Container>
  );
}

export default SignupDoctor;
