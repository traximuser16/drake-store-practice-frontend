import React from "react";
import BlurImage from "./BlurImage";
import Link from "next/link";

const Card = ({ image, data }) => {

  return (
    <Link href={`/products/${data}`}>
      <div className="max-w-full pb-2 bg-[#fbf9f9ff] cursor-pointer">
        <BlurImage image={image} />
        <div className="pt-4 flex justify-between items-start">
          <h1 className="font-bold uppercase w-3/4 lg:w-2/3">{data}</h1>
          <i className="text-sm fa-solid fa-plus rounded-full border-[1px] border-black border-solid p-1 flex justify-center items-center transition-all duration-200 hover:bg-black hover:text-white" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
