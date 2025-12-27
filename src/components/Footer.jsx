import { FaSnapchatGhost, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#263b27] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">

        {/* BRAND SECTION */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Brefo’s Art World
          </h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            A curated journey through contemporary visuals, semi-abstract forms,
            and expressive storytelling through paint.
          </p>
        </div>

        <div className="w-3/4 md:w-full flex justify-between md:justify-around md:gap-6 col-span-2 text-gray-400">
          {/* QUICK NAV LINKS */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-[#4CAF50] transition">Home</a>
              </li>
              <li>
                <a href="/artist" className="hover:text-[#4CAF50] transition">Artist</a>
              </li>
              <li>
                <a href="/gallery-section" className="hover:text-[#4CAF50] transition">Gallery</a>
              </li>
              <li>
                <a href="/exhibition" className="hover:text-[#4CAF50] transition">Exhibitions</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#4CAF50] transition">Contact</a>
              </li>
            </ul>
          </div>
          {/* EXTRA INFO */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg mb-3">Useful Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/contact#commission-work" className="hover:text-[#4CAF50] transition">Commission Work</a>
              </li>
              <li>
                <a href="/contact#prints-originals" className="hover:text-[#4CAF50] transition">Art Prints & Originals</a>
              </li>
              <li>
                <a href="/artist" className="hover:text-[#4CAF50] transition">Artist Statement</a>
              </li>
              <li>
                <a href="/contact#licensing-usage" className="hover:text-[#4CAF50] transition">Licensing & Usage</a>
              </li>
            </ul>
          </div>
        </div>

        {/* SOCIALS */}
        <div className="md:col-span-2">
          <h3 className="text-white font-semibold text-lg mb-3">Connect</h3>
          <p className="text-gray-400 text-sm mb-4">
            Follow the artistic journey across social platforms.
          </p>
          <div className="flex items-center gap-4 text-xl">
            
            <a href="https://www.instagram.com/wi.lson3176?igsh=MTN4dnYwaW1tNXUwNQ%3D%3D&utm_source=qr" className="hover:text-[#4CAF50] transition">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@wilsondjzuz?_t=ZM-90UO5jK88cN&_r=1" className="hover:text-[#4CAF50] transition">
              <FaTiktok />
            </a>
            <a href="https://snapchat.com/t/6PPz0HsW" className="hover:text-[#4CAF50] transition">
              <FaSnapchatGhost />
            </a>
            <a href="http://linkedin.com/in/wilson-brefo" className="hover:text-[#4CAF50] transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Brefo’s Art World. All rights reserved.
        <br />
        {/* <span className="text-gray-500">
          Website designed & built by <a href="YOUR_LINK" className="underline hover:text-white">Augustine Darko</a>
        </span> */}
      </div>
    </footer>
  );
}
