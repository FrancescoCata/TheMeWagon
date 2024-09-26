// -- COMPONENTS
import InfoCard from "../components/infoCard/InfoCard";

// -- MOCK ARRAY
const infoCardArr = [
  {
    img: "fa fa-quote-left",
    title: "Master Chefs",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.",
  },
  {
    img: "fa fa-quote-left",
    title: "Quality Food",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.",
  },
  {
    img: "fa fa-quote-left",
    title: "Online Order",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.",
  },
  {
    img: "fa fa-quote-left",
    title: "24/7 Service",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.",
  }
];

export default function InfoCardSection() {
  const renderInfoCard = () => {
    return infoCardArr.map((item, key) => {
      return (
        <InfoCard
          key={key}
          icon={item.img}
          infoCardTitle={item.title}
          infoCardText={item.text}
        />
      );
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {renderInfoCard()}
    </div>
  );
}
