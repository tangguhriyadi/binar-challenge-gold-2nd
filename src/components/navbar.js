import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
/* import Banner from './banner' */

function NavbarComp() {
  return (
    <>
     <Navbar key={"md"} expand={"md"} className="sticky-md-top font3" style={{padding:'0', backgroundColor:'#F1F3FF'}}>
    <Container fluid className="p-0" style={{marginTop:'24px'}}>
      <Navbar.Brand href="#" className="logo nav1" style={{marginLeft:'136px', padding:'0'}}>
        <img src="images/74.png" alt="logo" loading="lazy" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
      <Navbar.Offcanvas
        style={{ width: "50%" }}
        id={`offcanvasNavbar-expand-md`}
        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
            BCR
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 nav2" style={{marginRight:'249px'}}>
            <Nav.Link style={{marginRight:'32px'}} href="#ourServices">Our Services</Nav.Link>
            <Nav.Link style={{marginRight:'32px'}} href="#whyUs">Why Us</Nav.Link>
            <Nav.Link style={{marginRight:'32px'}} href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  
    </>
   
  );
}

export default NavbarComp;
