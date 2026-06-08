import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import InterviewGenerator from "./pages/InterviewGenerator";
import ProtectedRoute from "./routes/ProtectedRoute";
import ResumeHistory from "./pages/ResumeHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;