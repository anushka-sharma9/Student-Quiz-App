import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Teacher from "./teacher";
import Student from "./student";
import QuizForm from "./quizform";
import QuizTake from "./quiztake";

const App = () => (
  <Router>
    <div style={{ backgroundColor: "#f6fddc", padding: "20px" }}>
      <h1 style={{ color: "#2e5f2e" }}>Student Quiz App</h1>
      <nav>
        <Link to="/teacher"><button>Teacher</button></Link>
        <Link to="/student"><button>Student</button></Link>
      </nav>
      <Routes>
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/quizform" element={<QuizForm />} />
        <Route path="/quiztake" element={<QuizTake />} />
      </Routes>
    </div>
  </Router>
);

export default App;
