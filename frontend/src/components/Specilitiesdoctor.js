import { Card, Container , Row ,Col } from 'react-bootstrap'
import { TbHeartRateMonitor } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";
import { GiLeg } from "react-icons/gi";
import { LiaXRaySolid } from "react-icons/lia";
import { BsLungs } from "react-icons/bs";
import { PiTooth } from "react-icons/pi";
import teams from '../assests/teams.jpeg'
import { Link } from 'react-router-dom';





const Specilitiesdoctor = () => {
  const doctors=[
    {
        id: 1,
        icon:< TbHeartRateMonitor/>,
        Speciality:'Cardiologist',
        route:'/cardiologist'
    
    },
    {
        id: 2,
        icon:< GiBrain/>,
        Speciality:'Neurology',
        route:'/neurology'

    },
    {
        id: 3,
        icon:< GiLeg/>,
        Speciality:'Orthopedic',
        route:'/orthopedic'
    },
    {
        id: 4,
        icon:< LiaXRaySolid/>,
        Speciality:'Radiology',
        route:'/radiology'
    },
    {
        id: 5,
        icon:< BsLungs/>,
        Speciality:'Pulmonology',
        route:'/pulmonology'
    },
    {
        id: 6,
        icon:< PiTooth/>,
        Speciality:'Dentist',
        route:'/dentist'
        
    }
  ]



  // function HandleCard(e){
  //   console.log(e.target)
  // }







  
  
  
  return (
    <>
    <div>
      <p style={{margin:'auto',marginTop:'4rem',marginBottom:'3rem',textAlign:'center',backgroundColor:'#e6ffff',borderRadius:'0.5rem',fontSize:'1.5rem',width:'82vw',padding:'0.5rem'}} className='special'>Specialties</p>
    </div>
     
    <Container fluid>
        <Row>
          {/* Left Column for the Image */}
          <Col md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={teams}
              alt="Doctors"
              style={{ width: '85%', borderRadius: '0.5rem' }}
              />
          </Col>

          {/* Right Column for the Cards */}
          <Col md={6}>
            <Row>
              {doctors.map((doctor, i) => (
                
                <>
               { console.log(doctor)}
                 <Col key={i} xs={12} sm={6} className="mb-3">
                     <Link to={doctor.route} style={{ textDecoration: 'none' }}>
                  <Card style={{ textAlign: 'center', height: '18vh',width: '80%',margin:'auto',marginTop:'2rem'}} className='card-doctor'>
                    <Card.Body>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{doctor.icon}</div>
                      <Card.Text>{doctor.Speciality}</Card.Text>
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
              
                </>
                
              ))}
            </Row>
          </Col>
        </Row>
      </Container>



    </>
  )
}

export default Specilitiesdoctor
