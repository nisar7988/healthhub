import { Container, Row, Col } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { useNavigate, Outlet } from 'react-router-dom';
import PatientNavbar from './PatientNavbar'; // Import the Navbar component
import PatientSidebar from './PatientSidebar'; // Import the Sidebar component
import { Outlet } from 'react-router-dom';

const PatientDashBoard = () => {

  // Redirect if the user is not a patient
 

  return (
    <Container fluid style={{ margin: '0px', padding: '0px', overflow: 'hidden' }}>
      <Row>
        <Col md={12}>
          <PatientNavbar /> {/* Use the new PatientNavbar component */}
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <PatientSidebar /> {/* Use the new PatientSidebar component */}
        </Col>
        <Col md={10} style={{ padding: '20px' }}>
          <Outlet /> {/* This is where the routed content will be rendered */}
        </Col>
      </Row>
    </Container>
  );
};

export default PatientDashBoard;


