import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Main from './pages/Main';
import CategoryId from './pages/CategoryId';
import Detail from './pages/Detail';



const Routing = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Main/>} />
        <Route path={"/:category"} element={<CategoryId/>} />
        <Route path={"/:category/:id"} element={<Detail/>} />
      </Routes>
      
    </Router>
  );
};
export default Routing;
