import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assests/hms.png'
// import { BiSolidUserCircle } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";



import LoginModal from '../LoginPage';
import { useState } from 'react';
import SignupPatientModal from '../SignupPatient';
import { useDispatch, useSelector } from 'react-redux';
import { setShowLoginModal } from '../store/reducer';







function Navbarline() {
  const show = useSelector(state=>state.login.showLoginModal)
  const [showLogin, setShowlogin] = useState(true)
  const isValid  = useSelector((state) => state.login.isValid)
  const {userType} = useSelector((state) =>state.login)
  const dispatch =useDispatch();
  console.log(show);

  const setShow=(value)=>{
    dispatch(setShowLoginModal(value))
  }
  
   const navigate = useNavigate()
  const handleChange = ()=>{
    if (isValid) {
      if(userType==='patient'){

        navigate('/patientdashboard');
      }
      else if(userType==='doctor'){
        navigate('/doctorboard');
      }
      else if(userType==='admin'){
        navigate('/admindashboard')
      }
    } else {
      setShow(true); // Show login modal if not logged in
    }
  }


  return (
    <>
      {showLogin && <LoginModal setShowlogin={setShowlogin} show={show} setShow={setShow} />}
      {!showLogin && <SignupPatientModal show={show} setShow={setShow} setShowlogin={setShowlogin} />}
      <Navbar collapseOnSelect expand="lg" className="bg-light flow-over" style={{ margin: '0px', padding: '0px', overflow: 'hidden' }}>
        <Container fluid style={{ margin: '0px', padding: '0px', overflow: 'hidden' }}>
          <Navbar.Brand as={Link} to={'/'}>
            <img src={logo} alt='logo' style={{ background: 'none', height: '3rem', width: '4.2rem', marginLeft: '1rem' }} />
          </Navbar.Brand>
          {/* <Navbar.Brand href="#home">
          Find a Doctor</Navbar.Brand> */}
          <Nav.Link as={Link} to={'/findadoctor'}>Find A Doctor</Nav.Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/contactus'} style={{ color: 'black' }}>Contact Us</Nav.Link>
              <Nav.Link as={Link} to={'/services'} style={{ color: 'black' }}>Servics</Nav.Link>
              <Nav.Link as={Link} to={'/emergency'} style={{ color: 'black' }}>Emergency</Nav.Link>
              {/* <Nav.Link as={Link} to={'/payment'} style={{ color: 'black' }}>appointment</Nav.Link> */}
              {/* <Nav.Link as={Link} to={'/doctors'}style={{color:'black'}}>Doctors Record</Nav.Link> */}
              {/* <Nav.Link as={Link} to={'/patient'}style={{color:'black'}}>Record</Nav.Link> */}





              {/* <NavDropdown title="Hospitals" id="collapsible-nav-dropdown" >
             <NavDropdown.Item href="#action/3.1">Delhi</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">
               Punjab
              </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Haryana</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Rajasthan</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3"> Uttar Pradesh</NavDropdown.Item>
             </NavDropdown> */}
            </Nav>
            <Nav>
              {/* <Nav.Link as={Link} to={'/login'} style={{border:'1px solid black', borderRadius:'1rem'}}>Login</Nav.Link> */}
              <Nav.Link eventKey={2}  className='me-1'>
                {!isValid ?                                
                
                <Button variant="outline-primary" onClick={() => setShow(true)}>login</Button> :
                <FaRegUserCircle   onClick={handleChange} size={'2rem'} /> 
                }
                
              
              
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}



























// function Navbarline() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary m-0 p-0 main" >
//       <Container fluid className='bg-primary main' >
//         <Navbar.Brand ><img src={logo} alt='logo' style={{background:'none',height:'3rem',width:'1rem',marginLeft:'0.5rem'}}/></Navbar.Brand>
//         <Navbar.Brand href="#home">Find a Doctor</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features"></Nav.Link>
//             <Nav.Link href="#deets">Contact Us</Nav.Link>
//             <Nav.Link href="#pricing">Servics</Nav.Link>
//             <Nav.Link href="#deets">Emergency</Nav.Link>
//             <NavDropdown title="Hospitals" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Delhi</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//               Punjab
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Haryana</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Rajasthan</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3"> Uttar Pradesh</NavDropdown.Item>
//               {/* <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">

//               </NavDropdown.Item> */}
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link eventKey={2}   >
//              <BiSolidUserCircle style={{height:'2rem',width:'2rem',marginRight:'1rem'}} />
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

export default Navbarline;
