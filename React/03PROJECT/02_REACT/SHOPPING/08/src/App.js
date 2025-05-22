import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/page/Home";
// STYLING
import "./styles/App.scss";
//ROUTE
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/page/auth/Login";
import Logout from "./components/page/auth/Logout";
import ProductList from "./components/page/product/List";
import ProductRead from "./components/page/product/Read";

// 전역 설정
import { GlobalContextProvider } from "./contexts/GlobalContextProvider";

//
import RouteChangeTracker from "./components/tracker/RouteChangeTracker";
function App() {
  return (
    <GlobalContextProvider>
      <Router>
        {/* 경로 변경 감시 */}
        <RouteChangeTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/product/list/:categoryId" element={<ProductList />} />
          <Route path="/product/read/:categoryId/:detailId" element={<ProductRead />} />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}
export default App;
