"use client"

import React, { memo, useState } from "react";
import BlurImage from "./BlurImage";
import Link from "next/link";

const Card = ({ image, title, price, id, index }) => {
  const floatPrice = parseFloat(price)
  const [price_description, setDescription] = useState(floatPrice);

  return (
    <div className="max-w-full pb-2 bg-[#fbf9f9ff] cursor-pointer" key={index}>
      <div className="lg:h-96">
        <BlurImage image={image} id={id} />
      </div>
      <Link href={`/products/${id}`}>
        <div className="pt-4 flex justify-between items-start">
          <h1 className="font-bold uppercase w-3/4 lg:w-2/3">{title}</h1>
          <i className="text-sm fa-solid fa-plus rounded-full border-[1px] border-black border-solid p-1 flex justify-center items-center transition-all duration-200 hover:bg-black hover:text-white" />
        </div>
        <h1
          onMouseOver={() => setDescription("S,M,L,XL,XXL")}
          onMouseLeave={() => setDescription(floatPrice.toString())}
          className="font-bold uppercase w-3/4 lg:w-2/3"
        >
          {price_description}$
        </h1>
      </Link>
    </div>
  );
};

export default memo(Card);