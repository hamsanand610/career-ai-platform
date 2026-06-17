import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CareerRoadmap.css";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import { API_BASE_URL } from "../config";

function CareerRoadmap() {

  const [roadmap, setRoadmap] = useState("");

useEffect(() => {

  const token = localStorage.getItem("token");

  axios
    .get(
      `${API_BASE_URL}/api/roadmap`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then((response) => {

        setRoadmap(response.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (

  <div className="dashboard-layout">

    <Sidebar />

    <div className="main-content">

      <div className="roadmap-container">

        <div className="roadmap-header">

          <h1>🚀 Career Roadmap</h1>

          <p>
            Personalized learning roadmap based on your resume.
          </p>

        </div>

<div className="roadmap-card">
  <h2 className="roadmap-title">
    Your Learning Path
  </h2>

  <div className="roadmap-content">
    {roadmap?.replace(/\\n/g, "\n")}
  </div>
</div>

      </div>

    </div>

  </div>

  );
}

export default CareerRoadmap;