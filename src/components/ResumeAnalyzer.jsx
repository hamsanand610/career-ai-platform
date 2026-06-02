const ResumeAnalyzer = () => {
  return (
    <section className="py-32 px-6 bg-black text-white relative overflow-hidden">

      {/* Glow Effects */}

      <div className="absolute right-0 top-20 w-[350px] h-[350px] bg-blue-600 blur-[180px] opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-blue-400 uppercase tracking-[0.4em] text-sm mb-5">
            AI Resume Analyzer
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Optimize Your Resume <br />
            For Better Placements
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Upload your resume and receive AI-powered feedback,
            ATS optimization insights, missing skill analysis,
            and personalized improvement suggestions.
          </p>

        </div>

        {/* Main Container */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Upload Box */}

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500">

            <h3 className="text-3xl font-bold mb-8">
              Upload Resume
            </h3>

            <div className="border-2 border-dashed border-white/10 rounded-3xl p-16 text-center hover:border-blue-500/40 transition duration-300">

              <div className="text-6xl mb-6">
                📄
              </div>

              <h4 className="text-2xl font-semibold mb-4">
                Drag & Drop Resume
              </h4>

              <p className="text-gray-400 mb-8">
                Supported formats: PDF, DOCX
              </p>

              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/20">

                Upload Resume

              </button>

            </div>

          </div>

          {/* ATS Score Card */}

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-10">

              <div>

                <p className="text-gray-400 mb-3">
                  ATS Compatibility Score
                </p>

                <h3 className="text-6xl font-bold text-green-400">
                  89%
                </h3>

              </div>

              <div className="bg-green-500/20 text-green-300 px-5 py-2 rounded-full text-sm">
                Excellent
              </div>

            </div>

            {/* Skills */}

            <div className="space-y-6">

              <div>

                <div className="flex justify-between mb-2">

                  <p className="text-gray-300">
                    ReactJS
                  </p>

                  <p className="text-blue-400">
                    95%
                  </p>

                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-[95%] rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">

                  <p className="text-gray-300">
                    JavaScript
                  </p>

                  <p className="text-purple-400">
                    88%
                  </p>

                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[88%] rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">

                  <p className="text-gray-300">
                    Problem Solving
                  </p>

                  <p className="text-green-400">
                    82%
                  </p>

                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-[82%] rounded-full"></div>

                </div>

              </div>

            </div>

            {/* Missing Skills */}

            <div className="mt-10">

              <h4 className="text-xl font-semibold mb-5">
                Recommended Skills
              </h4>

              <div className="flex flex-wrap gap-4">

                <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm">
                  TypeScript
                </span>

                <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm">
                  Redux
                </span>

                <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm">
                  Node.js
                </span>

                <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm">
                  GitHub
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ResumeAnalyzer;