const FeatureCards = () => {
  return (
<section
  id="features"
  className="py-24 px-6 bg-black text-white"
>

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Powerful Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:scale-105 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">

            <div className="text-4xl mb-5">🎯</div>

            <h3 className="text-2xl font-semibold mb-4">
              AI Mock Interviews
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Practice real interview questions with AI-powered feedback
              and performance analysis.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:scale-105 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">

            <div className="text-4xl mb-5">📄</div>

            <h3 className="text-2xl font-semibold mb-4">
              Resume Analyzer
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Upload your resume and receive intelligent suggestions
              to improve ATS score and visibility.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:scale-105 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">

            <div className="text-4xl mb-5">📊</div>

            <h3 className="text-2xl font-semibold mb-4">
              Progress Tracking
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Monitor interview preparation progress with beautiful
              analytics and dashboards.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:scale-105 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">

            <div className="text-4xl mb-5">🚀</div>

            <h3 className="text-2xl font-semibold mb-4">
              Career Roadmaps
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Get personalized learning paths and career guidance
              powered by AI recommendations.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeatureCards;