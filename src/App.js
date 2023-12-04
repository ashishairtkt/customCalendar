import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Calendar from "./Componets/Pages/Calendar/Calendar";
import "./App.scss";
import Home from "./Componets/Pages/Home";
import Slider from "./Componets/Pages/Slider/Slider";
export default function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Slider" element={<Slider />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
