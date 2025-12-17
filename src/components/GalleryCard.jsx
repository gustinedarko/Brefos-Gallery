import React from "react";

export default function GalleryCard({ image, title, materials, size, year }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Artwork Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay Details — visible only on medium screens and up */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 text-white hidden md:flex">
        <h2 className="text-lg font-semibold">{title}</h2>
        {materials && <p className="text-sm mt-1">{materials}</p>}
        {size && <p className="text-sm">{size}</p>}
        {year && <p className="text-sm mt-1">{year}</p>}
      </div>

      {/* Below Image Details — visible only on small screens */}
      <div className="flex flex-col justify-start p-4 text-slate-800 bg-gray-100 md:hidden">
        <h2 className="text-lg font-semibold">{title}</h2>
        {materials && <p className="text-sm mt-1">{materials}</p>}
        {size && <p className="text-sm">{size}</p>}
        {year && <p className="text-sm mt-1">{year}</p>}
      </div>
    </div>
  );
}
