const TrustedCompanies = () => {
  return (
    <section className="py-32 px-6 bg-black text-white relative overflow-hidden">

      {/* Glow */}

      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-purple-600 blur-[180px] opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-purple-400 uppercase tracking-[0.4em] text-sm mb-5">
            Trusted Worldwide
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Top Companies Students Aim For
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Thousands of students prepare for dream placements using our
            AI-powered interview preparation platform.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Google */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-purple-500/40 hover:scale-105 transition-all duration-500">

            <div className="text-5xl mb-6">
              🌐
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Google
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              AI-powered preparation for frontend and technical interviews.
            </p>

            <div className="flex items-center justify-between">

              <span className="text-purple-400 text-sm">
                Product Based
              </span>

              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                ⭐ 4.9
              </span>

            </div>

          </div>

          {/* Amazon */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-blue-500/40 hover:scale-105 transition-all duration-500">

            <div className="text-5xl mb-6">
              📦
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Amazon
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Practice coding rounds, aptitude tests, and HR interviews.
            </p>

            <div className="flex items-center justify-between">

              <span className="text-blue-400 text-sm">
                Tech Giant
              </span>

              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                ⭐ 4.8
              </span>

            </div>

          </div>

          {/* Microsoft */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-500/40 hover:scale-105 transition-all duration-500">

            <div className="text-5xl mb-6">
              💻
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Microsoft
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Improve DSA and system design skills using AI analytics.
            </p>

            <div className="flex items-center justify-between">

              <span className="text-cyan-400 text-sm">
                Enterprise Tech
              </span>

              <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                ⭐ 4.9
              </span>

            </div>

          </div>

          {/* Zoho */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-pink-500/40 hover:scale-105 transition-all duration-500">

            <div className="text-5xl mb-6">
              🚀
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Zoho
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Personalized frontend development and placement roadmaps.
            </p>

            <div className="flex items-center justify-between">

              <span className="text-pink-400 text-sm">
                SaaS Company
              </span>

              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                ⭐ 4.7
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TrustedCompanies;