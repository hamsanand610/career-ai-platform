import { useState } from "react";
import axios from "axios";
import "./../styles/ResumeUpload.css";
import "../styles/Dashboard.css";
import Sidebar from "../components/Sidebar";
import { API_BASE_URL } from "../config";

function ResumeUpload() {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [atsScore, setAtsScore] = useState("");

  const [, setGeminiReport] = useState("");
  const [foundSkills, setFoundSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);

  const [reportContent, setReportContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a PDF");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {

const token = localStorage.getItem("token");

const response = await axios.post(
  `${API_BASE_URL}/api/resume/upload`,
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

      setResult(response.data);
      setReportContent(response.data);

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

    }finally {
      setLoading(false);
    }
  };

let scoreColor = "#f59e0b";
let scoreText = "Good Resume";

const score = Number(atsScore || 0);

if (score >= 80) {

  scoreColor = "#16a34a";
  scoreText = "Excellent Resume";

}
else if (score < 50) {

  scoreColor = "#dc2626";
  scoreText = "Needs Improvement";

}
const downloadPdf = async () => {

  try {

    const response = await axios.post(
      `${API_BASE_URL}/api/report/download`,
      reportContent,
      {
        responseType: "blob",
        headers: {
          "Content-Type": "text/plain"
        }
      }
    );

    const url =
      window.URL.createObjectURL(
        new Blob([response.data])
      );

    const link =
      document.createElement("a");

    link.href = url;

    link.setAttribute(
      "download",
      "CareerAI_Report.pdf"
    );

    document.body.appendChild(link);

    link.click();

    link.remove();

  } catch (error) {

    console.error(error);

    alert("PDF download failed");
  }
};

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
              disabled={loading}
            >
              {loading
                ? "⏳ Analyzing Resume..."
                : "Analyze Resume"}
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

              <h2>🤖 AI Feedback</h2>

              <pre>{reportContent}</pre>
                <button
  className="analyze-btn"
  onClick={downloadPdf}
  style={{ marginTop: "20px" }}
>
  📄 Download PDF Report
</button>
            </div>

          </>

        )}

      </div>

    </div>

  </div>

);
}

export default ResumeUpload;