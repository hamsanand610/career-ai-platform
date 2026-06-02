const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-black text-white relative overflow-hidden">

      {/* Glow */}

      <div className="absolute left-0 top-20 w-[300px] h-[300px] bg-pink-600 blur-[180px] opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-pink-400 uppercase tracking-[0.4em] text-sm mb-5">
            Success Stories
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Students Achieving <br />
            Their Dream Careers
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Thousands of students improved their interview performance,
            optimized resumes, and landed placements using our AI-powered platform.
          </p>

        </div>

        {/* Testimonials Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:border-pink-500/40 hover:scale-105 transition-all duration-500">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-2xl font-bold">
                A
              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  Arjun Kumar
                </h3>

                <p className="text-gray-400 text-sm">
                  Frontend Developer @ Zoho
                </p>

              </div>

            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              “The AI mock interviews and resume analyzer helped me
              identify weak areas and improve my frontend interview skills tremendously.”
            </p>

            <div className="text-yellow-400 text-lg">
              ⭐⭐⭐⭐⭐
            </div>

          </div>

          {/* Card 2 */}

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:border-blue-500/40 hover:scale-105 transition-all duration-500">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl font-bold">
                S
              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  Sneha R
                </h3>

                <p className="text-gray-400 text-sm">
                  Software Engineer @ Infosys
                </p>

              </div>

            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              “The analytics dashboard and personalized roadmaps
              made my placement preparation more structured and efficient.”
            </p>

            <div className="text-yellow-400 text-lg">
              ⭐⭐⭐⭐⭐
            </div>

          </div>

          {/* Card 3 */}

          <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:border-purple-500/40 hover:scale-105 transition-all duration-500">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-2xl font-bold">
                R
              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  Rahul V
                </h3>

                <p className="text-gray-400 text-sm">
                  React Developer @ TCS
                </p>

              </div>

            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              “Practicing AI-generated technical questions gave me
              confidence during real frontend development interviews.”
            </p>

            <div className="text-yellow-400 text-lg">
              ⭐⭐⭐⭐⭐
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;