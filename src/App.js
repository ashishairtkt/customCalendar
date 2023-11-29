import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Calendar from "./Componets/Pages/Calendar/Calendar";
import "./App.scss";
import Home from "./Componets/Pages/Home";
export default function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
