import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ScrollspyNav from 'react-scrollspy-nav';
import logo from "../data/punch-man-logo.png"

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pastHeader, setPassHeader] = useState(false)
  
  useEffect(() => {
    // Add a scroll event listener to the window to check if the user has scrolled down
    window.addEventListener('scroll', handleScroll);
    
    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (pastHeader){
      setShowNav(true)
    }
    // Check if the user is not hovering over the transparent div and the navbar is currently showing
    else if (!hovering && showNav) {
      // Hide the navbar after a delay to give the user time to move their mouse back to the transparent div
      const timeout = setTimeout(() => {
        setShowNav(false);
      }, 1000);
    
      // Cancel the timeout if the user hovers over the navbar before it expires
      return () => clearTimeout(timeout);
    }
  }, [hovering, showNav, pastHeader]);
  
  const handleScroll = () => {
    // Check if the user has scrolled down more than 100 pixels from the top of the page
    if (window.pageYOffset >1200){
      setPassHeader(true);
    }
    else if (window.pageYOffset < 1200){
      setPassHeader(false);
    }


    if (window.pageYOffset > 100){
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };
  
  const handleHoverEnter = () => {
    // Unhide the navbar when the user hovers over the transparent div
    setShowNav(true);
    setHovering(true);
  };
  
  const handleHoverLeave = () => {
    // Set the hovering state to false when the user unhovers from the transparent div
    setHovering(false);
  };
  
  return (
    <div>
       {/* Transparent div that the user can hover over to unhide the navbar */}
       <div style={{height: '50px', width: '100%', position: 'fixed', top: '0', zIndex: '999'}} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}></div>
      
      {/* Navbar that hides/shows based on the showNav state */}
      <ScrollspyNav offset={-20} scrollTargetIds={["about", "schedule", "team", "membership", "faq"]} activeNavClass="active" scrollDuration="100">
        <Navbar bg="dark" variant="dark" fixed="top" id="navbar" expand="lg" style={{transition: 'all 0.3s ease-in-out', opacity: showNav ? 1 : 0, transform: showNav ? 'translateY(0)' : 'translateY(-100%)'}}>
          <Container fluid>
            <Navbar.Brand href="#home" className="nav-logo">
              <span><img alt="" src={logo} height='30px'/>McGill Student Boxing Club</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
    </div>
  );
}

export default NavBar;
