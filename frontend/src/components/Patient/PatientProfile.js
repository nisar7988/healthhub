// import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';

const ProfilePage = () => {

  // const data = useSelector( (state) => state.PatientInfo.patient)
  const data =useSelector((state) =>state.PatientInfo.patient);
  console.log(data);
 
//  console.log( useSelector( (state) => state.PatientInfo));

// address
// : 
// "bilaspur"
// dateOfBirth
// : 
// "2006-12-17T18:30:00.000Z"
// email
// : 
// "ishu@gmail.com"
// emergencyContact
// : 
// 99999
// fname
// : 
// "Ishu"
// gender
// : 
// "female"
// id
// : 
// 1
// medicalHistory
// : 
// "fever"
// password
// : 
// "ishu@123"
// phone
// : 
// 8053029653
// userType
// : 
// "patient"

return (
    <Form>
      <Row>
        <Col md={4}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={data ? `${data.fname}` : ""} />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" value={data ? `${data.email}` : ""} />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter your phone number"   value={data ? `${data.phone}` : ""} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group controlId="formDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="text" value={data ? `${data.dateOfBirth}` : ""} />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" value={data ? `${data.gender}` : ""} />

            {/* <Form.Control type="text">
              <option value={data ? `${data.gender}` : ""}>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control> */}
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formEmergencyContact">
            <Form.Label>medicalHistory Contact</Form.Label>
            <Form.Control type="text" placeholder="Enter emergency contact number" value={data ? `${data.medicalHistory}` : ""} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your address" value={data ? `${data.address}` : ""} />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formMedicalHistory">
            <Form.Label>Medical History</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your medical history" value={data ? `${data.medicalHistory}` : ""} />
          </Form.Group>
        </Col>
      </Row>

     
    </Form>
  );
}


export default ProfilePage;
