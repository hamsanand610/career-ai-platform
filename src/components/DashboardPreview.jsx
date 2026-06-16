import {
  FiTrendingUp,
  FiFileText,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";

const DashboardPreview = () => {
  return (
    <section
      id="dashboard"
      className="py-32 px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Glow Effects */}

      <div className="absolute top-20 left-0 w-[350px] h-[350px] bg-purple-600 blur-[180px] opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600 blur-[180px] opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-24">

          <p className="text-purple-400 uppercase tracking-[0.4em] text-sm mb-6">
            CAREERAI ANALYTICS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Track Your Career <br />
            Progress With AI
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Analyze resumes, evaluate interview performance,
            compare job descriptions and monitor your
            career growth through intelligent AI analytics.
          </p>

        </div>

        {/* Dashboard Container */}

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-purple-500/10">

          {/* Top Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}

            <div className="bg-black/40 border border-white/10 rounded-3xl p-6 hover:border-purple-500/40 transition-all duration-500">

              <div className="flex items-center justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-2xl">
                  <FiTarget />
                </div>

                <span className="text-purple-400 text-sm">
                  Latest
                </span>

              </div>

              <p className="text-gray-400 mb-3">
                Latest ATS Score
              </p>

              <h3 className="text-5xl font-bold">
                57
              </h3>

            </div>

            {/* Card 2 */}

            <div className="bg-black/40 border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 transition-all duration-500">

              <div className="flex items-center justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-2xl">
                  <FiTrendingUp />
                </div>

                <span className="text-green-400 text-sm">
                  Growing
                </span>

              </div>

              <p className="text-gray-400 mb-3">
                Resumes Analyzed
              </p>

              <h3 className="text-5xl font-bold">
                31
              </h3>

            </div>

            {/* Card 3 */}

            <div className="bg-black/40 border border-white/10 rounded-3xl p-6 hover:border-pink-500/40 transition-all duration-500">

              <div className="flex items-center justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 text-2xl">
                  <FiFileText />
                </div>

                <span className="text-green-400 text-sm">
                  Top Score
                </span>

              </div>

              <p className="text-gray-400 mb-3">
                Best ATS Score
              </p>

              <h3 className="text-5xl font-bold">
                59
              </h3>

            </div>

            {/* Card 4 */}

            <div className="bg-black/40 border border-white/10 rounded-3xl p-6 hover:border-green-500/40 transition-all duration-500">

              <div className="flex items-center justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">
                  <FiBarChart2 />
                </div>

                <span className="text-green-400 text-sm">
                  Active
                </span>

              </div>

              <p className="text-gray-400 mb-3">
                AI Reviews
              </p>

              <h3 className="text-5xl font-bold">
                31
              </h3>

            </div>

          </div>

          {/* Analytics Section */}

          <div className="mt-10 bg-black/40 border border-white/10 rounded-3xl p-10">

            <div className="flex justify-between items-center mb-10">

              <div>

                <h3 className="text-2xl font-bold mb-2">
                  CareerAI Analytics
                </h3>

                <p className="text-gray-400">
                  Real-time insights from resume analysis and interview preparation
                </p>

              </div>

              <button className="bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm hover:border-purple-500/40 transition">

                Explore Dashboard

              </button>

            </div>

            {/* Analytics Bars */}

            <div className="flex items-end gap-6 h-[300px] mt-10">

              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[220px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  ATS
                </p>

              </div>

              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[170px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  AI
                </p>

              </div>

              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[250px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  Jobs
                </p>

              </div>

              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[190px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  Roadmap
                </p>

              </div>

              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[280px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  Growth
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DashboardPreview;