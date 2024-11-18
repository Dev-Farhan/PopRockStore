import React from "react";
import CrystalImage from "../assets/red-crystal.jpg";
const Card = () => {
  return (
    <div className="max-w-sm rounded-3xl border border-gray-200 py-4 px-6 flex flex-col items-center justify-center gap-3 hover:shadow-2xl ">
      <img
        className="w-[198px] h-[198px]"
        src={CrystalImage}
        alt="Crystal Logo"
      />
      <p className="font-poppins font-light uppercase flex flex-col gap-2 items-center justify-center">
        crystal agate phone grip{" "}
        <span className="font-poppins font-normal text-[#317189]">18.99$</span>
      </p>
      <button className="border px-6 py-2 rounded-2xl text-hsla196 hover:text-white hover:bg-hsla196 transition duration-300">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
