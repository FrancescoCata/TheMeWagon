import { useState } from "react";
import MenuInfoCard from "../components/menuInfoCard/MenuInfoCard";
// import { FaCoffee, FaHamburger, FaUtensils } from "react-icons/fa";

// Mocked Dishes
const mockedDishes = [
  {
    img: "https://themewagon.github.io/restoran/img/menu-1.jpg",
    dishName: "Chicken Burger",
    price: "$115",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "https://themewagon.github.io/restoran/img/menu-1.jpg",
    dishName: "Chicken Burger",
    price: "$115",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "https://themewagon.github.io/restoran/img/menu-1.jpg",
    dishName: "Chicken Burger",
    price: "$115",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "https://themewagon.github.io/restoran/img/menu-1.jpg",
    dishName: "Chicken Burger",
    price: "$115",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "https://themewagon.github.io/restoran/img/menu-1.jpg",
    dishName: "Chicken Burger",
    price: "$115",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "https://themewagon.github.io/restoran/img/menu-1.jpg",
    dishName: "Chicken Burger",
    price: "$115",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "https://themewagon.github.io/restoran/img/menu-1.jpg",
    dishName: "Chicken Burger",
    price: "$115",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
  },
  {
    img: "https://themewagon.github.io/restoran/img/menu-1.jpg",
    dishName: "Chicken Burger",
    price: "$115",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
  },
];

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("Breakfast");

  const renderDishes = () => {
    return mockedDishes.map((item, key) => (
      <MenuInfoCard
        key={key}
        img={item.img}
        dishName={item.dishName}
        price={item.price}
        dishDescription={item.description}
      />
    ));
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const menuItems = [
    { label: "Breakfast", icon: 'fa fa-coffee' },
    { label: "Lunch", icon: 'fa fa-coffee' },
    { label: "Dinner", icon: 'fa fa-coffee' },
  ];

  return (
    <div className="flex flex-col items-center py-8 px-4">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-[2px] bg-[#feaf39]"></div>
          <p className="text-[#feaf39] font-medium px-2">Food Menu</p>
          <div className="w-12 h-[2px] bg-[#feaf39]"></div>
        </div>
        <h2 className="text-[#0f172b] text-3xl font-semibold">
          Most Popular Items
        </h2>
      </div>

      {/* Menu Navigator */}
      <div className="flex justify-center mb-12">
        {menuItems.map((menu) => {
          const Icon = menu.icon;
          return (
            <div
              key={menu.label}
              className={`cursor-pointer flex items-center px-6 pb-2 ${
                selectedMenu === menu.label
                  ? "border-b-2 border-[#feaf39] border-solid"
                  : "border-b-2 border-black border-solid"
              }`}
              onClick={() => handleMenuClick(menu.label)}
            >
              <i className={`${Icon} text-[#feaf39]`}></i>
              <p className="text-lg font-semibold">{menu.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {renderDishes()}
      </div>
    </div>
  );
}
