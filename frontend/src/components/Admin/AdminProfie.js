import {  useSelector } from 'react-redux';
import { Form, Row, Col} from 'react-bootstrap';

const AdminProfile = () => {
  const data = useSelector((state) => state.AdminInfo.admin)
    //  state.AdminInfo.admin;
console.log('runs admin profile ')
  console.log('admit reuducer data is:',data); // Log the admin state
  

  return (
   <>
     <Form>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={data.name} />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" value={data.email} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" value={data.password} />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" value={data.username} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="formUsertype">
            <Form.Label>User Type</Form.Label>
            <Form.Control type="text" value={data.userType}>
        
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formContactno">
            <Form.Label>Contact No</Form.Label>
            <Form.Control type="text" placeholder="Enter your contact number" value={data.contactno} />
          </Form.Group>
        </Col>
      </Row>

      
      
    </Form>
   </>
  );
};

export default AdminProfile;
