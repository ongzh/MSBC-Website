import { Navbar, Nav, Container } from "react-bootstrap";
import ScrollspyNav from "react-scrollspy-nav";

function Navigationbar() {
    return <div style={{fontFamily: "Georgia, serif"}}>
        <ScrollspyNav offset={-20} scrollTargetIds={["about", "event", "fam", "sponsor"]} activeNavClass="active" scrollDuration="100">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" id="navbar">
                <Container>
                    <Navbar.Brand href="#home"><h2 style={{color:"red"}}>McGill Student Boxing Club</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about"><h3>About</h3></Nav.Link>
                            <Nav.Link href="#schedule"><h3>Schedule</h3></Nav.Link>
                            <Nav.Link href="#team"><h3>Team</h3></Nav.Link>
                            <Nav.Link href="#merch"><h3>Merch</h3></Nav.Link>
                            <Nav.Link href="#faq"><h3>FAQ</h3></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </ScrollspyNav>
    </div>;  
}

export default Navigationbar; 