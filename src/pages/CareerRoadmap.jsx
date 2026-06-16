import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CareerRoadmap.css";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import { API_BASE_URL } from "../config";

function CareerRoadmap() {

  const [, setRoadmap] = useState("");

  useEffect(() => {

    axios
      .get(`${API_BASE_URL}/api/roadmap`)
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

<div className="roadmap-steps">

  <div className="step-card completed">
    <div className="step-icon">✅</div>
    <div>
      <h3>Spring Boot</h3>
      <p>Backend Development</p>
    </div>
  </div>

  <div className="step-card completed">
    <div className="step-icon">✅</div>
    <div>
      <h3>REST APIs</h3>
      <p>API Design & Integration</p>
    </div>
  </div>

  <div className="step-card completed">
    <div className="step-icon">✅</div>
    <div>
      <h3>JWT Authentication</h3>
      <p>Security & Authorization</p>
    </div>
  </div>

  <div className="step-card">
    <div className="step-icon">🐳</div>
    <div>
      <h3>Docker</h3>
      <p>Containerization</p>
    </div>
  </div>

  <div className="step-card">
    <div className="step-icon">☁️</div>
    <div>
      <h3>AWS Cloud</h3>
      <p>Deployment & Hosting</p>
    </div>
  </div>

  <div className="step-card">
    <div className="step-icon">⚙️</div>
    <div>
      <h3>Kubernetes</h3>
      <p>Scalable Infrastructure</p>
    </div>
  </div>

</div>
</div>
      </div>

    </div>

  </div>

);
}

export default CareerRoadmap;