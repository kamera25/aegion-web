import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';


function Header () {
  return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="Aegion"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">ホーム</Nav.Link>
              <Nav.Link as={Link} to="/userpage">ユーザーサポート</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}


export default Header;