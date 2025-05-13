import React, { useState, useRef } from "react";
import { Element, Link, scroller } from "react-scroll";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiScrollToBottomLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Logo from "./assets/Logo.png";
import { CarouselDefault } from "./components/Carousel";
import Card from "./components/Card";
import CrystalImage from "./assets/red-crystal.jpg";
import AboutBg from "./assets/image.png";

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
        <section className="mt-20 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-1 mb-3">
            <h1 className="text-4xl font-poppins font-medium mb-4">
              All Products
            </h1>
            <div className="w-16 h-0.5 bg-gray-300 mb-5"></div>
          </div>

          <div className="flex flex-col lg:flex lg:items-start lg:justify-between md:flex md:items-start md:justify-between  justify-between items-center gap-4">
            {/* Filter Section */}
            <div className="flex items-center gap-2 font-poppins text-sm">
              <span className="text-gray-600 ">Filter:</span>
              <select className="rounded-md px-2 py-1 text-black-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="allProducts">All Products</option>
                <option value="crystal">Crystal</option>
                <option value="stone">Stone</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            {/* Sort Section */}
            <div className="flex items-center gap-2 font-poppins text-sm mb-4">
              <span className="text-gray-600">Sort:</span>
              <select className="rounded-md px-2 py-1 text-black-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="bestSelling">Best Selling</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

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

      {/* About Us */}
      {/* 
      <Element name="about">
        <section
          className="max-w-full h-screen my-20 flex flex-col items-center justify-center bg-gradient-to-tr from-sky-300 to-blue-600"
          style={{ backgroundImage: `url(${AboutBg})` }}
        >
          <div className="w-full flex flex-col-reverse lg:flex items-center justify-center gap-1">
            <div className="flex flex-col font-poppins">
              <h1 className="text-4xl font-light">Best Price</h1>
              <h1 className="text-5xl font-semibold">Agate Phone Grip</h1>
              <span className="flex item-center gap-3">
                <del className="text-[#41A0B7] mt-3">44.50$</del>
                <ins className="text-5xl font-semibold text-red-600">
                  19.50$
                </ins>
              </span>
              <p className="text-wrap">
                These Pop Rock Crystal grip tops can be swapped with other tops
                depending on your mood, outfit, nails, phone case, holiday,
                etc.! Just gently squeeze the sides to remove and swap out with
                another color or design!
              </p>
              <button className="border my-12 px-6 py-2 rounded-2xl text-hsla196 hover:text-white hover:bg-hsla196 transition duration-300">
                View All
              </button>
            </div>
          </div>
        </section>
      </Element> */}

      <Element name="about">
        <section className="max-w-full h-screen flex items-center justify-center bg-gradient-to-tr from-sky-300 to-blue-600 relative overflow-hidden">
          {/* SVG Background Wave */}
          <svg
            className="absolute bottom-0 left-0 w-full h-auto"
            width="1440"
            height="900"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M780.5 719.289C996.132 691.392 1205.06 380.14 1440 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z"
              fill="white"
            />
          </svg>

          {/* Content */}
          <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 z-10">
            {/* Text Section */}
            <div className="w-[542px] flex flex-col font-poppins text-end lg:text-end lg:items-end">
              <h1 className="text-3xl lg:text-4xl font-light text-gray-800">
                BEST PRICE
              </h1>
              <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Agate Phone Grip
              </h1>
              <div className="flex items-center justify-end gap-3 mb-4">
                <del className="text-[#41A0B7] text-xl">44.50$</del>
                <ins className="text-4xl font-bold text-red-600">19.50$</ins>
              </div>
              <p className="text-[#31546D] text-xs  leading-relaxed max-w-sm lg:max-w-sm ml-auto">
                These Pop Rock Crystal grip tops can be swapped with other tops
                depending on your mood, outfit, nails, phone case, holiday,
                etc.! Just gently squeeze the sides to remove and swap out with
                another color or design!
              </p>
              <button className="text-sm border border-hsla196 text-white bg-hsla196 hover:text-hsla196 hover:bg-white transition duration-300 px-6 py-2 rounded-2xl mt-5">
                View All
              </button>
            </div>

            {/* Image Section */}
            <div className="relative flex items-center justify-center">
              {/* Outer Circle */}
              <svg
                width="670"
                height="670"
                viewBox="0 0 670 670"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                <g filter="url(#filter0_d_1_147)">
                  <circle cx="335" cy="331" r="285" fill="white" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_147"
                    x="0"
                    y="0"
                    width="670"
                    height="670"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="25" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.472135 0 0 0 0 0.561969 0 0 0 0 0.6125 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_147"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_147"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              {/* Inner Circle */}
              <svg
                width="464"
                height="464"
                viewBox="0 0 464 464"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                <g filter="url(#filter0_d_1_148)">
                  <circle cx="232" cy="228" r="182" fill="white" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_148"
                    x="0"
                    y="0"
                    width="464"
                    height="464"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="25" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.472135 0 0 0 0 0.561969 0 0 0 0 0.6125 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_148"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_148"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              {/* Image */}
              <img
                src={CrystalImage}
                alt="Agate Phone Grip"
                className="w-48 h-48 object-contain relative z-10"
              />
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}

export default App;
