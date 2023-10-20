"use client";

import Card from "@/components/Card";
import Cart from "@/components/Cart";
import getAllProductsData from "@/services/getAllProducts";
import { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const data = await getAllProductsData();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="px-5 md:px-8 lg:px-12 bg-[#fbf9f9ff] py-10">
        <h1 className="w-full text-center font-bold text-2xl mb-10 product-head">
          <div className="product-heading">Shop All</div>
        </h1>
        {/* // Cards Parent */}
        <div className="py-10 h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-t-[1px] border-solid border-black">
          {products?.map((items) => {
            return (
              <Card
                image={items?.p_image}
                title={items?.title}
                id={items?.id}
                price={items?.price}
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
