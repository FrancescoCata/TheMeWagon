export default function TestimonialCard({ quote, fullName, role, img, isActive }) {
    return (
      <div
        className={`p-4 rounded-lg transition-colors duration-300 ${
          isActive ? "bg-orange-500 text-white" : "bg-white border border-gray-300"
        }`}
      >
        <div className="card-icon">
          <i className="fa fa-user-circle" style={{ fontSize: "24px" }}></i>
        </div>
  
        <div className="card-text">
          <p>{quote}</p>
        </div>
  
        <div className="card-profile flex items-center">
          <img
            src={img}
            alt="Profile"
            className="profile-image w-10 h-10 rounded-full"
          />
          <div className="profile-details ml-4">
            <p className="profile-name font-semibold">{fullName}</p>
            <p className="profile-role">{role}</p>
          </div>
        </div>
      </div>
    );
  }
  