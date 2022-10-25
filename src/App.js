import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Education from "./routes/Education";
import Skills from "./routes/Skills";
import Experience from "./routes/Experience";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
