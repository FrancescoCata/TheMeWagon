// -- STYLE
import "./menu.css";

// -- COMPONENTS
import MenuInfoCard from "../components/menuInfoCard/MenuInfoCard";

// -- MOCKED DISHES ARR
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
  const renderDishes = () => {
    return mockedDishes.map((item, key) => {
      return (
        <MenuInfoCard
          key={key}
          img={item.img}
          dishName={item.dishName}
          price={item.price}
          dishDescription={item.description}
        />
      );
    });
  };

  return (
    <div className="foodMenuContainer">
      <div className="foodMenuContent">
        <div className="foodMenuHeader">
          <div className="foodMenuTopTitle">
            <div className="foodMenuDivisor"></div>
            <p>Food Menu</p>
            <div className="foodMenuDivisor"></div>
          </div>
          <h2>Most Popular Items</h2>
        </div>
        <div className="foodMenuNavbar">
          <div className="foodMenuNavigator">
            <i></i>
            <div>
              <p>Popular</p>
              <p>Breakfast</p>
            </div>
          </div>
          <div className="foodMenuNavigator">
            <i></i>
            <div>
              <p>Special</p>
              <p>Lunch</p>
            </div>
          </div>
          <div className="foodMenuNavigator">
            <i></i>
            <div>
              <p>Lovely</p>
              <p>Dinner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="foodMenuDishes">{renderDishes()}</div>
    </div>
  );
}
