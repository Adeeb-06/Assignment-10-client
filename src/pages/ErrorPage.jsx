import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-base-200 to-white px-6 text-center">
      
      <h1 className="text-9xl font-extrabold text-primary mb-6">404</h1>
      
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>
      
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
      </p>
      
      <Link
        to="/"
        className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
      >
        Go Back Home
      </Link>
      
     
      
    </div>
  );
}
