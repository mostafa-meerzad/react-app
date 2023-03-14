import React from "react";
import Navbar from "./styledComponents/NavbarWithStyledComponents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="about" />
          <Route path="/contact" />
          <Route path="/help" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

