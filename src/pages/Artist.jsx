import Navbar from "../components/Navbar";
// import btsLeft from "../assets/videos/bts-one.mp4";
// import btsCenter from "../assets/videos/bts-two.mp4";
// import btsRight from "../assets/videos/bts-three.mp4";
import artistBg from "../assets/images/the-healer.webp";
import videoPoster1 from "../assets/images/bts-one.webp";
import videoPoster2 from "../assets/images/bts-two.webp";
import videoPoster3 from "../assets/images/bts-three.webp";
import artistImage1 from "../assets/images/wilson-profile-1.webp"; // artist portrait
import artistImage2 from "../assets/images/wilson-profile-2.webp"; // artist portrait
import Footer from "../components/Footer";

export default function Artist() {

  const btsLeft =
  "https://res.cloudinary.com/dbiyzsqei/video/upload/v1767560604/bts-one_bqhfnc.mp4";

const btsCenter =
  "https://res.cloudinary.com/dbiyzsqei/video/upload/v1767560588/bts-two_cmf3al.mp4";

const btsRight =
  "https://res.cloudinary.com/dbiyzsqei/video/upload/v1767560591/bts-three_nctwhg.mp4";

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-black/70 to-black/30 text-white overflow-hidden">
        <img
          src={artistBg}
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
      <section className="bg-white py-16 px-6 md:px-16 text-center">
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
      <section className="py-20 px-6 md:px-16 bg-[#39B54A]/10">
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
              src={artistImage1}
              alt="Wilson Brefo painting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Artistic Practice Section */}
      <section className="py-20 px-6 md:px-16 bg-[#39B54A]/5">
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
      <section className="py-20 bg-[#39B54A]/10 px-6 md:px-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Behind the Scenes
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          A glimpse into the creative process, studio moments, and the making of selected artworks.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* LEFT VIDEO */}
          <div className="rounded-xl bg-white overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <video
              src={btsLeft}
              controls
              preload="metadata"
              poster={videoPoster1}
              playsInline
              muted
              className="w-full aspect-[9/16] object-cover"
            >
              <source src={btsLeft} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* CENTER VIDEO (FEATURED) */}
          <div className="rounded-xl bg-white overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <video
              src={btsCenter}
              controls
              preload="metadata"
              poster={videoPoster2}
              playsInline
              muted
              className="w-full aspect-[9/16] object-cover"
            >
              <source src={btsCenter} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* RIGHT VIDEO */}
          <div className="rounded-xl bg-white overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <video
              src={btsRight}            
              controls
              preload="metadata"
              poster={videoPoster3}
              playsInline
              muted
              className="w-full aspect-[9/16] object-cover"
            >
              <source src={btsRight} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
          className="text-lg inline-block bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition"
        >
          Visit Gallery
        </a>
      </section>
      <Footer />
    </>
  );
}