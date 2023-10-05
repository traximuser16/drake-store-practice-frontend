"use client";

import GetUsers from "@/useContext/store"

const HomeLayout = ({ children }) => {
    return (
      <GetUsers>
        {children}
      </GetUsers>
    )
}

export default HomeLayout