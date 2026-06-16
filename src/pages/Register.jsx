import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import "../styles/Login.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
const response = await axios.post(
  `${API_BASE_URL}/api/users/register`,
  {
    name,
    email,
    password,
  }
);

if (response.data === "Email already registered") {
  alert("Email already registered ❌");
  return;
}

alert("Registration Successful ✅");
navigate("/login");

    } catch (error) {
      console.error(error);
      alert("Registration Failed ❌");
    }
  };

  return (
  <div className="login-page">
    <div className="login-container">

      <div className="login-left">
        <h1>🚀 CareerAI</h1>

        <p>
          Create your CareerAI account and start improving resumes,
          preparing for interviews and discovering better opportunities.
        </p>

        <div className="feature-list">
          <div>✅ ATS Resume Analysis</div>
          <div>✅ AI Interview Preparation</div>
          <div>✅ Career Roadmaps</div>
          <div>✅ Job Recommendations</div>
        </div>
      </div>

      <div className="login-card">

        <h2>Create Account 🚀</h2>

        <p
          style={{
            color: "#94a3b8",
            margin: "0 0 24px 0",
            fontSize: "14px"
          }}
        >
          Join CareerAI and start your journey
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Enter Name"
            className="login-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login-btn"
          >
            Create Account
          </button>

        </form>

      </div>

    </div>
  </div>
);
}

export default Register;