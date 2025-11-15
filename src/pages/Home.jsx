import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import React from "react";
import { gallery } from "../data/gallery";
import GalleryCard from "../components/GalleryCard";

export default function Home() {

  // first and second sets
  const firstSetTitles = ["METAMORPHOSIS OF THE SOUL", "QUE SERA, SERA!", "THE PRAYER TO THE FIRST ARCHANGEL"];
  const secondSetTitles = ["THE SOUL WITH THE TURTLE NECK", "THE UNTOLD STORIES", "WHY TOGETHER"];

  // filter by title match
  const firstSet = gallery.filter(item => firstSetTitles.includes(item.title));
  const secondSet = gallery.filter(item => secondSetTitles.includes(item.title));

  return (
    <>
      <Navbar />
      <header>
        <section
          className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
          style={{ backgroundImage: "url('/src/assets/images/img_hero.jpg')" }}
        >
          <div className="max-w-3xl px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-3">Welcome to Brefo’s Art World</h1>
            <p className="italic text-lg md:text-xl text-gray-200">Discover the depth of contemporary creativity.</p>
          </div>
        </section>
      </header>

      <main>
        <section className="w-full flex flex-col md:flex-row justify-center gap-16 py-10 px-6 bg-white">

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
            <div className="w-full h- flex justify-center items-center">
              <span className="text-3xl fon"><a className="text-green-600 pl-3 underline" href="/gallery-section">Veiw Gallery</a></span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}