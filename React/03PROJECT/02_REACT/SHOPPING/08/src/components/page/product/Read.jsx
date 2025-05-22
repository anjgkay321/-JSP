import "../../../styles/product/Read.scss";
import Layout from "../../layout/Layout";

//
import {useEffect,useState} from "react"
import {useParams} from "react-router-dom";
import {requestProductRead} from "../../../services/ProductService.jsx"
const read = ()=>{
    const {categoryId,detailId} = useParams();
    const [product , setProduct] = useState([])
    
    
    useEffect(()=>{
        const fetchDetailData = async ()=>{
            const productDetailData  = await requestProductRead(categoryId,detailId);
            console.log("productDetailData",productDetailData)
            setProduct(productDetailData)
        }
        fetchDetailData();
    },[])

    return (
        <Layout>
            <section className="product-read layout" >
                <div className="left">
                    <div className="image-block">
                        <div className="image">
                        {
                            product&&(
                                product.map(el=>{
                                    return (
                                        <img  key={el.detailId} src={el.base64Image} alt="" />            
                                    )
                                })
                            )
                        }
                        </div>
                        <div className="info">
                            INFO
                        </div>
                    </div>
                </div>
                <div className="right"></div>
            </section>
        </Layout>
    )
}
export default read;