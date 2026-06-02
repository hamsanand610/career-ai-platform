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
            AI ANALYTICS DASHBOARD
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Smart Insights For <br />
            Career Growth
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Monitor interview performance, analyze resume strength,
            track preparation progress, and improve placement success
            using powerful AI-driven analytics.
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

                <span className="text-green-400 text-sm">
                  +12%
                </span>

              </div>

              <p className="text-gray-400 mb-3">
                Interview Score
              </p>

              <h3 className="text-5xl font-bold">
                92%
              </h3>

            </div>

            {/* Card 2 */}

            <div className="bg-black/40 border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 transition-all duration-500">

              <div className="flex items-center justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-2xl">
                  <FiTrendingUp />
                </div>

                <span className="text-green-400 text-sm">
                  +8
                </span>

              </div>

              <p className="text-gray-400 mb-3">
                Completed Sessions
              </p>

              <h3 className="text-5xl font-bold">
                48
              </h3>

            </div>

            {/* Card 3 */}

            <div className="bg-black/40 border border-white/10 rounded-3xl p-6 hover:border-pink-500/40 transition-all duration-500">

              <div className="flex items-center justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400 text-2xl">
                  <FiFileText />
                </div>

                <span className="text-green-400 text-sm">
                  ATS Ready
                </span>

              </div>

              <p className="text-gray-400 mb-3">
                Resume Score
              </p>

              <h3 className="text-5xl font-bold">
                87
              </h3>

            </div>

            {/* Card 4 */}

            <div className="bg-black/40 border border-white/10 rounded-3xl p-6 hover:border-green-500/40 transition-all duration-500">

              <div className="flex items-center justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 text-2xl">
                  <FiBarChart2 />
                </div>

                <span className="text-green-400 text-sm">
                  Live
                </span>

              </div>

              <p className="text-gray-400 mb-3">
                AI Performance
              </p>

              <h3 className="text-5xl font-bold">
                95%
              </h3>

            </div>

          </div>

          {/* Analytics Chart */}

          <div className="mt-10 bg-black/40 border border-white/10 rounded-3xl p-10">

            <div className="flex justify-between items-center mb-10">

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Weekly Performance
                </h3>

                <p className="text-gray-400">
                  AI-generated preparation analytics
                </p>
              </div>

              <button className="bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm hover:border-purple-500/40 transition">
                View Report
              </button>

            </div>

            {/* Bars */}

            <div className="flex items-end gap-6 h-[300px] mt-10">
              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[180px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  Mon
                </p>

              </div>

              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[180px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  Tue
                </p>

              </div>

              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[180px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  Wed
                </p>

              </div>

              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[180px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  Thu
                </p>

              </div>

              <div className="w-full">

                <div className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-3xl h-[180px] w-full"></div>

                <p className="text-center mt-4 text-gray-400">
                  Fri
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