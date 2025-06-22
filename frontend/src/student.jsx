import React from "react";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <div style={{ backgroundColor: "#f6fddc", height: "100vh", padding: "20px" }}>
      <h2 style={{ color: "#2e5f2e" }}>Student Panel</h2>
      <Link to="/quiztake">
        <button style={{ backgroundColor: "#a6e67b", padding: "10px 20px" }}>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Student;
