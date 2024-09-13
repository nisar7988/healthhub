import { useState } from 'react';
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom'

function Example() {
  const [smShow, setSmShow] = useState(false);
// const [state, setState] = useState(false)
// const navigate = useNavigate()

// const handleLogout = () => {
//     setState(!state) // Update the state
//     // Perform any additional logout logic here, like clearing auth tokens
//     navigate('/login') // Navigate to the login page
// }

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Connect
      </Button>
     
         
     
        <ModalBody>
     
        </ModalBody>
        {/* <Modal.Body as={Link} to={'/login'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Login </Modal.Body> */}
        {/* <Modal.Body as={Link} to={'/signup'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Signup</Modal.Body> */}
        {/* <Modal.Body > */}
        {/* <Button variant="link" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' ,margin:'0px',padding:'0px'}} onClick={handleLogout}> */}
            Logout
          {/* </Button> */}
        {/* </Modal.Body> */}


      
     
    </>
  );
}

export default Example;