import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { gallery } from "../data/gallery";

export default function Gallery({ title, materials, size, year }) {
  return (
    <>
      <div className="bg-[#39B54A]/10">
        <Navbar />

        {/* Page Heading */}
        <div className="text-center mt-10 mb-6 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide">
            Featured Artworks
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Explore a curated collection of paintings, drawings, and creative expressions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-6 md:gap-6 m-6">
          {gallery.map((item, index) => {
            const ratio =
              item.type === "portrait"
                ? "aspect-[3/4]"
                : item.type === "landscape"
                  ? "aspect-[23/15]"
                  : "aspect-square";
            return (
              <div
                key={index}
                className={`${item.type === "landscape" ? " col-span-1 sm:col-span-2" : ""
                  }`}
              >
                {/* IMAGE + OVERLAY WRAPPER */}
                <div
                  className={`${ratio} w-full overflow-hidden group relative shadow-2xl hover:shadow-2xl transition duration-300 rounded-2xl`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* ---- OVERLAY FOR DESKTOP ---- */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex flex-col justify-end p-5 text-white">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    {item.materials && <p className="text-sm mt-1">{item.materials}</p>}
                    {item.size && <p className="text-sm">{item.size}</p>}
                    {item.year && <p className="text-sm mt-1">{item.year}</p>}
                    {/* VIEW DETAILS BUTTON */}
                    <button
                      onClick={() => window.location.href = `/artwork/${item.slug}`}
                      className="mt-3 text-sm bg-white/20 backdrop-blur px-4 py-2 rounded-lg hover:bg-white/30 transition">
                      View Details
                    </button>
                  </div>
                </div>
                {/* ---- MOBILE DETAILS ---- */}
                <div className="p-4 text-slate-800 flex flex-col md:hidden">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  {item.materials && <p className="text-sm mt-1">{item.materials}</p>}
                  {item.size && <p className="text-sm">{item.size}</p>}
                  {item.year && <p className="text-sm mt-1">{item.year}</p>}
                  {/* VIEW DETAILS MOBILE BUTTON */}
                  <button
                    onClick={() => window.location.href = `/artwork/${item.slug}`}
                    className="mt-3 w-full text-center bg-slate-800 text-white py-2 rounded-lg text-sm hover:bg-slate-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
}