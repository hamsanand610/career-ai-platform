
const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-28 px-6 bg-black text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-600 blur-[180px] opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* CTA Section */}

        <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 md:p-20 backdrop-blur-xl text-center mb-20">

          <p className="text-purple-400 uppercase tracking-[0.4em] text-sm mb-6">
            CareerAI Platform
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Ready to Land Your <br />
            Dream Job?
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Analyze resumes, prepare for interviews,
            match against job descriptions and build
            a personalized career roadmap using AI.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-gray-300">

            <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">
              ✓ Resume Analysis
            </span>

            <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">
              ✓ AI Interviews
            </span>

            <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">
              ✓ Job Matching
            </span>

            <span className="bg-white/5 px-4 py-2 rounded-full border border-white/10">
              ✓ Career Roadmaps
            </span>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20">

              🚀 Try CareerAI

            </button>

            <button className="border border-white/10 bg-white/5 px-10 py-4 rounded-full font-semibold text-lg hover:border-purple-500/40 transition duration-300">

              ✨ Explore Features

            </button>

          </div>

        </div>

        {/* Footer Grid */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              CareerAI
            </h3>

            <p className="text-gray-400 leading-relaxed">
              All-in-one AI career platform featuring
              resume analysis, interview preparation,
              job matching and personalized career roadmaps.
            </p>

          </div>

          {/* Product */}

          <div>

            <h4 className="text-xl font-semibold mb-6">
              Product
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-white transition cursor-pointer">
                Resume Analyzer
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Interview Preparation
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Resume vs Job Match
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Career Roadmap
              </li>

            </ul>

          </div>

          {/* Technologies */}

          <div>

            <h4 className="text-xl font-semibold mb-6">
              Technologies
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-white transition">
                React
              </li>

              <li className="hover:text-white transition">
                Spring Boot
              </li>

              <li className="hover:text-white transition">
                MySQL
              </li>

              <li className="hover:text-white transition">
                Groq AI
              </li>

            </ul>

          </div>

          {/* Developer */}

          <div>

            <h4 className="text-xl font-semibold mb-6">
              Developer
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-white transition cursor-pointer">
                Hamsanand S I
              </li>

              <li className="hover:text-white transition cursor-pointer">
                <a
  href="https://github.com/hamsanand610/career-ai-platform"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  GitHub
</a>
              </li>

              <li className="hover:text-white transition cursor-pointer">
                <a
  href="https://www.linkedin.com/in/hamsanand-s-i-612950294?utm_source=share_via&utm_content=profile&utm_medium=member_android"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  LinkedIn
</a>
              </li>

              <li className="hover:text-white transition cursor-pointer">
                <a
  href="mailto:hamsanand610@gmail.com"
  className="hover:text-white transition"
>
  Email
</a>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Line */}

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

          Built by Hamsanand S I using React, Spring Boot, MySQL and Groq AI.

        </div>

      </div>

    </footer>
  );
};

export default Footer;

