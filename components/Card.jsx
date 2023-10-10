import React from "react";
import BlurImage from "./BlurImage";

const Card = ({ image, data, id, index }) => {
  return (
    <div className="max-w-full pb-2 bg-[#fbf9f9ff] cursor-pointer" key={index}>
      <BlurImage image={image} id={id} />
      <div className="pt-4 flex justify-between items-start">
        <h1 className="font-bold uppercase w-3/4 lg:w-2/3">{data}</h1>
        <i className="text-sm fa-solid fa-plus rounded-full border-[1px] border-black border-solid p-1 flex justify-center items-center transition-all duration-200 hover:bg-black hover:text-white" />
      </div>
    </div>
  );
};

export default Card;
