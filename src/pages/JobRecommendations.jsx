import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/JobRecommendations.css";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import { API_BASE_URL } from "../config";

function JobRecommendations() {

  const [, setJobs] = useState("");

  useEffect(() => {

    axios
      .get(`${API_BASE_URL}/api/jobs/recommend`)
      .then((response) => {

        setJobs(response.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (

  <div className="dashboard-layout">

    <Sidebar />

    <div className="main-content">

      <div className="jobs-container">

        <div className="jobs-header">

          <h1>💼 Job Recommendations</h1>

          <p>
            Personalized opportunities based on your resume skills.
          </p>

        </div>
<p className="jobs-subtitle">
  Based on your resume skills and ATS analysis,
  these roles match your profile best.
</p>
<div className="jobs-card">

  <h2 className="jobs-title">
    Recommended Roles
  </h2>

  <div className="jobs-grid">

    <div className="job-item">

      <div className="job-icon">💻</div>

      <div>

        <h3>Java Developer</h3>

        <p>92% Match</p>

        <span>📍 Bangalore • ₹6-10 LPA</span>

      </div>

    </div>

    <div className="job-item">

      <div className="job-icon">⚛️</div>

      <div>

        <h3>Frontend Developer</h3>

        <p>88% Match</p>

        <span>📍 Chennai • ₹5-8 LPA</span>

      </div>

    </div>

    <div className="job-item">

      <div className="job-icon">🗄️</div>

      <div>

        <h3>Backend Developer</h3>

        <p>90% Match</p>

        <span>📍 Hyderabad • ₹6-9 LPA</span>

      </div>

    </div>

    <div className="job-item">

      <div className="job-icon">🚀</div>

      <div>

        <h3>Full Stack Developer</h3>

        <p>95% Match</p>

        <span>📍 Bengaluru • ₹8-12 LPA</span>

      </div>

    </div>

  </div>

</div>

      </div>

    </div>

  </div>

);
}

export default JobRecommendations;