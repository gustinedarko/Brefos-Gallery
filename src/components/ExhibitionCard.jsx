export default function ExhibitionCard({ title, venue, date, image, upcoming }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      
      {/* Exhibition Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>

        <p className="text-gray-700">{venue}</p>
        <p className="text-gray-500 text-sm">{date}</p>

        {upcoming && (
          <span className="text-sm mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            Upcoming
          </span>
        )}
      </div>
    </div>
  );
}
