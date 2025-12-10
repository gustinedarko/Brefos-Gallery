import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { gallery } from "../data/gallery";
import {FaChevronLeft} from "react-icons/fa"

export default function ArtworkDetails() {
  const { slug } = useParams();

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

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          {artwork.title}
        </h1>

        {/* Year */}
        <p className="text-gray-500 text-lg mt-1">{artwork.year}</p>

        {/* Image */}
        <div className="mt-8 w-full overflow-hidden shadow-xl rounded-xl">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-full object-contain max-h-[80vh] mx-auto rounded-xl"
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
              {/* <li>
                <strong>Type:</strong> {artwork.type}
              </li> */}
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
          <a
            href="/gallery-section"
            className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition"
          >
            <div className="flex items-center gap-2"><span><FaChevronLeft /></span> <span>Back to Gallery</span></div>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}