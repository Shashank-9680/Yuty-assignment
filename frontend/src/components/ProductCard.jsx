import React from "react";
import Bgimage from "../assets/Bg-image.jpg";
import AcceptanceModel from "./modals/AcceptanceModel";
const ProductCard = ({ setAcceptModalOpen }) => {
  return (
    <div className="relative m-4">
      <div className="relative">
        <img src={Bgimage} className="w-full h-auto" />
        <div className="absolute inset-0 bg-black bg-opacity-30  flex flex-col items-center justify-center gap-3 p-4">
          <h1 className="text-white text-4xl font-medium tracking-wide font-serif">
            HOLISTIC SKINCARE
          </h1>
          <p className="text-grey-light text-sm font-semibold font-serif tracking-wide">
            Plant-based glow, healthy for you, your skin and the planet.
          </p>
          <button className="bg-white text-green text-xs px-4 font-semibold font-serif py-2 rounded-sm">
            FEED YOUR SKIN
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <button
          className="bg-white text-black font-medium py-2 px-4 font-serif rounded-sm"
          onClick={() => setAcceptModalOpen(true)}
        >
          Find Personalised Matches
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
