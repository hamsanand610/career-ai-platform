import Navbar from "../components/Navbar";
import FeatureCards from "../components/FeatureCards";
import DashboardPreview from "../components/DashboardPreview";
import TrustedCompanies from "../components/TrustedCompanies";
import ResumeAnalyzer from "../components/ResumeAnalyzer";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />

      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[180px] opacity-30"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[180px] opacity-30"></div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-28">
        <div className="mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <p className="text-sm text-purple-300 tracking-wide">
            ✨ AI-Powered Career Success Platform
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-center leading-[1.2] max-w-4xl">
          Transform Your Career <br />
          With{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
          Interview Preparation
        </h1>

        <p className="text-gray-400 text-xl text-center mt-8 max-w-3xl leading-relaxed">
          Master technical interviews, analyze resumes, track progress, and
          boost your placement success using cutting-edge AI tools designed for
          students and job seekers.
        </p>

        <button className="mt-12 bg-gradient-to-r from-purple-500 to-blue-500 px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30">
          Start Your Journey
        </button>
      </div>

      <FeatureCards />
      <DashboardPreview />
      <TrustedCompanies />
      <ResumeAnalyzer />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
