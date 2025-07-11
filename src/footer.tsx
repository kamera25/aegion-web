import { Container } from 'react-bootstrap';
import './App.css';


function Footer () {
  return (
        <Container>
          <footer className="footer1">
            Copyleft 2025 Hiroshima Unity Study / Our resources are available under the &nbsp;
            <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja'>Attribution-NonCommercial-ShareAlike 4.0 Creative Commons license</a>, except for parts we did not create.
          </footer>
        </Container>
    );
}


export default Footer;