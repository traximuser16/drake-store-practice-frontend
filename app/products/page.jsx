import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import Card from "@/components/Card";

const page = () => {
  return (
    <div className="px-5 md:px-8 lg:px-12 bg-[#fbf9f9ff] py-10">
      <h1 className="w-full text-center font-bold text-2xl mb-10">Shop All</h1>
      {/* // Cards Parent */}
      <div className=" py-10 w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-t-[1px] border-solid border-black">
        {/* Card */}
        <Card image={product1} data={"views sweatpant"}  />
        <Card image={product2} data={"WHEN IN DOUBT T-SHIRT"}  />
        <Card image={product3} data={"so far gone magnetic letter set"}  />
        <Card image={product4} data={"view hoodie"}  />
        <Card image={product4} data={"view hoodie"}  />
        <Card image={product3} data={"view hoodie"}  />
      </div>
    </div>
  );
};

export default page;
