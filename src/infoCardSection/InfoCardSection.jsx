// -- COMPONENTS
import InfoCard from "../components/infoCard/InfoCard";

// -- MOCK ARRAY
const infoCardArr = [
  {
    img: "fa fa-user-tie",
    title: "Master Chefs",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, voluptatem. Aliquam quod aut eligendi et quidem, voluptate doloribus ut dolores.",
  },
  {
    img: "fa-utensils",
    title: "Quality Food",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, voluptatem. Aliquam quod aut eligendi et quidem, voluptate doloribus ut dolores.",
  },
  {
    img: "fa-cart-plus",
    title: "Online Order",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, voluptatem. Aliquam quod aut eligendi et quidem, voluptate doloribus ut dolores.",
  },
  {
    img: "fa-headset",
    title: "24/7 Service",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, voluptatem. Aliquam quod aut eligendi et quidem, voluptate doloribus ut dolores.",
  },
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
