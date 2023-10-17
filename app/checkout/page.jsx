import Image from "next/image";
import GooglePay from "@/components/GooglePay";
import ShoppaySvg from "@/components/ShoppaySvg";
import shirt from "@/assets/shirt1.jpg";
import CountriesSelect from "@/components/CountriesSelect";

const page = () => {
  return (
      <div className="w-full grid place-items-center py-4 checkout-back">
      {/* // Page */}
      <div className="w-[80%] h-auto text-black flex flex-col-reverse lg:flex-row items-start gap-8 bg-[#ffffff] rounded-md shadow-2xl shadow-black">
        {/* Form Section Left */}
        <div className="w-full lg:w-[55%] h-full p-10 lg:pt-16 lg:pb-6 lg:pl-20 lg:pr-4">
          <div className="text-xs text-gray-400 space-x-2 mb-10">
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
            <input
              type="text"
              placeholder="Email"
              className="w-full border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
            />
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
              {/* <input
              type="text"
              placeholder="Country/Region"
              className="w-full border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
            /> */}
              <CountriesSelect />

              <div className="flex justify-between items-center gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
                />
              </div>

              <input
                type="text"
                placeholder="Address"
                className="w-full border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Apartment, suite, etc (Optional)"
                className="w-full border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
              />

              <div className="flex justify-between items-center gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
                />

                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
                />
              </div>

              <input
                type="text"
                placeholder="Phone"
                className="w-full border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
              />
            </form>

            <div className="py-8 flex justify-end">
              <button className="px-6 py-5 text-xs font-semibold bg-black text-white rounded-md transition-all duration-300 hover:opacity-80">
                Continue To Shipping
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6">
            {/* Line */}
            <div className="w-full h-[1px] bg-gray-300" />

            {/* Pages */}
            <div className="space-x-4 text-xs py-4">
              <span className="cursor-pointer">Refund policy</span>
              <span className="cursor-pointer">Privacy policy</span>
              <span className="cursor-pointer">Terms of service</span>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-full h-auto lg:h-[50vh] lg:w-[45%] p-10 lg:pt-16 lg:pb-6 lg:pl-8 lg:pr-20 checkout-right-sec space-y-5">
          <div className="flex justify-between items-center">
            <div className="w-3/4 flex justify-start items-start gap-4">
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
          <div className="w-full flex items-center justify-between">
            <input
              type="text"
              placeholder="Discount Code"
              className="w-3/4 border-2 border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-2 py-3 rounded-md outline-none focus:border-black"
            />
            <button
              className="px-5 py-3 bg-gray-500 rounded-md text-white"
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
              <h2 className="text-gray-600">Subtotal</h2>
              <p className="font-semibold">$45.00</p>
            </div>
            <div className="flex justify-between items-center space-y-2">
              <h2 className="text-gray-600">Shipping</h2>
              <p className="text-sm">Calculated at next step</p>
            </div>
          </div>

          {/* Line */}
          <div className="w-full h-[1px] bg-gray-200 grid place-items-center" />
          <div className="flex justify-between items-center">
            <h2 className="text-gray-600">Total</h2>
            <p className="font-semibold">
              <span className="text-gray-400">USD </span>$45.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
