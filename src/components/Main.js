import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Setting from "../Pages/Setting";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default Main;
