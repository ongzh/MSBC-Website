import { Navbar, Nav, Container } from "react-bootstrap";
import ScrollspyNav from "react-scrollspy-nav";
import logo from "../data/mbc-front-logo.png"


function Navigationbar() {
    return <div>
        <ScrollspyNav offset={-20} scrollTargetIds={["about", "schedule", "team", "membership","faq"]} activeNavClass="active" scrollDuration="100">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" id="navbar">
                <Container>
                    <Navbar.Brand color="crimson" href="#home" >McGill Student Boxing Club</Navbar.Brand>
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