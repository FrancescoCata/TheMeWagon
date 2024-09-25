export default function TestimonialCard({ quote, fullName, role, img, isActive }) {
    return (
      <div
        className={`p-4 transition-colors duration-300 h-52 flex flex-col justify-between ${
          isActive ? "bg-[#feaf39] text-white" : "bg-white border border-gray-300"
        }`}
      >
        <div className="card-icon">
          <i className="fa fa-quote-left" style={{ fontSize: "36px", color: isActive ? "#fff" : "#feaf39" }}></i>
        </div>
  
        <div className="card-text">
          <p>{quote}</p>
        </div>
  
        <div className="card-profile flex items-center">
          <img
            src={img}
            alt="Profile"
            className="profile-image w-12 h-12 rounded-full"
          />
          <div className="profile-details ml-4">
            <p className="profile-name font-semibold">{fullName}</p>
            <p className="profile-role">{role}</p>
          </div>
        </div>
      </div>
    );
  }
  