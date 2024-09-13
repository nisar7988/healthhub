import React from 'react'
import dramit from '../assests/amit.jpeg';
import drprashant from '../assests/prashant.jpg';
import drsanjay from '../assests/sanjay.jpeg';
import drsidhart from '../assests/sidarth.jpeg';
import drvikram from '../assests/vikram.jpg';
import drabheek from '../assests/abheek.jpeg';
import Navbarline from './Reusable/Navbar';
import Footer from './Footer';

const Orthopedic = () => {
    const ortho = [
        {
            id:1,
            name:"Dr. Prof Amit Kumar Agarwal",
            image: dramit,
            Specilities:'Orthopaedic Surgeon',
            Address:'Indraprastha Apollo Hospitals Delhi, Delhi Mathura Road, Sarita Vihar, New Delhi, Delhi 110076',
            Phone:'099685 78514'

        },
        {
            id:2,
            name:"Dr Prashant Agrawal ",
            image:drprashant,
            Specilities:'Orthopaedic Surgeon',
            Address:'Apollo Hospitals, Plot # 13, Parsik Hill Rd, off Uran Road, Ekta Vihar, Sector 23, CBD Belapur, Navi Mumbai, Maharashtra 400614',
            Phone:'091374 00914'
        },
        {
            id:3,
            name:'Dr. Sanjay Dhar',
            image:drsanjay,
            Specilities:'Orthopaedic Surgeon',
            Address:'Apollo Hospitals, Plot # 13, Parsik Hill Rd, off Uran Road,Mumbai',
            Phone:'091374 00914'
        },
        {
            id:4,
            name:'Dr. Siddhart Yadav',
            image:drsidhart,
            Specilities:'Orthopaedic Surgeon',
            Address:'Apollo Hospitals, Plot # 13, Parsik Hill Rd, off Uran Road',
            Phone:'091374 00914'

        },
        {
            id:5,
            name:'Dr Vikram Paode',
            image:drvikram,
            Specilities:'Orthopaedic Surgeon',
            Address:'Plot # 13, Parsik Hill Rd, off Uran Road, Ekta Vihar, Sector 23, CBD Belapur, Navi Mumbai, Maharashtra 400614',
            Phone:' 080 4024 6903'
        },{
            id:6,
            name:'Dr. Abheek Kar',
            image:drabheek,
            Specilities:'Orthopaedic Surgeon',
            Address:'Loc, ID 376, Apollo Multispeciality Hospital Limited, Canal Circular Rd, Kadapara, Phool Bagan, Ultadanga, Kolkata, West Bengal 700054',
            Phone:' 080 4696 1837'
        }
    ]
  return (
    <>
    <Navbarline/>
    <div className="container mt-5">
        <h1 style={{textAlign:'center'}} className=' mb-3'>Orthopaedic Doctor</h1>
    <div className="row">
        {ortho.map((doctor) => (
            <div key={doctor.id} className="col-md-4 mb-4">
                <div className="card h-100">
                    <img src={doctor.image} className="card-img-top" alt={doctor.name} />
                    <div className="card-body">
                        <h5 className="card-title">{doctor.name}</h5>
                        <p className="card-text"><strong>Speciality:</strong> {doctor.Specilities}</p>
                        <p className="card-text"><strong>Address:</strong> {doctor.Address}</p>
                        <p className="card-text"><strong>Phone:</strong> {doctor.Phone}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
<Footer/>
        </>
);
  
}

export default Orthopedic
