"use client";

import { ToastContainer, toast } from "react-toastify";

const page = () => {
  const notify = () =>
    toast(
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={`toastAnimation`}
      >
        Product Added
      </div>,
      {
        autoClose: 2000,
        closeOnClick: true,
        draggable: false,
      }
    );
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        newestOnTop={true}
        rtl={true}
        toastStyle={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#333",
          color: "white",
          transition: "all 400ms",
          zIndex: 100,
        }}
      />
      <div className="w-full h-screen grid place-items-center">
        <button
          className="p-4 border-2 border-solid border-black"
          onClick={notify}
        >
          Toast
        </button>
      </div>
    </>
  );
};

export default page;
