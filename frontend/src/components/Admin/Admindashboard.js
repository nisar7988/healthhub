import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
// import { IoLogOut } from "react-icons/io5";
// import { IoHome } from "react-icons/io5";
// import { FaUserDoctor } from "react-icons/fa6";
// import { CgProfile } from "react-icons/cg";
// import { FaUser } from "react-icons/fa";
// import PatientList from '../Patient/Patientrecord';
// import DoctorRecord from '../Doctor/DoctorRecord';
// import AdminProfie from '../Admin/AdminProfie';
// import DoctorManagement from '../Doctor/Doctors';
// import { useNavigate } from 'react-router-dom';
// import BookAppointmentRecord from '../BookAppointment/BookAppointmentRecord';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

// import { useSelector } from 'react-redux';


const AdminDashboard = () => {


  return (



    <Container fluid style={{margin:'0px',padding:'0px'}}>
    <Row>
        <Col >
          <AdminNavbar />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={2} className="d-none d-md-block">
          <AdminSidebar />
        </Col>
        <Col xs={12} md={10} className="p-3">
          <Outlet /> {/* Render the matched child route */}
        </Col>
      </Row>
  </Container>
  );
};

export default AdminDashboard;
