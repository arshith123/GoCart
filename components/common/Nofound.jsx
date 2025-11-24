import React from "react";
import { Link } from "react-router-dom";

const Nofound = () => (
  <div className="bg-gradient-to-br from-gray-100 to-blue-100 min-h-screen flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-lg p-10 max-w-md text-center">
      <div className="mb-6">
        <svg className="mx-auto h-16 w-16 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M16 20h16M16 28h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Go Home</Link>
    </div>
  </div>
);

export default Nofound;