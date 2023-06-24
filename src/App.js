import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import Combo from "./Combo";
import Box from "./Box";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route  path="/dashboard" element={ <div style={{ display: "flex" }}><Sidebar /> <Dashboard /> </div>  }  />
        <Route path="/combo"  element={ <div style={{ display: "flex" }}> <Sidebar /> <Combo /> </div>  }  />
        <Route path="/box" element={<div style={{ display: "flex" }}> <Sidebar /> <Box /> </div>} />
        <Route path="/setting" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
