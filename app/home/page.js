// "use client";

import Users from "@/components/users";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#1b1b1b]">
      <h2 className="text-white text-2xl">
         <Users />
      </h2>
    </div>
  );
};

export default Home;