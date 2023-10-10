"use client";

import BlurImage from "@/components/BlurImage";
import Card from "@/components/Card";
import Cart from "@/components/Cart";
import clickOutside from "@/components/ClickOutside";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const ProductDynamicPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Use the correct way to get params from the URL
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
      <Cart/>
      <div className="p-0 lg:px-10 lg:py-6 bg-[#fbf9f9ff] z-10">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-start gap-4 border-none lg:border-t-2 lg:border-solid lg:border-black lg:pt-6">
          <div className="w-full lg:w-1/2">
            <BlurImage image={selectedProduct?.p_image} />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col font-bold p-5 lg:p-0">
            <h2 className="font-bold text-2xl mb-4">WHEN IN DOUBT T-SHIRT</h2>
            <price className="text-2xl">{`${selectedProduct?.price}$`}</price>
            <p className="mt-12 text-lg w-full lg:w-1/2">
              Short sleeve t-shirt. 100% cotton. Garment-dyed.
            </p>
            <p className="font-medium w-full lg:w-1/2 my-6">
              Screen printed Jeremiah graphic on front chest. Screen printed
              “When In Doubt Knock Em Out!” graphic on back.
            </p>

            {/* Sized Guide & Buttons */}
            <h2 className="underline mb-4">Size Guide</h2>

            {/* Sizes menu toggle */}
            <menu
              ref={ref}
              className={`w-[20rem] ${
                menuToggle == true ? "grid" : "hidden"
              }  grid-cols-2 absolute bg-white translate-y-0 lg:translate-y-16 sizes-menu`}
            >
              <div className="py-8 px-4 flex justify-between items-center border-2 border-solid border-black">
                <h2 className="font-bold">S</h2>
                <div className="w-4 h-4 rounded-full bg-black product-btn-dot" />
              </div>
              <div className="py-8 px-4 flex justify-between items-center border-2 border-solid border-black">
                <h2 className="font-bold">M</h2>
                <div className="w-4 h-4 rounded-full bg-black product-btn-dot" />
              </div>
              <div className="py-8 px-4 flex justify-between items-center border-2 border-solid border-black">
                <h2 className="font-bold">L</h2>
                <div className="w-4 h-4 rounded-full bg-black product-btn-dot" />
              </div>
              <div className="py-8 px-4 flex justify-between items-center border-2 border-solid border-black">
                <h2 className="font-bold">XL</h2>
                <div className="w-4 h-4 rounded-full bg-black product-btn-dot" />
              </div>
              <div className="py-8 px-4 flex justify-between items-center border-2 border-solid border-black">
                <h2 className="font-bold">XXL</h2>
                <div className="w-4 h-4 rounded-full bg-black product-btn-dot" />
              </div>
              <div className="py-8 px-4 flex justify-between items-center border-2 border-solid border-black">
                <h2 className="font-bold">XXXL</h2>
                <div className="w-4 h-4 rounded-full bg-black product-btn-dot" />
              </div>
            </menu>

            <button
              className="w-full flex justify-between items-center py-6 px-4 bg-transparent border-y-2 border-solid border-black transition-all duration-300 hover:bg-gray-300"
              onClick={menuToggleHandler}
            >
              <div className="text-lg">Size:S</div>
              <div className="w-4 h-4 rounded-full bg-black" />
            </button>

            <button
              className="w-full flex justify-between items-center py-6 px-4 bg-transparent transition-all duration-300 hover:bg-black hover:text-white product-btn"
              onClick={() => addToCart(selectedProduct)}
            >
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
            {productsData?.map((items, index) => {
              return (
                <Card
                  image={items.p_image}
                  data={items.p_name}
                  id={items.id}
                  index={index}
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
