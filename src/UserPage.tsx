import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './UserPage.css';
import APP from './App';

function UserPage() {
  return (
    <Container className="my-5">
      <h2>ユーザサポート</h2>
      <section>
        <p>aaaaaaaaaaaa</p>
      </section>

    </Container>
  );
}

function UserPageApp() {
  return (
      <div className="App">

        <div id="userpage">
          <UserPage />
        </div>
      </div>
 );
}

export default UserPageApp;
