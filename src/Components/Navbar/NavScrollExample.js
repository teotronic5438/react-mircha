import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
// import Button from 'react-bootstrap/Button';

function NavScrollExample() {
  return (
    <>
        <Navbar bg="light" expand="lg">
          <Container fluid>

          <Navbar.Brand className='text-primary App-header' href="#">
            <img src={logo} className="App-logo" alt="logo" />
            <p className='mt-2 pt-1' >React Mircha</p>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            {/* Inicio Menu Collapse */}
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Link className='nav-link' to="/home">Home</Link>
                <Link className='nav-link' to="/hook">Hook</Link>
                <Link className='nav-link' to="/asincronia">Asincronia-Hooks</Link>
                <Link className='nav-link' to="/referencias">Referencias</Link>
                <Link className='nav-link' to="/rutas">Rutas</Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
            {/* FIN Menu Collapse */}
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>

  );
}

export default NavScrollExample;