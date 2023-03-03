import { Navbar, Nav, Container } from "react-bootstrap";
import ScrollspyNav from "react-scrollspy-nav";
import logo from "../data/punch-man-logo.png"


function Navigationbar() {
    return <div>
        <ScrollspyNav offset={-20} scrollTargetIds={["about", "schedule", "team", "membership","faq"]} activeNavClass="active" scrollDuration="100">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" id="navbar">
                <Container fluid>
                    <Navbar.Brand href="#home" className="nav-logo">
                        <span><img alt="" src={logo} height='30px'/>McGill Student Boxing Club</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#schedule">Schedule</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href="#membership">Membership</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </ScrollspyNav>
    </div>;  
}

export default Navigationbar; 