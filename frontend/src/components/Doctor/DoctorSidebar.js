import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoLogOut, IoHome } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setShowLoginModal } from '../store/reducer';
import { TbReportSearch } from "react-icons/tb";

const DoctorSidebar = () => {
 const { userType } = useSelector((state) => state.login)

const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userType !== "doctor") {
      dispatch(setShowLoginModal(true));
      navigate('/')
    }
  }, [userType])






  return (
    <div className="bg-dark text-white" style={{ height: '150vh' }}>
      <Nav className="flex-column p-3">
        <Nav.Link as={Link} to="/doctorboard/" style={{ color: 'white' }}>
        <IoHome />  Home
        </Nav.Link>
        <Nav.Link as={Link} to="/doctorboard/doctorprofile" style={{ color: 'white' }}>
        <CgProfile />  View Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/doctorboard/appointment" style={{ color: 'white' }}>
         <FaRegCalendarCheck/> OPD time
        </Nav.Link>
        <Nav.Link as={Link} to="/doctorboard/recorddoctor" style={{ color: 'white' }}>
        <TbReportSearch/>  Reports
        </Nav.Link>
        <Nav.Link as={Link} to="/logout" style={{ color: 'white' }}>
        <IoLogOut/>  Logout
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default DoctorSidebar;
