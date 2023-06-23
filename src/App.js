import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
