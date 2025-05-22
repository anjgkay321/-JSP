import Layout from "../../components/layout/Layout";
import "../../styles/auth/login.scss";
import { Link, useParams } from "react-router-dom";

//axios
import axios from "axios";
import { useEffect, useState , useContext} from "react";

//contextAPI
 import {SessionContext} from "../../contexts/SessionContextProvider";

const login = () => {

  // 세션 상태정보 
  const { session, setSession } = useContext(SessionContext);


  const loginRequestHandler = (e)=>{
    e.preventDefault();
    console.log("login request Handler..")
    
    //비동기 요청(로그인)
    const userId = document.querySelector('.userId').value;
    const password = document.querySelector('.password').value;
    console.log(userId,password)
    
    //유효성 체크 (생략)

    const reqLogin =  async () => {
      try {
        const response = await axios.post(`http://localhost:3001/login`,{
          "userId" : userId,
          "password" : password,
        });
        console.log("response.data", response.data);

        //요청 성공한다면 sessionCookie 값을  app.js로 세션쿠키 전달(Callback함수를 통해서)
        if(response.data){
          session["sessionId"]=response.data;
          console.log("response.data true ,,, session",session)
        }else{
          session.pop()
          console.log("response.data false ,,,  session",session)
        }
        
        
              
      } catch (error) {
        console.log(error);
      } finally {
        ;
      }
   }
   reqLogin();

  }

  return (
    <>
      <Layout>
        <section className="login">
          <form action="">
            <div className="m-2 mb-5">
              <h1>LOGIN</h1>
            </div>
            <div className="m-2">
              <label htmlFor="">아이디 :</label>
              <input type="text" name="userId" className="form-control userId" />
            </div>
            <div className="m-2">
              <label htmlFor="">패스워드 :</label>
              <input type="password" name="password" className="form-control password" />
            </div>
            <div className="m-2">
              <button className="btn btn-primary w-100" onClick={loginRequestHandler}>로그인</button>
            </div>
            <div className="m-2 mt-3">
              <ul>
                <li>
                  <a href="">회원가입</a>
                </li>
                <li>
                  <a href="">아이디 찾기</a>
                </li>
                <li>
                  <a href="">비밀번호 찾기</a>
                </li>
              </ul>
            </div>
            <div className="m-2 mt-5 mb-3">
              <a href="" className="btn w-100 text-dark bg-light">
                카카오 로그인
              </a>
            </div>
            <div className="m-2">
              <a href="" className="btn w-100 text-dark bg-light">
                네이버 로그인
              </a>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
};

export default login;
