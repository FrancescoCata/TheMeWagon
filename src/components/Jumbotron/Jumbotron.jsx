import { motion } from "framer-motion";

export default function Jumbotron() {
  return (
    <div className="bg-[linear-gradient(rgba(15,23,43,0.9),rgba(15,23,43,0.9)),url('https://themewagon.github.io/restoran/img/bg-hero.jpg')] bg-center bg-no-repeat bg-cover mt-16 lg:mt-0">
      <div className="h-full flex flex-col lg:flex-row justify-between items-center p-8 lg:p-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-white flex flex-col justify-center items-start lg:items-start lg:pr-8 lg:pl-16 lg:py-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
            Enjoy Our Delicious Meal
          </h1>
          <p className="text-lg mb-6 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            asperiores qui dignissimos quod officia deserunt. Sequi, quasi
            explicabo aspernatur harum tempore, quidem quia doloremque placeat
            temporibus maiores numquam deserunt quos aliquid incidunt unde
            perspiciatis fuga! Voluptatum laborum, libero tempora, rem
            exercitationem mollitia distinctio iusto impedit, repellendus facere
            ad quam magni!
          </p>
          <button className="bg-[#feaf39] text-white font-medium text-base uppercase py-3 px-6 rounded-lg shadow transition hover:bg-yellow-500 w-48">
            BOOK A TABLE
          </button>
        </div>

        {/* Right Section with Animated Image */}
        <motion.div
          className="w-1/2 lg:w-3/5 flex justify-center items-center lg:pt-0 pt-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="https://themewagon.github.io/restoran/img/hero.png"
            alt="Delicious Meal"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
