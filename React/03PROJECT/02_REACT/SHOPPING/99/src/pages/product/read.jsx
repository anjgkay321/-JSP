import "../../styles/product/read.scss"
import Layout from "../../components/layout/Layout";
import { useParams,Link } from 'react-router-dom';

//axios 
import axios from 'axios'
import { useEffect,useState} from "react";

const read = ()=>{
    const { categoryId,detailId } = useParams(); // 여러 파라미터(id)를 받아옵니다.
    console.log('categoryId',categoryId,"detailId",detailId)

    //axios 요청 결과 저장
    const [item ,setItem] = useState([])

    useEffect(()=>{
        console.log("categoryId",categoryId)
        //비동기 처리 함수 정의(상품별 category 요청)
        const reqData = async ()=>{      
            try{
                const response = await axios.get(`http://localhost:3001/product/read/${categoryId}/${detailId}`);
                
                console.log('response.data',response.data)
                setItem(response.data)
                //console.log('item',item)  //비동기적으로 상태를 업데이트하기 때문에 상태가 업데이트된 직후에 console.log(category)를 호출하면 여전히 이전 상태인 빈 배열이 출력
            
            }catch(error){
                console.log(error);
            }finally{

            }
        }
        reqData();
    },[])


    return (
        <Layout>
            <section className="layout">
                <div className="left">
                    {
                        (item.length>0)&&(item.map(item=>{

                            return (
                                <>
                                    <div className="slide">
                                        <img src={item.base64Image} alt="" />
                                    </div>
                                    <div>
                
                                    </div>
                                </>
                            )
                        }))
                    }
                </div>
                
                <div className="right">
                    <div className="info">
                        <div className="info-01">
                            즉시 구매가
                        </div>
                        <div className="info-02">
                            <span>123,000</span>원<br/>
                        </div>
                        <div className="info-03">
                            Clarks Wallabee Maple Suede
                        </div>
                        <div className="info-04">
                            <select name="" id="">
                                <option value="">옵션1</option>
                                <option value="">옵션2</option>
                                <option value="">옵션3</option>
                                <option value="">옵션4</option>
                            </select>
                        </div>
                        <div className="info-05">
                            <ul>
                                <li><a href="">최근거래가</a></li>
                                <li><a href="">발매가</a></li>
                                <li><a href="">모델번호</a></li>
                                <li><a href="">출시일</a></li>
                                <li><a href="">대표색상</a></li>
                            </ul>
                        </div>
                        <div className="info-06">
                            <Link className="btn btn-primary m-2" to={``}>구매</Link>
                            <Link className="btn btn-primary m-2" to={``}>판매</Link>
                            
                            
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export default read;
