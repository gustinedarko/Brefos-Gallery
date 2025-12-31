import { formatDate } from "../utils/formatDate";

export default function ExhibitionModal({ exhibition, onClose }) {
  if (!exhibition) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="bg-white max-w-xl w-full rounded-xl overflow-hidden shadow-xl relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-800 hover:text-red-950 text-xl border px-1.5 rounded"
        >
          ✕
        </button>

        {/* Flyer */}
        <img
          src={exhibition.image}
          alt={exhibition.title}
          className="w-full max-h-[60vh] object-contain bg-[#263b27]"
        />

        {/* Details */}
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-bold">{exhibition.title}</h2>
          <p>{exhibition.venue}</p>
          <p className="text-sm text-gray-500">
            {formatDate(exhibition.date)}
          </p>

          {!exhibition.isPast && exhibition.bookingLink && (
            <a
              href={exhibition.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Book Event
            </a>
          )}
        </div>
      </div>
    </div>
  );
}