import Navbar from "../components/Navbar";
import { gallery } from "../data/gallery";

export default function Gallery() {
  return (
    <>
    <Navbar />
    <div></div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {gallery.map((item, index) => (
        <div key={index} className="text-center">
          <img src={item.image} alt={item.title} className="w-full rounded-lg" />
          <h3 className="mt-2 font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.materials}</p>
          <p className="text-sm">{item.size}</p>
          <p className="text-sm text-gray-400">{item.year}</p>
          <p className="text-sm">{item.description}</p>
          <p className="text-sm">{item.description2}</p>
        </div>
      ))}
    </div>
    </>
  );
}