import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Homescreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
