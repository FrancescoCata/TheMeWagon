import { useEffect, useState } from "react";
import MenuInfoCard from "../components/menuInfoCard/MenuInfoCard";
// import { FaCoffee, FaHamburger, FaUtensils } from "react-icons/fa";
import { getRestaurantMenu } from "../services/MenuService";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("Pizza");
  const [dishes, setDishes] = useState([])

  useEffect(() =>{
    getDishes()
  },[selectedMenu])

  const getDishes = async () =>{
    const res = await getRestaurantMenu(selectedMenu)
    setDishes(res)
  }

  useEffect(() =>{
    renderDishes()
  },[dishes])

  const renderDishes = () => {
    if(dishes.length > 0){
      return dishes.map((item, key) => (
        <MenuInfoCard
          key={key}
          dishName={item.name}
          price={item.price}
        />
      ));
    }
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const menuItems = [
    { label: "Pizza", icon: 'fa fa-coffee' },
    { label: "Dryck", icon: 'fa fa-coffee' },
    { label: "Tillbehör", icon: 'fa fa-coffee' },
  ];

  return (
    <div className="flex flex-col items-center py-8 px-4">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-[2px] bg-[#feaf39]"></div>
          <p className="text-[#feaf39] font-medium px-2 font-pacifico text-xl">Food Menu</p>
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
