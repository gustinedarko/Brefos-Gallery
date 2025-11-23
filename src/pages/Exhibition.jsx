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

const exhibitions = [
  {
    title: "The Human Experience: Dream and Reality",
    venue: "Untamed Empire, Accra",
    date: "23/11/2024",
    image: ForthExhibition,
    upcoming: true,
  },
  {
    title: "The Human Experience: Dream and Reality",
    venue: "Untamed Empire, Accra",
    date: "23/11/2024",
    image: SixthExhibition,
    upcoming: false,
  },
  {
    title: "The Human Experience: Dream and Reality",
    venue: "Untamed Empire, Accra",
    date: "23/11/2024",
    image: FifthExhibition,
    upcoming: false,
  },
  {
    title: "The Human Experience: Dream and Reality",
    venue: "Untamed Empire, Accra",
    date: "23/11/2024",
    image: ForthExhibition,
    upcoming: false,
  },
  {
    title: "Phases",
    venue: "Gyandu Place, Accra",
    date: "05/11/2022",
    image: ThirdExhibition,
    upcoming: false,
  },
  {
    title: "Emerge",
    venue: "Art Center Gallery, Accra",
    date: "04/11/2022",
    image: SecondExhibition,
    upcoming: false,
  },
  {
    title: "Sweat Embedded Beauty",
    venue: "S. G. Mall, Kumasi",
    date: "14/05/2022",
    image: FirstExhibition,
    upcoming: false,
  },
];

export default function Exhibition() {
  const upcoming = exhibitions.filter((e) => e.upcoming);
  const past = exhibitions.filter((e) => !e.upcoming);

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
      {upcoming.length > 0 && (
        <section className="px-6 md:px-20 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Upcoming Exhibition
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcoming.map((ex, idx) => (
              <ExhibitionCard key={idx} {...ex} />
            ))}
          </div>
        </section>
      )}

      {/* Past Exhibitions */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Past Exhibitions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {past.map((ex, idx) => (
            <ExhibitionCard key={idx} {...ex} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}