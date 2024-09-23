// -- STYLE
import "./testimonialCard.css";

export default function TestimonialCard(props) {
  return (
    <div className="card">
      <div className="card-icon">
        <i className="fa fa-user-circle" style={{ fontSize: "24px" }}></i>{" "}
      </div>

      <div className="card-text">
        <p>{props.quote}</p>
      </div>

      <div className="card-profile">
        <img
          src={props.img}
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-details">
          <p className="profile-name">{props.fullName}</p>
          <p className="profile-role">{props.role}</p>
        </div>
      </div>
    </div>
  );
}
