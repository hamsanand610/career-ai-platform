import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";

function InterviewDemo() {

  const navigate = useNavigate();

  const [role, setRole] = useState("");

  const [questions, setQuestions] = useState("");

  const generateQuestions = async () => {

    if (!role) {

      alert("Please select a role");

      return;
    }

    try {

      const response = await axios.get(
        `${API_BASE_URL}/api/interview/generate?role=${role}`
      );

      const preview =
        response.data
          .split("\n")
          .slice(0, 10)
          .join("\n");

      setQuestions(preview);

    } catch (error) {

      console.error(error);

      alert("Failed to generate questions");

    }
  };

  return (

    <section className="relative py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-purple-400 uppercase tracking-[6px] text-sm">
            INTERVIEW DEMO
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Practice Interview Questions
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Generate interview questions instantly.
          </p>

        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-4 rounded-xl bg-black text-white border border-white/10"
          >

            <option value="">
              Select Role
            </option>

            <option>
              Frontend Developer
            </option>

            <option>
              Backend Developer
            </option>

            <option>
              Java Developer
            </option>

            <option>
              Full Stack Developer
            </option>

          </select>

          <button
            onClick={generateQuestions}
            className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition"
          >
            Generate Questions
          </button>

          {questions && (

            <div className="mt-10">

              <pre className="text-gray-300 whitespace-pre-wrap">
                {questions}
              </pre>

              <div className="mt-8 border border-purple-500/20 bg-white/5 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-white">
                  🔒 Unlock Full Interview Preparation
                </h3>

                <div className="mt-4 space-y-3 text-gray-300">

                  <p>✓ 20+ Personalized Questions</p>

                  <p>✓ Technical Round</p>

                  <p>✓ HR Round</p>

                  <p>✓ AI Interview Coach</p>

                </div>

                <button
                  onClick={() => navigate("/login")}
                  className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full text-white font-semibold"
                >
                  Login To Continue
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default InterviewDemo;