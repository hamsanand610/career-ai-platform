import { useState } from "react";
import axios from "axios";
import "../styles/InterviewGenerator.css";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import { API_BASE_URL } from "../config";

function InterviewGenerator() {

  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");

  const [questions, setQuestions] = useState("");
  const [questionList, setQuestionList] = useState([]);

  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [evaluation, setEvaluation] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  
  const generateQuestions = async () => {

    if (!role) {
      alert("Please select a role");
      return;
    }

    setLoading(true);

    try {

      const response = await axios.get(
        `${API_BASE_URL}/api/interview/generate?role=${role}&difficulty=${difficulty}`
      );

      setQuestions(response.data);

    const lines = response.data
      .split("\n")
      .filter(
        (line) =>
          line.trim().match(/^\d+\./)
      );

    setQuestionList(lines);

    if (lines.length > 0) {
      setSelectedQuestion(lines[0]);
    }

    } catch (error) {

      console.error(error);

      alert("Failed to generate questions");
    } finally {
      setLoading(false);
    }
  };

  const evaluateAnswer = async () => {

    if (!selectedQuestion || !answer) {

      alert("Please enter your answer");

      return;
    }
    setEvaluating(true);
    setEvaluation("");
    try {

      const response = await axios.post(
        `${API_BASE_URL}/api/interview/evaluate`,
        {
          question: selectedQuestion,
          answer: answer
        }
      );

      setEvaluation(response.data);

    } catch (error) {

      console.error(error);

      alert("Evaluation failed");
    } finally {
      setEvaluating(false);
    }
  };

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="main-content">

        <div className="interview-container">

          <div className="interview-header">

            <h1>🎤 AI Interview Generator</h1>

            <p>
              Generate personalized interview questions
              and evaluate your answers using AI.
            </p>

          </div>

          <div className="interview-card">

            <select
              className="role-select"
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
            >

              <option value="">
                Select Role
              </option>

              <option>
                Full Stack Developer
              </option>

              <option>
                Java Developer
              </option>

              <option>
                Frontend Developer
              </option>

              <option>
                Backend Developer
              </option>

            </select>

            <select
              className="role-select"
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value)
              }
            >

              <option>
                Beginner
              </option>

              <option>
                Intermediate
              </option>

              <option>
                Advanced
              </option>

            </select>

            <button
              className="generate-btn"
              onClick={generateQuestions}
              disabled={loading}
            >
              {loading
                ? "⏳ Generating Questions..."
                : "Generate Questions"}
            </button>
                {!questions && (

  <div className="question-box">

    <h2>🎤 Ready for Interview Practice</h2>

    <p>
      Select a role and difficulty level,
      then generate AI-powered interview questions.
    </p>

  </div>

)}
            {questions && (

              <div className="question-box">

                <h2>
                  🎯 Interview Questions
                </h2>

                <pre>{questions}</pre>

              </div>

            )}

            {selectedQuestion && (

              <div className="question-box">

                <h2>
                  📝 Mock Interview
                </h2>

                <select
  className="role-select"
  value={selectedQuestion}
  onChange={(e) =>
    setSelectedQuestion(e.target.value)
  }
>

  {questionList.map((question, index) => (

    <option
      key={index}
      value={question}
    >
      Question {index + 1}
    </option>

  ))}

</select>

<p
  style={{
    marginTop: "15px",
    color: "#cbd5e1"
  }}
>
  {selectedQuestion}
</p>

                <textarea
                  className="answer-input"
                  rows="8"
                  placeholder="Type your answer here..."
                  value={answer}
                  onChange={(e) =>
                    setAnswer(e.target.value)
                  }
                />

                <button
                  className="generate-btn"
                  onClick={evaluateAnswer}
                  disabled={evaluating}
                >
                  {evaluating
                    ? "⏳ Evaluating Answer..."
                    : "Evaluate Answer"}
                </button>

              </div>

            )}

            {evaluation && (

              <div className="question-box">

                <h2>
                  📊 AI Evaluation
                </h2>
              <div className="evaluation-content">

  <pre>{evaluation}</pre>

</div>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  );
}

export default InterviewGenerator;