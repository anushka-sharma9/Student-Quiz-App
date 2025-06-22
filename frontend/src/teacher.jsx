import React from "react";
import { Link } from "react-router-dom";

const Teacher = () => {
  return (
    <div style={{ backgroundColor: "#f6fddc", height: "100vh", padding: "20px" }}>
      <h2 style={{ color: "#2e5f2e" }}>Teacher Dashboard</h2>
      <Link to="/quizform">
        <button style={{ backgroundColor: "#a6e67b", padding: "10px 20px" }}>Create Quiz</button>
      </Link>
    </div>
  );
};

export default Teacher;
