import React, { useEffect, useState } from "react";

const QuizTake = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/quiz/random")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleChange = (qid, value) => {
    setAnswers({ ...answers, [qid]: value });
  };

  const handleSubmit = () => {
    const submission = Object.entries(answers).map(([id, response]) => ({
      questionId: id,
      response,
    }));

    fetch("http://localhost:5000/response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: submission }),
    }).then(() => alert("Responses submitted!"));
  };

  return (
    <div style={{ backgroundColor: "#f6fddc", padding: "20px" }}>
      <h2 style={{ color: "#2e5f2e" }}>Answer the Quiz</h2>
      {questions.map((q) => (
        <div
          key={q._id}
          style={{
            backgroundColor: "#c7f0a7",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <p><strong>{q.question}</strong></p>
          {q.type === "subjective" ? (
            <textarea
              onChange={(e) => handleChange(q._id, e.target.value)}
            ></textarea>
          ) : (
            q.options.map((opt, idx) => (
              <div key={idx}>
                <input
                  type={q.type === "msq" ? "checkbox" : "radio"}
                  name={q._id}
                  value={opt}
                  onChange={(e) =>
                    handleChange(q._id, e.target.value)
                  }
                />
                <label>{opt}</label>
              </div>
            ))
          )}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: "#a6e67b", padding: "10px 20px" }}
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizTake;
