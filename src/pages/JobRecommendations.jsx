import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/JobRecommendations.css";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import { API_BASE_URL } from "../config";

function JobRecommendations() {

  const [jobs, setJobs] = useState("");

  useEffect(() => {

    const token = localStorage.getItem("token");

    axios
      .get(
        `${API_BASE_URL}/api/jobs/recommend`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
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

            <div
              style={{
                whiteSpace: "pre-wrap",
                color: "white",
                lineHeight: "1.8",
                fontSize: "16px",
                textAlign: "left",
                padding: "20px"
              }}
            >
              {jobs?.replace(/\\n/g, "\n")}
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default JobRecommendations;