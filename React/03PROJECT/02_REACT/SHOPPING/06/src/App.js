import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import Home from "./components/page/Home";

// STYLING
import "./styles/App.scss";

//ROUTE
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/page/auth/Login";
import ProductList from "./components/page/product/List";
import ProductRead from "./components/page/product/Read";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/list" element={<ProductList />} />
        <Route path="/product/read" element={<ProductRead />} />
      </Routes>
    </Router>
  );
}

export default App;
