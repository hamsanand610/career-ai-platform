import { useState } from "react";
import axios from "axios";
import "./../styles/ResumeUpload.css";
import "../styles/Dashboard.css";
import Sidebar from "../components/Sidebar";

function ResumeUpload() {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [atsScore, setAtsScore] = useState("");

  const [geminiReport, setGeminiReport] = useState("");
  const [foundSkills, setFoundSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const response = await axios.post(
        "http://localhost:8080/api/resume/upload",
        formData
      );

      setResult(response.data);

const parts = response.data.split("AI RESUME ANALYSIS");

if (parts.length > 1) {

  setGeminiReport(parts[1]);
  const foundMatch = response.data.match(
  /Found Skills:([\s\S]*?)Missing Skills:/i
);

if (foundMatch) {

  const found = foundMatch[1]
    .split("\n")
    .filter(line => line.includes("✅"))
    .map(line => line.replace("✅", "").trim());

  setFoundSkills(found);
}

const missingMatch = response.data.match(
  /Missing Skills:([\s\S]*?)Recommendation:/i
);

if (missingMatch) {

  const missing = missingMatch[1]
    .split("\n")
    .filter(line => line.includes("❌"))
    .map(line => line.replace("❌", "").trim());

  setMissingSkills(missing);
}

} 

    const match = response.data.match(/ATS Score:\s*(\d+)\/100/i);

if (match) {
  setAtsScore(match[1]);
}

    } catch (error) {

      console.error(error);
      alert("Upload Failed ❌");

    }
  };

  let scoreColor = "#2563eb";
let scoreText = "Average Resume";

if (parseInt(atsScore) >= 80) {
  scoreColor = "#16a34a";
  scoreText = "Excellent Resume";
}
else if (parseInt(atsScore) < 50) {
  scoreColor = "#dc2626";
  scoreText = "Needs Improvement";
}

return (

  <div className="dashboard-layout">

    <Sidebar />

    <div className="main-content">

      <div className="resume-container">

        <div className="page-header">
          <h1>🚀 CareerAI Resume Analyzer</h1>
          <p>
            Get ATS insights and AI-powered feedback instantly
          </p>
        </div>

        <div className="top-grid">

          <div className="upload-card">

            <h2>📄 Upload Resume</h2>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

            <button
              className="analyze-btn"
              onClick={handleUpload}
            >
              Analyze Resume
            </button>

          </div>

          {result && (

            <div
              className="score-card"
              style={{ background: scoreColor }}
            >
              <h2>ATS Score</h2>

              <p>{atsScore}/100</p>

              <span>{scoreText}</span>

            </div>

          )}

        </div>

        {result && (

          <>

            <div className="result-box">

              <h2>✅ Found Skills</h2>

              <div className="skills-container">

                {foundSkills.map((skill) => (

                  <span
                    className="skill-tag found"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <h2 style={{ marginTop: "30px" }}>
                ❌ Missing Skills
              </h2>

              <div className="skills-container">

                {missingSkills.map((skill) => (

                  <span
                    className="skill-tag missing"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            <div className="result-box">

              <h2>🤖 Gemini AI Feedback</h2>

              <pre>{geminiReport}</pre>

            </div>

          </>

        )}

      </div>

    </div>

  </div>

);
}

export default ResumeUpload;