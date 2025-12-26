import { formatDate } from "../utils/formatDate";

export default function ExhibitionCard({ title, venue, date, image, isPast, onView, }) {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">

      {/* Image */}
      <div className="relative h-48 w-full group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          draggable="false"
        />

        {/* Hover Overlay (Desktop) */}
        <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition items-center justify-center">
          <button
            onClick={onView}
            className="text-white w-full h-full rounded-lg font-medium cursor-pointer"
          >
            View
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{venue}</p>

        <div className="flex justify-between">
          <p className="text-sm text-gray-500">
            {formatDate(date)}
          </p>

          {/* Mobile Button */}
          <button
            onClick={onView}
            className="text-sm md:hidden underline text-green-600 cursor-pointer hover:text-green-800 transition"
          >
            View
          </button>
        </div>

        {!isPast && (
          <span className="text-sm mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            Upcoming
          </span>
        )}
      </div>
    </div>
  );
}