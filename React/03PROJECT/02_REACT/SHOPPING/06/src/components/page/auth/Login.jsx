import "../../../styles/auth/Login.scss";
import Layout from "../../layout/Layout";

import "bootstrap/dist/css/bootstrap.css";


const login = () => {
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
            <button className="btn btn-primary w-100" onClick={()=>{console.log('clicked')}}>로그인</button>
          </div>
          <div>
            <button className="btn btn-secondary w-100" onClick={()=>{console.log('clicked')}}>회원가입</button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default login;
