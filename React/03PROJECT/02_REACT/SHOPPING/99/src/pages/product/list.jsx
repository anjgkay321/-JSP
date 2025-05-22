import "../../styles/product/list.scss"
import Layout from "../../components/layout/Layout";
import { Link,useParams } from "react-router-dom";

//axios 
import axios from 'axios'
import { useEffect,useState } from "react";

const productList = ()=>{
    //전달받은 파라미터
    const {categoryId} = useParams();

    //axios 요청 결과 저장
    const [item ,setItem] = useState([])
    
    useEffect(()=>{
        console.log("categoryId",categoryId)
        //비동기 처리 함수 정의(상품별 category 요청)
        const reqData = async ()=>{      
            try{
                const response = await axios.get(`http://localhost:3001/product/list/${categoryId}`);
                
                console.log('response.data',response.data)
                setItem(response.data)
                console.log('item',item)  //비동기적으로 상태를 업데이트하기 때문에 상태가 업데이트된 직후에 console.log(category)를 호출하면 여전히 이전 상태인 빈 배열이 출력
            
            }catch(error){
                console.log(error);
            }finally{

            }
        }
        reqData();
    },[])


    return (
        <Layout>
            <section>
                <div className="items layout">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                    <div className="item">5</div>
                    <div className="item">6</div>
                    <div className="item">7</div>
                    <div className="item">8</div>
                    <div className="item">9</div>
                    <div className="item">10</div>
                </div>
            </section>
            
            <section>
                <div className="head layout">
                    <h4>For Man</h4>
                    <div>
                        남성 추천 상품
                    </div>
                </div>
                <div className="body layout">
                    <div className="items">
                            {
                            (item.length>0)&&
                            (
                                item.map((el)=>{
                                    return (
                                        <div className="item">
                                            <div className="top">
                                                <Link to={`/product/read/${categoryId}/${el.detailId}`}>
                                                    <img src={el.base64Image} alt="" />
                                                </Link>
                                            </div>
                                            <div className="bottom">
                                                <div className="title">
                                                    Adidas
                                                </div>
                                                <div className="text">
                                                    Adidas Adizero Adios Pro EVO 1 White Black
                                                </div>
                                                <div className="badge">
                                                    <span>빠른배송</span><span>쿠폰</span>
                                                </div>
                                                <div className="price">
                                                    <span>680,000</span>
                                                    <span>즉시 구매가</span>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                            )
                            
                            }
                            

                        <div className="item">2</div>
                        <div className="item">3</div>
                        <div className="item">4</div>
                        <div className="item">5</div>
                        <div className="item">6</div>
                        <div className="item">7</div>
                        <div className="item">8</div>
                        <div className="item">9</div>
                        <div className="item">10</div>
                        <div className="item">11</div>
                        <div className="item">12</div>
                        <div className="item">13</div>
                        <div className="item">14</div>
                    </div>
                </div>
            </section>
        </Layout>
    )

}


export default productList;
