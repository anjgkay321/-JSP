import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'
import Section from './Section'
import './css/Layout.css'
const Layout = ({children,showAside,asideLinks})=>{
    return (
        <div className="">
            <Header />
            <main>
                {showAside && <Aside  asideLinks={asideLinks} />}
                <Section>
                    {children}
                </Section>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;