import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function Navbr() {

  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link as={Link} to="/Home">Home</Nav.Link>

            <Nav.Link as={Link} to="/Subscription">
              Subscription
            </Nav.Link>

            <Nav.Link as={Link} to="/Score">
              Score
            </Nav.Link>

            <Nav.Link as={Link} to="/Draw_System">
              Draw System
            </Nav.Link>

            <Nav.Link as={Link} to="/Prize_Pool">
              Prize Pool
            </Nav.Link>
          
            <Nav.Link as={Link} to="/Charity">
              Charity
            </Nav.Link>

            <Nav.Link as={Link} to="/Winner_Verification">
              Winner Verification
            </Nav.Link>


            

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbr;