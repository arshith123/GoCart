import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8 relative">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-indigo-200 rounded-full opacity-30 animate-pulse delay-75"></div>
          </div>

          {/* Main SVG Illustration */}
          <svg
            className="w-full h-auto max-w-md mx-auto relative z-10"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle */}
            <circle cx="200" cy="150" r="120" fill="#E0E7FF" opacity="0.5" />

            {/* Character Body */}
            <ellipse cx="200" cy="180" rx="60" ry="70" fill="#9333EA" />

            {/* Character Head */}
            <circle cx="200" cy="100" r="45" fill="#A855F7" />

            {/* Eyes */}
            <circle cx="185" cy="95" r="6" fill="#1F2937" />
            <circle cx="215" cy="95" r="6" fill="#1F2937" />

            {/* Confused Expression */}
            <path
              d="M 185 115 Q 200 120 215 115"
              stroke="#1F2937"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Arms */}
            <ellipse
              cx="150"
              cy="180"
              rx="15"
              ry="50"
              fill="#7C3AED"
              transform="rotate(-30 150 180)"
            />
            <ellipse
              cx="250"
              cy="180"
              rx="15"
              ry="50"
              fill="#7C3AED"
              transform="rotate(30 250 180)"
            />

            {/* Magnifying Glass */}
            <circle
              cx="280"
              cy="140"
              r="25"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="4"
            />
            <line
              x1="300"
              y1="160"
              x2="320"
              y2="180"
              stroke="#4F46E5"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Question Marks */}
            <text
              x="100"
              y="80"
              fontSize="30"
              fill="#9333EA"
              opacity="0.6"
              className="animate-bounce"
            >
              ?
            </text>
            <text
              x="300"
              y="100"
              fontSize="25"
              fill="#7C3AED"
              opacity="0.6"
              className="animate-bounce delay-100"
            >
              ?
            </text>
            <text
              x="120"
              y="220"
              fontSize="20"
              fill="#A855F7"
              opacity="0.6"
              className="animate-bounce delay-200"
            >
              ?
            </text>

            {/* Floating Shapes */}
            <circle cx="80" cy="150" r="8" fill="#EC4899" opacity="0.4" />
            <rect
              x="310"
              y="200"
              width="15"
              height="15"
              fill="#6366F1"
              opacity="0.4"
              transform="rotate(45 317.5 207.5)"
            />
            <polygon
              points="340,80 350,100 330,100"
              fill="#8B5CF6"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-8xl md:text-9xl font-bold font-heading bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 font-sans max-w-md mx-auto">
            The page you're looking for seems to have wandered off. Let's get
            you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300 font-sans group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Go Back
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-sans group"
          >
            <Home
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            Go to Dashboard
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-sans mb-3">Quick Links:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/product-list")}
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors font-sans"
            >
              Products
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => navigate("/category-list")}
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors font-sans"
            >
              Categories
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => navigate("/user-managment")}
              className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors font-sans"
            >
              Users
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce {
                    animation: bounce 2s infinite;
                }
                .delay-75 {
                    animation-delay: 0.15s;
                }
                .delay-100 {
                    animation-delay: 0.2s;
                }
                .delay-200 {
                    animation-delay: 0.4s;
                }
            `}</style>
    </div>
  );
};

export default NotFound;
