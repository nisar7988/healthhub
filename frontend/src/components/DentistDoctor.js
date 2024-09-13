import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const DentistDoctors = () => {
  const doctors = [
    {
      name: "Dr. Aman Ahuja",
      specialty: "Cosmetic Dentistry, Implantology",
      address: "COSMODENT India, Gurugram, Delhi NCR",
      contact: "COSMODENT India",
      experience: "13 years",
      details: "Known for his expertise in cosmetic dentistry and implantology.",
      image: "path/to/aman_ahuja.jpg" // Add the actual path to the image
    },
    {
      name: "Dr. Ateksha Bhardwaj Khanna",
      specialty: "Prosthodontics, Endodontics, Restorative Dentistry",
      address: "Medanta-The Medicity, Gurugram, Delhi NCR",
      contact: "Medanta",
      experience: "11 years",
      details: "Specializes in implantology, prosthodontics, and cosmetic dentistry.",
      image: "path/to/ateksha_bhardwaj.jpg" // Add the actual path to the image
    },
    {
      name: "Dr. Ritika Malhotra",
      specialty: "Periodontics",
      address: "Fortis Memorial Research Institute, Gurugram, Delhi NCR",
      contact: "Fortis",
      experience: "13 years",
      details: "Expert in periodontics and has her own clinic, 'The Perfect Smile'.",
      image: "path/to/ritika_malhotra.jpg" // Add the actual path to the image
    },
    {
      name: "Dr. Sarika Chaudhry Solanki",
      specialty: "Endodontics, Conservative Dentistry",
      address: "Venkateshwar Hospital, Dwarka, Delhi",
      contact: "Venkateshwar Hospital",
      experience: "17 years",
      details: "Specializes in conservative dentistry and endodontics.",
      image: "path/to/sarika_chaudhry.jpg" // Add the actual path to the image
    },
    {
      name: "Dr. Sachin Mittal",
      specialty: "General Dentistry, Implantology",
      address: "Dr. Sachin Mittal's Advanced Dentistry, Hisar, Haryana",
      contact: "Dr. Sachin Mittal's Advanced Dentistry",
      experience: "Over 10 years",
      details: "Known for his advanced treatments and compassionate approach.",
      image: "path/to/sachin_mittal.jpg" // Add the actual path to the image
    }
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {doctors.map((doctor, index) => (
        <Card key={index} style={{ width: '18rem', margin: '10px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Card.Img variant="top" src={doctor.image} alt={doctor.name} style={{ height: '200px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>{doctor.name}</Card.Title>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Specialty:</strong> {doctor.specialty}</ListGroup.Item>
            <ListGroup.Item><strong>Address:</strong> {doctor.address}</ListGroup.Item>
            <ListGroup.Item><strong>Contact:</strong> {doctor.contact}</ListGroup.Item>
            {doctor.experience && <ListGroup.Item><strong>Experience:</strong> {doctor.experience}</ListGroup.Item>}
            <ListGroup.Item><strong>Details:</strong> {doctor.details}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};

export default DentistDoctors;

