import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { API_BASE_URL } from "../config";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

const response = await axios.post(
  `${API_BASE_URL}/api/users/login`,
  {
    email,
    password,
  }
);

if (
  response.data === "User not found" ||
  response.data === "Invalid password"
) {
  alert(response.data);
  return;
}

localStorage.setItem("token", response.data);

navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Login Failed ❌");
    }
  };

  return (

    <div className="login-page">

      <div className="login-container">

        <div className="login-left">

          <h1>🚀 CareerAI</h1>

          <p>
            Your AI-powered career companion
            helping you improve resumes,
            prepare for interviews and
            discover better opportunities.
          </p>

          <div className="feature-list">

            <div>✅ ATS Resume Analysis</div>

            <div>✅ AI Interview Preparation</div>

            <div>✅ Career Roadmaps</div>

            <div>✅ Job Recommendations</div>

          </div>

        </div>

        <div className="login-card">

          <h2>Welcome Back 👋</h2>

<p style={{ color: '#94a3b8', margin: '0 0 24px 0', fontSize: '14px', lineHeight: '1.5' }}>
    Login to continue your AI career journey
  </p>
            <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Enter Email"
              className="login-input"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="login-input"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>
            <p
  style={{
    textAlign: "center",
    marginTop: "16px",
    color: "#94a3b8",
    fontSize: "14px"
  }}
>
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    style={{
      color: "#6366f1",
      cursor: "pointer",
      fontWeight: "600"
    }}
  >
    Sign Up
  </span>
</p>
          <p
  onClick={() => navigate("/")}
  style={{
    textAlign: 'center',
    marginTop: '24px',
    marginBottom: '0',
    color: '#94a3b8',        /* Sleek muted slate color */
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'color 0.3s ease'
  }}
  onMouseEnter={(e) => e.target.style.color = '#ffffff'} /* Hover effect: turns crisp white */
  onMouseLeave={(e) => e.target.style.color = '#94a3b8'} /* Reverts when mouse leaves */
>
  ← Back to Home
</p>   
          </form>

        </div>

      </div>

    </div>

  );
}

export default Login;