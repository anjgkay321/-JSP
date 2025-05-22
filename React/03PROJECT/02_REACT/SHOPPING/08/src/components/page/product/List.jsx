import "../../../styles/product/List.scss";

import Layout from "../../layout/Layout";


import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

//
import {useEffect,useState} from "react"
import {useParams} from "react-router-dom";
import {requestProductList} from "../../../services/ProductService"
const list = ()=>{
    const {categoryId} = useParams();
    const [product, setProduct] = useState([]);
   
    useEffect(()=>{

        const fetchProductData = async ()=>{
            console.log("/product/list..categoryId..",categoryId)
            const productData   = await requestProductList(categoryId);
            setProduct(productData);
            console.log('productData',productData)
        }
        fetchProductData();

    },[])

    return (
        <Layout>
            <section className="product-list layout">
                <ul>
                    {
                        product && (
                            product.map(el=>{
                                return (
                                    <li  key={el.detailId}> <Link to={`/product/read/${el.categoryId}/${el.detailId}`}>
                                        <img src={el.base64Image} alt=""  />
                                    </Link> </li>
                                 )
                            })
                        )
                    }
                    <li> <Link to="/product/read">2</Link> </li>
                    <li> <Link to="/product/read">3</Link> </li>
                    <li> <Link to="/product/read">4</Link> </li>
                    <li> <Link to="/product/read">5</Link> </li>
                    <li> <Link to="/product/read">6</Link> </li>
                    <li> <Link to="/product/read">7</Link> </li>
                    <li> <Link to="/product/read">8</Link> </li>
                    <li> <Link to="/product/read">9</Link> </li>
                    <li> <Link to="/product/read">10</Link> </li>
                    <li> <Link to="/product/read">11</Link> </li>
                </ul>
            </section>
        </Layout>
    )
}

export default list;