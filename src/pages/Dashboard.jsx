import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { API_BASE_URL } from "../config";

function Dashboard() {
  const navigate = useNavigate();
  
const [stats, setStats] = useState({
  latestScore: 0,
  totalResumes: 0,
  aiReviews: 0,
  bestScore: 0,
  averageScore: 0
});

useEffect(() => {

  const token = localStorage.getItem("token");

  axios
    .get(
      `${API_BASE_URL}/api/dashboard/stats`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((response) => {

      console.log(response.data);

      setStats(response.data);

    })
    .catch((error) => {

      console.error(
        "Dashboard Error:",
        error
      );

    });

}, []);

  return (

    <div className="dashboard-layout">

      <Sidebar />

<div className="main-content">

  <div className="welcome-card">

    <h1>Welcome Back 🚀</h1>

    <p>
      Track your career growth, analyze resumes,
      prepare interviews and discover opportunities.
    </p>

  </div>

  {/* Stats */}

<div className="stats-grid">

  <div className="stat-card">
    <h3>🔥 Latest Score</h3>
    <p>{stats.latestScore}</p>
  </div>

  <div className="stat-card">
    <h3>🏆 Best Score</h3>
    <p>{stats.bestScore}</p>
  </div>

  <div className="stat-card">
    <h3>📈 Average Score</h3>
    <p>{stats.averageScore}</p>
  </div>

  <div className="stat-card">
    <h3>📄 Resumes</h3>
    <p>{stats.totalResumes}</p>
  </div>

  <div className="stat-card">
    <h3>🧠 AI Reviews</h3>
    <p>{stats.aiReviews}</p>
  </div>

</div>

  {/* Quick Actions */}
<h2 className="section-title">
  Quick Actions
</h2>

<div className="quick-actions">

  <div
    className="action-card"
    onClick={() => navigate("/resume-upload")}
  >
    <h3>📄 Resume Analyzer</h3>
    <p>Analyze resumes and improve ATS score.</p>
  </div>

  <div
    className="action-card"
    onClick={() => navigate("/interview-generator")}
  >
    <h3>🎤 Interview Generator</h3>
    <p>Generate personalized interview questions.</p>
  </div>
<div
  className="action-card"
  onClick={() => navigate("/job-match")}
  style={{ cursor: "pointer" }}
>
  <h3>🎯 Resume vs Job Match</h3>

  <p>
    Compare your resume with any job description and get a matching score.
  </p>
</div>
  <div
    className="action-card"
    onClick={() => navigate("/career-roadmap")}
  >
    <h3>🚀 Career Roadmap</h3>
    <p>View your learning roadmap.</p>
  </div>

  <div
    className="action-card"
    onClick={() => navigate("/job-recommendations")}
  >
    <h3>💼 Job Recommendations</h3>
    <p>Explore jobs based on your skills.</p>
  </div>
  <div
  className="action-card"
  onClick={() => navigate("/resume-history")}
  style={{ cursor: "pointer" }}
>
  <h3>📜 Resume History</h3>
  <p>
    View all previously analyzed resumes.
  </p>
</div>
  

</div>
<div className="recent-wrapper">

  <h2 className="section-title">
    Recent Activity
  </h2>

  <div className="recent-card">

    <div className="recent-icon">
      📊
    </div>

    <div>

      <h3>
        Latest ATS Analysis
      </h3>

      <p className="recent-score">
        {stats.latestScore}/100
      </p>

      <span>
        Based on your latest uploaded resume.
      </span>

    </div>

  </div>

</div>

</div>

    </div>

  );
}

export default Dashboard;