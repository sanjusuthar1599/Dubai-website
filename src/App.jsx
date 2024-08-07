// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import History from "./Component/History";
import Project from "./Component/Project";


export default function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/History" element={<History />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
