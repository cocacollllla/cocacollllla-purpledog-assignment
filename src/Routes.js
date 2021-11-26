import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Main from './pages/Main';



const Routing = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Main/>} />
      </Routes>
      
    </Router>
  );
};
export default Routing;
