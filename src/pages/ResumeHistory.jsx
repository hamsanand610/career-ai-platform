import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ResumeHistory.css";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

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

  <div className="dashboard-layout">

    <Sidebar />

    <div className="main-content">

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
<div className="history-summary">

  <h3>Latest ATS Score</h3>

  <p>{history[0]?.atsScore}</p>

  <span>
    {history[0]?.atsScore >= 80
      ? "🚀 Excellent Resume"
      : history[0]?.atsScore >= 60
      ? "📈 Improving"
      : "⚡ Keep Improving"}
  </span>

</div>        <div className="history-grid">
      {history.length === 0 && (

  <div className="history-card">

    <h2>No Resume History Found</h2>

    <p>
      Upload and analyze your first resume
      to start building history.
    </p>

  </div>

)}
          {history.map((item) => (

            <div
  key={item.id}
  className={`history-card ${
    item.id === history[0]?.id
      ? "latest-card"
      : ""
  }`}
>
<h2>
  Resume Analysis #{item.id}
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
              <div className="score-status">

  {item.atsScore >= 80
    ? "🟢 Excellent Resume"
    : item.atsScore >= 60
    ? "🟡 Good Resume"
    : "🔴 Needs Improvement"}

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

    </div>

  </div>

);
}

export default ResumeHistory;