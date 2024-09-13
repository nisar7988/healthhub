import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import { TbReportMedical } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaRegHospital } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { Link } from 'react-router-dom';


function CardPage(){
const cards = [
  {
    title:'Card 1',
    icon: <SlCalender />,
    description: ' Book an Appointment',
    route:'/bookappointment'
  },
  
  {
    title:'Card 2',
    icon: <FaRegHospital />,
    description: ' Hospital',
    route:'/hospital'

  },
  {
    title:'Card 3',
    icon: <FaUserDoctor />,
    description: ' Doctors',
    route:'/findadoctor'
  },
  {
    title: 'Card 4',
    icon: <FaAmbulance />,
    description: 'Ambulance',
    route:'/bookambulance'
  }
]

  return (
    <Container>
      <Row>
        {cards.map((card, i) => (
          <Col key={i} sm={12} md={3}>
            <Link to={card.route} style={{ textDecoration: 'none' }}>
            <Card style={{width:'13rem',margin:'auto'}}className='cards mt-5' >
              <Card.Body style={{textAlign:'center'}}>
                {/* <Card.Title>{card.title}</Card.Title> */}
                <div style={{ fontSize: '2rem',marginBottom:'1rem' }}>{card.icon}</div>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );









}



export default CardPage































// function TextExample() {
//   return (
//     <>
//     <Container className='container-card' >
//       <Row>
//         <Col md={5} className='card-1' style={{marginTop:'2rem'}}>
//         <Card style={{ width: '17rem' ,height:'27vh'}} className='card1'>
//        <Card.Body>
//         <Card.Title>{<SlCalender  style={{fontSize:'2rem',marginLeft:'7rem',marginTop:'1rem'}}/>}</Card.Title>
//         <Card.Title style={{marginTop:'2rem',marginLeft:'1rem'}}> Book an Appointment</Card.Title>
//         {/* <Card.Subtitle className="mb-5 text-muted"></Card.Subtitle> */}
//         {/* <Card.Text>
//          Book an Appointment
//         </Card.Text> */}
//         {/* <Card.Link href="#">Card Link</Card.Link> */}
//         {/* <Card.Link href="#">Another Link</Card.Link> */}
//       </Card.Body>
//     </Card>
//         </Col>
//         <Col md={3} style={{marginTop:'2rem'}} className='card-2'>
//          <Card style={{ width: '18rem' ,height:'27vh',display:'flex',justifyContent:'center',alignItems:'center',}} className='card1'>
//         <Card.Body>
//         <Card.Title>{<FaRegHospital  style={{fontSize:'2rem',marginLeft:'1.5rem',marginTop:'1rem'}}/>}</Card.Title>
//         <Card.Title style={{marginTop:'2rem'}}> Hospitals</Card.Title>
//         </Card.Body>
//         </Card>
//         </Col>
//         <Col md={3} style={{margin:'2rem',marginRight:'2rem'}} className='card-3'>
//          <Card style={{ width: '18rem' ,height:'27vh',display:'flex',justifyContent:'center',alignItems:'center'}} className='card1'>
//         <Card.Body>
//         <Card.Title>{<FaUserDoctor  style={{fontSize:'2rem',marginLeft:'1.5rem',marginTop:'1rem'}}/>}</Card.Title>
//         <Card.Title style={{marginTop:'2rem'}}> Doctors</Card.Title>
//         </Card.Body>
//         </Card>
//         </Col>
//       </Row>
//     </Container>
   
   
    







//          </>
//   );
// }

// export default TextExample;