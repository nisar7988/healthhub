import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { IoLogOut, IoHome } from 'react-icons/io5';
import { FaUserDoctor } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowLoginModal } from '../store/reducer';


const AdminSidebar = () => {
  const { userType } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userType !== "admin") {
      dispatch(setShowLoginModal(true));
      navigate('/')
    }
  }, [userType])


  return (
    <div className="d-none d-md-block bg-dark text-white" style={{ height: '150vh' }}>
      <Nav className="flex-column p-3">
        {/* Using Link from react-router-dom for navigation */}
        <Nav.Link as={Link} to="/admindashboard/" style={{ color: 'white' }}>
          <IoHome /> Home
        </Nav.Link>
        <Nav.Link as={Link} to="/admindashboard/doctorrecord" style={{ color: 'white' }}>
          <FaUserDoctor /> Doctors
        </Nav.Link>
        <Nav.Link as={Link} to="/admindashboard/patientrecord" style={{ color: 'white' }}>
           <FaUser /> Patients
        </Nav.Link>
        <Nav.Link as={Link} to="/admindashboard/adminprofile" style={{ color: 'white' }}>
        <CgProfile />  View Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/logout" style={{ color: 'white' }}>
          <IoLogOut /> Logout
        </Nav.Link>
      </Nav>
    </div>










    // <div className="d-none d-md-block bg-dark text-white" style={{ height: '100vh' }}>
    //   <Nav className="flex-column p-3">
    //     <Nav.Link onClick={() => setActiveSection('home')} style={{ color: 'white' }}><IoHome /> Home</Nav.Link>
    //     <Nav.Link onClick={() => setActiveSection('doctor')} style={{ color: 'white' }}><FaUser /> Doctors</Nav.Link>
    //     <Nav.Link onClick={() => setActiveSection('patients')} style={{ color: 'white' }}><CgProfile /> Patients</Nav.Link>
    //     <Nav.Link onClick={() => setActiveSection('profile')} style={{ color: 'white' }}><FaUserDoctor /> Profile</Nav.Link>
    //     {/* <Nav.Link onClick={() => setActiveSection('appointment')} style={{ color: 'white' }}><FaUserDoctor /> Appointment Record</Nav.Link> */}
    //     <Nav.Link onClick={() => setActiveSection('logout')} style={{ color: 'white' }}><IoLogOut /> Logout</Nav.Link>
    //   </Nav>
    // </div>
  );
};

export default AdminSidebar;
