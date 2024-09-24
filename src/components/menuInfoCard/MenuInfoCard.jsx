export default function MenuInfoCard({ img, dishName, price, dishDescription }) {
  return (
    <div className="flex border rounded-lg shadow-lg p-4 w-full">
      {/* Image Section */}
      <div className="w-1/3">
        <img src={img} alt={dishName} className="rounded-lg object-cover h-full" />
      </div>

      {/* Info Section */}
      <div className="w-2/3 pl-4 flex flex-col justify-between">
        {/* Dish Name and Price */}
        <div className="flex justify-between items-center mb-2">
          <p className="font-bold text-lg whitespace-nowrap">{dishName}</p>
          <p className="text-orange-500 font-semibold text-lg whitespace-nowrap">{price}</p>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-gray-300 my-2"></div>

        {/* Description */}
        <p className="text-gray-600 text-sm truncate">{dishDescription}</p>
      </div>
    </div>
  );
}
