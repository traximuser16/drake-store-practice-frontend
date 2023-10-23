"use client";

import Image from "next/image";
import GooglePay from "@/components/GooglePay";
import ShoppaySvg from "@/components/ShoppaySvg";
import shirt from "@/assets/shirt1.jpg";
import CountriesSelect from "@/components/CountriesSelect";
import { useEffect, useState } from "react";
import InputFeild from "@/components/InputFeild";

const page = () => {
  const [isOpen, setOpen] = useState({
    open: false,
    OpenedText: "Hide order summary",
    HiddenText: "Open order summary",
  });

  useEffect(() => {
    window?.scroll(0, 0);
  }, [])
  
  return (
    <div className="w-full grid place-items-center sm:py-4 checkout-back z-10">
      <div className="z-20 max-w-7xl mx-auto h-auto text-black flex flex-col-reverse lg:flex-row items-start gap-8 bg-[#ffffff] sm:rounded-2xl custom-shadow">

        {/* Form Section Left */}
        <div className="z-20 w-full lg:w-[55%] h-full py-10 px-4 lg:pt-16 lg:pb-6 lg:pl-20 lg:pr-4">

          <div className="hidden lg:block text-xs text-gray-400 space-x-2 mb-10">
            <h2 className="text-3xl mb-4 text-black">DrakeRelated</h2>
            <span className="text-black font-semibold">Information</span>
            <i class="fa-solid fa-greater-than"></i>
            <span>Shipping</span>
            <i class="fa-solid fa-greater-than"></i>
            <span>Checkout</span>
          </div>

          {/* Payment Providers Images  */}
          <div className="w-full py-4 px-5 rounded-lg border-[1px] border-solid border-gray-200 lg:space-x-4 space-y-4 lg:space-y-0 flex flex-col lg:flex-row  items-center provider-container mb-10">
            <div className="w-full lg:w-1/2 py-2 bg-[#5A31F4] grid place-items-center rounded-md transition-all duration-300 hover:bg-[#4c2ac5] cursor-pointer">
              <ShoppaySvg />
            </div>
            <div className="w-full lg:w-1/2 py-2 bg-black grid place-items-center rounded-md transition-all duration-300 hover:opacity-80 cursor-pointer">
              <GooglePay />
            </div>
          </div>

          {/* Line */}
          <div className="relative w-full h-[1px] bg-gray-200 grid place-items-center mb-10">
            <p className="absolute bg-white px-4 text-gray-500 text-xs">OR</p>
          </div>

          {/* Contact */}
          <div className="space-y-3 mb-10">
            <h2 className="text-lg">Contact</h2>
            <InputFeild placeholder={"Email"} type={"email"} />
            <div className="space-x-3 flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border-8 accent-black cursor-pointer"
                id="Emailcheckbox"
              />
              <label
                htmlFor="Emailcheckbox"
                className="text-xs cursor-pointer text-gray-700"
              >
                Email me with news and offers
              </label>
            </div>
          </div>

          {/* Shipping Form */}
          <div>
            <h2 className="text-lg mb-4">Shipping Information</h2>
            <form className="space-y-2">
              <CountriesSelect />
              <div className="flex flex-col md:flex-row justify-between items-center md:gap-4 gap-2">
                <InputFeild placeholder={"First Name"} />
                <InputFeild placeholder={"Last Name"} />
              </div>
              <InputFeild placeholder={"Address"} />
              <InputFeild placeholder={"Apartment, suite, etc (Optional)"} />
              <div className="flex flex-col md:flex-row justify-between items-center md:gap-4 gap-2">
                <InputFeild placeholder={"City"} />
                <InputFeild placeholder={"Postal Code"} />
              </div>
              <InputFeild placeholder={"Phone"} />
            </form>

            <div className="py-8 flex justify-end">
              <button
                type="submit"
                className="px-6 py-5 text-xs font-semibold bg-black text-white rounded-md transition-all duration-300 hover:opacity-80"
              >
                Continue To Shipping
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6">
            {/* Line */}
            <div className="w-full h-[1px] bg-gray-300" />

            {/* Pages */}
            <div className="space-x-4 text-xs py-4 text-center checkout-footer-span font-bold">
              <span>Refund policy</span>
              <span>Privacy policy</span>
              <span>Terms of service</span>
            </div>
          </div>
          
        </div>

        {/* Large Screen Products Section */}
        <div className="z-20 hidden lg:block w-full h-auto lg:w-[45%] py-10 px-4 lg:pt-16 lg:pb-6 lg:pl-8 lg:pr-20 checkout-right-sec space-y-5">
          <div className="block lg:hidden text-xs text-gray-400 space-x-2 mb-10">
            <h2 className="text-3xl mb-4 text-black">DrakeRelated</h2>
            <span className="text-black font-semibold">Information</span>
            <i class="fa-solid fa-greater-than"></i>
            <span>Shipping</span>
            <i class="fa-solid fa-greater-than"></i>
            <span>Checkout</span>
          </div>

          {/* mobile toggle sec */}
          <div className={`flex justify-between items-center`}>
            <div className="w-3/4 flex flex-col sm:flex-row justify-start items-start gap-4">
              <div className="relative">
                <Image src={shirt} className="w-20 object-contain rounded-md" />
                {/* Product Length */}
                <div className="cart-image-length">1</div>
              </div>
              <div className="space-y-1">
                <h2 className="font-semibold text-sm">When In Doubt T-Shirt</h2>
                <p className="text-xs text-gray-700 font-light">Black / S</p>
              </div>
            </div>

            <div className="font-bold">$45.00</div>
          </div>

          {/* Line */}
          <div className="w-full h-[1px] bg-gray-200 grid place-items-center" />

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-2">
            <InputFeild placeholder={"Discount Code"} />

            <button
              className="w-full text-sm lg:w-auto px-5 py-2 bg-gray-500 rounded-md text-white"
              disabled
            >
              Apply
            </button>
          </div>

          {/* Line */}
          <div className="w-full h-[1px] bg-gray-200 grid place-items-center" />

          {/* Subtotal & Shipping */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-600 text-sm lg:text-md">Subtotal</h2>
              <p className="font-semibold">$45.00</p>
            </div>
            <div className="flex justify-between items-center space-y-2">
              <h2 className="text-gray-600 text-sm lg:text-md">Shipping</h2>
              <p className="text-sm">Calculated at next step</p>
            </div>
          </div>

          {/* Line */}
          <div className="w-full h-[1px] bg-gray-200 grid place-items-center" />
          <div className="flex justify-between items-center">
            <h2 className="text-gray-600">Total</h2>
            <p className="font-semibold text-sm lg:text-2xl">
              <span className="text-gray-400 text-sm lg:text-lg">USD </span>
              $45.00
            </p>
          </div>

          {/* mobile screen line */}
          {/* Line */}
          <div className="lg:hidden w-full h-[1px] bg-gray-200 grid place-items-center relative top-12" />
        </div>

        {/* Mobile Screen Products Section */}
        <div className="lg:hidden w-full h-auto lg:w-[45%] py-4 px-4 lg:pt-16 lg:pb-6 lg:pl-8 lg:pr-20 checkout-right-sec">
          <div className="block lg:hidden text-xs text-gray-400 space-x-2 mb-10">
            <h2 className="text-3xl mb-4 text-black">DrakeRelated</h2>
            <span className="text-black font-semibold">Information</span>
            <i class="fa-solid fa-greater-than"></i>
            <span>Shipping</span>
            <i class="fa-solid fa-greater-than"></i>
            <span>Checkout</span>
          </div>

          {/* mobile toggle button sec */}
          <div
            className="lg:hidden w-full flex justify-between items-center bg-gray-200 py-4 px-2 rounded-md transition-all duration-200 hover:bg-gray-300 cursor-pointer"
            onClick={() =>
              setOpen({
                ...isOpen,
                open: !isOpen.open,
              })
            }
          >
            <div className="flex items-center gap-2">
              <span>
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
              <h2 className="text-sm">
                {isOpen.open == true ? isOpen.OpenedText : isOpen.HiddenText}
                <span className="ml-2">
                  <i class="fa-solid fa-caret-down"></i>
                </span>
              </h2>
            </div>

            <div className="font-semibold">
              <span className="text-gray-400">USD</span> $45.00
            </div>
          </div>

          <div
            className={`${
              isOpen.open == true ? "h-[35rem]" : "h-0"
            }  transition-all duration-300 overflow-hidden space-y-5 relative top-4`}
          >
            {/* mobile toggle sec */}
            <div className={`flex justify-between items-center mt-4`}>
              <div className="w-3/4 flex flex-col sm:flex-row justify-start items-start gap-4">
                <div className="relative">
                  <Image
                    src={shirt}
                    className="w-20 object-contain rounded-md"
                  />
                  {/* Product Length */}
                  <div className="cart-image-length">1</div>
                </div>
                <div className="space-y-1">
                  <h2 className="font-semibold text-sm">
                    When In Doubt T-Shirt
                  </h2>
                  <p className="text-xs text-gray-700 font-light">Black / S</p>
                </div>
              </div>

              <div className="font-bold">$45.00</div>
            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-gray-200 grid place-items-center" />
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-2">
              <InputFeild placeholder={"Discount Code"} />

              <button
                className="w-full lg:w-auto px-5 py-3 bg-gray-500 rounded-md text-white"
                disabled
              >
                Apply
              </button>
            </div>
            {/* Line */}
            <div className="w-full h-[1px] bg-gray-200 grid place-items-center" />

            {/* Subtotal & Shipping */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-gray-600 text-sm lg:text-md">Subtotal</h2>
                <p className="font-semibold">$45.00</p>
              </div>
              <div className="flex justify-between items-center space-y-2">
                <h2 className="text-gray-600 text-sm lg:text-md">Shipping</h2>
                <p className="text-sm">Calculated at next step</p>
              </div>
            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-gray-200 grid place-items-center" />
            <div className="flex justify-between items-center">
              <h2 className="text-gray-600">Total</h2>
              <p className="font-semibold text-sm lg:text-2xl">
                <span className="text-gray-400 text-sm lg:text-lg">USD </span>
                $45.00
              </p>
            </div>

            {/* mobile screen line */}
            {/* Line */}
            <div className="lg:hidden w-full h-[1px] bg-gray-200 grid place-items-center relative top-12" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;