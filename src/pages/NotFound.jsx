import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50">
        <div className="text-center max-w-xl">
          {/* 404 Title */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 tracking-tight">
            404
          </h1>

          {/* Message */}
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            This artwork seems to be missing.
          </p>

          <p className="mt-2 text-sm md:text-base text-gray-500">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          {/* Action */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              Back to Home
            </Link>

            <Link
              to="/gallery-section"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}