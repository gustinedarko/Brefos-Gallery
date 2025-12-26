import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { gallery } from "../data/gallery";
import { FaChevronLeft } from "react-icons/fa"
import { useNavigate } from "react-router";

export default function ArtworkDetails() {
  const { slug } = useParams();

  const navigate = useNavigate();

  // Find the artwork that matches the slug
  const artwork = gallery.find((item) => item.slug === slug);

  if (!artwork) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
          Artwork not found.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {artwork.title}
          </h1>
          {/* Year */}
          <p className="text-gray-500 text-lg mt-1">{artwork.year}</p>
          {/* Image */}
          <div className="mt-8 w-full overflow-hidden shadow-xl md:rounded-xl">
            <img
              src={artwork.framedImage || artwork.image}
              alt={artwork.title}
              className="w-full h-full object-contain max-h-[80vh] mx-auto"
            />
          </div>
          {/* Details Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Materials + Size */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                Artwork Details
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Title:</strong> {artwork.title}
                </li>
                <li>
                  <strong>Materials:</strong> {artwork.materials}
                </li>
                <li>
                  <strong>Size:</strong> {artwork.size}
                </li>
                <li>
                  <strong>Year:</strong> {artwork.year}
                </li>
                <li>
                  <strong>Price:</strong> 
                </li>
              </ul>
            </div>
            {/* Right: Description */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {artwork.description}
              </p>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-12">
            <button
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate("/gallery-section");
                }
              }}
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition"
            >
              <FaChevronLeft />
              <span>Back to Gallery</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}