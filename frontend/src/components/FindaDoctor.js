import React, { useState } from 'react';
import drashok from '../assests/ashok.jpg';
import drvankat from '../assests/venkat.jpg';
import drravinder from '../assests/ravinder.jpeg';
import drhitesh from '../assests/hitesh.jpg';
import drdivya from '../assests/divya.jpeg'
import drsandeep from '../assests/sandeep.jpeg';
import drmanjinder from '../assests/manjinder1.png'
import drvivek from '../assests/vivek.jpeg';
import dronkar from '../assests/onkar.jpg'
import drarshad from '../assests/arshad.jpeg'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Navbarline from './Reusable/Navbar'

const FindaDoctor = () => {
    const[finddoctor] = useState([
        {
        "id": 1,
        "name": "Dr. Ashok Seth",
        image:drashok,
        Speciality: 'Interventional Cardiologist',
        Address:'Metro Station, 104, Fortis Escorts Heart Institute, Okhla Rd, Sukhdev Vihar, New Delhi, Delhi 110025',
        Phone: '011 4713 4288',
        // Qualification: 'MBBS, MD, DM, MRCP',
        // Experience: '38+ Years',
        // Location: 'New Delhi',
        // Hospital: 'Fortis Escorts Hospital, New Delhi',
        },
        {
        id:2,
        name:'Dr. Venkat Ramesh',
        image:drvankat,
        Speciality:'Infectious Diseases Specialist',
        Address:'Rd Number 72, opposite Bhartiya Vidya Bhavan School, Jubilee Hills, Hyderabad, Telangana 500033',
        Hours:'Open 24 hours',
        Phone: '080 4775 8169'
        },
        {
         id:3,
         name:'Dr. Ravinder Gera',
         image:drravinder,
         Speciality:'ENT specialist',
         Address:'112,1st Floor, Apna Bazar, Sadar Bazar, Roshan Pura, Gurugram, Haryana 122007',
         Hours:'Open 24 hours',
         Phone: '098103 40495',
        },
        {
            id:4,
            name:'Dr Hitesh Garg',
            image:drhitesh,
            Speciality:'Orthopedic Surgeon',
            Address: 'A704, 7th floor, Arcadia, South City II, Sector 49, Gurugram, Fatehpur, Haryana 122018',
            Hours: '8:00 am - 6:00 pm',
            Phone: '083770 04016',
        },
        {
            id:5,
            name:'Dr. Divya K S',
            image:drdivya,
            Speciality:' Allergist Specialist',
            Address:'Old No. 28, Apollo Hospitals, 1, Platform Rd, near Mantri Square Mall, VV Giri Colony, Seshadripuram, Karnataka 560020',
            Hours:'8:30 am -  7:30 pm',
            Phone:' 080 4696 1837'
        },
        {
            id:6,
            name:'Dr. Sandeep Vaishya',
            image: drsandeep,
            Speciality:'Neurosurgeon',
            Address:'UG, Fortis Hospital Rd, Sector 44, Gurugram, Haryana 122002',
            Hours:'Open 24 hours',
            Phone:' 0124 496 2200',
        },
        {
            id:7,
            name:'Dr. Manjinder Sandhu',
            image: drmanjinder,
            Speciality:'Cardiologist',
            Address:'Fortis Hospital, Sector 44, Gurugram, Haryana 122002',
            Hours:'Open 9:00 am - 7:00 pm',
            Phone:' 098188 38234'
        },
        {
            id:8,
            name:'Dr. Vivek Vij',
            image: drvivek,
            Speciality:' Organ Transplant Surgeon',
            Address:'502, Okhla Rd, Sukhdev Vihar Metro Station, New Delhi, Delhi 110025',
            Hours:'Open 9:00 am - 10:00 pm',
            Phone:'011 4713 5000'
        },
        {
            id:9,
            name:'Dr. Arshad Akeel',
            image:drarshad,
            Speciality:'General practitioner ',
            Address:'No: 21, Greams Lane, Off, Greams Rd, Chennai, Tamil Nadu 600006',
            Hours:'Open 9:00 am - 6:00 pm',
            Phone:'080 6904 9756',
            
        },
        {
            id:10,
            name:'Dr.Onkar Gupta',
            image: dronkar,
            Speciality:'Pulmonologist',
            Address:'10211, ATS Casa Espana, Mohali',
            Hours:'Open 9:00 am - 6:00 pm',
            Phone:' +91 92688 80303'
        }
    ])
    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around', // Adjusts spacing between cards
            padding: '20px',
            backgroundColor: '#f9f9f9',
        },
        card: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '48%', // Width adjusted to fit 2 cards per line with some margin
            height: '250px', // Fixed height for each card
            margin: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            padding: '15px',
            display: 'flex', // Flexbox for side-by-side image and text
        },
        image: {
            width: '40%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            marginRight: '20px', // Space between image and text
        },
        info: {
            flexGrow: 1, // Allows info section to fill available space
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center text vertically
        },
        infoItem: {
            marginBottom: '8px',
        },
        header: {
            textAlign: 'center',
            margin: '20px 0',
            fontSize: '2em',
            color: '#333',
        }
    };

    return (
        <div>
            <Navbarline />
            <h1 style={styles.header}>Best Doctors in India</h1>
            <div style={styles.container}>
                {finddoctor.map((doctor) => (
                    <div key={doctor.id} style={styles.card}>
                        <img src={doctor.image} alt={doctor.name} style={styles.image} />
                        <div style={styles.info}>
                            <div style={styles.infoItem} className='fw-bold fs-4'>{doctor.name}</div>
                            <div style={styles.infoItem}>{doctor.Speciality}</div>
                            <div style={styles.infoItem}><FaLocationDot style={{marginRight:'0.5rem'}}/>{doctor.Address}</div>
                            {/* {doctor.Hours && (
                                <div style={styles.infoItem}>{doctor.Hours}</div>
                            )} */}
                            <div style={styles.infoItem}> <FaPhone style={{marginRight:'0.5rem'}}/>{doctor.Phone}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FindaDoctor
