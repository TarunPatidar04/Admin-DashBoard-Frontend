import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div className="text-center">
          
          <h1 className="text-7xl font-bold text-gray-800 mb-4">
            404
          </h1>

          <h2 className="text-2xl font-semibold mb-2">
            Page Not Found
          </h2>

          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>

          <NavLink
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back Home
          </NavLink>

        </div>
      </div>
    </>
  );
};

export default NotFound;
