import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";

function ATSDemo() {

  const navigate = useNavigate();

  const [score, setScore] = useState(null);
const [file, setFile] = useState(null);

const handleDemo = async () => {

  if (!file) {

    alert("Please upload a resume");

    return;
  }

  const formData = new FormData();

  formData.append("file", file);

  try {

const response = await axios.post(
  `${API_BASE_URL}/api/resume/demo-upload`,
  formData
);

    const match =
      response.data.match(
        /ATS Score:\s*(\d+)\/100/i
      );

    if (match) {

      setScore(match[1]);

    }

  } catch (error) {

    console.error(error);

    alert("Failed to analyze resume");

  }
};

  return (
    <section className="relative py-32 px-6">

      <div className="absolute left-0 top-0 w-72 h-72 bg-purple-600/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 w-72 h-72 bg-blue-600/20 blur-[120px]" />

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-purple-400 uppercase tracking-[6px] text-sm">
            ATS DEMO
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Experience Our Resume Analyzer
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Upload your resume and instantly receive an ATS compatibility
            preview powered by CareerAI.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Upload Card */}

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-white mb-8">
              Upload Resume
            </h3>

            <div className="border border-white/10 rounded-3xl p-12 text-center">

              <div className="text-6xl mb-6">
                📄
              </div>

              <h4 className="text-2xl font-semibold text-white">
                Drag & Drop Resume
              </h4>

              <p className="text-gray-400 mt-3">
                Supported Formats: PDF, DOCX
              </p>

                <input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                    setFile(e.target.files[0])
                }
                className="mt-8 w-full text-white"
                />

              <button
                onClick={handleDemo}
                className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition"
              >
                Analyze Resume
              </button>

            </div>

          </div>

          {/* Result Card */}

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

            <p className="text-gray-400">
              ATS Compatibility Score
            </p>

            <h2 className="text-6xl font-bold text-green-400 mt-4">
              {score ? `${score}%` : "--"}
            </h2>

            <div className="mt-10 space-y-6">

              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Java</span>
                  <span>92%</span>
                </div>

                <div className="w-full bg-white/10 h-3 rounded-full">
                  <div className="bg-blue-500 h-3 rounded-full w-[92%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>React</span>
                  <span>88%</span>
                </div>

                <div className="w-full bg-white/10 h-3 rounded-full">
                  <div className="bg-purple-500 h-3 rounded-full w-[88%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-white mb-2">
                  <span>Problem Solving</span>
                  <span>80%</span>
                </div>

                <div className="w-full bg-white/10 h-3 rounded-full">
                  <div className="bg-green-500 h-3 rounded-full w-[80%]" />
                </div>
              </div>

            </div>

            {score && (

              <div className="mt-10 border border-purple-500/20 bg-white/5 rounded-2xl p-6">

                <h3 className="text-xl font-bold text-white">
                  🔒 Unlock Full Analysis
                </h3>

                <div className="mt-4 space-y-3 text-gray-300">

                  <p>✓ AI Resume Review</p>

                  <p>✓ Career Roadmap</p>

                  <p>✓ Missing Skills Analysis</p>

                  <p>✓ Personalized Interview Questions</p>

                </div>

                <button
                  onClick={() => navigate("/login")}
                  className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full text-white font-semibold hover:scale-105 transition"
                >
                  Login To Continue
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ATSDemo;