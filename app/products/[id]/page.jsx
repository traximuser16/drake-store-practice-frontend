"use client";

import BlurImage from "@/components/BlurImage";
import Card from "@/components/Card";
import Cart from "@/components/Cart";
import clickOutside from "@/components/ClickOutside";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const ProductDynamicPage = () => {
  const { id } = useParams();
  const productsData = useSelector((state) => state._todoProduct._products);
  const selectedProduct = productsData?.find((item) => item.id == id);
  const { ref, menuToggle, setToggle } = clickOutside(false);
  const menuToggleHandler = () => {
    setToggle(!menuToggle);
  };

  const addToCartAction = (product) => ({
    type: "ADD_CART", // Replace with your actual action type
    payload: product,
  });

  const addToCart = (product) => {
    dispatch(addToCartAction(product));
  };

  return (
    <>
      <Cart />
      <div className="p-0 lg:px-10 lg:py-6 bg-[#fbf9f9ff] z-10">
        {/* Upper Dynamic Card Details */}
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-start gap-4 border-none lg:border-t-[1px] lg:border-solid lg:border-black lg:pt-6">
          <div className="w-full lg:w-1/2">
            <BlurImage image={selectedProduct?.p_image} />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col font-bold p-5 lg:p-0">
            <h2 className="font-bold text-2xl mb-4">
              {selectedProduct?.title}
            </h2>

            <div className="text-2xl">{`${selectedProduct?.price}$`}</div>
            {selectedProduct?.p_description.map((items, index) => {
              return (
                <p className="my-6 text-lg w-full lg:w-2/3" key={index}>
                  {items}
                </p>
              );
            })}

            {/* Sized Guide & Buttons */}
            <h2 className="underline mb-4">Size Guide</h2>

            <button
              className="relative w-full flex justify-between items-center py-6 px-5 bg-transparent border-y-[1px] border-solid border-black transition-all duration-300 hover:bg-gray-300"
              onClick={menuToggleHandler}
            >
              {/* Sizes menu toggle */}
              <menu
                ref={ref}
                className={`w-full ${
                  menuToggle == true ? "grid" : "hidden"
                }  grid-cols-2 absolute -top-[12rem] left-0 bg-white translate-y-0 sizes-menu shadow-md shadow-[#d8d8d8]`}
              >
                <div className="py-4 px-4 flex justify-between items-center border-[1px] border-solid border-[#333333bd]">
                  <h2 className="font-bold">S</h2>
                  <div className="w-2 h-2 rounded-full bg-black product-btn-dot" />
                </div>
                <div className="py-4 px-4 flex justify-between items-center border-[1px] border-solid border-[#333333bd]">
                  <h2 className="font-bold">M</h2>
                  <div className="w-2 h-2 rounded-full bg-black product-btn-dot" />
                </div>
                <div className="py-4 px-4 flex justify-between items-center border-[1px] border-solid border-[#333333bd]">
                  <h2 className="font-bold">L</h2>
                  <div className="w-2 h-2 rounded-full bg-black product-btn-dot" />
                </div>
                <div className="py-4 px-4 flex justify-between items-center border-[1px] border-solid border-[#333333bd]">
                  <h2 className="font-bold">XL</h2>
                  <div className="w-2 h-2 rounded-full bg-black product-btn-dot" />
                </div>
                <div className="py-4 px-4 flex justify-between items-center border-[1px] border-solid border-[#333333bd]">
                  <h2 className="font-bold">XXL</h2>
                  <div className="w-2 h-2 rounded-full bg-black product-btn-dot" />
                </div>
                <div className="py-4 px-4 flex justify-between items-center border-[1px] border-solid border-[#333333bd]">
                  <h2 className="font-bold">XXXL</h2>
                  <div className="w-2 h-2 rounded-full bg-black product-btn-dot" />
                </div>
              </menu>

              <div className="text-lg">Size: S</div>
              <div className="w-2 h-2 rounded-full bg-black" />
            </button>

            <button
              className="w-full flex justify-between items-center py-6 px-5 bg-transparent transition-all duration-300 hover:bg-black hover:text-white product-btn"
              onClick={() => addToCart(selectedProduct)}
            >
              <div className="text-lg">Add To Cart</div>
              <div className="w-2 h-2 rounded-full bg-black product-btn-dot" />
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="px-4 lg:px-0">
          <div className="border-y-[1px] border-solid border-black py-10 text-center w-full text-lg font-bold my-16">
            Related Products
          </div>

          <div className="py-4 w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsData?.map((items, index) => {
              return (
                <Card
                  image={items.p_image}
                  title={items.title}
                  id={items.id}
                  index={index}
                  price={items.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDynamicPage;
