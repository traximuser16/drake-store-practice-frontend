"use client";

import BlurImage from "@/components/BlurImage";
import Card from "@/components/Card";
import Cart from "@/components/Cart";
import SizeMenu from "@/components/SizeMenu";
import getAllProductsData from "@/services/getAllProducts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProductDynamicPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedSize, setSize] = useState("Select Size");
  const [productState, setProductState] = useState({
    product: null,
    menuToggle: false,
    allProducts: null,
    size: selectedSize,
  });

  const fetchData = async () => {
    try {
      const allProductsData = await getAllProductsData();
      setProductState((prevState) => ({
        ...prevState,
        allProducts: allProductsData,
      }));

      const product = allProductsData.find((item) => item.id == id);
      setProductState((prevState) => ({
        ...prevState,
        product,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    window?.scroll(0, 0);
    fetchData();
  }, [id]);

  const handleSizeSelect = (size) => {
    setSize(size);
    setProductState({
      ...productState,
      size: selectedSize,
    });
    console.log(productState);
  };

  const addToCartAction = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const { product, menuToggle, allProducts } = productState;

  return (
    <>
      <Cart />
      {product && (
        <div className="p-0 lg:px-10 lg:py-6 bg-[#fbf9f9ff] z-10">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-4 border-none lg:border-t-[1px] lg:border-solid lg:border-black lg:pt-6">
            <div className="w-full lg:w-1/2">
              <BlurImage image={product.p_image} />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col font-light p-5 lg:p-0">
              <div>
                <h2 className="font-bold text-2xl mb-4">{product.title}</h2>
                <div className="text-2xl">{`${product.price}$`}</div>
                {product.p_description?.map((items, index) => (
                  <p className="my-6 text-lg w-full lg:w-2/3" key={index}>
                    {items}
                  </p>
                ))}
              </div>

              <div>
                <h2 className="underline mb-4 font-semibold">Size Guide</h2>
                <button
                  className="relative w-full flex justify-between items-center py-6 px-5 bg-transparent border-y-[1px] border-solid border-black transition-all duration-300 hover:bg-gray-300"
                  onClick={() =>
                    setProductState({
                      ...productState,
                      menuToggle: !menuToggle,
                    })
                  }
                >
                  <SizeMenu
                    handleSizeSelect={handleSizeSelect}
                    selectedSize={selectedSize}
                    menuToggle={menuToggle}
                  />
                  <div className="text-lg">
                    Size: <span className="font-medium">{selectedSize}</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-black" />
                </button>
                <button
                  className="w-full flex justify-between items-center py-6 px-5 bg-transparent transition-all duration-300 hover:bg-black hover:text-white product-btn"
                  onClick={() => addToCartAction(product)}
                >
                  <div className="text-lg">Add To Cart</div>
                  <div className="w-2 h-2 rounded-full bg-black product-btn-dot" />
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0">
            <div className="border-y-[1px] border-solid border-black py-10 text-center w-full text-lg font-bold my-16">
              Related Products
            </div>

            <div className="py-4 w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allProducts?.map((items, index) => (
                <Card
                  key   = {items.id}
                  image = {items.p_image}
                  title = {items.title}
                  id    = {items.id}
                  index = {index}
                  price = {items.price}
                />
              ))}
            </div>
          </div>
        </div>
      )}j
    </>
  );
};

export default ProductDynamicPage;
