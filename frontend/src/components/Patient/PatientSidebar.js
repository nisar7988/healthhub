import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setShowLoginModal } from '../store/reducer';
import { IoLogOut, IoHome } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { SlCalender } from "react-icons/sl";

const PatientSidebar = () => {

    const { userType } = useSelector((state) => state.login)
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (userType !== "patient") {
        dispatch(setShowLoginModal(true));
        navigate('/')
      }
    }, [userType])








    return (
        <div className="d-none d-md-block bg-dark text-white" style={{ height: '150vh', paddingTop: '1rem' }}>
            <Nav className="flex-column p-3">
                <Nav.Link as={Link} to="/patientdashboard/" className="text-white">
                <IoHome />     Home
                </Nav.Link>
                <Nav.Link as={Link} to="/patientdashboard/patientprofile" className="text-white">
                <CgProfile />    View Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/patientdashboard/bookappointment" className="text-white">
                <SlCalender/>    Book Appointment
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/patient/reports" className="text-white">
                    Reports
                </Nav.Link> */}
                <Nav.Link as={Link} to="/logout" className="text-white">
                <IoLogOut/>    Logout
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default PatientSidebar;
