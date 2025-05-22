import "../../../styles/auth/Login.scss";
import Layout from "../../layout/Layout";

import "bootstrap/dist/css/bootstrap.css";

//전역 상태 받기
import {useEffect, useState , useContext} from "react";
import {LoginContext} from "../../../contexts/GlobalContextProvider"; //contextAPI

//페이지이동
import { useNavigate } from 'react-router-dom';
//COOKIE
import Cookies from 'js-cookie';

const login = () => {
  
  const navigate = useNavigate();
  const { setLogined } = useContext(LoginContext);// 로그인 상태정보
  const loginRequest = async (e)=>{

    const inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);  // 현재 시간에서 10분을 더한 시간
    Cookies.set('isLogined', true, { expires: inTenMinutes });
    setLogined(Cookies.get('isLogined'))
    console.log('login isLogined',Cookies.get('isLogined'))

    navigate('/');  // "/home" 경로로 이동
    window.location.reload();

  }
  return (
    <Layout>
      <section className="login-section">
        <form action=""  onSubmit={(e)=>{e.preventDefault()}}>
          <div className="title">
            <h1>LOGIN</h1>
          </div>
          <div className="">
            <label htmlFor="">아이디 : </label>
            <input className="form-control" type="text" placeholder="ID를 입력하세요" />
          </div>
          
          <div className="">
            <label htmlFor="">패스워드 : </label>
            <input className="form-control" type="password" placeholder="PASSWORD를 입력하세요"/>
          </div>
          <div className="find">
            <a href="">아이디 확인</a>
            <a href="">패스워드 확인</a>
          </div>
          <div>
            <button className="btn btn-primary w-100" onClick={loginRequest}>로그인</button>
          </div>
          <div>
            <button className="btn btn-secondary w-100" onClick={()=>{console.log('clicked..')}}>회원가입</button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default login;
