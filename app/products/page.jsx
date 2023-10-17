"use client";

import Card from "@/components/Card";
import Cart from "@/components/Cart";
import { useSelector } from "react-redux";

const page = () => {
  const productsData = useSelector((state) => state._todoProduct._products);
  return (
    <>
      <div className="px-5 md:px-8 lg:px-12 bg-[#fbf9f9ff] py-10">
        <h1 className="w-full text-center font-bold text-2xl mb-10">
          Shop All
        </h1>
        {/* // Cards Parent */}
        <div className="py-10 h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-t-[1px] border-solid border-black">
          {productsData?.map((items) => {
            return (
              <Card
                image={items.p_image}
                title={items.title}
                id={items.id}
                price={items.price}
              />
            );
          })}
        </div>
      </div>

      {/* cart */}
      <Cart />
    </>
  );
};

export default page;
