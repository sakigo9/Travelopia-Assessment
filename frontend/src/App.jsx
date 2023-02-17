import { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import History from "./components/history/History";

function App() {
  return (
    <div className="container">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/history" exact element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
