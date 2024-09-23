export default function InfoCard(props) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition duration-500 hover:bg-[#feaf39] hover:text-white m-4">
        <i className={`${props.icon} text-4xl mb-2 text-[#feaf39]`}></i>
        <h2 className="text-xl font-semibold mb-2 transition duration-500">{props.infoCardTitle}</h2>
        <p className="text-center transition duration-500">{props.infoCardText}</p>
      </div>
    );
  }
  