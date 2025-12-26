import Navbar from "../components/Navbar";
import ExhibitionCard from "../components/ExhibitionCard";
import Mockup from "../assets/images/exhibition-img.jpg";
import FirstExhibition from "../assets/images/first-exhibition.jpg";
import SecondExhibition from "../assets/images/second-exhibition.jpg";
import ThirdExhibition from "../assets/images/third-exhibition.jpg";
import ForthExhibition from "../assets/images/forth-exhibition.jpg";
import FifthExhibition from "../assets/images/fifth-exhibition.jpg";
import SixthExhibition from "../assets/images/sixth-exhibition.jpg";
import Footer from "../components/Footer";
import { useState } from "react";
import ExhibitionModal from "../components/ExhibitionModal";

const exhibitions = [
  {
    title: "The Human Experience: Dream and Reality",
    venue: "Untamed Empire, Accra",
    date: "2025-12-28",
    image: ForthExhibition,
    bookingLink: "https://hthgjhgkgkjgjk",
    // upcoming: true,
  },
  {
    title: "Art for Breast Cancer",
    venue: "Nubuke Foundation",
    date: "2025-10-17",
    image: SixthExhibition,
    // upcoming: false,
  },
  {
    title: "Inheritance of Beasts",
    venue: "Buro, Osu",
    date: "2025-09-25",
    image: FifthExhibition,
    // upcoming: false,
  },
  {
    title: "The Human Experience: Dream and Reality",
    venue: "Untamed Empire, Accra",
    date: "2024-11-23",
    image: ForthExhibition,
    // upcoming: false,
  },
  {
    title: "Phases",
    venue: "Gyandu Place, East Legon",
    date: "2022-11-05",
    image: ThirdExhibition,
    // upcoming: false,
  },
  {
    title: "Emerge",
    venue: "Art Center Gallery, Accra",
    date: "2022-11-04",
    image: SecondExhibition,
    // upcoming: false,
  },
  {
    title: "Sweat Embedded Beauty",
    venue: "S. G. Mall, Kumasi",
    date: "2022-05-14",
    image: FirstExhibition,
    // upcoming: false,
  },
];

export default function Exhibition() {
  const now = new Date();

  const isPast = (dateStr) => {
    const endOfDay = new Date(`${dateStr}T23:59:59`);
    return endOfDay < now;
  };

  const upcoming = exhibitions.filter((e) => !isPast(e.date));
  const past = exhibitions.filter((e) => isPast(e.date));

  const [selectedExhibition, setSelectedExhibition] = useState(null);

  // const formatDate = (dateStr) => {
  //   return new Date(dateStr).toLocaleDateString("en-GB", {
  //     day: "2-digit",
  //     month: "short",
  //     year: "numeric",
  //   });
  // };

  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="relative w-full h-[50vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-black/80 to-black/40 text-white overflow-hidden">
        <img
          src={Mockup} // <-- use your chosen exhibition hero image here
          alt="Exhibition background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-3">
            Exhibitions
          </h1>
          <p className="italic text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Explore Wilson Brefo’s artistic journey through solo and group exhibitions, past and upcoming.
          </p>
        </div>
      </section>

      {/* Upcoming Exhibitions */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8"> {/* flex justify-center */}
          Upcoming Exhibition
        </h2>

        {upcoming.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {upcoming.map((ex, idx) => (
              <ExhibitionCard
                key={idx}
                {...ex}
                isPast={false}
                onView={() => setSelectedExhibition({ ...ex, isPast: false })}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-24">
            <p className="text-gray-500 text-lg text-center max-w-md">
              New exhibitions will show up here.
              <br />
              Watch this space.
            </p>
          </div>
        )}
      </section>

      {/* Past Exhibitions */}
      <section className="px-6 md:px-20 py-16 bg-[#39B54A]/10">
        <h2 className="text-3xl font-bold text-gray-900 mb-8"> {/* flex justify-center */}
          Past Exhibitions
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {past.map((ex, idx) => (
            <ExhibitionCard
              {...ex}
              isPast={true}
              onView={() => setSelectedExhibition({ ...ex, isPast: true })}
            />
          ))}
        </div>
      </section>

      {selectedExhibition && (
        <ExhibitionModal
          exhibition={selectedExhibition}
          onClose={() => setSelectedExhibition(null)}
        />
      )}

      <Footer />
    </>
  );
}