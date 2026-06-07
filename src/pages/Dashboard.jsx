import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>CareerAI Dashboard 🚀</h1>

      <p>Welcome! You are logged in.</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;