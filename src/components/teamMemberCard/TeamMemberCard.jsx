export default function TeamMemberCard(props) {
  return (
    <div className="relative w-80 overflow-hidden group">
      {/* Main Card */}
      <div className="h-96 bg-white shadow-lg transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center justify-between h-full p-6">
          {/* Card Content */}
          <div className="flex flex-col items-center">
            <img
              src={props.img}
              alt="Team Member"
              className="w-60 h-60 rounded-full object-cover mb-4 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <h2 className="text-xl font-semibold mb-1">{props.fullName}</h2>
            <p className="text-gray-600 text-sm mb-4">{props.designation}</p>
          </div>
        </div>
      </div>

      {/* Social Icons container */}
      <div className="absolute bottom-0 left-0 right-0 bg-white transition-all duration-300 ease-in-out h-0 group-hover:h-12 flex justify-center items-center opacity-0 group-hover:opacity-100">
        {/* Social Icons with individual containers */}
        <div className="flex space-x-2">
          <div className="bg-[#feaf39] rounded-t-full p-2 min-w-10 flex items-center justify-center">
            <a
              href="https://facebook.com"
              className="text-white text-xl"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook-f"></i>
            </a>
          </div>
          <div className="bg-[#feaf39] rounded-t-full p-2 min-w-10 flex items-center justify-center">
            <a
              href="https://twitter.com"
              className="text-white text-xl"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="bg-[#feaf39] rounded-t-full p-2 min-w-10 flex items-center justify-center">
            <a
              href="https://instagram.com"
              className="text-white text-xl"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
