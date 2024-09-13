// import React, {  useState } from 'react';
// import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
// import DoctorProfile from './Profiledoctor';
// import AppointmentForm from '../BookAppointment/AppointmentForm';
// import {  useSelector } from 'react-redux';



// const DashboardDoctor = () => {

//   const [activeSection, setActiveSection] = useState('home');
//   const userType = useSelector((state) => state.login.userType);
//   console.log(userType);



  
//   const renderContent1 = () => {
//     switch (activeSection) {
//       case 'home':
//         return <p>helloo</p>;
        
//         case 'profile':
//           return <DoctorProfile />;
      
//         case 'free':
//           return <AppointmentForm/>;
//           default:
//             return <div><h2>Home</h2><p>Welcome to the Admin Dashboard Home.</p></div>;
//         }
//       };


   

//   return (
//     <>
//     <Container fluid>
//       <Row>
//         {/* Navbar */}
//         <Navbar bg="light" style={{ backgroundColor: 'lightpurple' }} expand="lg">
//           <Navbar.Brand href="#home" >Doctor Dashboard</Navbar.Brand>
//         </Navbar>
//       </Row>
//       <Row>
//         {/* Sidebar */}
//         <Col md={2} style={{ backgroundColor: 'black', height: '100vh' }}>
//           <Nav defaultActiveKey="/home" className="flex-column">
//             <Nav.Link  onClick={() => setActiveSection('home')} style={{ color: 'white' }}>Home</Nav.Link>
//             <Nav.Link onClick={() => setActiveSection('profile')}  style={{ color: 'white' }}>View Profile</Nav.Link>
//             <Nav.Link onClick={() => setActiveSection('free')} style={{ color: 'white' }}>Appointmentbook</Nav.Link>
//             <Nav.Link href="#item4" style={{ color: 'white' }}>Item 4</Nav.Link>
//             <Nav.Link href="#item5" style={{ color: 'white' }}>Item 5</Nav.Link>
//           </Nav>
//         </Col>
//         {/* Main Content */}
//         <Col md={10} style={{ padding: '20px' }}>
//           {/* <h1>Doctor Dashboard</h1> */}
//           {renderContent1()}

//         </Col>
//       </Row>
//     </Container>
//     </>
//   );
// };

// export default DashboardDoctor;


// // ?login=true

import { Container, Row, Col } from 'react-bootstrap';
import {  Outlet } from 'react-router-dom';
import DoctorNavbar from './DoctorNavbar';  // Import the Navbar component
import DoctorSidebar from './DoctorSidebar'; // Import the Sidebar component

const DashboardDoctor = () => {


  return (
    <Container fluid style={{ margin: '0px', padding: '0px', overflow: 'hidden' }}>
      <Row>
        <Col md={12}>
          <DoctorNavbar /> {/* Custom Navbar for doctors */}
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <DoctorSidebar /> {/* Custom Sidebar for doctors */}
        </Col>
        <Col md={10} style={{ padding: '20px' }}>
          <Outlet /> {/* This is where nested routes will be rendered */}
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardDoctor;
