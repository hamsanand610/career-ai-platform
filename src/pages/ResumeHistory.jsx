import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ResumeHistory.css";

function ResumeHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/resume/history")
      .then((response) => {

        setHistory(response.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

return (
  <div className="history-container">

    <div className="history-header">

      <h1>📜 Resume History</h1>

      <button
        onClick={() => window.history.back()}
        className="back-btn"
      >
        ← Back
      </button>

    </div>

    <div className="history-grid">

      {history.map((item) => (

        <div
          key={item.id}
          className="history-card"
        >

          <h2>
            ATS Score
          </h2>

          <div
            className={`score-badge ${
              item.atsScore >= 80
                ? "excellent"
                : item.atsScore >= 60
                ? "good"
                : "poor"
            }`}
          >
            {item.atsScore}/100
          </div>

          <p>
            📅{" "}
            {new Date(item.uploadDate)
              .toLocaleDateString()}
          </p>

          <p>
            🕒{" "}
            {new Date(item.uploadDate)
              .toLocaleTimeString()}
          </p>

        </div>

      ))}

    </div>

  </div>
);
}

export default ResumeHistory;