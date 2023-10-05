"use client";

import BlurImage from "@/components/BlurImage";
import { useParams } from "next/navigation";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const ProductDynamicPage = () => {
  const params = useParams();
  const paramsData = decodeURIComponent(params?.name);
  const name = paramsData.replace(/ /g, "-");
  return (
    <>
      <div className="lg:px-10 lg:py-6 bg-[#fbf9f9ff]">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-start gap-4 border-none lg:border-t-2 lg:border-solid lg:border-black pt-6">
          <div className="w-full lg:w-1/2">
            <BlurImage image={product1} height={45} />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col font-bold p-5 lg:p-0">
            <h2 className="font-bold text-2xl mb-4">WHEN IN DOUBT T-SHIRT</h2>
            <price className="text-2xl">49.00$</price>
            <p className="mt-12 text-lg w-full lg:w-1/2">
              Short sleeve t-shirt. 100% cotton. Garment-dyed.
            </p>
            <p className="font-medium w-full lg:w-1/2 my-6">
              Screen printed Jeremiah graphic on front chest. Screen printed
              “When In Doubt Knock Em Out!” graphic on back.
            </p>

            {/* Sized Guide & Buttons */}
            <h2 className="underline mb-4">Size Guide</h2>

            <button className="w-full flex justify-between items-center py-6 px-4 bg-transparent border-y-2 border-solid border-black transition-all duration-300 hover:bg-gray-300">
              <div className="text-lg">Size:S</div>
              <div className="w-4 h-4 rounded-full bg-black" />
            </button>

            <button className="w-full flex justify-between items-center py-6 px-4 bg-transparent transition-all duration-300 hover:bg-black hover:text-white product-btn">
              <div className="text-lg">Add To Cart</div>
              <div className="w-4 h-4 rounded-full bg-black product-btn-dot" />
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="px-4 lg:px-0">
          <div className="border-y-[1px] border-solid border-black py-10 text-center w-full text-lg font-bold my-16">
            Related Products
          </div>

          <div className="py-4 w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {/* Card */}
            <Card image={product1} data={"views sweatpant"} height={25} />
            <Card image={product2} data={"WHEN IN DOUBT T-SHIRT"} height={25} />
            <Card
              image={product3}
              data={"so far gone magnetic letter set"}
              height={25}
            />
            <Card
              image={product4}
              data={"so far gone magnetic letter set"}
              height={25}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDynamicPage;
