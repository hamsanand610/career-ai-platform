import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">
          CareerAI
        </h1>

        <ul className="flex gap-8 text-gray-300 font-medium">

          <a
            href="#"
            className="hover:text-white transition"
          >
            Home
          </a>

          <a
            href="#features"
            className="hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#dashboard"
            className="hover:text-white transition"
          >
            Dashboard
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </ul>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Get Started
        </button>

      </div>

    </nav>
  );
};

export default Navbar;