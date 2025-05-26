import {Link,useNavigate,useParams} from 'react-router-dom';

const Contact  = ()=>{
    const {name,age} = useParams();

    const navigate = useNavigate();
    const handleHome = ()=>{
        console.log("Home");
        navigate("/");
    }
    const handleAbout = ()=>{
        console.log("About");
        navigate("/about?name=Hong&age=20");
    }
    const handleContact = ()=>{
        console.log("Contact");
        navigate("/contact");
    }
    return (
        <div>
            <nav>
                <ul>
                    <li> <button onClick={handleHome}> HOME      </button>   </li>
                    <li> <button onClick={handleAbout}> ABOUT     </button>   </li>
                    <li> <button onClick={handleContact}> CONTACT   </button>   </li>
                </ul>
            </nav>
            <h1>Contact</h1>
            name : {name} , age : {age} <br/>
            <p>Welcome to the Contact page!</p>
        </div>
    )
}

export default Contact;