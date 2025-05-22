import Layout from "../components/layout/Layout";
import "../styles/home.scss"
import { Link } from "react-router-dom";


//index.js의 Strict 모드를 제거해야 두번 뜨지 않는다.

// AXIOS 작업
// 상태관리용
import React,{useEffect, useState} from "react"
import axios from 'axios'


const home = () => {

  let [category, setCategory] = useState([]);
  //  모든 카테고리 코드 비동기 요청(npm install axios)

  useEffect(()=>{
    //비동기 처리 함수 정의(상품별 category 요청)
    const reqData = async ()=>{      
        try{
          const response = await axios.get('http://localhost:3001/home');
         
          console.log('response.data',response.data)
          setCategory(response.data)
          console.log('category',category)  //비동기적으로 상태를 업데이트하기 때문에 상태가 업데이트된 직후에 console.log(category)를 호출하면 여전히 이전 상태인 빈 배열이 출력
         
        }catch(error){
          console.log(error);
        }finally{

        }
    }
    reqData();
  },[])


  return (
    <Layout>
      <section className="banner" >
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner" >
                  <div className="carousel-item active" >
                    <img src="assets/1.webp" className="d-block" alt="..."  style={{backgroundColor:'black',height:"500px",objectFit:"contain"}}   />
                  </div>
                  <div className="carousel-item">
                    <img src="assets/2.jpg" className="d-block " alt="..." style={{backgroundColor:'#D8DDE1',height:"500px",objectFit:"contain"}} />
                  </div>
                  <div className="carousel-item">
                    <img src="assets/3.webp" className="d-block " alt="..." style={{backgroundColor:'#EFF0F7',height:"500px",objectFit:"contain"}} />
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
            </div>
      </section>    
      

      {/* 카테고리별 나열 */}
      <section className="layout">
        <div className="items">
          {
            category.length > 0 &&(
              category.map(item=>{
                  return (
                    <div className="item">
                      <Link to={`/product/list/${item.categoryId}`}>{item.categoryName}</Link>
                    </div>
                  )
              })
            )
          }
        </div>
      </section>
      <section>

      </section>
    </Layout>
  );
};

export default home;
