export default function InfoCard(props) {
  return (
    <div className="bg-white shadow-md p-4 py-8 flex flex-col hover:bg-[#feaf39] hover:text-white m-4 group transition duration-500">
      <i className={`${props.icon} fa-3x mb-2 text-[#feaf39] group-hover:text-white transition duration-500`}></i>
      <h2 className="text-xl font-semibold mb-2">{props.infoCardTitle}</h2>
      <p className="">{props.infoCardText}</p>
    </div>
  );
}
