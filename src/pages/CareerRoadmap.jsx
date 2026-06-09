import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CareerRoadmap.css";

function CareerRoadmap() {

  const [roadmap, setRoadmap] = useState("");

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/roadmap")
      .then((response) => {

        setRoadmap(response.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (
    <div className="roadmap-container">

      <div className="roadmap-header">

        <h1>🚀 Career Roadmap</h1>

        <p>
          Personalized learning roadmap based on your resume.
        </p>

      </div>

      <div className="roadmap-card">

        <pre>{roadmap}</pre>

      </div>

    </div>
  );
}

export default CareerRoadmap;