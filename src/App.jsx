import React, { useState, useRef } from "react";
import { Element, Link, scroller } from "react-scroll";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiScrollToBottomLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Logo from "./assets/logo.png";
import { CarouselDefault } from "./components/Carousel";
import Card from "./components/Card";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const scrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 500,
      smooth: "easeInOut",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-full">
      <div className="relative p-6 w-full min-h-screen bg-gradient-to-tr from-sky-300 to-blue-600">
        {/* Background Shape */}
        <div className="custom-shape-divider-bottom-1731823342">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 w-full">
          <a href="#">
            <img src={Logo} alt="Logo" className="w-[156px] h-[55px]" />
          </a>
          <div className="hidden lg:flex items-center gap-10 text-white">
            <ul className="flex gap-10 font-poppins font-light text-lg text-white">
              <li className="hover:underline cursor-pointer">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="products" smooth={true} duration={500}>
                  Shop
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="about" smooth={true} duration={500}>
                  About Us
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="help" smooth={true} duration={500}>
                  Help
                </Link>
              </li>
            </ul>
            <FaShoppingCart
              size={23}
              className="cursor-pointer"
              color="white"
            />
          </div>

          {/* Mobile Menu */}
          <nav className="lg:hidden flex items-center">
            <FaShoppingCart
              size={23}
              className="mr-4 cursor-pointer"
              color="white"
            />
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-lg font-poppins bg-white">
                  <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-6 focus:outline-none"
                  >
                    <HiX size={30} />
                  </button>
                  <ul className="flex flex-col items-center gap-8">
                    <li
                      className="hover:underline cursor-pointer"
                      onClick={toggleMenu}
                    >
                      Home
                    </li>
                    <li
                      className="hover:underline cursor-pointer"
                      onClick={toggleMenu}
                    >
                      Shop
                    </li>
                    <li
                      className="hover:underline cursor-pointer"
                      onClick={toggleMenu}
                    >
                      About Us
                    </li>
                    <li
                      className="hover:underline cursor-pointer"
                      onClick={toggleMenu}
                    >
                      Help
                    </li>
                  </ul>
                </div>
              ) : (
                <HiMenuAlt3 size={30} color="white" />
              )}
            </button>
          </nav>
        </nav>

        {/* Home Section */}
        <div
          ref={homeRef}
          className="flex flex-col lg:flex-row justify-between px-4 md:px-6 lg:px-8 py-6 lg:py-8"
        >
          <div className="flex flex-col lg:mt-28">
            <h2 className="text-2xl md:text-xl lg:text-3xl text-white">
              Welcome to
            </h2>
            <h1 className="text-4xl md:text-2xl lg:text-6xl text-white">
              Pop Rock Crystal Shop!
            </h1>
            <p className="text-sm md:text-base lg:text-lg lg:mt-6 lg:text-wrap py-5 text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              enim voluptas. Exercitationem, consectetur possimus
              necessitatibus, cupiditate ratione aliquid mollitia voluptates
              molestiae laboriosam, labore placeat quisquam rem beatae suscipit
              perferendis! Ipsum?
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-7 py-3 rounded-lg font-poppins font-light lg:hover:bg-black lg:hover:text-white cursor-pointer transition duration-300">
                Shop Now
              </button>
              <button className="border border-white text-white px-7 py-3 rounded-lg font-poppins font-light hover:border-black hover:text-black cursor-pointer transition duration-300">
                About Us
              </button>
            </div>
          </div>

          <div className="lg:block md:block py-8">
            <CarouselDefault isMenuOpen={isMenuOpen} />
          </div>

          {/* Scroll Button */}
          <motion.button
            animate={{ y: [0, 50, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-black p-3 rounded-full transition duration-300 items-center gap-2 hover:text-gray-700 hidden lg:flex"
            onClick={() => scrollToSection("products")}
          >
            <RiScrollToBottomLine size={30} />
            <p className="text-sm">Scroll down</p>
          </motion.button>
        </div>
      </div>

      {/* Products Section */}
      <Element name="products">
        <section className="my-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-poppins font-medium mb-8">
            All Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Assuming Card renders individual product details */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <button className="border my-12 px-6 py-2 rounded-2xl text-hsla196 hover:text-white hover:bg-hsla196 transition duration-300">
            View All
          </button>
        </section>
      </Element>
    </div>
  );
}

export default App;
