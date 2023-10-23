"use client"

const SizeMenu = ({ handleSizeSelect, menuToggle, selectedSize }) => {

  return (
    <menu
      className={`w-full ${
        menuToggle == true ? "grid" : "hidden"
      }  grid-cols-2 absolute -top-[12rem] left-0 bg-white translate-y-0 sizes-menu shadow-md shadow-[#d8d8d8]`}
    >
      {["S", "M", "L", "XL", "XXL", "XXXL"].map((size, index) => (
        <div
          key={index}
          className={`py-4 px-4 flex justify-between items-center border-[1px] border-solid ${
            selectedSize === size && "bg-black text-white"
          }  border-[#333333bd]`}
          onClick={() => handleSizeSelect(size)}
        >
          <h2 className="font-bold">{size}</h2>
          {selectedSize === size && (
            <div className="w-2 h-2 rounded-full bg-white product-btn-dot" />
          )}
        </div>
      ))}
    </menu>
  );
};

export default SizeMenu;
