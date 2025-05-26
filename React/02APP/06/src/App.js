
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {
  return (
    <div className="App">
     

     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:name/:age" element={<Contact />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
