import Container from 'react-bootstrap/Container';
import styles from './Navbar.module.css';
import logo from '../../../img/logo.png'
import logo_clara from '../../../img/logo_clara.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className={styles.navbar}>
          <Container fluid >
            <Navbar.Brand href="/"> <img src={logo_clara} alt="Movai Advocacia" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className={styles.offcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="Movai Advocacia" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end gap-5 flex-grow-1 pe-3">
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link href="#services" >Serviços</Nav.Link>
                  <Nav.Link href="#aboutUs">Sobre nós</Nav.Link>
                  <Nav.Link href="#contact">Contato</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;