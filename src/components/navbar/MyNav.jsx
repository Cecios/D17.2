import './myNav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../logo/Logo.jsx'
const MyNav = ()=>{
    return(
        
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Logo
            classe = 'logo'
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>            
        </div>
        
    )
};
export default MyNav;