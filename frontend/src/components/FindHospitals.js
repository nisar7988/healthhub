import React from 'react'
import medanta from '../assests/medanta.jpg';
import fortis from '../assests/fortis.jpg';
import apollo from '../assests/apolloo.jpg';
import max from '../assests/max.jpg';
import manipal from '../assests/manipal.jpg';
import naryana from '../assests/narayana.jpg';
import tata from '../assests/tatamemorial.webp';
import blk1 from '../assests/blk1.jpg';
import jaypee from '../assests/japee.jpg'
import artmis from '../assests/artemis.webp';
import Navbarline from './Reusable/Navbar'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const FindHospitals = () => {
    const Hospitals = [
        {
            id:1,
            name:'Medanta–The Medicity, Gurugram',
            image:medanta,
            Address:'Medanta- The Medicity, CH Baktawar Singh Rd, Medicity, Islampur Colony, Sector 38, Gurugram, Haryana 122001',
            Phone:'0124 414 1414',
            About:'Headed by Dr. A.S.Soin a panel of doctors from Medanta performed their first successful intestinal transplant in January 2013, in India.Their team has performed more than 15,000 cardiac surgeries and 2500 joint replacement surgeries.Medanta has the highest number of liver transplants done in India and the 2nd highest in the world and has performed over 500 living donor liver transplants.'
        },
        {
            id:2,
            name:'Fortis Memorial Research Institute ',
            image: fortis ,
            Address:'Sector - 44, Opposite HUDA City Centre, Gurugram, Haryana 122002',
            Phone:'088600 22554',
            About:'The hospital is integrated with 256 Slice Brilliance ICT Scanner that has the ability to capture a picture of the entire heart in just two heart beats.It also consists of two modular operating rooms furnished with equipments and controlled by a common control panel.They have first-of-its-kind E – ICU with two-way audio visual communication that allows clinicians to access patient 24×7.There is Bi- Plane Cath Lab, ultra modern Cardiac Cath Lab that are also there to address cardiac and vascular interventions.Hospital is an expert in radiation. They have CT based Brain Suite, equipped with intra operative CT for brain and spine.Fortis Memorial has the world’s first Digital MRI technology, 3 Tesla.'

        },
        {
          id:3,
          name:'Apollo Hospitals',
          image: apollo,
          Address:'Apollo Hospitals Bilaspur, Seepat Road, Bilaspur, Chhattisgarh, 495006',
          Phone:'0755-4308101',
          About:'Their cardiology team achieved a 99.6% success rate in cardiac bypass surgeries amongst which 91% were beating heart surgeries.Their specialized transplant team has completed 500 Liver transplants in Feb, 2011.Recently they have carried out successful Bilateral Total Knee Arthroplasty in a single sitting on a 93-year old man at the Indraprastha Apollo Hospital, New Delhi.To keep the staff abreast regular training programs, conferences and continuing medical education programs are undertaken.Indraprastha Apollo Hospitals, New Delhi have successfully performed a Split Liver Transplant in two adults, a first in the city and second in the country.The hospital is committed to the achievement and maintenance of excellence in education, research and healthcare for the benefit of humanity and aims to provide “holistic healthcare” for the entire community.'  
        },
        {
          id:4,
          name:'Max Hospitals',
          image:max,
          Address:'B - Block, Sector 43 Opposite Huda City Centre Metro Station Sushant Lok I, Gurgaon',
          Phone:'01143078910',
          About:'Max Healthcare consists of a team of more than 2000 leading doctors, 3300 nurses, and 3200 trained staff.They have efficient Emergency Services which include internationally trained physicians in the field of Emergency Medicine.The Institute of Minimally Access, Metabolic & Bariatric Surgery, Max Super Specialty Hospital, Saket, New Delhi has been accredited as Center of Excellence for Bariatric Surgery.The hospital Specializes in Cardiac Surgery, Cancer Care, Orthopedics, Pediatric, Mental Health and Behavioral Sciences, Aesthetic and Reconstructive Surgery, Internal Medicine, Endocrinology, ENT, Neurosciences, Eye Care, Minimal Access Surgery'

        },
        {
          id:5,
          name:'Manipal Hospitals',
          image: manipal,
          Address:'Address. Block F, Gol Chakkar, Palam Vihar Gurugram, Haryana 122 017',
          Phone:'0124 416 9950',
          About:'Manipal Hospitals Dwarka is supported by a dedicated team of specialized doctors, paramedical professionals and nurses.  It has more than 40 doctors from across the globe that makes sure that the patients get the best medical services. Through their network of hospitals and experienced team of medical professionals Manipal hospital, Dwarka has embraced digital and tech advancements for better outcomes. The renowned doctors of this hospital provide the best treatment for Nephrology, Obstetrics & Gynaecology, Anesthesiology, Dermatology, Diabetes and Endocrinology.' 
        },
        {
            id:6,
            name:'Narayana Superspeciality Hospital',
            image:naryana,
            Address:'Jaipur, Rajasthan',
            Phone:'080 6215 4396',
            About:'Narayana hospital runs under the guidance of none other than Mr. Devi Shetty, the world renowned doctor. Therefore, it is not a matter of surprise that the hospital has achieved so many milestones.Other than this, there are a many competent, qualified and efficient doctors who are responsible for making what Narayana is today, a hospital surpassing international standards.The hospital has over 30 streams of clinical specialties including Cardiac Sciences, Nephrology, Neurosciences, Orthopaedics, Urology Gastroenterology and Oncology.'
        },
        {
            id:7,
            name:'Tata Memorial Hospital',
            image:tata,
            Address:'Dr. E Borges Road, Parel, Mumbai, Maharashtra 400012',
            Phone:'022-24177000',
            About:'The Department of Surgical Oncology provides minimal access surgeries, skull-base procedures, major vascular replacements, limb salvage, microvascular surgery and robotic surgeries. The department conducts investigator-initiated and sponsored research studies.One of the fields of specialization of this hospital is in the treatment of acute lymphoblastic leukemia (A.L.L). Every year nearly 30,000 new patients visit the clinics from all over India and neighboring countries. Nearly 60% of these cancer patients receive primary care at the Hospital of which over 70% are treated almost free of any charges.'
        },
        {
            id:8,
            name:'BLK Super Speciality Hospital',
            image:blk1,
            Address:'Pusa Road, Near Rajendra Place Metro Station, New Delhi, Delhi 110',
            Phone:'011 3040 3040',
            About:'BLK Super Specialty consists of 150 senior specialties working under various specialty departments.They some of the best cancer doctors in India.The hospital specializes in a wide-spectrum of treatments including Cochlear Implant, IVF & Infertility Treatment, Bariatric, Anesthesiology, Laparoscopic Surgery, Ayurveda, Endocrinology, ENT, Obstetrics & Gynecology, Nuclear Medicine, Vascular & Endovascular Surgery, Liver Transplant, and Pathology.Their Bone Marrow Transplant Centre is one of the largest centers in Asia, and is accredited with Delhi’s First MUD (Match Unrelated Donor) Transplant.The hospital provides the best treatment for laparoscopic surgery for Obesity and Gastrointestinal Cancer.'
        },
        {
            id:9,
            name:'Jaypee Hospital',
            image:jaypee,
            Address:'Sector 128, Noida, Uttar Pradesh 201304',
            Phone:'0120 232 2222',
            About:'Jaypee hospital is led by a team of more than 400 well-trained experienced medical professionals offering emergency care and quality services in all the specialties.Jaypee hospital is supported by the best Cardiac and Neurosciences team.The clinicians and support staff of this hospital are trained to deliver the best services.Jaypee hospital is developed with an intended capacity of 1200 beds, cutting-edge technologies including 20-bedded dialysis unit, 4 Cardiac Cath Lab with Hybrid OT, 150 critical care beds, 24-bedded advanced Neonatal ICU, 18 Modular OTs, 325 Ward beds, 2 Linear Accelerator,3.0 Tesla MRI, 64 Slice PET-CT, 256 Slice CT Scan, Da Vinci Robotic Surgery, and lots more.The hospital is technologically updated with the advanced and innovative techniques and designed as a tertiary care multi-specialty hospital.'
        },
        {
            id:10,
            name:' Artemis Hospital',
            image:artmis,
            Address:'Mathura Road, Near Delhi-Gurgaon Border, Faridabad, Haryana',
            Phone:'91- 124 4588 888',
            About:'Artemis Hospital, established in 2007, spread across 9 acres, is a 550 plus bed; state-of-the-art multi-speciality hospital located in Gurgaon, India. Artemis Hospital is the first JCI and NABH accredited Hospital in Gurgaon.Designed as one of the most advanced hospitals in India, Artemis provides a depth of expertise in the spectrum of advanced medical & surgical interventions, comprehensive mix of inpatient and outpatient services.'
        }
    ]
  return (
    <div>
        <Navbarline />

      <div className="container">
      <h1 className="title">Top Hospitals in India</h1>
      <div className="cards-container">
        {Hospitals.map((hospital) => (
          <div key={hospital.id} className="card">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="hospital-name">{hospital.name}</h2>
              <p>
                 <FaLocationDot /> {hospital.Address}
              </p>
              <p>
                <FaPhone /> {hospital.Phone}
              </p>
              <p className="about">{hospital.About}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
              </div>
  );
}

export default FindHospitals
