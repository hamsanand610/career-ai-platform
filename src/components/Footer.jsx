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
            Start Your Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Boost Your Career <br />
            With AI-Powered Preparation
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Prepare smarter, track progress, improve your resume,
            and crack interviews with intelligent AI-driven tools
            designed for students and job seekers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20">

              Get Started Free

            </button>

            <button className="border border-white/10 bg-white/5 px-10 py-4 rounded-full font-semibold text-lg hover:border-purple-500/40 transition duration-300">

              Explore Features

            </button>

          </div>

        </div>

        {/* Footer Bottom */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              CareerAI
            </h3>

            <p className="text-gray-400 leading-relaxed">
              AI-powered interview preparation platform helping
              students build better careers and achieve placement success.
            </p>

          </div>

          {/* Links */}

          <div>

            <h4 className="text-xl font-semibold mb-6">
              Product
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-white transition cursor-pointer">
                Features
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Dashboard
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Resume Analyzer
              </li>

              <li className="hover:text-white transition cursor-pointer">
                AI Interviews
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4 className="text-xl font-semibold mb-6">
              Company
            </h4>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-white transition cursor-pointer">
                About
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Careers
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>

            </ul>

          </div>

          {/* Newsletter */}

          <div>

            <h4 className="text-xl font-semibold mb-6">
              Stay Updated
            </h4>

            <p className="text-gray-400 mb-6">
              Get latest interview tips and AI career insights.
            </p>

            <div className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-full px-5 py-4 outline-none focus:border-purple-500/40"
              />

              <button className="bg-gradient-to-r from-purple-500 to-blue-500 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">

                Subscribe

              </button>

            </div>

          </div>

        </div>

        {/* Bottom Line */}

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

          © 2026 CareerAI. All rights reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;