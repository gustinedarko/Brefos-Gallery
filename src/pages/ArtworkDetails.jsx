import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { gallery } from "../data/gallery";
import { FaChevronLeft } from "react-icons/fa"
import { useNavigate } from "react-router";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import.meta.env.VITE_EMAILJS_PUBLIC_KEY

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

  const [showInquiry, setShowInquiry] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });

  return (
    <>
      <Navbar />

      {notification.show && (
        <div
          className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-lg backdrop-blur-md text-sm md:text-base font-medium transition-all duration-300
    ${notification.type === "success"
              ? "bg-white/90 text-gray-900 border border-green-200"
              : "bg-white/90 text-red-600 border border-red-200"
            }`}
        >
          {notification.message}
        </div>
      )}

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
                  <strong>Price:</strong>{" "}
                  <button
                    onClick={() => setShowInquiry(true)}
                    className="text-green-600 underline hover:text-green-700 cursor-pointer"
                  >
                    Inquire for price
                  </button>
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

      {showInquiry && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-6 relative">

            {/* Close */}
            <button
              onClick={() => setShowInquiry(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* Auto Message */}
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              I am interested in this artwork and would like to inquire about its
              price and availability.
              <br /><br />
              <strong>Title:</strong> {artwork.title}<br />
              <strong>Materials:</strong> {artwork.materials}<br />
              <strong>Size:</strong> {artwork.size}<br />
              <strong>Year:</strong> {artwork.year}
            </p>

            <h3 className="text-lg font-semibold mb-4">
              Complete the form below to send your inquiry to the artist
            </h3>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSending(true);

                emailjs
                  .send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                      subject: `Artwork Inquiry – ${artwork.title}`,
                      message: `I am interested in this artwork and would like to inquire about its price and availability.

                      Title: ${artwork.title}
                      Materials: ${artwork.materials}
                      Size: ${artwork.size}
                      Year: ${artwork.year}

                      Contact Details:
                      Name: ${e.target.name.value}
                      Email: ${e.target.email.value}
                      WhatsApp: ${e.target.whatsapp.value}
                      Telephone: ${e.target.phone.value}
                      Address: ${e.target.address.value}`,
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                  )
                  .then(() => {
                    setIsSending(false);
                    setShowInquiry(false);

                    setNotification({
                      show: true,
                      message:
                        "Thank you for your interest. Your inquiry has been sent and the artist will reach out shortly.",
                      type: "success",
                    });

                    setTimeout(() => {
                      setNotification({ show: false, message: "", type: "success" });
                    }, 4000);
                  })

                  .catch(() => {
                    setIsSending(false);

                    setNotification({
                      show: true,
                      message:
                        "Something went wrong while sending your inquiry. Please try again later.",
                      type: "error",
                    });

                    setTimeout(() => {
                      setNotification({ show: false, message: "", type: "success" });
                    }, 4000);
                  });
              }}
              className="space-y-4"
            >
              <input name="name" placeholder="Name" required className="w-full border px-4 py-2 rounded-lg" />
              <input name="email" type="email" placeholder="Email" required className="w-full border px-4 py-2 rounded-lg" />
              <input name="whatsapp" placeholder="WhatsApp" className="w-full border px-4 py-2 rounded-lg" />
              <input name="phone" placeholder="Telephone" className="w-full border px-4 py-2 rounded-lg" />
              <input name="address" placeholder="Address" className="w-full border px-4 py-2 rounded-lg" />

              <button
                disabled={isSending}
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}