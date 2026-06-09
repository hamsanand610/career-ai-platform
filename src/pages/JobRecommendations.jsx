import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/JobRecommendations.css";

function JobRecommendations() {

  const [jobs, setJobs] = useState("");

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/jobs/recommend")
      .then((response) => {

        setJobs(response.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (
    <div className="jobs-container">

      <div className="jobs-header">

        <h1>💼 Job Recommendations</h1>

        <p>
          Personalized opportunities based on your resume skills.
        </p>

      </div>

      <div className="jobs-card">

        <pre>{jobs}</pre>

      </div>

    </div>
  );
}

export default JobRecommendations;