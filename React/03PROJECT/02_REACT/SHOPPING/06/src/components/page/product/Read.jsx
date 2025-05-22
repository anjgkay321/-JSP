import "../../../styles/product/Read.scss";
import Layout from "../../layout/Layout";

const read = ()=>{

    return (
        <Layout>
            <section className="product-read layout" >
                <div className="left">
                    <div className="image-block">
                        <div className="image">
                            IMAGE
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