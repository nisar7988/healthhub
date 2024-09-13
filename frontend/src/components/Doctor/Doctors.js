import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const DoctorManagement = () => {
  // Array of card data
  const cardData = [
    {
      title: 'Add Doctor',
      link: '/admindashboard/doctordashboard', // Link for this card
    },
    {
      title: 'View Appointment Record',
      link: '/admindashboard/appointmentrecord', // Link for this card
    },
    // You can add more cards here if needed
  ];

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col md={4} className="mb-4" key={index}>
            {/* Using Link for each card */}
            <Link to={card.link} style={{ textDecoration: 'none' }}>
              <Card
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  textAlign: 'center',
                  cursor: 'pointer',
                  paddingTop: '1.5rem',
                  paddingBottom: '1.5rem',
                }}
              >
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={12}>
          {/* This is where nested routes will be rendered */}
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorManagement;






























// import React from 'react';
// import { Card, Container, Row, Col } from 'react-bootstrap';
// import { Link , Outlet } from 'react-router-dom';

// const DoctorManagement = () => {
//   return (
//     <Container className="my-5">
//       <Row className="justify-content-center">
//         {/* Add Doctor Card */}
//         <Col md={4} className="mb-4">
//         <Link to="doctordashboard"  style={{ textDecoration: 'none' }}>    </Link>
//           <Card style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', cursor: 'pointer',paddingTop:'1.5rem',paddingBottom:'1.5rem' }}>
//             <Card.Body>
//               <Card.Title>Add Doctor</Card.Title>
//             </Card.Body>
//           </Card>
      
//         </Col>

//         {/* View Appointment Record Card */}
//         <Col md={4} className="mb-4">
         
//           <Link to="/doctors/appointmentrecord" style={{ textDecoration: 'none' }}> </Link>   
//           <Card style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', cursor: 'pointer',paddingTop:'1.5rem',paddingBottom:'1.5rem' }}>
//             <Card.Body>
//               <Card.Title>View Appointment Record</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12}>
//           <Outlet />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default DoctorManagement;




