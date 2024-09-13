import React, { useState } from 'react';
import { Form} from 'react-bootstrap';
// import { IoSearch } from "react-icons/io5";

// import second from '../assests/30.webp'

const Banner = () => {
  const [search, setSearch] = useState('');

  // const handleInputChange = (event) => {

  //   setSearch(event.target.value);

  //   // Add your search logic here
  // };



  const clearSearch = () => {
    setSearch('');
    setFilteredResults([]);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const [filteredResults, setFilteredResults] = useState([]);

  const specialties = [
    "Anesthesia",
    "Bone Marrow Transplant",
    "Colorectal Surgery",
    "Neuro & Spine Surgery",
    "Plastic & Reconstructive Surgery",
    "Radiodiagnosis",
    "Respiratory Medicine",
    "Transplant Surgery"
  ];

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearch(query);
    if (query.length > 0) {
      const results = specialties.filter(specialty =>
        specialty.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };


  return (
    <div className='image'>

      <p style={{ fontSize: '1.8rem', textAlign: 'center', color: 'black', width: '45vw', margin: 'auto', position: 'relative', top: '5rem' }} className='text'>
        "Medicine cures diseases, <br /> but only doctors can cure patients."

      </p>
      <Form className="search-bar bar1" onSubmit={handleSubmit}>

        {/* <div className='position-relative'> */}

        {/* <Form className="search-bar bar1" onSubmit={handleSubmit}> */}
        <div className="position-relative">
          <Form.Control
            list="specialties"
            type="search"
            placeholder="Search for Doctors, Specialties, and Hospitals"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <datalist id="specialties">
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty} />
            ))}
          </datalist>
        </div>
        {search && (
          <span className="clear-btn" onClick={clearSearch}>
            {/* < IoSearch style={{position:'relative',left:'45rem',top:'1rem',fontSize:'2rem'}}/> */}

          </span>
        )}
      </Form>
    </div>
  )
}

export default Banner
