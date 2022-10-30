import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./Containers/home/Home";
import { Quiz } from "./Containers/quiz/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
