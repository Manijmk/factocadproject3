import React from "react";
import { useParams, Link } from "react-router-dom";

const Fallback = () => {
  const { serviceName } = useParams(); // Get the service name from the URL

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Coming Soon</h1>
      <p className="text-gray-600 mb-6">
        The <span className="font-semibold text-blue-700 capitalize">{serviceName.replace("-", " ")}</span> service page is currently under development. Please check back later.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default Fallback;
