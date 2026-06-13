import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data
      );

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

<p className="login-subtitle">
  Login to continue your AI career journey.
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
  className="back-home"
  onClick={() => navigate("/")}
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