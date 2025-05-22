import "../../styles/layout/Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.css";


import { Link } from "react-router-dom";

//전역 상태 받기
import {useEffect, useState , useContext} from "react";
import {LoginContext} from "../../contexts/GlobalContextProvider"; //contextAPI


const header = () => {
    
  const {logined} = useContext(LoginContext);// 로그인 상태정보
  console.log('header',logined)
  
  return (
    <header>
      <div className="top-header">
        <ul>
          { logined ? 
              <li> <Link to="/logout">로그아웃</Link> </li>
              :
              <li> <Link to="/login">로그인</Link> </li>  
          }
          <li> <Link to="">전체메뉴</Link> </li>
        </ul>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">홈</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/product/list" className="m-3">추천</Nav.Link>
              <Nav.Link href="/product/list" className="m-3">남성</Nav.Link>
              <Nav.Link href="/product/list" className="m-3">여성</Nav.Link>
              <Nav.Link href="/product/list" className="m-3">이벤트</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
