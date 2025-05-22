import "../../../styles/product/List.scss";

import Layout from "../../layout/Layout";


import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
const list = ()=>{

    return (
        <Layout>
            <section className="product-list layout">
                <ul>
                    <li> <Link to="/product/read">1</Link> </li>
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