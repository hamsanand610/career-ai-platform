import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [stats, setStats] = useState({
  latestScore: 0,
  totalResumes: 0,
  aiReviews: 0
});
useEffect(() => {

  axios
    .get("http://localhost:8080/api/dashboard/stats")
    .then((response) => {

      setStats(response.data);

    })
    .catch((error) => {

      console.error(error);

    });

}, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">

      <div className="hero-section">

        <h1>🚀 Welcome to CareerAI</h1>

        <p>
          Your AI-Powered Career Assistant for Resume Analysis,
          Interview Preparation and Job Discovery.
        </p>

      </div>

        <div className="stats-grid">

  <div className="stat-card">
    <h3>📊 Last ATS Score</h3>
    <p>{stats.latestScore}/100</p>
  </div>

  <div className="stat-card">
    <h3>📄 Resumes Analyzed</h3>
    <p>{stats.totalResumes}</p>
  </div>

  <div className="stat-card">
    <h3>🤖 AI Reviews</h3>
    <p>{stats.aiReviews}</p>
  </div>

</div>
      <div className="dashboard-grid">

        <div
          className="dashboard-card primary-card"
          onClick={() => navigate("/resume-upload")}
        >
          <div className="card-icon">📄</div>

          <h3>Resume Analyzer</h3>

          <p>
            Upload your resume and get ATS scores,
            skill gap analysis and AI recommendations.
          </p>

          <span className="card-status active">
            Active
          </span>
        </div>

<div
  className="dashboard-card"
  onClick={() => navigate("/interview-generator")}
>
  <h3>🎤 Interview Preparation</h3>

  <p>
    Practice technical and HR interviews with AI.
  </p>

  <span className="active-badge">
    Active
  </span>
</div><div
  className="dashboard-card"
  onClick={() => navigate("/resume-history")}
>
  <div className="card-icon">📜</div>

  <h3>Resume History</h3>

  <p>
    View all previous ATS analyses and resume uploads.
  </p>

  <span className="card-status active">
    Active
  </span>
</div>

        <div className="dashboard-card">

          <div className="card-icon">💼</div>

          <h3>Job Recommendations</h3>

          <p>
            Discover jobs based on your skills and profile.
          </p>

          <span className="card-status upcoming">
            Coming Soon
          </span>

        </div>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>

    
  );
}

export default Dashboard;