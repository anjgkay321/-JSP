//전역 상태 받기
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../../contexts/GlobalContextProvider"; //contextAPI
//페이지이동
import { useNavigate } from "react-router-dom";
//COOKIE
import Cookies from 'js-cookie';

const logout = () => {
  const {logined, setLogined} = useContext(LoginContext); // 로그인 상태정보
  const navigate = useNavigate();

  Cookies.remove('isLogined');
  setLogined(Cookies.get('isLogined'));
  console.log('logout isLogined',Cookies.get('isLogined'))
  
  navigate("/")
  window.location.reload();
};
export default logout;
