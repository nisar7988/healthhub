import React, { useState } from 'react'
import hospital1 from '../assests/apollo.jpeg'
import hospital2 from '../assests/medanta.jpg'
import hospital3 from '../assests/fortis.jpg'
import { Card } from 'react-bootstrap'

const Hospitals = () => {
    const [selectedHospital, setSelectedHospital] = useState(null);

    const hospitals = [
      {
        id: 1,
        name: 'Hospital 1',
        image: hospital1,
        description: 'Hospital 1 is known for its excellent emergency care services and state-of-the-art facilities.',
      },
      {
        id: 2,
        name: 'Hospital 2',
        image: hospital2,
        description: 'Hospital 2 specializes in cardiology and has a team of top-notch heart surgeons.',
      },
      {
        id: 3,
        name: 'Fortis',
        image: hospital3,
        description: ' Sector 62, Sahibzada Ajit Singh Nagar, Lamba, Punjab 160062',
        phone:' 0172 469 2222'
      },
    ];
  
    const handleCardClick = (hospital) => {
      setSelectedHospital(hospital);
    };
  
    return (
        <div style={{ marginTop: '20px', padding: '20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Hospitals in India</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div 
              style={{ 
                width: '50%', 
                padding: '20px', 
                border: selectedHospital ? '2px solid #4caf50' : 'none', // Show border only when a card is selected
                backgroundColor: '#f9f9f9' 
              }}
            >
              {selectedHospital && (
                <>
                  <img 
                    src={selectedHospital.image} 
                    alt={selectedHospital.name} 
                    style={{ maxWidth: '100%', maxHeight: '300px', marginBottom: '10px' }} 
                  />
                  <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>
                   Address:  {selectedHospital.description}
                Phone:  {selectedHospital.phone}
                  </p>
                </>
              )}
            </div>
            <div style={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
              {hospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  onClick={() => handleCardClick(hospital)}
                  style={{
                    padding: '15px',
                    margin: '10px 0',
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: selectedHospital?.id === hospital.id ? '' : '' // Green border for selected, default border for others
                  }}
                >
                  <Card style={{ width: '', height: '10vh' }}>
                    <Card.Body>
                      <Card.Text>{hospital.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Hospitals
