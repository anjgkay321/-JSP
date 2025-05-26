import {Link} from 'react-router-dom';

const Home  = ()=>{
    
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link>           </li>
                    <li> <Link to="/about?name=aaa&age=80">About</Link>     </li>
                    <li> <Link to="/contact/Jung/80">Contact</Link>     </li>

                </ul>
            </nav>
            <h1>HOME</h1>
            <p>Welcome to the home page!</p>
        </div>
    )
}

export default Home;