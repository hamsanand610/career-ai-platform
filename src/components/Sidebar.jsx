import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: "🏠",
      path: "/dashboard",
    },
    {
      name: "Resume Analyzer",
      icon: "📄",
      path: "/resume-upload",
    },
    {
      name: "Interview Prep",
      icon: "🎤",
      path: "/interview-generator",
    },
    {
  name: "Job Match",
  path: "/job-match",
  icon: "🎯"
},
    {
      name: "Job Recommendations",
      icon: "💼",
      path: "/job-recommendations",
    },
    {
      name: "Career Roadmap",
      icon: "🚀",
      path: "/career-roadmap",
    },
    {
      name: "Resume History",
      icon: "📜",
      path: "/resume-history",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="sidebar">

      <div className="sidebar-logo">

        <h1>🚀 CareerAI</h1>

        <p>AI Career Platform</p>

      </div>

      <div className="sidebar-menu">

        {menuItems.map((item) => (

          <div
            key={item.path}
            className={`menu-item ${
              location.pathname === item.path
                ? "active-menu"
                : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            {item.icon} {item.name}
          </div>

        ))}

        <div
          className="menu-item logout-item"
          onClick={handleLogout}
        >
          🚪 Logout
        </div>

      </div>

    </div>
  );
}

export default Sidebar;