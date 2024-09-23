// -- STYLE
import "./teamSection.css";
// -- COMPONENTS
import TeamMemberCard from "../components/teamMemberCard/TeamMemberCard";

// -- MOCKED MEMBERS ARR
const membersArr = [
  {
    img: "https://themewagon.github.io/restoran/img/team-1.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    img: "https://themewagon.github.io/restoran/img/team-2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    img: "https://themewagon.github.io/restoran/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    img: "https://themewagon.github.io/restoran/img/team-4.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export default function TeamSection() {
  const renderMembers = () => {
    return membersArr.map((item, key) => {
      return (
        <TeamMemberCard
          key={key}
          img={item.img}
          fullName={item.name}
          designation={item.designation}
        />
      );
    });
  };

  return (
    <div>
      <div className="sectionHeader">
        <div className="sectionTopTitle">
          <div className="sectionTitleDivisor"></div>
          <p>Team Members</p>
          <div className="sectionTitleDivisor"></div>
        </div>
        <h2>Our Master Chefs</h2>
      </div>
      <div className="team-member-container">{renderMembers()}</div>
    </div>
  );
}
