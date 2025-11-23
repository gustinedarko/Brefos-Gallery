import Navbar from "../components/Navbar";
import bts2 from "../assets/images/que-sera-sera.jpg";
import bts1 from "../assets/images/que-sera-sera.jpg"; // replace with actual BTS images
import bts3 from "../assets/images/que-sera-sera.jpg";
import artistImage from "../assets/images/the-healer.jpg"; // artist portrait
import artistImage2 from "../assets/images/wils.jpg"; // artist portrait
import Footer from "../components/Footer";

export default function Artist() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-black/70 to-black/30 text-white overflow-hidden">
        <img
          src={artistImage}
          alt="Wilson Brefo"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            Wilson Brefo
          </h1>
          <p className="italic text-lg md:text-xl text-gray-200">
            “As an artist, I find inspiration in the beauty of the world around
            us, both in its tangible forms and abstract concepts...”
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            As an artist, I find inspiration in the beauty of the world around
            us, both in its tangible forms and abstract concepts. Rather than
            illustrating my feelings, I would like to express them. How the
            paint is applied is irrelevant as long as something is said. Hence,
            my art explores the delicate balance between realism and abstraction,
            capturing the essence of a subject while allowing room for
            interpretation.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Through my semi-abstract works, I aim to evoke emotions and spark
            imagination, inviting viewers to engage with the art on a personal
            level. At the same time, my realistic pieces celebrate the intricate
            details and textures of the subjects, bringing them to life on the
            canvas. By blending these two styles, I strive to create a visual
            experience that is both thought-provoking and visually captivating.
          </p>
          <p className="text-gray-700 text-lg font-medium">
            "I'm not particularly unique in anything. Every day from dawn till
            dusk, I paint as a professional artist. I would recommend closely
            examining my artworks to anyone who is interested in learning more
            about me."
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-gray-800 border-l-4 border-gray-700 pl-3">
              About the Artist
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              WILSON BREFO is a talented and versatile artist with a degree in
              Integrated Rural Arts and Industry, KNUST, consistently pushing
              the boundaries of creative expression. With a strong foundation in
              artistic principles, BREFO has developed a distinctive style that
              showcases his unique perspective and skill.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Throughout his career, BREFO has had the opportunity to showcase
              his work in various exhibitions, including a solo exhibition that
              highlighted his artistic vision and growth. Additionally, he has
              participated in four group exhibitions, collaborating with fellow
              artists and engaging with diverse audiences.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={artistImage2}
              alt="Wilson Brefo painting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Artistic Practice Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <img
              src={artistImage2}
              alt="Artistic process"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5 order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-gray-800 border-l-4 border-gray-700 pl-3">
              His Artistic Practice
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              BREFO's artistic practice is characterized by painting abstract,
              semi abstract, realistic and surrealism. His medium used includes
              acrylic paint, canvas, drawing sheets and other media. His work is
              driven by a passion for exploring the human experience and
              capturing the complexities of the world around us.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              With a commitment to ongoing creative development, BREFO continues
              to refine his craft, seeking new ways to inspire and engage his
              audience. Through his art, he aims to spark meaningful
              conversations, evoke emotions, and contribute to the implantation
              of vibrant knowledge into his audience.
            </p>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-20 bg-white px-6 md:px-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
          Behind the Scenes
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, inventore! Ut, voluptate labore quibusdam iusto quisquam dolores suscipit tenetur commodi?
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[bts1, bts2, bts3].map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img src={img} alt={`Behind the scenes ${i + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-8 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Explore More of Wilson’s World
        </h2>
        <p className="text-slate-600 text-lg mb-8">
          Dive into his gallery to experience the fusion of realism and
          abstraction that defines his artistic voice.
        </p>
        <a
          href="/gallery-section"
          className="inline-block bg-green-700 text-white px-4 py-2 rounded-xl text-lg font-medium hover:bg-green-900 transition"
        >
          Visit Gallery
        </a>
      </section>
      <Footer />
    </>
  );
}