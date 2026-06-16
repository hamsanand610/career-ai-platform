import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import "../styles/JobMatch.css";
import { API_BASE_URL } from "../config";

function JobMatch() {

const [resumeFile, setResumeFile] = useState(null);

const [jobDescription, setJobDescription] = useState("");

const [result, setResult] = useState("");

const analyzeMatch = async () => {

  if (!resumeFile) {

    alert("Please upload a resume");

    return;
  }

  if (!jobDescription.trim()) {

    alert("Please enter Job Description");

    return;
  }

  try {

    const formData = new FormData();

    formData.append(
      "file",
      resumeFile
    );

    const resumeResponse =
      await axios.post(
        `${API_BASE_URL}/api/resume/extract`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data"
          }
        }
      );

    const response =
      await axios.post(
        `${API_BASE_URL}/api/job-match`,
        {
          resumeText:
            resumeResponse.data,
          jobDescription
        }
      );

    setResult(response.data);

  } catch (error) {

    console.error(error);

    alert("Job Match failed");
  }
};

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="main-content">

        <div className="jobmatch-container">

          <div className="jobmatch-header">

            <h1>🎯 Resume vs Job Match</h1>

            <p>
              Compare your resume with a job description
              and get AI-powered matching insights.
            </p>

          </div>

          <div className="jobmatch-card">
            <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                    setResumeFile(e.target.files[0])
                }
                />
            <textarea
              className="jobmatch-input"
              rows="10"
              placeholder="Paste Job Description here..."
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(
                  e.target.value
                )
              }
            />

            <button
              className="generate-btn"
              onClick={analyzeMatch}
            >
              Analyze Match
            </button>
              {!result && (

  <div className="question-box">

    <h2>🎯 Resume vs Job Match</h2>

    <p>
      Upload a resume and paste a job description
      to get an AI-powered match analysis.
    </p>

  </div>

)}
            {result && (

              <div className="question-box">

                <h2>
                  📊 Match Report
                </h2>
                <h3>
  🎯 AI Match Analysis
</h3>
                <pre>{result}</pre>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  );
}

export default JobMatch;