import logo from "./logo.svg";
//BS5(https://react-bootstrap.netlify.app/)
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
// SCSS
import "./styles/index.scss"

//ROUTE
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Join from "./pages/auth/join";
import Login from "./pages/auth/login";
import ProductList from "./pages/product/list";
import ProductRead from "./pages/product/read";


// 전역 설정
// import MySessionProvider  from "./contexts/MySessionProvider";

// bootstrap 사용하기 : npm install react-bootstrap bootstrap
// scss 사용하기 :  npm install sass --save

import { SessionContextProvider } from './contexts/SessionContextProvider';

function App() {
  return (
    <>
      <SessionContextProvider>
          {/* Routes(경로) 설정 */}
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/join" element={<Join />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product/list/:categoryId" element={<ProductList />} />
              <Route path="/product/read/:categoryId/:detailId" element={<ProductRead />} />
            </Routes>
          </Router>
      </SessionContextProvider>
    </>
  );
}

export default App;
