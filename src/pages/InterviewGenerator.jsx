import { useState } from "react";
import axios from "axios";
import "../styles/InterviewGenerator.css";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function InterviewGenerator() {

  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [questions, setQuestions] = useState("");

  const generateQuestions = async () => {

  if (!role) {
    alert("Please select a role");
    return;
  }

  try {

    const response = await axios.get(
      `http://localhost:8080/api/interview/generate?role=${role}&difficulty=${difficulty}`
    );

    setQuestions(response.data);

  } catch (error) {

    console.error(error);

    alert("Failed to generate questions");

  }
};
<select
  className="role-select"
  value={role}
  onChange={(e) => setRole(e.target.value)}
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

return (

  <div className="dashboard-layout">

    <Sidebar />

    <div className="main-content">

      <div className="interview-container">

        <div className="interview-header">

          <h1>🎤 AI Interview Generator</h1>

          <p>
            Generate personalized interview questions
            based on your target role.
          </p>

        </div>

        <div className="interview-card">

          <select
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
  onChange={(e) => setDifficulty(e.target.value)}
>
  <option>Beginner</option>
  <option>Intermediate</option>
  <option>Advanced</option>
</select>
          <button
            className="generate-btn"
            onClick={generateQuestions}
          >
            Generate Questions
          </button>

          {questions && (

            <div className="question-box">

              <h2>
                🎯 Interview Questions
              </h2>

              <pre>{questions}</pre>

            </div>

          )}

        </div>

      </div>

    </div>

  </div>

);
}

export default InterviewGenerator;