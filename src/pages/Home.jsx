import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import React from "react";
import { gallery } from "../data/gallery";
import GalleryCard from "../components/GalleryCard";
import heroImage from "../assets/images/img-hero.jpg";

export default function Home() {

  // first and second sets
  const firstSetTitles = ["METAMORPHOSIS OF THE SOUL", "QUE SERA, SERA!", "THE COMPLEXITY OF THOUGHTFUL EMOTIONS"];
  const secondSetTitles = ["THE SOUL WITH THE TURTLE NECK", "THE UNTOLD STORIES", "THE PRAYER TO THE FIRST ARCHANGEL"];

  // filter by title match
  const firstSet = gallery.filter(item => firstSetTitles.includes(item.title));
  const secondSet = gallery.filter(item => secondSetTitles.includes(item.title));

  return (
    <>
      <Navbar />
      <header>
        <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">

          {/* Lazy-loaded background image */}
          <img
            src={heroImage}
            alt="Wilson Brefo studio gallery"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Optional dark overlay */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}

          {/* Content */}
          <div className="relative z-10 max-w-3xl px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-3">
              Welcome to Brefo’s Art World
            </h1>
            <p className="italic text-lg md:text-xl text-gray-200">
              Discover the depth of contemporary creativity.
            </p>
          </div>

        </section>
      </header>

      <main>
        <section className="w-full flex flex-col md:flex-row justify-center gap-16 py-10 px-6 bg-[#39B54A]/5">

          {/* Left Column */}
          <div className="flex flex-col gap-16 w-full md:w-1/2 md:p-10">
            <div className="w-full">
              <span className="text-3xl font-bold">"As an artist, I find inspiration in the beauty of the world around us, both in its tangible forms and abstract concepts."</span> <br />
              <span className="text-xl">Rather than illustrating my feelings, I would like to express them. How the paint is applied is irrelevant as long as something is said. Hence, my art explores the delicate balance between realism and abstraction, capturing the essence of a subject while allowing room for interpretation. Through my semi-abstract works, I aim to evoke emotions and spark imagination, inviting viewers to engage with the art on a personal level. <span className="text-green-600 text-base pl-3 underline"><a href="/artist">Read more...</a></span></span>
            </div>
            {firstSet.map((item) => (
              <GalleryCard
                key={item.title}
                title={item.title}
                image={item.image}
                materials={item.materials}
                year={item.year}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-16 w-full md:w-1/2 md:p-10">
            {secondSet.map((item) => (
              <GalleryCard
                key={item.title}
                title={item.title}
                image={item.image}
                materials={item.materials}
                year={item.year}
              />
            ))}
            <button>
              <a className="flex justify-center items-center bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition" href="/gallery-section">
                <span className="">Veiw Gallery</span>
              </a>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}