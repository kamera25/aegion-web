import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

function Home() {
  return (
    <header className="App-header">
      <h1>AR Board Game</h1>
      <p>The future of tabletop gaming is here.</p>
    </header>
  );
}

function About() {
  return (
    <Container className="my-5">
      <h2>About the Game</h2>
      <p>This section will describe the game's concept, story, and features.</p>
    </Container>
  );
}

function HowToPlay() {
  return (
    <Container className="my-5">
      <h2>How to Play</h2>
      <p>This section will explain the rules and AR features.</p>
    </Container>
  );
}

function Gallery() {
  return (
    <Container className="my-5">
      <h2>Gallery</h2>
      <p>This section will showcase screenshots and concept art.</p>
    </Container>
  );
}

function News() {
  return (
    <Container className="my-5">
      <h2>Latest News</h2>
      <p>This section will feature news and announcements.</p>
    </Container>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">AR Board Game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#how-to-play">How to Play</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="how-to-play">
        <HowToPlay />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="news">
        <News />
      </div>
    </div>
  );
}

export default App;