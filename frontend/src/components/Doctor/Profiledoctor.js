// import { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { Form, Row, Col} from 'react-bootstrap';

const DoctorProfile = () => {

  // Access the admin data from the Redux store
 const data =useSelector((state) =>state.DoctorInfo.doctor);
  console.log(data)

//  useSelector((state) =>state.DoctorInfo.doctor);
  
  return (
    
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name"  value={data?`${data.name}`:""} />
            {/* </Form.Control> */}
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" value={data ? `${data.email}` : "" } />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password"  value={data ?`${data.password}` : ""}/>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formContactno">
            <Form.Label>Contact No</Form.Label>
            <Form.Control type="text" placeholder="Enter your contact number" value={data ? `${data.contactno}` : ""} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formSpecialization">
            <Form.Label>Specialization</Form.Label>
            <Form.Control type="text" placeholder="Enter your specialization" value={data ? `${data.specialization}` : ""} />
          </Form.Group>
          {/* {console.log(data)} */}
        </Col>

        <Col md={6}>
          <Form.Group controlId="formUserType">
            <Form.Label>User Type</Form.Label>
            <Form.Control type='text' value={data ? `${data.userType}` : ""} /> 
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formYearOfExperience">
            <Form.Label>Years of Experience</Form.Label>
            <Form.Control type="number" placeholder="Enter years of experience"  value={data ? `${data.yearofexperience}` : ""}/>
          </Form.Group>
        </Col>
      </Row>

    
    </Form>
  );
};

export default DoctorProfile;
