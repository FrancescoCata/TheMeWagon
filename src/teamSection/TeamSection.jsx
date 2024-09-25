import TeamMemberCard from "../components/teamMemberCard/TeamMemberCard";

// Mocked Members Array
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
    return membersArr.map((item, key) => (
      <TeamMemberCard
        key={key}
        img={item.img}
        fullName={item.name}
        designation={item.designation}
      />
    ));
  };

  return (
    <div className="bg-gray-100 py-12 h-fit">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-0.5 w-16 bg-[#feaf39]"></div>
          <p className="text-[#feaf39]">Team Members</p>
          <div className="h-0.5 w-16 bg-[#feaf39]"></div>
        </div>
        <h2 className="text-3xl font-semibold">Our Master Chefs</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {renderMembers()}
      </div>
    </div>
  );
}
