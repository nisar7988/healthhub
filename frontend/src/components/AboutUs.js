 import React from 'react'
 import hospital from '../assests/hospital1.jpeg'
 
 const AboutUs = () => {
    return (
        <div style={{ backgroundColor: '#e6ffff', marginTop: '3rem', padding: '1rem' }}>
          <h1 style={{ textAlign: 'center', margin: '1rem 0', backgroundColor: '#e6ffff' }}>About Us</h1>
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap' 
            }}
          >
            {/* Text on the left side */}
            <div style={{ flex: '1', margin: '1rem', fontSize: '1.2rem', lineHeight: '1.6', minWidth: '280px' }}>
              <p>
                Welcome to Hospital, a leading healthcare facility located in India. Established in 2020, our hospital has been providing 
                exceptional medical care to the community with a commitment to excellence. We offer a wide range of services, including state-of-the-art 
                diagnostic and therapeutic facilities, specialized departments such as cardiology, oncology, and maternity care, and advanced surgical suites.
              </p>
              <p>
                Our team of highly qualified doctors, nurses, and support staff work tirelessly to ensure the best possible outcomes for our patients. We are 
                dedicated to delivering compassionate, patient-centered care in a safe and comfortable environment. At Hospital, we believe in continuous 
                improvement and innovation, striving to stay at the forefront of medical advancements.
              </p>
              <p>
                We invite you to visit our facility or contact us to learn more about how we can serve your healthcare needs.
              </p>
            </div>
    
            {/* Image on the right side */}
            <div style={{ flex: '1', textAlign: 'center', minWidth: '280px' }}>
              <img 
                src={hospital}
                alt="Hospital Building" 
                style={{ width: '80%', borderRadius: '8px', maxWidth: '400px' }} 
              />
            </div>
          </div>
        </div>
      );
    };
 
 export default AboutUs
 