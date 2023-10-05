"use client";

import { useContext } from "react";
import myContext from "@/useContext/Context";

const Users = () => {
  const data = useContext(myContext);
  return (
    <>
      {data?.map((items) => {
        return (
          <>
            <div className="space-x-4">
              <span className="">{items.user_name}</span>
              <span className="">{items.user_email}</span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Users;
