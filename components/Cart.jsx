import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cartState, setCartState] = useState({
    isOpen: true,
    total: 0,
    cartItems: [],
    checkResponse: false,
  });

  const response = useSelector((items) => items.rootReducer.cartItems);

  useEffect(() => {
    const calculatedTotal = response.reduce(
      (prev, current) => prev + current?.price,
      0
    );

    setCartState({
      ...cartState,
      total: calculatedTotal,
      cartItems: response,
      checkResponse: response.length > 0,
    });
  }, [response]);

  const { isOpen, total, cartItems, checkResponse } = cartState;

  return (
    <div
      className={`${
        isOpen ? "translate-x-[0]": "translate-x-[35rem]"
      } fixed right-0 top-0 h-screen w-[70%] md:w-[50%] lg:w-[30%] bg-white px-8 py-10 space-y-4 shadow-lg shadow-[#333333b7] transition-all duration-500 opacity-1 z-20`}
    >
      <div className="flex justify-between items-center font-semibold">
        <h2
          className="cursor-pointer text-3xl"
          onClick={() =>
            setCartState((prevState) => ({
              ...prevState,
              isOpen: false,
            }))
          }
        >
          <i class="fa-solid fa-xmark"></i>
        </h2>
        <h2 className="text-lg">Cart</h2>
      </div>

      {/* Products section in Cart scrollable */}
      <div className="w-full h-3/4 overflow-scroll cart-scroll-container">
        {cartItems?.map((items, index) => {
          return (
            <div
              className="flex items-start justify-between gap-4 py-8 mb-4 border-t-2 border-solid border-black h-64 overflow-hidden"
              key={index}
            >
              <div className="w-1/2">
                <Image
                  src={items?.p_image && items?.p_image[0]}
                  width={1000}
                  height={1000}
                  className="object-contain"
                />
              </div>

              <div className="w-1/2 h-1/2 gap-10 flex flex-col justify-between items-start px-2">
                <div className="space-y-2 font-bold text-lg">
                  <h2 className="capitalize">{items?.p_name}</h2>
                  <h3>{items?.price}$</h3>
                </div>

                <div className="w-full rounded-2xl border-[1.5px] border-solid border-black flex justify-between items-center px-4 py-1 text-xs">
                  <button>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <button className="text-sm">2</button>
                  <button>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full flex justify-between items-center py-3 px-4 bg-transparent border-y-2 border-solid border-black cursor-auto">
        <div className="text-lg">Total</div>
        <h2>{`${total}$`}</h2>
      </button>

      {cartItems.length === 0 ? (
        <button
          className="w-full flex justify-between items-center py-3 px-4 bg-transparent transition-all duration-300 hover:bg-black hover:text-white product-btn"
          onClick={() =>
            setCartState((prevState) => ({
              ...prevState,
              isOpen: false,
            }))
          }
        >
          <div className="text-lg font-semibold">Please Add Items to Cart</div>
          <div className="w-4 h-4 rounded-full bg-black product-btn-dot" />
        </button>
      ) : (
        <Link href="/checkout">
          <button className="w-full flex justify-between items-center py-3 px-4 bg-transparent transition-all duration-300 hover:bg-black hover:text-white product-btn">
            <div className="text-lg">Checkout</div>
            <div className="w-4 h-4 rounded-full bg-black product-btn-dot" />
          </button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
