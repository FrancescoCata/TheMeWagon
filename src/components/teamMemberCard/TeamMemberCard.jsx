export default function TeamMemberCard(props) {
  return (
    <div className="relative w-64 overflow-hidden group">
      {/* Main Card */}
      <div className="h-80 bg-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center justify-between h-full p-6">
          {/* Card Content */}
          <div className="flex flex-col items-center">
            <img
              src={props.img}
              alt="Team Member"
              className="w-32 h-32 rounded-full object-cover mb-4 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold mb-1">{props.fullName}</h2>
            <p className="text-gray-600 text-sm mb-4">{props.designation}</p>
          </div>
        </div>
      </div>

      {/* Social Icons container */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-200 rounded-b-lg transition-all duration-300 ease-in-out h-0 group-hover:h-8 flex justify-center items-center opacity-0 group-hover:opacity-100">
        {/* Social Icons */}
        <div className="flex">
          <a href="#" className="text-gray-600 hover:text-orange-500 text-2xl">
            ICON
          </a>
          <a href="https://twitter.com" className="text-gray-600 hover:text-orange-500 text-2xl">
            ICON
          </a>
          <a href="https://github.com" className="text-gray-600 hover:text-orange-500 text-2xl">
            ICON
          </a>
        </div>
      </div>
    </div>
  );
}
