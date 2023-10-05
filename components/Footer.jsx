import React from "react";

const Footer = () => {
  return (
    <div className="px-4 lg:px-10 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 py-5 border-t-2 border-solid border-black">
        {/* NewsLetter  */}
        <div className="space-y-2">
          <h2 className="font-bold">Subscribe</h2>
          <p className="text-xs">
            Receive email updates about launches, new product info, exclusive
            access, and more.
          </p>
          <div className="flex justify-start items-center gap-4">
            <input
              type="text"
              className="w-[60%] outline-none border-2 border-solid border-black placeholder:text-gray-400 p-3 placeholder:text-sm"
              placeholder="Email address*"
            />
            <button className="w-[20%] py-3 bg-black text-white ">
              Submit
            </button>
          </div>
        </div>

        {/* Term & Condition */}
        <ul className="space-y-2 font-bold flex flex-col justify-center items-start lg:items-center text-left">
          <li>Terms & Conditions </li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>

        {/* Term & Condition */}
        <ul className="space-y-2 font-bold flex flex-col justify-center items-start lg:items-center text-left">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
