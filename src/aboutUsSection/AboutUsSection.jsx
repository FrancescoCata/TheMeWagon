// -- MOCK IMAGE ARRAY
const mockImagesArr = [
  {
    img: "https://themewagon.github.io/restoran/img/about-1.jpg",
  },
  {
    img: "https://themewagon.github.io/restoran/img/about-2.jpg",
  },
  {
    img: "https://themewagon.github.io/restoran/img/about-3.jpg",
  },
  {
    img: "https://themewagon.github.io/restoran/img/about-4.jpg",
  },
];

export default function AboutUsSection() {
  const renderImagesArr = () => {
    return mockImagesArr.map((item, key) => {
      return (
        <div className="relative w-1/2 h-1/2 p-1" key={key}>
          <img
            src={item.img}
            className={`object-cover ${
              key === 1
                ? "relative transform translate-x-[0%] translate-y-[25%] w-[80%] h-[80%]"
                : key === 2
                ? "relative transform translate-x-[25%] translate-y-[0%] w-[80%] h-[80%]"
                : "w-full h-full"
            }`}
            alt={`about-us-${key}`}
          />
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[90vh] w-full">
      {/* Left Side (Images) */}
      <div className="flex flex-wrap w-full lg:w-1/2 lg:h-full">
        {renderImagesArr()}
      </div>
      {/* Right Side (Text and Stats) */}
      <div className="flex justify-center items-center w-full lg:w-1/2 h-auto lg:h-full">
        <div className="w-11/12 my-8 lg:my-0">
          <div>
            <p className="text-lg font-medium text-gray-600">About Us</p>
            <h2 className="text-4xl font-bold text-black my-2">
              Welcome to Restoran
            </h2>
          </div>
          <div className="my-4 space-y-3 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur accusamus dolores possimus nemo, labore voluptatum
              animi excepturi reiciendis perferendis obcaecati.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur accusamus dolores possimus nemo, labore voluptatum
              animi excepturi reiciendis perferendis obcaecati.
            </p>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row">
              {/* First stat (Years of Experience) */}
              <div className="flex items-center border-l-4 lg:w-1/2 border-[#feaf39] border-solid mb-4 pl-4">
                <h1 className="text-5xl font-bold text-[#feaf39] mr-5">15</h1>
                <div>
                  <p className="font-medium">Years of</p>
                  <p className="font-bold">EXPERIENCE</p>
                </div>
              </div>

              {/* Second stat (Master Chefs) */}
              <div className="flex items-center border-l-4 lg:w-1/2 border-[#feaf39] border-solid mb-4 pl-4">
                <h1 className="text-5xl font-bold text-[#feaf39] mr-5">50</h1>
                <div>
                  <p className="font-medium">Popular</p>
                  <p className="font-bold">MASTER CHEFS</p>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-[#feaf39] text-white font-medium uppercase text-sm py-3 px-6 rounded">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
