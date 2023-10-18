import React from "react";

const InputFeild = ({ type, placeholder }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      className="w-full border-[1px] border-solid border-gray-200 placeholder:text-gray-500 placeholder:text-sm px-3 py-1.5 rounded-md outline-none focus:border-black"
    />
  );
};

export default InputFeild;
