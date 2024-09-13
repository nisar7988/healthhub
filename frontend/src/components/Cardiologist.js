// import React, { useState } from 'react';
import drashok from '../assests/ashok.jpg'
import drsubhash from '../assests/subhash.jpg'
import draparna from '../assests/aparna.webp'
import drbalbir from '../assests/balbir.jpg'
import { Card, Container , Row , Col} from 'react-bootstrap';
import Navbarline from './Reusable/Navbar';
import Footer from './Footer';



  const Cardiologist = () => {
    const specialist = [
       {
        "id": 1,
        "name": "Dr. Ashok Seth",
        image:drashok,
        specialist: 'Interventional Cardiologist',
        Qualification: 'MBBS, MD, DM, MRCP',
        Experience: '38+ Years',
        Location: 'New Delhi',
        Hospital:' Fortis Escorts Hospital, New Delhi',
       },
       {
        "id": 2,
         name:'Dr Subhash Chandra',
         image:drsubhash,
         specialist:'Interventional Cardiologist',
         Qualification: 'MBBS, MD, DM, DNB',
         Experience: '39+ Years',
         Location: 'Delhi',
         Hospital:' BLK Hospital, Delhi',
       },
       {
        "id": 3,
        name:'Dr Aparna Jaswal',
        image: draparna  ,
        specialist:'Interventional Cardiologist',
        Qualification:' MBBS, MD, DNB',
        Experience: '25+ Years',
        Location: 'Delhi',
        Hospital:'  Fortis Escorts Hospital, Delhi',

       },
       {
        "id": 4,
        name:'Dr Balbir Singh',
        image: drbalbir   ,
        specialist:'Interventional Cardiologist',
        Qualification: ' MBBS, MD, DM',
        Experience: '32+ Years',
        Location:'Delhi',
        Hospital: ' Max Hospital, Delhi',

       }













    ]
  return (
    <>
    <Navbarline/>
    <Container>
      <Row >
        <Col xs={12}>
        <h1 style={{textAlign:'center'}} lassName=' mb-3'>Cardiologists </h1>
        </Col>

      </Row>
      <Row className='mt-2' >
       
        {specialist.map((listDoctor , i) => {
          return (
    
            <Col key={i} lg={3} xs={12} md={6} sm={12} className=' '>
            <Card className=' m-1' >
              <Card.Img variant="top" src={listDoctor.image}  />
              <Card.Body>
                <Card.Title>{listDoctor.name}</Card.Title>
                <Card.Text>
                  {listDoctor.specialist}
                </Card.Text>
                <Card.Text>
                  {listDoctor.Qualification}
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            
      
          );
        })}
        
       
      </Row>

    </Container>
    
    <Footer/>
    
    
    
    
    </>
  );
   
}


export default Cardiologist;
