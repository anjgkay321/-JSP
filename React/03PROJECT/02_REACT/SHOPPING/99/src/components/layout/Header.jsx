import "../../styles/layout/header.scss";

import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";

//contextAPI
import {SessionContext} from "../../contexts/SessionContextProvider";


const header = () => {

  // 세션 상태정보 
  const { session, setSession } = useContext(SessionContext);

  console.log("header's session..",session);

  // 헤더 상단 고정용
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // 스크롤 위치가 50px 이상이면
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <header className={`layout ${isSticky ? "sticky" : ""}`}>
        
        {(session['sessionId']==undefined) ? console.log("header session undefined!!!!!!!!!!!"):console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
        
        <div className={`top-header`}>
          
          <ul className={`${isSticky ? "fixed" : ""}`}>
            <li>
              <Link to="/">고객센터</Link>
            </li>
            <li>
              <a href="">마이페이지</a>
            </li>
            <li>
              <Link to="/">관심</Link>
            </li>
            <li>
              <a href="">알림</a>
            </li>
            <li>
              <a href="/login">로그인</a>
            </li>
          </ul>
        
        </div>


        <nav className="layout">
          <div className="nav-top">
            <div className="left">
              <Link to="/">홈</Link>
            </div>
            <div className="right">
              <ul>
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">STYLE</a>
                </li>
                <li>
                  <a href="">SHOP</a>
                </li>
                <li>
                  <a href="">
                    <span class="material-symbols-outlined">search</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span class="material-symbols-outlined">shopping_cart</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-bottom">
            <ul>
              <li>
                <Link to="/">원신굿즈발매</Link>
              </li>
              <li>
                <Link to="/">추천</Link>
              </li>
              <li>
                <Link to="/">랭킹</Link>
              </li>
              <li>
                <Link to="/">럭셔리</Link>
              </li>
              <li>
                <Link to="/">남성</Link>
              </li>
              <li>
                <Link to="/">원신굿즈발매</Link>
              </li>
              <li>
                <Link to="/">발견</Link>
              </li>
              <li>
                <Link to="/">이벤트</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default header;
