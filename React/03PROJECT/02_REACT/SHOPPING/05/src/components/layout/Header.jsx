import "../../styles/layout/Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.css";

const header = () => {
  return (
    <header>
      <div className="top-header">
        <ul>
          <li>로그인</li>
          <li>로그아웃</li>
          <li>전체메뉴</li>
        </ul>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">홈</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="m-3">추천</Nav.Link>
              <Nav.Link href="#link" className="m-3">남성</Nav.Link>
              <Nav.Link href="#link" className="m-3">여성</Nav.Link>
              <Nav.Link href="#link" className="m-3">이벤트</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
