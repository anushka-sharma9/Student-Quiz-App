import React, { useState } from "react";

const QuizForm = () => {
  const [questions, setQuestions] = useState(
    Array(50).fill().map(() => ({
      question: "",
      options: ["", "", "", ""],
      type: "mcq",
    }))
  );

  const handleChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIdx, optIdx, value) => {
    const updated = [...questions];
    updated[qIdx].options[optIdx] = value;
    setQuestions(updated);
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questions }),
    });
    alert("Quiz saved!");
  };

  return (
    <div style={{ backgroundColor: "#f6fddc", padding: "20px" }}>
      <h2 style={{ color: "#2e5f2e" }}>Create 50 Questions</h2>
      {questions.map((q, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#c7f0a7",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <p><strong>Question {index + 1}</strong></p>
          <input
            type="text"
            placeholder="Enter question"
            value={q.question}
            onChange={(e) => handleChange(index, "question", e.target.value)}
          />

          <select
            value={q.type}
            onChange={(e) => handleChange(index, "type", e.target.value)}
          >
            <option value="mcq">MCQ</option>
            <option value="msq">MSQ</option>
            <option value="subjective">Subjective</option>
          </select>

          {(q.type === "mcq" || q.type === "msq") &&
            q.options.map((opt, optIndex) => (
              <input
                key={optIndex}
                type="text"
                placeholder={`Option ${optIndex + 1}`}
                value={opt}
                onChange={(e) =>
                  handleOptionChange(index, optIndex, e.target.value)
                }
              />
            ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{ backgroundColor: "#a6e67b", padding: "10px 20px" }}
      >
        Save Quiz
      </button>
    </div>
  );
};

export default QuizForm;
