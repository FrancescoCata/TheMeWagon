// -- STYLE
import './teamMemberCard.css'

export default function TeamMemberCard(props) {
  return (
    <div className="team-member-card">
      <div className="card-content">
        <img
          src={props.img}
          alt="Team Member"
          className="profile-image"
        />
        <h2 className="member-name">{props.fullName}</h2>
        <p className="member-role">{props.designation}</p>
      </div>
      <div className="social-icons">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          ICON
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          ICON
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          ICON
        </a>
      </div>
    </div>
  );
}
