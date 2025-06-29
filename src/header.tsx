import { Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
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
              <Nav.Link href="/#about">製品について</Nav.Link>
              <Nav.Link href="/#story">ストーリー</Nav.Link>
              <Nav.Link href="/#how-to-play">遊び方</Nav.Link>
              <Nav.Link href="/#gallery">ギャラリー</Nav.Link>
              <Nav.Link href="/#news">ニュース</Nav.Link>
              <Nav.Link as={Link} to="/userpage">ユーザーページ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}


export default Header;