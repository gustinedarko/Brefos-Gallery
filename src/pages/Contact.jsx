import Navbar from "../components/Navbar";
import {
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import artistImage from "../assets/images/the-healer.jpg"; // contact header bg

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero / Intro Section */}
      <section className="relative w-full h-[50vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-black/80 to-black/40 text-white overflow-hidden">
        <img
          src={artistImage}
          alt="Abstract studio background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-3">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Let’s connect and bring creative visions to life — whether for
            exhibitions, commissions, or collaborations.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full py-20 px-6 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">

          {/* Left: Connect Info */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800 border-l-4 border-gray-700 pl-3">
              Let’s Connect
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Wilson would love to hear from you — whether you’re an art
              collector, enthusiast, or collaborator. Reach out to discuss his
              works, exhibitions, or creative projects.
            </p>

            {/* Location */}
            <div className="flex items-center space-x-3 text-gray-700">
              <FaMapMarkedAlt className="text-2xl text-gray-600" />
              <p>Accra, Ghana</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 text-gray-700">
              <FaRegEnvelope className="text-2xl text-gray-600" />
              <p>wilsonbrefo51@gmail.com</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-5 pt-3">
              <a
                href="https://www.instagram.com/wi.lson3176?igsh=MTN4dnYwaW1tNXUwNQ%3D%3D&utm_source=qr"
                className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://snapchat.com/t/6PPz0HsW"
                className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
                target="_blank"
              >
                <FaSnapchatGhost size={22} />
              </a>
              <a
                href="https://www.tiktok.com/@wilsondjzuz?_t=ZM-90UO5jK88cN&_r=1"
                className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
                target="_blank"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
                target="_blank"
              >
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h3>
            <form className="space-y-5">
              <div className="md:flex w-full justify-between">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Message subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}