import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import InterviewGenerator from "./pages/InterviewGenerator";
import ProtectedRoute from "./routes/ProtectedRoute";
import ResumeHistory from "./pages/ResumeHistory";
import CareerRoadmap from "./pages/CareerRoadmap";
import JobRecommendations from "./pages/JobRecommendations";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={<Login />}
      />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resume-upload"
          element={
            <ProtectedRoute>
              <ResumeUpload />
            </ProtectedRoute>
          }
        />
        <Route
        path="/interview-generator"
        element={
        <ProtectedRoute>
      <InterviewGenerator />
    </ProtectedRoute>
  }
/>
<Route
  path="/resume-history"
  element={
    <ProtectedRoute>
      <ResumeHistory />
    </ProtectedRoute>
  }
/>
<Route
  path="/career-roadmap"
  element={
    <ProtectedRoute>
      <CareerRoadmap />
    </ProtectedRoute>
  }
/>
<Route
  path="/job-recommendations"
  element={
    <ProtectedRoute>
      <JobRecommendations />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;